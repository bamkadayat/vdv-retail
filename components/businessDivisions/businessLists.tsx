"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { businessDivisions } from "@/db/index";
import styles from "@/styles/businessLists.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function BusinessDivisionsListsCarousel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  useEffect(() => {
    const track = trackRef.current as unknown as HTMLElement;
    if (track) {
      const transitionStyle = "transform 0.5s ease-in-out";
      track.style.transition = transitionStyle;
      track.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  return (
    <>
      {/* show this on desktop  */}
      <div className={`${styles.carouselContainer} hidden md:block`}>
        <div className={styles.carouselTrack} ref={trackRef}>
          {[...businessDivisions, ...businessDivisions, ...businessDivisions,].map((image, i) => (
            <div key={i} className={styles.carouselItem}>
              <Link href={`/business-divisions/${image.title}`}>
                <Image
                  src={image.imgLink}
                  alt={image.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className={`${styles.itemLogo}`}>
                  <h1>
                 {image.title}
                  </h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* show this on mobile  */}
      <div className="block md:hidden bg-white ">
        <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
          {businessDivisions.map((img, i) => (
            <div
              key={i}
              className={`${styles.carouselItem} ${styles.carouselItemMobile}`}
            >
              <Link href={`/businessDivisions/${img.title}`}>
                <Image
                  src={img.imgLink}
                  alt={img.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className={`${styles.itemLogo}`}>
                  <Image
                    src={img.logoLink}
                    alt={img.title}
                    width={200}
                    height={200}
                    objectFit="contain"
                  />
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
