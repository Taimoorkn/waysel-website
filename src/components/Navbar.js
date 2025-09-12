"use client";
import { StarAndCrescentIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import AnimatedText from "./AnimatedText";
import logoUrl from "../../public/Logo.svg";

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
    <nav className="fixed left-0 right-0 top-0 z-50 mt-6 md:mt-8 lg:mt-10 font-neueMontreal font-medium leading-4">
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center justify-between w-full md:w-auto md:gap-32 lg:gap-64 xl:gap-80 text-2xl md:text-3xl lg:text-4xl text-white">
            <p>Waysel</p>
            <Link href="/">
              <svg width="40" height="40" viewBox="0 0 232 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M229.146 134.813C218.662 108.576 200.655 90.9833 173.218 84.4335C153.541 79.7362 135.143 84.6531 117.633 93.9085C106.384 99.8548 95.3984 106.479 83.6895 111.343C56.4067 122.676 29.7094 121.471 4.42651 105.046C3.59831 104.507 2.72564 104.036 1.8569 103.565C1.75932 103.512 1.5513 103.662 0.944625 103.88C0.967152 108.964 0.987601 114.219 1.01428 119.475C1.08875 134.132 1.11528 148.79 1.25209 163.447C1.562 196.644 27.7242 226.63 60.6987 231.3C66.9131 232.18 73.062 232.192 79.3937 232.164C82.8937 232.149 90.7257 232.114 93.8936 232.1C95.8936 232.091 97.3935 232.084 99.8935 232.073C101.394 232.067 102.393 232.062 104.393 232.053C106.893 232.042 110.393 232.027 112.893 232.016C115.393 232.005 117.393 231.996 123.893 231.967C133.393 231.925 126.393 231.956 137.893 231.905C143.893 231.878 155.557 231.758 160.513 231.712C195.895 231.382 226.32 204.535 230.015 169.528C231.205 158.247 229.558 146.667 229.146 134.813ZM115.065 154.254C133.994 145.904 162.445 122.839 183.423 125.702C193.604 127.092 201.332 149.623 195.271 159.596C154.045 125.832 185.238 197.609 165.891 197.749C134.248 197.977 102.603 198.281 70.9637 197.995C64.6983 197.938 58.1924 196.044 52.2746 193.76C46.044 191.356 40.971 186.852 37.1151 180.12C55.7064 181.588 72.2499 177.613 87.7743 169.199C96.6704 164.378 105.533 159.495 115.065 154.254Z" fill="#CAF811" />
                <path d="M49.8407 4.37091C22.4382 14.5986 6.57555 33.97 1.28971 62.2585C0.0671345 68.8013 1.08868 73.6761 6.72126 78.3546C28.2237 96.2151 51.2242 99.9791 76.444 87.3555C90.7815 80.1789 104.555 71.6482 119.38 65.7194C150.547 53.2543 181.337 53.5768 209.723 73.7823C217.203 79.1073 223.452 86.1635 229.753 91.9526C235.383 61.5646 224.403 31.2294 200.732 14.0721C188.699 5.35048 175.202 0.839621 160.305 0.879082C130.151 0.958954 99.9949 0.960069 69.8456 1.39506C63.2956 1.48957 56.77 3.27263 49.8407 4.37091Z" fill="#CAF811" />
              </svg>

              {/* <svg
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
              </svg> */}
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:ml-8 lg:ml-16 xl:ml-20 space-x-4 lg:space-x-8 xl:space-x-11">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => (navLinksRef.current[index] = el)}
                className="text-base lg:text-lg xl:text-[21px] text-white transition-colors"
              >
                <AnimatedText text={link.label} />
              </Link>
            ))}
          </div>

          {/* Desktop Right side buttons */}
          <div className="ml-auto hidden items-center space-x-4 lg:space-x-8 xl:space-x-[42px] text-base lg:text-lg xl:text-[21px] md:flex">
            {authLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => (authLinksRef.current[index] = el)}
                className={
                  link.isButton
                    ? "rounded-md bg-[#efeeec] px-3 lg:px-4 xl:px-5 py-3 lg:py-4 xl:py-[18px] tracking-wide text-[#131313]"
                    : "text-white transition-colors"
                }
              >
                <AnimatedText text={link.label} />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="ml-auto md:hidden">
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
