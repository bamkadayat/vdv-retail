import React, { ReactNode } from "react";
import HeaderPages from "@/components/headerPages";
import BrandFooter from "@/components/brands/brandFooter";
import type { Metadata } from "next";


interface PagesLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "VYVER . Home",
  description: "",
};

const PagesLayout: React.FC<PagesLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderPages />
      <main>{children}</main>
      <BrandFooter />
    </>
  );
};

export default PagesLayout;
