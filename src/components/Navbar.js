"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null); // Added for focus trapping

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

    // Scroll trigger animation (disabled on mobile phones only)
    ScrollTrigger.create({
      trigger: "body",
      start: "top -50px",
      end: "bottom bottom",
      onEnter: () => {
        // Only apply scroll animation on tablets and above (md breakpoint: 768px+)
        const width = window.innerWidth;
        if (width < 768) return;

        let expandedMargin;

        if (width >= 1280) {
          // xl breakpoint (mx-28 = 7rem)
          expandedMargin = "5rem";
        } else if (width >= 1024) {
          // lg breakpoint (mx-16 = 4rem)
          expandedMargin = "2.5rem";
        } else if (width >= 768) {
          // md breakpoint (mx-8 = 2rem)
          expandedMargin = "1rem";
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
        // Only apply scroll animation on tablets and above (md breakpoint: 768px+)
        const width = window.innerWidth;
        if (width < 768) return;

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
    // { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-50"
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
      />
      <motion.nav
        ref={navRef}
        className="fixed left-0 right-0 top-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div className="navbar-content mx-4 flex items-center justify-between pt-4 md:mx-8 lg:mx-16 lg:pt-6 xl:mx-[120px] xl:pt-8">
          {/* Left side - Brand, Logo, Nav Links */}
          <motion.div
            className="flex items-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Link href="/" aria-label="Waysel home">
              <Image src="/waysellogo.svg" alt="Waysel Logo" width={112} height={40} className="h-auto w-16 xl:w-28" />
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
            className="-mr-2 flex items-center xl:hidden"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div
              className={`hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 200 200">
                <g strokeWidth="4" strokeLinecap="round">
                  <path d="M72 82.286h28.75" stroke="#fff" />
                  <path
                    d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                    fill="none"
                    stroke="#fff"
                  />
                  <path d="M72 125.143h28.75" stroke="#fff" />
                  <path
                    d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                    fill="none"
                    stroke="#fff"
                  />
                  <path d="M100.75 82.286h28.75" stroke="#fff" />
                  <path d="M100.75 125.143h28.75" stroke="#fff" />
                </g>
              </svg>
            </div>
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
                  <Link
                    scrollToContact
                    className="BodyTextMedium block w-full rounded-[4px] bg-slate-50 px-4 py-[10px] text-center !text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
      <style jsx>{`
        .hamburger {
          cursor: pointer;
          display: flex;
          transition: transform 0.2s ease;
        }
        .hamburger:active {
          transform: scale(0.95);
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
