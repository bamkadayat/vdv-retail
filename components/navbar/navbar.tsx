"use client";
import React, { useState, useEffect } from "react";
import MyLogo from "@/components/navbar/logo";
import Link from "next/link";
import HeaderPages from "../headerPages";

export default function Navbar() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  if (isDesktop === null) {
    return null;
  }
  return (
    <div>
      {isDesktop ? (
        <header className="fixed right-0 z-10 " style={{top:"-60px", right:"-60px"}}>
          <nav className="flex items-center justify-between flex-wrap p-0 relative right-0">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end">
              <div>
                <Link href="/home">
                  <MyLogo width="200px" height="200px" />
                </Link>
              </div>
            </div>
          </nav>
        </header>
      ) : (
        <HeaderPages />
      )}
    </div>
  );
}
