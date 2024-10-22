"use client";
import React, { useState, useEffect } from "react";
import global from "@/styles/global.module.scss";

interface MyLogoProps {
  width?: string;
  height?: string;
}

const MyLogo: React.FC<MyLogoProps> = ({ width, height }) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <svg
      viewBox="0 0 600 600"
      overflow="visible"
      style={{
        width: width || "100%",
        height: height || "100%",
        inset: "0px",
        transformOrigin: "center center",
        willChange: "transform",
      }}
    >
      <defs>
        <path
          id="text-path"
          d="M 300, 300 m -160, 0 a 160, 160 0 1,0 320, 0 a 160, 160 0 1,0 -320, 0"
        />
      </defs>
      {!isMobile && (
        <text
          className={global.hideOnMobile}
          style={{
            animation: "spin 15s linear infinite",
            animationTimingFunction: "linear",
            transformOrigin: "50% 50%",
          }}
        >
          <textPath
            xlinkHref="#text-path"
            startOffset="0"
            style={{
              fontSize: "30px",
              fontFamily: "HELVETICA REGULAR",
              fontWeight: 400,
              wordSpacing: "7.5px",
              letterSpacing: "12px",
              fill: "rgba(255, 255, 255, 0.51)",
            }}
          >
           
          </textPath>
        </text>
      )}
      <image
        href="/images/logo.png"
        x={isMobile ? "60%" : "50%"}
        y={isMobile ? "30%" : "50%"}
        width="150"
        height="150"
        transform="translate(-74, -74)"
      />
      <style>
        {`
          @-webkit-keyframes spin {
            from { -webkit-transform: rotate(0deg); }
            to { -webkit-transform: rotate(360deg); }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          text {
            transform-origin: 50% 50%;
            -webkit-transform-origin: 50% 50%;
            -webkit-animation: spin 15s linear infinite;
          }
        `}
      </style>
    </svg>
  );
};

export default MyLogo;
