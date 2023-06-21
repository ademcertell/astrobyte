"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  path: string;
}

const Header = () => {
  const nav: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Space picture", path: "/astronomy" },
    { label: "Nasa", path: "/nasa" },
    { label: "Recycling", path: "" },
];

  return (
    <nav className="flex flex-col justify-center">
      <div className="bg-gray-100/90 flex backdrop-blur-md rounded-md items-center justify-between w-full mt-5 relative max-w-5xl py-5">
        <div className="ml-[-0.10rem] space-x-4">
          {nav.map((navItem) => (
            <Link key={navItem.path} href={navItem.path}>
              <span className="p-1 md:px-3 sm:py-2 rounded-lg hover:text-black lg:bg-transparent lg:hover:bg-trasparent transition-all text-black/50">
                {navItem.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;