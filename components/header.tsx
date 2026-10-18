"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "./container";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Technologies" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="inline-block transition-opacity hover:opacity-90">
          <Image
            src="/logo-light.png"
            alt="Website Logo"
            width={110}
            height={36}
            className="dark:hidden object-contain"
            priority
          />
          <Image
            src="/logo-dark.png"
            alt="Website Logo"
            width={110}
            height={36}
            className="hidden dark:block object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ModeToggle />

          {/* Mobile Sheet */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" aria-label="Toggle Navigation Menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                }
              />
              <SheetContent side="right" className="flex flex-col w-75 sm:w-87.5 p-6">
                <SheetHeader className="text-left pb-4 border-b">
                  <SheetTitle className="text-lg font-semibold tracking-tight">Navigation</SheetTitle>
                  {/* Visually hidden description for screen readers */}
                  <SheetDescription className="sr-only">
                    Mobile site navigation links
                  </SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-1.5 py-6 flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center px-3 py-2.5 rounded-md text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:bg-muted/80"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="border-t pt-4 text-xs text-muted-foreground">
                  © 2025 All rights reserved.
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}