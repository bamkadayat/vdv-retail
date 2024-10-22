"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { brands } from "@/db/index";
import styles from "@/styles/brandLists.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function BrandsListsCarousel() {
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
          {[...brands, ...brands, ...brands, ...brands].map((image, i) => (
            <div key={i} className={styles.carouselItem}>
              <Link href={`/brands/${image.title}`}>
                <Image
                  src={image.imgLink}
                  alt={image.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className={`${styles.itemLogo}`}>
                  <Image
                    src={image.logoLink}
                    alt={image.title}
                    width={200}
                    height={200}
                    objectFit="contain"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* show this on mobile  */}
      <div className="block md:hidden bg-white ">
        <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
          {brands.map((img, i) => (
            <div
              key={i}
              className={`${styles.carouselItem} ${styles.carouselItemMobile}`}
            >
              <Link href={`/brands/${img.title}`}>
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
