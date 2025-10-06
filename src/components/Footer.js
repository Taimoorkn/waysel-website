"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-primary_bg w-full">
      {/* Top Section */}
      <div className="relative flex flex-col justify-between px-6 py-8 xl:flex-row xl:px-24 xl:py-12">
        <div className="flex w-full flex-col gap-8 xl:flex-row xl:gap-16">
          {/* Left Section - Brand */}
          <div className="w-full space-y-6 xl:space-y-8">
            <Link href="/" aria-label="Waysel home">
              <Image
                src="/waysellogo.svg"
                alt="Waysel Logo"
                width={120}
                height={40}
                className="w-[80px] xl:w-[120px]"
              />
            </Link>
            <p className="max-w-md text-lg tracking-[-3%] text-text-secondary xl:text-2xl">
              In quiet and in chaos, we build.
              <br />
              And then, it speaks for itself.
            </p>
          </div>
          {/* Right Section - Navigation */}
          <div className="flex gap-8 xl:gap-16">
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
      <div className="relative -mb-[2px] h-[70px] overflow-hidden xl:h-[250px]">
        <div
          className="font-hurme flex select-none items-center justify-center text-[100px] font-semibold italic leading-none xl:text-[364px]"
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
                WebkitTextStrokeWidth: "2px",
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
          className="absolute bottom-0 left-0 right-0 h-[60px] xl:h-[150px]"
          style={{
            background: "linear-gradient(90deg, #7A66E1 0%, #FB3081 50%, #F8805F 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            maskImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.02) 10%, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,1) 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.02) 10%, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,1) 100%)",
          }}
        />
      </div>
      <div className="oval-blur-footer bottom-[-22%] left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden" />
    </footer>
  );
};

export default Footer;
