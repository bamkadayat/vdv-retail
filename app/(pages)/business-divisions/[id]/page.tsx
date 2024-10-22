"use client";
import React from "react";
import { motion } from "framer-motion";
import { businessDivisions } from "@/db/index";
import styles from "@/styles/brandDetail.module.scss";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  brandCard
} from "@/components/animation";

export default function BrandsDetails({ params }: any) {
  const id = params.id;
  const brand = businessDivisions.find((business) => business.title === id);

  if (!brand) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-md p-8 bg-white shadow-md rounded-lg text-center">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Brands Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              Sorry, the brand you are looking for does not exist.
            </p>
            <Link
              href="/business-divisions"
              className="inline-block px-6 py-3 text-white bg-black rounded-lg transition duration-300"
            >
              <div className="flex items-center">
                <FaChevronLeft size={16} color="white" />{" "}
                <span>Return to business divisions</span>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.brandDetailWrap} `}>
      <div className={`${styles.topHeroVideo}`}>
        <video loop autoPlay muted playsInline className={`${styles.video}`}>
          <source
            src={brand.videoLink ? brand.videoLink : "Add video link"}
            type="video/mp4"
          ></source>
        </video>
      </div>
      <motion.div initial="hidden" animate="show" variants={brandCard} className={`${styles.brandDetailDesc}`}>
        <p className="mb-4 px-2">{brand.desc}</p>
        <p className="mb-4 px-2">{brand.descTwo}</p>
        <p className="px-2">{brand.descThree}</p>
      </motion.div>

      <div className={`${styles.brandDetailMilestone}`}>
        <h1>key milestones</h1>
        <motion.div initial="hidden" animate="show" variants={brandCard} className={`${styles.brandDetailMilestoneGrid}`}>
          {brand.keyMilestones &&
            brand.keyMilestones.map((milestone, index) => (
              <div className={`${styles.brandDetailMilestoneItem}`} key={index}>
                <div className={`${styles.year?styles.year:"empty"}`}>
                  <p>{milestone.year ? milestone.year : "2022"}</p>
                </div>
                <div className={`${styles.imgWrap} relative`}>
                  <Image
                    src={`${milestone.imgLink}`}
                    width={200}
                    height={200}
                    alt={milestone.title}
                  />
                </div>
                <div className={`${styles.title}`}>
                  <h3>{milestone.title}</h3>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
      <motion.div initial="hidden" animate="show" variants={brandCard} className={`${styles.brandDetailGallery} my-6`}>
        <div className={`${styles.brandDetailGalleryGrid}`}>
          {brand.gallery &&
            brand.gallery.map((gallery, index) => (
              <div className={`${styles.brandDetailGalleryItem}`} key={index}>
                  <Image
                    src={`${gallery.imgLink}`}
                    width={300}
                    height={300}
                    alt="gallery"
                  />
              </div>
            ))}
        </div>
      </motion.div>
      <div className={`${styles.brandDetailSlider} my-8`}>
        <div className={`${styles.brandDetailSliderWrapGrid}`}>
          <div className={`${styles.brandDetailSliderWrapGridSlider}`}>
          <Carousel
            showStatus={false}
            showThumbs={true}
            showIndicators={true}
          >
            {brand.slider &&
              brand.slider.map((slide, index) => (
                <div className={`${styles.brandDetailSliderItem}`} key={index}>
                  <div className={`${styles.videoWrap}`}>
                    <video
                      loop
                      autoPlay
                      muted
                      playsInline
                      className={styles.video}
                    >
                      <source
                        src={slide.imgLink ? slide.imgLink : "Add video link"}
                        type="video/mp4"
                      ></source>
                    </video>
                  </div>
                </div>
              ))}
          </Carousel>
          </div>
          <div className={`${styles.brandDetailSliderWrapGridContent}`}>
            <h2>{brand.sliderSideContent?.title}</h2>
            <p>{brand.sliderSideContent?.desc}</p>
            <p>{brand.sliderSideContent?.descTwo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
