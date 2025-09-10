"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Star } from "@phosphor-icons/react";
import Button from "./Button";

// Configuration objects moved outside component to prevent recreating on each render

const MENU_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources", hasBadge: true },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

// Animation timing constants
const MOBILE_ANIMATION_DELAY = 50;

const Navbar = () => {
  const pathname = usePathname();

  // State management
  const [isOpen, setIsOpen] = useState(false);


  // Memoized handlers
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMobileMenu = useCallback(() => setIsOpen(false), []);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Render helpers
  const renderDesktopNavItem = (item, index) => {
    const isActive = pathname === item.href;

    return (
      <li key={item.label}>
        <Link href={item.href} className="group flex h-[4.5rem] items-center px-3">
          <span
            className={`relative px-0.5 transition-colors duration-200 flex items-center gap-1 ${
              isActive ? "text-white" : "text-gray-300 group-hover:text-white"
            } after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-white ${
              isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"
            } after:transition-all after:duration-200`}
          >
            {item.label}
            {item.hasBadge && (
              <span className="ml-1 rounded-full bg-orange-500 px-2 py-0.5 text-xs text-white font-medium">
                Hot
              </span>
            )}
          </span>
        </Link>
      </li>
    );
  };

  const renderMobileNavItem = (item, index) => {
    const isActive = pathname === item.href;

    return (
      <li
        key={item.label}
        className={`transform transition-all duration-300 ease-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
        }`}
        style={{ transitionDelay: isOpen ? `${index * MOBILE_ANIMATION_DELAY}ms` : "0ms" }}
      >
        <div
          className={`relative flex h-9 cursor-pointer items-center gap-4 rounded-lg pl-4 pr-1 transition-all duration-200 ${
            isActive ? "border-l-4 border-white bg-white/5 text-white" : "active:scale-95"
          }`}
        >
          <Link href={item.href} className="flex-1 flex items-center gap-2" onClick={closeMobileMenu}>
            {item.label}
            {item.hasBadge && (
              <span className="ml-1 rounded-full bg-orange-500 px-2 py-0.5 text-xs text-white font-medium">
                Hot
              </span>
            )}
          </Link>
        </div>
      </li>
    );
  };

  return (
    <>
      <nav
        className="fixed top-0 z-50 w-full bg-black pl-4 pr-1 shadow-navbar 2xl:px-[9.5rem]"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex h-[3.5rem] w-full items-center justify-between xl:h-[4.5rem]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Osmo home">
            <span className="font-neueMontreal text-xl text-white font-medium xl:text-2xl">
              Osmo
            </span>
            <Star size={20} className="text-white" weight="fill" />
          </Link>

          {/* Hamburger Button */}
          <div className="lg:hidden">
            <button
              className={`container ${isOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <g strokeWidth="4" strokeLinecap="round">
                  <path d="M72 82.286h28.75" stroke="#FF4C24" />
                  <path
                    d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                    fill="none"
                    stroke="#FF4C24"
                  />
                  <path d="M72 125.143h28.75" stroke="#FF4C24" />
                  <path
                    d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                    fill="none"
                    stroke="#FF4C24"
                  />
                  <path d="M100.75 82.286h28.75" stroke="#FF4C24" />
                  <path d="M100.75 125.143h28.75" stroke="#FF4C24" />
                </g>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden h-[4.5rem] items-center gap-8 lg:flex">
            <ul className="flex h-[4.5rem] items-center space-x-6 font-neueMontreal text-sm font-medium text-primary_text">
              {MENU_ITEMS.map(renderDesktopNavItem)}
            </ul>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors duration-200">
                Log in
              </Link>
              <Button variant="primary" className="bg-white text-black hover:bg-gray-100">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          id="mobile-menu"
          className={`fixed right-0 min-h-screen transform bg-black transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } z-50 w-[calc(100%-20%)] overflow-y-auto`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="p-4">
            <ul className="mb-6 flex flex-col gap-2 font-neueMontreal text-[12.5px] font-medium text-primary_text">
              {MENU_ITEMS.map(renderMobileNavItem)}
            </ul>
            <div
              className={`transform px-4 transition-all duration-300 ease-out ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${MENU_ITEMS.length * MOBILE_ANIMATION_DELAY}ms` : "0ms",
              }}
            >
              <div className="flex flex-col gap-3">
                <Link 
                  href="/login" 
                  className="text-center py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Log in
                </Link>
                <Button variant="primary" className="w-full py-3 text-base font-medium bg-white text-black hover:bg-gray-100">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for Sidebar */}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 lg:hidden ${
            isOpen ? "visible opacity-50" : "invisible opacity-0"
          }`}
          style={{ top: "3.5rem" }}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      </nav>

      {/* Hamburger Animation Styles */}
      <style jsx>{`
        .container {
          cursor: pointer;
          display: flex;
          transition: transform 0.2s ease;
          background: none;
          border: none;
          padding: 0;
        }
        .container:active {
          transform: scale(0.95);
        }
        .container:focus {
          outline: 2px solid #ff4c24;
          outline-offset: 2px;
          border-radius: 4px;
        }
        svg {
          transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .active svg {
          transform: rotate(90deg);
        }
        path {
          transition:
            transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        path:nth-child(1) {
          transform-origin: 36% 40%;
        }
        path:nth-child(2) {
          stroke-dasharray: 29 299;
        }
        path:nth-child(3) {
          transform-origin: 35% 63%;
        }
        path:nth-child(4) {
          stroke-dasharray: 29 299;
        }
        path:nth-child(5) {
          transform-origin: 61% 52%;
        }
        path:nth-child(6) {
          transform-origin: 62% 52%;
        }
        .active path:nth-child(1) {
          transform: translateX(9px) translateY(1px) rotate(45deg);
        }
        .active path:nth-child(2) {
          stroke-dasharray: 225 299;
          stroke-dashoffset: -72px;
        }
        .active path:nth-child(3) {
          transform: translateX(9px) translateY(1px) rotate(-45deg);
        }
        .active path:nth-child(4) {
          stroke-dasharray: 225 299;
          stroke-dashoffset: -72px;
        }
        .active path:nth-child(5) {
          transform: translateX(9px) translateY(1px) rotate(-45deg);
        }
        .active path:nth-child(6) {
          transform: translateX(9px) translateY(1px) rotate(45deg);
        }
      `}</style>
    </>
  );
};

export default Navbar;
