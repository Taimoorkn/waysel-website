"use client";

import {
  ShoppingCartIcon,
  FilmSlateIcon,
  HeartbeatIcon,
  UsersIcon,
  BriefcaseIcon,
  IdentificationCardIcon,
  BuildingsIcon,
  CarIcon,
  GraduationCapIcon,
  CurrencyDollarIcon,
} from "@phosphor-icons/react";
import React, { useState } from "react";

const IndustriesWeServe = () => {
  const industries = [
    {
      name: "E-Commerce",
      icon: <ShoppingCartIcon weight="thin" className="industry-icon" />,
    },
    {
      name: "Entertainment",
      icon: <FilmSlateIcon weight="thin" className="industry-icon" />,
    },
    {
      name: "Healthcare",
      icon: <HeartbeatIcon weight="thin" className="industry-icon" />,
    },
    {
      name: "Social Networking",
      icon: <UsersIcon weight="thin" className="industry-icon" />,
    },
    {
      name: "Business",
      icon: <BriefcaseIcon weight="thin" className="industry-icon" />,
    },
    {
      name: "Hospitality",
      icon: <IdentificationCardIcon weight="thin" className="industry-icon" />,
    },
    {
      name: "Real Estate",
      icon: <BuildingsIcon weight="thin" className="industry-icon" />,
    },
    {
      name: "Automotive",
      icon: <CarIcon weight="thin" className="industry-icon" />,
    },
    {
      name: "Education",
      icon: <GraduationCapIcon weight="thin" className="industry-icon" />,
    },
    {
      name: "Fintech",
      icon: <CurrencyDollarIcon weight="thin" className="industry-icon" />,
    },
  ];

  return (
    <section className="section_padding bg-primary_bg">
      <h2 className="section-header">
        <span className="text-accent">Industries </span>
        <span className="text-primary_text">We Serve</span>
      </h2>
      <div className="grid grid-cols-2 border-l border-t border-border_primary sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {industries.map((industry, index) => {
          const [isHovered, setIsHovered] = useState(false);
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center border-b border-r border-border_primary px-4 py-12 text-center hover:bg-hover_bg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {React.cloneElement(industry.icon, {
                weight: isHovered ? "duotone" : "thin",
                className: `industry-icon ${isHovered ? "text-white" : ""}`,
              })}
              <h3 className="font-neueMontreal text-xs font-medium text-primary_text xl:text-base">
                {industry.name}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
