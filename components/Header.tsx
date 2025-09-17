"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ui/ThemeSwitch";

const navLinks = [
  { text: "Me", href: "#me" },
  { text: "Projects", href: "#projects" },
  { text: "Experience", href: "#experience" },
  { text: "Hobbies", href: "#hobbies" },
  { text: "Socials", href: "#socials" },
  { text: "Contacts", href: "#contacts" },
];

export default function Header() {
  return (
    <div className="z-50 w-full px-4 pt-[30px]">
      <div className="w-full h-full max-w-fit bg-theme1-base px-6 py-2 rounded-2xl mx-auto  flex items-center justify-center gap-8 border border-white/10">
        <Link href={""}>
          {/* <Image
            src="/images/AR.png"
            alt="randel logo"
            width={200}
            height={200}
            className="object-contain w-[50px] h-auto invert brightness-50"
          /> */}
          <span className="font-extrabold text-[#f3eaea] text-[20px] tracking-[0px] font-oswald italic">
            <span className="text-[#e8d8c9]">Aziel</span>
            <span className="text-[#f6ad49]">.</span>
            <span className="text-theme1-accent">Randel</span>
          </span>
        </Link>

        <nav className="flex gap-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="w-full text-[14px] text-theme1-secondary"
            >
              {item.text}
            </Link>
          ))}
        </nav>

        <ThemeSwitch />
      </div>
    </div>
  );
}
