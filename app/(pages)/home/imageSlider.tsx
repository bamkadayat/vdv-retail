import React from "react";
import Image from "next/image";
import Home from "@/styles/home.module.scss";

const images = [
  { src: "/images/home/casablanca.png", alt: "casablanca" },
  { src: "/images/home/alo-yoga.png", alt: "alo" },
  { src: "/images/home/amiri.png", alt: "amiri" },
  { src: "/images/home/yawa_africa_logo.jpeg", alt: "yawa" },
  { src: "/images/brands/nature-addicts/na-logo.webp", alt: "nature-addicts" }

];

export default function ImageSlider() {
  return (
    <div className={Home.imageTickerContainer}>
      <div className={Home.sliderTrack}>
      {images.concat(images, images).map((image, index) => (
          <div key={index} className={Home.sliderItem}>
            <Image
              src={image.src}
              alt={image.alt}
              width={150}
              height={75}
              className={Home.sliderImage}
            />
          </div>
        ))}
      </div>
      <div className={Home.maskLeft}></div>
      <div className={Home.maskRight}></div>
    </div>
  );
};

