"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TextField from "./TextField";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navbar = navRef.current;
    if (!navbar) return;

    // Initial animation on page load
    gsap.fromTo(navbar,
      {
        y: -100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out"
      }
    );

    // Scroll trigger animation
    ScrollTrigger.create({
      trigger: "body",
      start: "top -50px",
      end: "bottom bottom",
      onEnter: () => {
        // Check if mobile or desktop
        const isMobile = window.innerWidth < 640; // sm breakpoint
        const expandedMargin = isMobile ? "0.5rem" : "1.5rem"; // Slight expansion

        gsap.to(navbar, {
          y: -10,
          marginLeft: expandedMargin,
          marginRight: expandedMargin,
          duration: 0.3,
          ease: "power2.out"
        });
      },
      onLeaveBack: () => {
        // Return to original responsive margins
        const isMobile = window.innerWidth < 640;
        const originalMargin = isMobile ? "1rem" : "3rem"; // mx-4 = 1rem, sm:mx-9 = 2.25rem

        gsap.to(navbar, {
          y: 0,
          marginLeft: originalMargin,
          marginRight: originalMargin,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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
    <>
      <div
        className="fixed left-0 right-0 top-0 z-40 pointer-events-none"
        style={{
          height: '200px',
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0.15) 65%,
            rgba(0, 0, 0, 0.019) 88%,
            rgba(0, 0, 0, 0) 100%
          )`
        }}
      />
      <motion.nav
        ref={navRef}
        className="fixed left-0 right-0 top-0 z-50 mx-4 pt-2 font-neueMontreal font-medium leading-4 sm:mx-12 sm:pt-[26px]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
      <div className="flex items-center justify-between h-12">
        {/* Left side - Brand, Logo, Nav Links */}
        <motion.div
          className="flex items-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Link href="/" aria-label="Waysel home">
            <img src="/waysellogo.svg" alt="Waysel Logo" className="w-16 sm:w-28 h-auto" />
          </Link>
        </motion.div>
        <motion.div
          className="ml-[7%] hidden space-x-8 sm:flex items-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              className="flex items-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            >
              <Button
                variant="base"
                href={link.href}
                textVariant="animated_underlined"
                className="flex items-center justify-center h-8"
              >
                {link.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>
        {/* Right side - Auth buttons */}
        <motion.div
          className="hidden items-center gap-7 sm:flex"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <Button variant="base" href="/login" className="flex items-center justify-center h-8">
            Log In
          </Button>
          <Button variant="primary" href="/get-started" className="tracking-wide sm:!px-4 sm:!py-2 flex items-center justify-center h-8">
            Get Started
          </Button>
        </motion.div>

        {/* Mobile menu button */}
        <motion.div
          className="ml-auto sm:hidden flex items-center"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
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
        </motion.div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            className="absolute left-0 right-0 top-full mt-2 sm:hidden"
            initial={{ y: -20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="mx-4 space-y-1 rounded-lg border border-gray-800 bg-black/95 px-4 pb-4 pt-4 backdrop-blur-sm">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
                >
                  <Button
                    variant="base"
                    href={link.href}
                    className="w-full !py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                className="mt-4 border-t border-gray-700 pt-4"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
              >
                <div className="space-y-3">
                  <Button variant="base" href="/login" className="w-full">
                    Log In
                  </Button>
                  <Button variant="primary" href="/get-started" className="w-full">
                    Get Started
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar;
