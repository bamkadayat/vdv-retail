import React from "react";
import { navList } from "@/db/index";
import Link from "next/link";
type NavItem = {
  id: number;
  title: string;
  link: string;
};
export default function HomeFooterNav() {
  return (
    <footer className="fixed max-w-[1100px] mx-auto bottom-auto top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] lg:top-auto lg:bottom-0 lg:translate-y-0 sm:overflow-x-hidden">
      <ul className="flex justify-between py-4 flex-col items-center lg:flex-row ">
        {navList.map((item: NavItem) => (
          <li key={item.id} className="py-2">
            <Link
              href={item.link}
              className="text-white hover:text-white hover:underline md:px-8 whitespace-nowrap uppercase"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
