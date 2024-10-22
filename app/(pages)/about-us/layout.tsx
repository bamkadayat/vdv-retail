import React, { ReactNode } from "react";
import HeaderPages from "@/components/headerPages";
import FooterPages from "@/components/contact/footerContact";
import type { Metadata } from "next";


interface PagesLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "VYVER . ABOUT US",
  description: "",
};

const PagesLayout: React.FC<PagesLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderPages />
      <main>{children}</main>
      <FooterPages />
    </>
  );
};

export default PagesLayout;
