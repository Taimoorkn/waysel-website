"use client";

import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDownIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Button from "./Button";

// Configuration objects moved outside component to prevent recreating on each render
const SUB_SERVICES = {
  "Application Development": [
    { title: "Web Development", src: "/services/web-development" },
    { title: "Mobile App Development", src: "/services/mobile-development" },
    { title: "Custom Software Development", src: "/services/custom-software-development" },
  ],
  "Business Solutions": [
    { title: "E-Commerce Development", src: "/services/ecommerce-development" },
    { title: "Enterprise Solutions", src: "/services/enterprise-solutions" },
  ],
  "Technical Services": [
    { title: "Cloud Integration", src: "/services/cloud-integration" },
    { title: "Chrome Browser Extensions", src: "/services/chrome-extension-development" },
  ],
};

const MENU_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services", hasSubmenu: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Animation timing constants
const DROPDOWN_DELAY = 150;
const MOBILE_ANIMATION_DELAY = 50;
const MOBILE_SUBMENU_DELAY = 40;

const Navbar = () => {
  const pathname = usePathname();

  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  // Refs
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Memoized derived state
  const isServicesActive = useMemo(() => pathname.startsWith("/services"), [pathname]);

  const activeServiceInfo = useMemo(() => {
    for (const [category, services] of Object.entries(SUB_SERVICES)) {
      const activeService = services.find((service) => pathname === service.src);
      if (activeService) return { category, service: activeService };
    }
    return null;
  }, [pathname]);

  // Memoized handlers
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const toggleSubmenu = useCallback((label) => {
    setActiveSubmenu((prev) => (prev === label ? null : label));
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsDesktopDropdownOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsDesktopDropdownOpen(false);
      setHoveredService(null);
    }, DROPDOWN_DELAY);
  }, []);

  const closeMobileMenu = useCallback(() => setIsOpen(false), []);

  // Effects
  useEffect(() => {
    // Auto-open mobile submenu if on a service page
    if (activeServiceInfo && isOpen) {
      setActiveSubmenu("Services");
    }
  }, [activeServiceInfo, isOpen]);

  useEffect(() => {
    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (isDesktopDropdownOpen) {
          setIsDesktopDropdownOpen(false);
        }
        if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isDesktopDropdownOpen, isOpen]);

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
    const isActive = pathname === item.href || (item.label === "Services" && isServicesActive);

    if (item.hasSubmenu) {
      return (
        <li
          key={item.label}
          className="relative flex items-center px-3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdownRef}
        >
          <div className="group flex h-[4.5rem] cursor-pointer items-center">
            <Link
              href={item.href}
              className={`relative mx-3 px-0.5 transition-colors duration-200 ${
                isActive
                  ? "text-accent after:w-full"
                  : "after:w-0 group-hover:text-accent group-hover:after:w-full"
              } after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-accent after:transition-all after:duration-200`}
            >
              {item.label}
            </Link>
            <CaretDownIcon
              size={14}
              className={`ml-1 transition-all duration-300 ease-out ${
                isDesktopDropdownOpen
                  ? "rotate-180 text-accent"
                  : "text-primary_text group-hover:text-accent"
              }`}
              aria-hidden="true"
            />
          </div>

          {renderDesktopDropdown()}
        </li>
      );
    }

    return (
      <li key={item.label}>
        <Link href={item.href} className="group flex h-[4.5rem] items-center px-3">
          <span
            className={`relative px-0.5 transition-colors duration-200 ${
              isActive ? "text-accent" : "group-hover:text-accent"
            } after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-accent ${
              isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"
            } after:transition-all after:duration-200`}
          >
            {item.label}
          </span>
        </Link>
      </li>
    );
  };

  const renderDesktopDropdown = () => (
    <div
      className={`absolute left-0 top-[calc(100%-4px)] z-50 w-[300px] transition-all duration-300 ease-out ${
        isDesktopDropdownOpen
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-[-10px] opacity-0"
      }`}
      role="menu"
      aria-label="Services submenu"
    >
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl backdrop-blur-sm">
        <div className="py-2">
          {Object.entries(SUB_SERVICES).map(([category, services]) => (
            <div key={category} className="mb-2 last:mb-0">
              <div className="flex items-center gap-2 px-4 py-2 font-bold text-primary_text">
                <div className="h-3 w-1 rounded-full bg-accent" aria-hidden="true"></div>
                <span className="text-xs">{category}</span>
              </div>
              <div className="pl-4">
                {services.map((service) => {
                  const isServiceActive = pathname === service.src;
                  const isHovered = hoveredService === service.src;

                  return (
                    <Link
                      key={service.title}
                      href={service.src}
                      onMouseEnter={() => setHoveredService(service.src)}
                      onMouseLeave={() => setHoveredService(null)}
                      className={`group/item relative flex items-center justify-between py-2 pl-6 pr-4 transition-all duration-200 ${
                        isServiceActive
                          ? "bg-accent/8 font-medium text-accent"
                          : isHovered
                            ? "bg-accent/5 text-accent"
                            : "text-gray-700 hover:bg-gray-50"
                      }`}
                      role="menuitem"
                    >
                      <span className="relative z-10 text-xs">{service.title}</span>
                      <ArrowRightIcon
                        size={12}
                        className={`transition-all duration-200 ${
                          isServiceActive
                            ? "translate-x-0 text-accent opacity-100"
                            : isHovered
                              ? "translate-x-1 text-accent opacity-100"
                              : "translate-x-[-4px] text-gray-400 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMobileNavItem = (item, index) => {
    const isActive = pathname === item.href || (item.label === "Services" && isServicesActive);

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
            isActive ? "border-l-4 border-accent bg-accent/5 text-accent" : "active:scale-95"
          }`}
        >
          {item.hasSubmenu ? (
            <>
              <Link href={item.href} className="flex-1" onClick={closeMobileMenu}>
                {item.label}
              </Link>
              <button
                onClick={() => toggleSubmenu(item.label)}
                className="flex size-9 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-accent/10 focus:outline-none"
                aria-label={`Toggle ${item.label.toLowerCase()} submenu`}
                aria-expanded={activeSubmenu === item.label}
              >
                <CaretDownIcon
                  size={16}
                  className={`transition-all duration-300 ease-out ${
                    activeSubmenu === item.label ? "rotate-180 text-accent" : "text-primary_text"
                  }`}
                />
              </button>
            </>
          ) : (
            <Link href={item.href} className="flex-1" onClick={closeMobileMenu}>
              {item.label}
            </Link>
          )}
        </div>

        {item.hasSubmenu && renderMobileSubmenu(item.label)}
      </li>
    );
  };

  const renderMobileSubmenu = (label) => (
    <div
      className={`overflow-hidden transition-all duration-500 ease-out ${
        activeSubmenu === label ? "mt-3 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}
      role="region"
      aria-label={`${label} submenu`}
    >
      <div className="bg-white/8 overflow-hidden rounded-lg border border-white/20 backdrop-blur-sm">
        {Object.entries(SUB_SERVICES).map(([category, services], categoryIndex) => (
          <div key={category} className="border-b border-white/10 last:border-b-0">
            <div className="flex items-center gap-2 px-4 py-2 font-bold text-primary_text">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/80" aria-hidden="true"></span>
              <span className="text-xs">{category}</span>
            </div>
            <div className="pb-1 pl-4">
              {services.map((subService, serviceIndex) => {
                const isServiceActive = pathname === subService.src;

                return (
                  <Link
                    key={subService.title}
                    href={subService.src}
                    onClick={closeMobileMenu}
                    className={`group relative mx-2 my-0.5 flex items-center justify-between overflow-hidden rounded-md py-2 pl-6 pr-4 transition-all duration-300 ease-out ${
                      isServiceActive
                        ? "bg-accent/8 font-medium text-accent"
                        : "text-primary_text hover:bg-white/10 hover:text-accent"
                    }`}
                    style={{
                      transitionDelay:
                        activeSubmenu === label
                          ? `${(categoryIndex * services.length + serviceIndex) * MOBILE_SUBMENU_DELAY + 100}ms`
                          : "0ms",
                    }}
                  >
                    <span className="relative z-10 text-xs">{subService.title}</span>
                    <ArrowRightIcon
                      size={10}
                      className={`transition-all duration-300 ${
                        isServiceActive
                          ? "translate-x-0 text-accent opacity-100"
                          : "translate-x-[-8px] text-accent opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav
        className="fixed top-0 z-50 w-full bg-primary_bg pl-4 pr-1 shadow-navbar 2xl:px-[9.5rem]"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex h-[3.5rem] w-full items-center justify-between xl:h-[4.5rem]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="TechiTech Solutions home">
            <img
              src="/images/TechiTechLogo.svg"
              alt="TechiTech Logo"
              className="size-9 md:h-10 md:w-12"
              width={48}
              height={40}
            />
            <span className="font-neueMontreal text-lg text-accent xl:text-2xl">
              TechiTech Solutions
            </span>
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
                  <path d="M72 82.286h28.75" stroke="#3A5BFF" />
                  <path
                    d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                    fill="none"
                    stroke="#3A5BFF"
                  />
                  <path d="M72 125.143h28.75" stroke="#3A5BFF" />
                  <path
                    d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                    fill="none"
                    stroke="#3A5BFF"
                  />
                  <path d="M100.75 82.286h28.75" stroke="#3A5BFF" />
                  <path d="M100.75 125.143h28.75" stroke="#3A5BFF" />
                </g>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden h-[4.5rem] items-center gap-4 lg:flex">
            <ul className="flex h-[4.5rem] items-center space-x-4 font-neueMontreal text-sm font-medium text-primary_text">
              {MENU_ITEMS.map(renderDesktopNavItem)}
            </ul>
            <Button variant="primary">Book a Call</Button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          id="mobile-menu"
          className={`fixed right-0 min-h-screen transform bg-primary_bg transition-transform duration-300 ease-in-out ${
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
              <Button variant="primary" className="w-full py-3 text-base font-semibold">
                Book a Call
              </Button>
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
          outline: 2px solid #3a5bff;
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
