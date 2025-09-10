"use client";

import DashedLineCircle from "@/components/DashedLineCircle";
import React from "react";

const DevelopmentProcess = () => {
  const processItems = [
    {
      title: "Analysis",
      description: "Understand extension goals, browser compatibility, and specific use cases to define technical scope and key user interactions.",
      iconSrc: "/images/services_page/dev/analysis.svg",
    },
    {
      title: "Design",
      description: "Create lightweight, user-friendly UIs with intuitive workflows. Prioritize performance, minimalism, and alignment with Chrome UX best practices.",
      iconSrc: "/images/services_page/dev/extension.svg",
    },
    {
      title: "Development",
      description: "Build using JavaScript, HTML, and Manifest V3. Implement background scripts, content scripts, and Chrome APIs for smooth functionality.",
      iconSrc: "/images/services_page/dev/development.svg",
    },
    {
      title: "Testing",
      description: "Run tests for permissions, UI behavior, performance, and cross-site interactions to ensure reliability and compliance with Chrome Web Store policies.",
      iconSrc: "/images/services_page/dev/testing.svg",
    },
    {
      title: "Launch",
      description: "Package and publish the extension with proper documentation, graphics, & metadata to meet Google's submission guidelines & approval process.",
      iconSrc: "/images/services_page/dev/launch.svg",
    },
    {
      title: "Maintenance",
      description: "Provide updates for compatibility, user feedback, bug fixes, and feature enhancements to keep your extension effective and compliant.",
      iconSrc: "/images/services_page/dev/maintenance.svg",
    }
  ];

  return (
    <section className="devprocess_section">
      <h2 className="section-header">
        Development Process
      </h2>
      <div className="relative flex flex-col md:flex-row md:justify-center items-center md:items-start">
        {/* Vertical dashed line for mobile, horizontal for desktop */}
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