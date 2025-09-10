"use client";

import DashedLineCircle from "@/components/DashedLineCircle";
import React from "react";

const DevelopmentProcess = () => {
  const processItems = [
    {
      title: "Analysis",
      description:
        "Gather and analyze client needs, market trends, and technical requirements to define clear objectives for your website project.",
      iconSrc: "/images/services_page/dev/analysis.svg",
    },
    {
      title: "Design",
      description:
        "Develop detailed UI/UX designs and prototypes focused on responsive layouts, accessibility, and seamless user engagement.",
      iconSrc: "/images/services_page/dev/laptop.svg",
    },
    {
      title: "Development",
      description:
        "Build robust, scalable websites using modern frameworks and clean code, ensuring cross-browser compatibility and optimal performance.",
      iconSrc: "/images/services_page/dev/development.svg",
    },
    {
      title: "Testing",
      description:
        "Conduct thorough testing - functional, performance, security, and usability - to deliver a reliable, bug-free website.",
      iconSrc: "/images/services_page/dev/testing.svg",
    },
    {
      title: "Launch",
      description:
        "Coordinate deployment, optimize SEO metadata, and manage hosting setup for a smooth, successful website launch.",
      iconSrc: "/images/services_page/dev/launch.svg",
    },
    {
      title: "Maintenance",
      description:
        "Provide ongoing updates, security patches, and feature improvements to keep your website fast, secure, and current.",
      iconSrc: "/images/services_page/dev/maintenance.svg",
    },
  ];

  return (
    <section className="devprocess_section">
      <h2 className="section-header">Development Process</h2>
      <div className="relative flex flex-col items-center md:flex-row md:items-start md:justify-center">
        {/* Vertical dashed line for mobile */}
        <div className="absolute left-1/2 hidden h-full w-[1px] bg-transparent md:left-0 md:right-0 md:top-1/2 md:block md:h-[1px] md:w-full">
          <div className="dashed-line absolute h-full w-full" />
        </div>

        {/* Process items */}
        {processItems.map((item, index) => {
          const isReversed = index % 2 === 0;
          return (
            <div
              key={index}
              className="flex w-full max-w-md flex-col items-center px-4 py-6 text-center md:max-h-[550px] md:w-auto md:px-5"
            >
              {isReversed ? (
                <div className="flex flex-grow flex-col items-center justify-start">
                  <div className="min-h-[150px] md:min-h-[220px]">
                    <h3 className="mt-4 font-neueMontreal text-lg font-medium text-primary_text md:text-xl">
                      {item.title}
                    </h3>
                    <p className="max-w-xs text-center font-neueMontreal text-sm text-secondary_text md:text-base">
                      {item.description}
                    </p>
                  </div>
                  <DashedLineCircle iconSrc={item.iconSrc} isReversed />
                </div>
              ) : (
                <div className="mt-6 flex flex-grow flex-col items-center justify-end md:mt-[94px]">
                  <DashedLineCircle iconSrc={item.iconSrc} />
                  <div className="min-h-[150px] md:min-h-[220px]">
                    <h3 className="mb-2 mt-4 font-neueMontreal text-lg font-medium text-primary_text md:text-xl">
                      {item.title}
                    </h3>
                    <p className="max-w-xs text-center font-neueMontreal text-sm text-secondary_text md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DevelopmentProcess;
