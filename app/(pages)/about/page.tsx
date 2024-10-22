"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import About from "@/styles/about.module.scss";
import { aboutUs } from "@/db/index";
import {
  aboutDivLogoScale,
  aboutDivFirstImageScale
} from "@/components/animation";

export default function AboutPage() {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768 && horizontalScrollRef.current) {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollWidth = horizontalScrollRef.current.scrollWidth - window.innerWidth;
        const scrollLeft = (window.scrollY / scrollHeight) * scrollWidth;
        horizontalScrollRef.current.scrollLeft = scrollLeft;
      }
    };

    const handleResize = () => {
      if (scrollContainerRef.current && horizontalScrollRef.current) {
        scrollContainerRef.current.style.height = `${horizontalScrollRef.current.scrollWidth}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className={About.scrollContainer}>
      <div ref={horizontalScrollRef} className={About.aboutContainer}>
        <div className={About.aboutFlexWrap}>
          <div className={About.item}>
            <div className={About.itemTopContent}>
              <h2>&nbsp;</h2>
              <p>&nbsp;</p>
            </div>
            <motion.div initial="hidden" animate="show" variants={aboutDivLogoScale} className={About.itemImgWrap}>
              <Image
                src={aboutUs.bannerFirst.imgLink}
                width={200}
                height={200}
                alt="image"
              />
            </motion.div>
            <motion.div initial="hidden" animate="show" variants={aboutDivFirstImageScale} className={About.itemBigLogo}>
                <Image
                  src={aboutUs.bannerFirst.bigLogoLink}
                  width={200}
                  height={200}
                  alt="image"
                />
            </motion.div>
            <div className={About.itemBottomContent}>
              <p>{aboutUs.bannerFirst.desc}</p>
              <p>{aboutUs.bannerFirst.descTwo}</p>
            </div>
          </div>
          <div className={About.item}>
            <div className={About.itemTopContent}>
              <h2>Health & Wellness</h2>
            </div>
            <div className={About.itemImgWrap}>
              <Image
                src={aboutUs.bannerSecond.imgLink}
                width={200}
                height={200}
                alt="image"
              />
            </div>
            <div className={About.itemBottomContent}>
              
              <p>
                Curating a collection of brands that promote well-being and a healthy lifestyle.
              </p>
            </div>
          </div>
          <div className={About.item}>
            <div className={About.itemTopContent}>
              <h2>&nbsp;</h2>
              <p>SOHO IS FOUNDED WITH 100% LIFESTYLE FOCUS</p>
            </div>
            <div className={About.itemImgWrap}>
              <Image
                src={aboutUs.bannerThird.imgLink}
                width={200}
                height={200}
                alt="image"
              />
            </div>
            <div className={About.itemBottomContent}>
              <h2>2019</h2>
              <p>&nbsp;</p>
            </div>
          </div>
          <div className={`${About.item}`}>
            <div className={About.itemTopContent}>
              <h2>2019</h2>
              <p>&nbsp;</p>
            </div>
            <div className={About.itemImgWrap}>
              <Image
                src={aboutUs.bannerFourth.imgLink}
                width={200}
                height={200}
                alt="image"
              />
            </div>
            <div className={About.itemBottomContent}>
              <h2>2023</h2>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
