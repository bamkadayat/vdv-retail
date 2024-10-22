"use client";
import React from "react";
import { FaLinkedin, FaInstagram, FaChevronLeft } from "react-icons/fa6";
import Link from "next/link";

export default function BrandFooter() {
  return (
    <footer className="w-full bg-secondary">
      <div className="flex justify-end max-w-[1500px] mx-auto px-4 py-4">
        <Link
          href="/brands"
          passHref
          className=" text-black p-2 uppercase hover:bg-white-700 font-medium"
          aria-label="back to brand"
        >
          <div className="flex items-center">
            <FaChevronLeft size={20} color="#3D3D3D" /> <span>Back to brands</span>{" "}
          </div>
        </Link>
      </div>
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
