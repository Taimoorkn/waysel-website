"use client";
import { StarAndCrescentIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

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
    <nav className="fixed left-0 right-0 top-0 z-50 mt-12 font-neueMontreal leading-4">
      <div className="mx-16 border">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex gap-[306px] text-4xl text-white">
            <p>Osmo</p>
            <Link href="/">
              <StarAndCrescentIcon />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="ml-80 hidden space-x-11 border md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[21px] text-white transition-colors hover:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right side buttons */}
          <div className="ml-auto hidden items-center space-x-[42px] text-[21px] md:flex">
            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.isButton
                    ? "rounded-md bg-white px-5 py-5 text-black transition-colors hover:bg-gray-100"
                    : "text-white transition-colors hover:text-gray-300"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white transition-colors hover:text-gray-300"
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
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-gray-800 bg-black px-2 pb-3 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium text-white transition-colors hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 border-t border-gray-700 pt-4">
                {authLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={
                      link.isButton
                        ? "mx-3 mt-2 block rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-black transition-colors hover:bg-gray-100"
                        : "block px-3 py-2 text-sm font-medium text-white transition-colors hover:text-gray-300"
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
