"use client";
import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function FooterPages() {
  return (
    <footer className="w-full bg-secondary">
      <div className="w-full bg-primary text-secondary px-4 py-10">
        <div className="max-w-[1200px] mx-auto border-t border-lightDark mb-4"></div>
        <div className="max-w-[1250px] mx-auto flex justify-between items-center px-4">
          <div>
            <p className="text-sm">© {new Date().getFullYear()} VYVER GROUP </p>
          </div>
          <div className="flex space-x-4">
            <FaLinkedin color="#FFFFFF" size={24} />
            <FaInstagram color="#FFFFFF" size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}
