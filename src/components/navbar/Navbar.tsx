"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CodeXml, Menu, X } from "lucide-react";
import Image from "next/image";
import { navData } from "@/data/nav";
import NavItem from "./NavItem";
import Button from "../Button";
import ScrollTop from "../ScrollTop";
import Mode from "../Mode";
import { goToTop, handleScroll, toggleMenu } from "@/utils/logic";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sectionActive, setSectionActive] = useState("");

  useEffect(() => {
    const onScroll = () => handleScroll(setIsScrolled, setSectionActive);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed z-50 w-full h-[12vh] transition-colors duration-300 bg-color`}
    >
      <nav className="flex items-center justify-between h-full max-w-6xl px-4 mx-auto">
        {/* Logo */}
        <Link
      href="/"
      className="flex items-center gap-2 text-primary text-sm md:text-2xl font-bold"
    >
      <Image
        src="/images/logo.png" // use a leading slash for public assets
        alt="Sabri Logo"
        width={40}
        height={40}
        className="w-10 h-10 object-contain" // ensure sizing is consistent
      />
      <span>Sabri Alshibani</span>
    </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-10">
          <ul className="hidden md:flex items-center space-x-8">
            {navData.navMenu.map((item, index) => (
              <NavItem
                key={index}
                href={item.href}
                label={item.label}
                active={item.href === sectionActive}
              />
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
            onClick={(e) => toggleMenu(e, setIsMenuOpen, isMenuOpen)}
            className="md:hidden text-primary hover:text-secondary transition-colors duration-300 w-8 h-8"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-[12vh] left-0 w-full bg-color z-40"
            >
              <div className="flex flex-col space-y-6 py-4">
                <ul className="flex flex-col space-y-6 px-8">
                  {navData.navMenu.map((item, index) => (
                    <NavItem
                      key={index}
                      href={item.href}
                      label={item.label}
                      active={item.href === sectionActive}
                    />
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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll to Top Button */}
      <ScrollTop scrolled={isScrolled} onClick={goToTop} />
    </motion.div>
  );
}
