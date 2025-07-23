"use client";

import Link from "next/link";

type NavItemProps = {
  href: string;
  label: string;
  active?:boolean;
};

export default function NavItem({ href, label,active, }: NavItemProps) {
  return (
    <li className="group relative">
      <Link
        href={href}
        className={`text-base text-color font-medium transition-colors duration-200 group-hover:text-blue-700 ${active? 'text-primary':''}`}
      >
        {label}
        <span
          className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full ${active?'w-full':''}`}
        />
      </Link>
    </li>
  );
}
