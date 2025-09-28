"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navbar = navRef.current;
    if (!navbar) return;

    // Initial animation on page load
    gsap.fromTo(
      navbar,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
      }
    );

    // Scroll trigger animation
    ScrollTrigger.create({
      trigger: "body",
      start: "top -50px",
      end: "bottom bottom",
      onEnter: () => {
        // Get current screen width and match Tailwind breakpoints
        const width = window.innerWidth;
        let expandedMargin, originalMargin;

        if (width >= 1280) {
          // xl breakpoint (mx-28 = 7rem)
          originalMargin = "7rem";
          expandedMargin = "5rem";
        } else if (width >= 1024) {
          // lg breakpoint (mx-16 = 4rem)
          originalMargin = "4rem";
          expandedMargin = "2.5rem";
        } else if (width >= 768) {
          // md breakpoint (mx-8 = 2rem)
          originalMargin = "2rem";
          expandedMargin = "1rem";
        } else if (width >= 640) {
          // sm breakpoint (mx-6 = 1.5rem)
          originalMargin = "1.5rem";
          expandedMargin = "0.75rem";
        } else {
          // mobile (mx-4 = 1rem)
          originalMargin = "1rem";
          expandedMargin = "0.25rem";
        }

        gsap.to(navbar.querySelector(".navbar-content"), {
          y: -20,
          marginLeft: expandedMargin,
          marginRight: expandedMargin,
          duration: 0.4,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        // Return to original responsive margins
        const width = window.innerWidth;
        let originalMargin;

        if (width >= 1280) {
          // xl breakpoint (mx-28 = 7rem)
          originalMargin = "7rem";
        } else if (width >= 1024) {
          // lg breakpoint (mx-16 = 4rem)
          originalMargin = "4rem";
        } else if (width >= 768) {
          // md breakpoint (mx-8 = 2rem)
          originalMargin = "2rem";
        } else if (width >= 640) {
          // sm breakpoint (mx-6 = 1.5rem)
          originalMargin = "1.5rem";
        } else {
          // mobile (mx-4 = 1rem)
          originalMargin = "1rem";
        }

        gsap.to(navbar.querySelector(".navbar-content"), {
          y: 0,
          marginLeft: originalMargin,
          marginRight: originalMargin,
          duration: 0.4,
          ease: "power2.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <>
      {/* <div
        className="pointer-events-none fixed inset-x-0 top-0 z-30"
        style={{
          height: "200px",
          background: `linear-gradient(180deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0.15) 65%,
            rgba(0, 0, 0, 0.019) 88%,
            rgba(0, 0, 0, 0) 100%
          )`,
        }}
      /> */}
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div className="navbar-content fixed left-0 right-0 top-0 z-50 mx-4 flex items-center justify-between pt-2 sm:mx-6 sm:pt-3 md:mx-8 md:pt-4 lg:mx-16 lg:pt-6 xl:mx-[120px] xl:pt-8">
          {/* <div className="navbar-content fixed left-0 right-0 top-0 z-50 mx-4 flex items-center justify-between border pt-4 sm:mx-6 sm:pt-5 md:mx-8 md:pt-6 lg:mx-16 lg:pt-8 xl:mx-28 xl:pt-10">*/}
          {/* Left side - Brand, Logo, Nav Links */}
          <motion.div
            className="flex items-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Link href="/" aria-label="Waysel home">
              <img src="/waysellogo.svg" alt="Waysel Logo" className="h-auto w-16 xl:w-28" />
            </Link>
          </motion.div>
          <motion.div
            className="ml-[6%] hidden items-center space-x-8 xl:flex"
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
                  textvariant="animated_underlined"
                  className="flex h-8 items-center justify-center"
                >
                  {link.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>
          {/* Right side - Contact Us button */}
          <motion.div
            className="hidden items-center xl:flex"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button variant="primary" href="/contact">
              Contact Us
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            className="ml-auto flex items-center xl:hidden"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white" aria-label="Toggle menu">
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </motion.div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <motion.div
              className="absolute left-0 right-0 top-full mt-2 xl:hidden"
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
                  <Button variant="primary" href="/contact" className="w-full">
                    Contact Us
                  </Button>
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
