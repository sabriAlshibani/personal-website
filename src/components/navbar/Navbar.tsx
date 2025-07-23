"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CodeXml, Menu, X } from "lucide-react";

import { navData } from "@/data/nav";
import NavItem from "./NavItem";
import Button from "../Button";
import ScrollTop from "../ScrollTop";
import Mode from "../Mode";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sectionActive,setSectionActive] = useState("");

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // offset from top
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        setSectionActive(`#${section.id}`);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`fixed z-50 w-full h-[12vh] transition-colors duration-300 bg-color`}>
      <nav className="flex items-center justify-between h-full max-w-6xl px-4 mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-primary text-lg md:text-2xl font-bold"
        >
          <CodeXml />
          Sabri Alshibani
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-10">
          <ul className="hidden md:flex items-center space-x-8">
            {navData.navMenu.map((item, index) => (
              <NavItem key={index} href={item.href} label={item.label} active ={item.href === sectionActive} />
            ))}
          </ul>

          <Button
            variant="secondary"
            size="sm"
            href={navData.btn.href}
            className="max-sm:hidden flex"
          >
            {navData.btn.label}
          </Button>
          <Mode />

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary hover:text-secondary transition-colors duration-300 w-8 h-8"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-[12vh] left-0 w-full bg-color z-40 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-6 py-4">
            <ul className="flex flex-col space-y-6 px-8">
              {navData.navMenu.map((item, index) => (
                <NavItem key={index} href={item.href} label={item.label} active ={item.href === sectionActive}/>
              ))}
            </ul>
            <Button
              variant="secondary"
              size="sm"
              href={navData.btn.href}
              className="mx-4"
            >
              {navData.btn.label}
            </Button>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <ScrollTop scrolled={isScrolled} onClick={goToTop} />
    </div>
  );
}
