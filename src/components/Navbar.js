"use client";
import { StarAndCrescentIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import AnimatedText from "./AnimatedText";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinksRef = useRef([]);
  const authLinksRef = useRef([]);
  const mobileNavLinksRef = useRef([]);
  const mobileAuthLinksRef = useRef([]);

  useEffect(() => {
    // Initial animation for navbar links
    const allNavLinks = [...navLinksRef.current, ...authLinksRef.current].filter(Boolean);
    
    if (allNavLinks.length > 0) {
      gsap.fromTo(
        allNavLinks,
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    }

    // Function to wrap each letter in a span
    const wrapLetters = (element) => {
      const text = element.textContent;
      const wrappedText = text
        .split('')
        .map((char, index) => {
          if (char === ' ') {
            return ' ';
          }
          return `<span class="letter-span" style="display: inline-block;">${char}</span>`;
        })
        .join('');
      element.innerHTML = wrappedText;
      return element.querySelectorAll('.letter-span');
    };

    // Hover animations for desktop links
    const addHoverAnimations = (links) => {
      links.forEach((link) => {
        if (link) {
          const letters = wrapLetters(link);
          
          const handleMouseEnter = () => {
            gsap.to(letters, {
              y: 30,
              opacity: 0,
              duration: 0.3,
              stagger: 0.03,
              ease: "power2.in",
              onComplete: () => {
                gsap.fromTo(letters, 
                  { y: -30, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    stagger: 0.03,
                    ease: "power2.out",
                  }
                );
              }
            });
          };

          const handleMouseLeave = () => {
            gsap.set(letters, { y: 0, opacity: 1 });
          };

          link.addEventListener("mouseenter", handleMouseEnter);
          link.addEventListener("mouseleave", handleMouseLeave);

          return () => {
            link.removeEventListener("mouseenter", handleMouseEnter);
            link.removeEventListener("mouseleave", handleMouseLeave);
          };
        }
      });
    };

    addHoverAnimations(navLinksRef.current);
    addHoverAnimations(authLinksRef.current);
  }, []);

  useEffect(() => {
    // Mobile menu animation
    if (isMenuOpen) {
      const allMobileLinks = [...mobileNavLinksRef.current, ...mobileAuthLinksRef.current].filter(Boolean);
      
      gsap.fromTo(
        allMobileLinks,
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [isMenuOpen]);

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
    <nav className="fixed left-0 right-0 top-0 z-50 mt-[42px] font-neueMontreal font-medium leading-4">
      <div className="mx-16">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center gap-[306px] text-4xl text-white">
            <p>Osmo</p>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 160 160"
                fill="none"
                className="relative size-8 flex-shrink-0"
              >
                <path
                  d="M94.8284 53.8578C92.3086 56.3776 88 54.593 88 51.0294V0H72V59.9999C72 66.6273 66.6274 71.9999 60 71.9999H0V87.9999H51.0294C54.5931 87.9999 56.3777 92.3085 53.8579 94.8283L18.3431 130.343L29.6569 141.657L65.1717 106.142C67.684 103.63 71.9745 105.396 72 108.939V160L88.0001 160L88 99.9999C88 93.3725 93.3726 87.9999 100 87.9999H160V71.9999H108.939C105.407 71.9745 103.64 67.7091 106.12 65.1938L106.142 65.1716L141.657 29.6568L130.343 18.3432L94.8284 53.8578Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="ml-[332px] hidden space-x-11 md:flex">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => (navLinksRef.current[index] = el)}
                className="text-[21px] text-white transition-colors"
              >
                <AnimatedText text={link.label} />
              </Link>
            ))}
          </div>

          {/* Desktop Right side buttons */}
          <div className="ml-auto hidden items-center space-x-[42px] text-[21px] md:flex">
            {authLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => (authLinksRef.current[index] = el)}
                className={
                  link.isButton
                    ? "rounded-md bg-[#efeeec] px-5 py-[18px] tracking-wide text-[#131313]"
                    : "text-white transition-colors"
                }
              >
                <AnimatedText text={link.label} />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white transition-colors"
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
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => (mobileNavLinksRef.current[index] = el)}
                  className="block px-3 py-2 text-sm font-medium text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 border-t border-gray-700 pt-4">
                {authLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    ref={(el) => (mobileAuthLinksRef.current[index] = el)}
                    className={
                      link.isButton
                        ? "mx-3 mt-2 block rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-black transition-colors"
                        : "block px-3 py-2 text-sm font-medium text-white transition-colors"
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
