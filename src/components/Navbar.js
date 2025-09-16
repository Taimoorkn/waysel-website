"use client";
import Link from "next/link";
import { useState } from "react";
import TextField from "./TextField";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
  ];

  const authLinks = [
    { href: "/login", label: "Log in", isButton: false },
    { href: "/get-started", label: "Get Started", isButton: true },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 mx-4 mt-4 font-neueMontreal font-medium leading-4 sm:mx-9 sm:mt-[34px]">
      <div className="flex items-center justify-between">
        {/* Left side - Brand, Logo, Nav Links */}
        <Link href="/" aria-label="Waysel home">
          <img src="/waysellogo.svg" alt="Waysel Logo" className="w-16 sm:w-28" />
        </Link>
        <div className="ml-[7%] hidden space-x-8 sm:flex">
          {navLinks.map((link, index) => (
            <Button
              key={link.href}
              variant="base"
              href={link.href}
              textVariant="animated_underlined"
            >
              {link.label}
            </Button>
          ))}
        </div>
        {/* Right side - Auth buttons */}
        <div className="hidden items-center gap-7 sm:flex">
          <Button variant="base" href="/login">
            Log In
          </Button>
          <Button variant="primary" href="/get-started" className="tracking-wide sm:!px-4 sm:!py-2">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="ml-auto sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 sm:hidden">
            <div className="mx-4 space-y-1 rounded-lg border border-gray-800 bg-black/95 px-4 pb-4 pt-4 backdrop-blur-sm">
              {navLinks.map((link, index) => (
                <Button 
                  key={link.href}
                  variant="base" 
                  href={link.href} 
                  className="w-full !py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Button>
              ))}
              <div className="mt-4 border-t border-gray-700 pt-4">
                <div className="space-y-3">
                  <Button variant="base" href="/login" className="w-full">
                    Log In
                  </Button>
                  <Button variant="primary" href="/get-started" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
