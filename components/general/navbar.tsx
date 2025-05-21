"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { User } from "../auth/user";
import { authClient } from "@/lib/auth-client";
import { buttonVariants } from "../ui/button";
const links = [
  { label: "Home", href: "/" },
  { label: "My Courses", href: "/dashboard" },
  { label: "Course Details", href: "/syllabus" },
  { label: "Faq", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { data: session } = authClient.useSession();
  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className="glass-effect mx-auto backdrop-blur-md bg-white/50 border-b border-blue-100">
        <div className="md:max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-bold text-gray-800">DM-TECH</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
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
            </ul>
            <div className="flex-shrink-0">
              {session?.user ? (
                <User />
              ) : (
                <Link
                  href="/signin"
                  className={buttonVariants({ variant: "outline" })}
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle and User */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex-shrink-0">
              {session?.user ? (
                <User />
              ) : (
                <Link
                  href="/signin"
                  className={buttonVariants({ variant: "outline" })}
                >
                  Sign in
                </Link>
              )}
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="flex-shrink-0"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden md:max-w-7xl mx-auto px-4">
            <ul className="flex flex-col gap-4 py-4">
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
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
