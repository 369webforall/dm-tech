"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";
import { User } from "../auth/user";

const links = [
  { label: "Home", href: "/" },
  { label: "My Courses", href: "/dashboard" },
  { label: "Faq", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-effect sticky top-0 z-50 px-4 py-3 backdrop-blur-md bg-white/50 border-b border-blue-100">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">DM-TECH</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <User />
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-4 mt-4 px-4 md:hidden">
          {links.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={`block transition-colors ${
                  pathname === item.href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-800 hover:text-blue-600"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <User />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
