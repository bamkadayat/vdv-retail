"use client";
import React, { useRef } from "react";
import about from "@/styles/aboutus.module.scss";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  homeGridItemFirstVariants,
  homeGridItemSecondVariants,
} from "@/components/animation";
export default function AboutUs() {
  const firstGridRef = useRef(null);
  const secondGridRef = useRef(null);

  const firstGridInView = useInView(firstGridRef, { once: true });
  const secondGridInView = useInView(secondGridRef, { once: true });
  return (
    <div className={about.aboutUs}>
      <div className={about.aboutHeroWrap}>
        <div className={about.aboutHeroContainer}>
          <div className={about.whiteCircle}></div>
          <div className={about.eyebrowText}>Fyver group</div>
          <h1 className={about.blurText}>Welcome to Fyver group</h1>
        </div>
        <div className={about.lineDecorator}></div>
        <div className={`${about.descriptions}`}>
          <p>
            Vyver Group is working on a number of projects that use branding in
            horizontal domains to secure data and branding infrastructures
          </p>
        </div>
      </div>
      <div className={about.aboutSecondSection}>
        <div className={about.contentWrap} >
          <motion.div className={about.content}
          ref={firstGridRef}
          initial="hidden"
          animate={firstGridInView ? "show" : "hidden"}
          variants={homeGridItemFirstVariants}
          >
            <h1>Acquisition of Al Manara</h1>
            <p>Acquisition of Al Manara International Jewellery
            successful exit following business expansion from 3 to 14 stores (including three flagship stores) and shop-in-shops
            </p>
          </motion.div>
          <motion.div className={about.contentImg}
           ref={secondGridRef}
           initial="hidden"
           animate={secondGridInView ? "show" : "hidden"}
           variants={homeGridItemSecondVariants}
          >
            <Image
              src="/images/about/aboutFourth.png"
              width={200}
              height={200}
              alt="hero second image"
            />
          </motion.div>
        </div>

        <div className={about.contentWrapSecond} >
          <motion.div className={about.contentImg}
           ref={secondGridRef}
           initial="hidden"
           animate={secondGridInView ? "show" : "hidden"}
           variants={homeGridItemSecondVariants}
          >
            <Image
              src="/images/about/aboutSecond.jpg"
              width={200}
              height={200}
              alt="hero second image"
            />
          </motion.div>
          <motion.div className={about.content}
          ref={firstGridRef}
          initial="hidden"
          animate={firstGridInView ? "show" : "hidden"}
          variants={homeGridItemFirstVariants}
          >
            <h1>Acquisition of Al Manara</h1>
            <p>Acquisition of Al Manara International Jewellery
            successful exit following business expansion from 3 to 14 stores (including three flagship stores) and shop-in-shops
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
