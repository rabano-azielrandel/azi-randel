"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navLinks } from "@/data/constants";

const Nav = () => {
  const [activeHash, setHash] = useState("#me");
  const lastIndex = useRef(0);

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newHash = `#${entry.target.id}`;
            const newIndex = navLinks.findIndex((l) => l.href === newHash);

            if (newIndex !== -1 && newIndex !== lastIndex.current) {
              setHash(newHash);
              lastIndex.current = newIndex;
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // 50% in view
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    // ❌ Don't setHash here
  };

  return (
    <div className="fixed top=0 left-0 w-full h-[125px] flex justify-center items-center px-4 bg-green-400">
      <nav className="w-full p-2 rounded-4xl border-1 border-theme1-secondary/20 bg-theme1-accent">
        <ul className="flex justify-between">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`${
                  activeHash === item.href
                    ? "bg-theme1-secondary text-theme1-primary font-medium text-[16px]"
                    : "text-theme1-secondary font-thin text-[14px]"
                } min-h-[100px] flex justify-center items-center py-1 rounded-full transition-all duration-200 ease-in-out`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
