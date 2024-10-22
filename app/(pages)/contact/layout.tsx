import React, { ReactNode } from "react";
import ContactHeader from "@/components/contact/contactHeader";
import FooterPages from "@/components/contact/footerContact";
import type { Metadata } from "next";

interface PagesLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "VYVER . CONTACT US",
  description: "",
};

const PagesLayout: React.FC<PagesLayoutProps> = ({ children }) => {
  return (
    <>
      <ContactHeader />
      <main>{children}</main>
      <FooterPages />
    </>
  );
};

export default PagesLayout;
