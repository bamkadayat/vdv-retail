import React, { ReactNode } from "react";
import HeaderPages from "@/components/headerPages";
import FooterPages from "@/components/footerPages";
import type { Metadata } from "next";


interface PagesLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "VYVER . BRANDS",
  description: "",
};

const PagesLayout: React.FC<PagesLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderPages />
      <main>{children}</main>
    </>
  );
};

export default PagesLayout;
