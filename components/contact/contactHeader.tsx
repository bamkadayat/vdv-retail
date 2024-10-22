"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { navList } from "@/db/index";
import Navbar from "@/styles/navbar.module.scss";
import { MdClear } from "react-icons/md";
import Link from "next/link";
import { navVariants, navContainerVariants } from "@/components/animation";

export default function ContactHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header className="relative">
      <nav className="flex items-center justify-between absolute z-20 p-4">
        <div className="fixed top-4 right-4">
          <button
            onClick={handleOpenNavbar}
            style={{ border: "none", background: "none" }}
          >
            <Image src="/images/darklogo.png" alt="logo" width={60} height={60} />
          </button>
        </div>
        {isOpen && (
          <motion.div
            className={Navbar.navWrapper}
            initial="hidden"
            animate="show"
            variants={navContainerVariants}
          >
            <motion.ul className={Navbar.navLists}>
              {navList.map((item) => (
                <motion.li
                  key={item.id}
                  className={Navbar.navItem}
                  variants={navVariants}
                >
                  <Link href={item.link} className="text-white hover:text-white">
                    {item.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <motion.ul className={Navbar.socialLists}>
              <motion.li
                className={Navbar.navItem}
                variants={navVariants}
              >
                <Link href="https://www.linkedin.com" className="text-white hover:text-white">
                  linkedin
                </Link>
              </motion.li>
              <motion.li
                className={Navbar.navItem}
                variants={navVariants}
              >
                <Link href="https://www.instagram.com" className="text-white hover:text-white">
                  instagram
                </Link>
              </motion.li>
            </motion.ul>
            <button
              onClick={handleOpenNavbar}
              className={Navbar.navClearIcon}
              style={{ border: "none", background: "none" }}
            >
              <MdClear color="#FAFAFA" size={40} />
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
