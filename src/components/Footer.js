"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#171717]">
      {/* Top Section */}
      <div className="relative flex justify-between xl:px-24 xl:py-12">
        <div className="flex w-full lg:gap-16">
          {/* Left Section - Brand */}
          <div className="w-full space-y-8">
            <Link href="/" aria-label="Waysel home">
              <img src="/waysellogo.svg" alt="Waysel Logo" className="xl:w-[120px]" />
            </Link>
            <p className="max-w-md text-2xl tracking-[-3%] text-text-secondary">
              In quiet and in chaos, we build.
              <br />
              And then, it speaks for itself.
            </p>
          </div>
          {/* Right Section - Navigation */}
          <div className="flex lg:gap-16">
            {[
              [
                { label: "Our Work", href: "/work", isInternal: true },
                { label: "Our Services", href: "/services", isInternal: true },
                { label: "About Us", href: "/about", isInternal: true },
              ],
              [
                { label: "LinkedIn", href: "https://linkedin.com", isInternal: false },
                { label: "Instagram", href: "https://instagram.com", isInternal: false },
                { label: "Contact Us", href: "/contact", isInternal: true },
              ],
            ].map((column, columnIndex) => (
              <div key={columnIndex} className="BodyText flex flex-col items-start gap-4 text-nowrap">
                {column.map(({ label, href, isInternal }) =>
                  isInternal ? (
                    <Link key={label} href={href}>
                      {label}
                    </Link>
                  ) : (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large WAYSEL Text with Gradient Background */}
      <div className="relative h-[250px] overflow-hidden border">
        <div
          className="flex select-none items-center justify-center text-[364px] font-semibold leading-none"
          style={{
            leadingTrim: "both",
            textEdge: "cap",
          }}
        >
          {["W", "A", "Y", "S", "E", "L"].map((letter, index) => (
            <span
              key={index}
              className="waysel-letter text-transparent"
              data-letter={letter}
              style={{
                WebkitTextStrokeWidth: "4px",
                WebkitTextStrokeColor: "#FFF",
                paintOrder: "stroke fill",
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-[100px] border"
          style={{
            background: "linear-gradient(90deg, #7A66E1 0%, #FB3081 50%, #F8805F 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            maskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%)",
            WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%)",
          }}
        />
      </div>
      <div className="oval-blur-footer bottom-[-22%] left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden" />
    </footer>
  );
};

export default Footer;
