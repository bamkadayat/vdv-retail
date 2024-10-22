import React, { ReactNode } from "react";
import HeaderPages from "@/components/headerPages";
import BusinessFooter from "@/components/businessDivisions/businessFooter"
import type { Metadata } from "next";


interface PagesLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "VYVER . BUSINESS DIVISIONS",
  description: "",
};

const PagesLayout: React.FC<PagesLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderPages />
      <main>{children}</main>
      <BusinessFooter />
    </>
  );
};

export default PagesLayout;
