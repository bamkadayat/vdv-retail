"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  contactGridItemFirstVariants,
  contactGridItemSecondVariants,
} from "@/components/animation";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";

interface FormType {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormType>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [textLength, setTextLength] = useState(0);
  const maxLength = 300;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.id === "message") {
      setTextLength(e.target.value.length);
    }
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setTextLength(0);
      } else {
        setMessage(`Failed to send email: ${result.error}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Error sending email");
      setLoading(false);
    }
  };

  return (
    <div className="bg-ternary max-w-[1500px] mx-auto">
      <div className="lg:h-screen w-full lg:flex lg:items-center justify-center bg-ternary pb-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={contactGridItemFirstVariants}
          className="lg:pl-8 lg:pt-8 lg:px-2"
          style={{ zIndex: '1' }}
        >
         <Image
          src={'/images/contact/cape-town.webp'}
          alt="Cape Town"
          height={900}
          width={900}
          style={{ filter: 'grayscale(100%)' }}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={contactGridItemSecondVariants}
          className="bg-transparent lg:-ml-14 md:pr-8 px-5 mt-8 md:max-w-[800px] lg:max-w-[800px] mx-auto"
          style={{ zIndex: '1' }}
        >
          <h2 className="lg:text-4xl uppercase font-bold mb-4 text-[#333333] text-nowrap px-2">
            Get in Contact
          </h2>
          {message ? (
            <p className="mt-4 text-center lg:ml-10">
              <FaCircleCheck size={78} />
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="px-2">
              <div className="w-full flex items-center justify-start gap-4 mb-4">
                <div className="w-1/2">
                  <input
                    className="border-none w-full py-4 px-3 text-primary bg-[#F2F2F2] leading-tight outline-none focus:outline-none rounded-md"
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-1/2">
                  <input
                    className="border-none rounded-md w-full py-4 px-3 text-primary bg-[#F2F2F2] leading-tight focus:outline-none"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  className="border-none rounded-md w-full py-4 px-3 text-primary bg-[#F2F2F2] leading-tight focus:outline-none"
                  id="message"
                  rows={5}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={maxLength}
                  required
                ></textarea>
                <p className="text-right">
                  {textLength}/{maxLength}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary hover:bg-primary text-white font-bold py-4 px-4 rounded-md focus:outline-none w-full"
                  type="submit"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
