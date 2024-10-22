"use client";
import React, { useEffect, useState } from "react";
import HomeFooterNav from "@/components/navbar/homeFooterNav";
import { landing } from "@/db/index";
import Navbar from "@/components/navbar/navbar";
import Landing from "@/styles/landing.module.scss";

export default function LandingPage() {
  useEffect(() => {
    const videoGrid = document.querySelector(
      `.${Landing.videoGrid}`
    ) as HTMLElement | null;
    const videos = document.querySelectorAll("video");

    if (!videoGrid) {
      console.error("Element with class 'videoGrid' not found");
      return;
    }

    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollRatio = scrollPosition / scrollHeight;

      const rotationValue = scrollRatio * 720; // Increase the rotation speed
      const scaleValue = 1 + scrollRatio * 2;

      videoGrid.style.transform = `translate(-50%, -50%) rotate(${rotationValue}deg) scale(${scaleValue})`;

      videos.forEach((video) => {
        video.style.transform = `rotate(${-rotationValue}deg) scale(${scaleValue})`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className={Landing.main}>
        <div className={Landing.videoGrid}>
          {landing.map((item) => (
            <div className={Landing.card} key={item.id}>
              <video
                autoPlay
                muted
                loop
                playsInline
                src={item.videoLink}
              >
                <source src={item.videoLink} type="video/mp4" />
                <source
                  src={item.videoLink.replace(".mp4", ".webm")}
                  type="video/webm"
                />
                Your browser does not support the video.
              </video>
            </div>
          ))}
        </div>
      </main>
      <HomeFooterNav />
    </>
  );
}
