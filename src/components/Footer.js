"use client";

import React from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const Footer = () => {
  return (
    <footer className="bg-[#171717] font-hurme">
      {/* Top Section */}
      <div className="relative flex justify-between sm:px-24 sm:py-12">
        <div className="flex w-full lg:gap-16">
          {/* Left Section - Brand */}
          <div className="w-full space-y-8">
            <Link href="/" aria-label="Waysel home">
              <img src="/waysellogo.svg" alt="Waysel Logo" className="sm:w-[120px]" />
            </Link>
            <p className="max-w-md text-2xl tracking-[-3%] text-[#ffffffcc]">
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
              <div
                key={columnIndex}
                className="flex flex-col items-start gap-6 text-nowrap text-xl leading-[28px] tracking-[-3%] text-[#ffffffcc]"
              >
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
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none select-none bg-gradient-to-b from-[#C84D00] via-[#FF711B] to-transparent bg-clip-text text-[12rem] font-bold leading-none text-transparent opacity-20 sm:text-[16rem] md:text-[20rem] lg:text-[24rem] xl:text-[28rem]"
          style={{
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
          }}
        >
          WAYSEL
        </div>

        {/* Gradient Overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(180deg, transparent 0%, #C84D00 50%, #0D0D0C 100%)",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
