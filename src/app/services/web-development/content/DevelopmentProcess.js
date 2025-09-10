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
      <h2 className="section-header">
        Development Process
      </h2>
      <div className="relative flex flex-col md:flex-row md:justify-center items-center md:items-start">
        {/* Vertical dashed line for mobile */}
        <div className="absolute left-1/2 md:top-1/2 md:left-0 md:right-0 w-[1px] md:h-[1px] h-full md:w-full bg-transparent hidden md:block">
          <div className="absolute dashed-line w-full h-full" />
        </div>

        {/* Process items */}
        {processItems.map((item, index) => {
          const isReversed = index % 2 === 0;
          return (
            <div
              key={index}
              className="text-center flex flex-col items-center py-6 px-4 md:px-5 w-full md:w-auto max-w-md md:max-h-[550px]"
            >
              {isReversed ? (
                <div className="flex flex-col items-center justify-start flex-grow">
                  <div className="min-h-[150px] md:min-h-[220px]">
                    <h3 className="font-clashGrotesk text-lg md:text-xl font-medium leading-normal text-primary_text mt-4">
                      {item.title}
                    </h3>
                    <p className="font-manrope text-sm md:text-base leading-[18px] md:leading-[21.9px] text-secondary_text text-center max-w-xs">
                      {item.description}
                    </p>
                  </div>
                  <DashedLineCircle iconSrc={item.iconSrc} isReversed />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-end flex-grow mt-6 md:mt-[94px]">
                  <DashedLineCircle iconSrc={item.iconSrc} />
                  <div className="min-h-[150px] md:min-h-[220px]">
                    <h3 className="font-clashGrotesk text-lg md:text-xl font-medium leading-normal text-primary_text mt-4 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-manrope text-sm md:text-base leading-[18px] md:leading-[21.9px] text-secondary_text text-center max-w-xs">
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