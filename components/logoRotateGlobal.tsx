import React from "react";
import global from "@/styles/global.module.scss";
interface MyLogoProps {
  width?: string;
  height?: string;
}

const MyLogo: React.FC<MyLogoProps> = ({ width, height }) => {
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
      <text
        style={{
          animation: "spin 15s linear infinite",
        }}
      >
        <textPath
          href="#text-path"
          startOffset="0"
          style={{
            fontSize: "55px", 
            fontFamily: "HELVETICA REGULAR",
            fontWeight: 400,
            wordSpacing: "7.5px",
            letterSpacing: "12px",
            fill: "rgba(255, 255, 255, 0.51)",
          }}
        >
          SOHO HOME SOHO HOME
        </textPath>
      </text>
      <image
        href="/images/logo.png"
        x="50%"
        y="50%"
        width="150"
        height="150"
        transform="translate(-74, -74)" 
        className={global.hideOnAll}
      />
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          text {
            transform-origin: 50% 50%;
          }
        `}
      </style>
    </svg>
  );
};

export default MyLogo;
