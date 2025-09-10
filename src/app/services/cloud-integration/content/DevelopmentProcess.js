"use client";

import DashedLineCircle from "@/components/DashedLineCircle";
import React from "react";

const DevelopmentProcess = () => {
  const processItems = [
    {
      title: "Analysis",
      description: "Assess business goals, workloads, and regulatory needs to choose the right cloud provider, architecture, and service model (IaaS, PaaS, SaaS).",
      iconSrc: "/images/services_page/dev/analysis.svg",
    },
    {
      title: "Architecture",
      description: "Design scalable, secure cloud environments using micro services, containerization & best practices for cost optimization & high availability.",
      iconSrc: "/images/services_page/dev/cloud.svg",
    },
    {
      title: "Development",
      description: "Provision infrastructure, configure services, and deploy applications using tools like Terraform, Docker, Kubernetes, and native cloud interfaces.",
      iconSrc: "/images/services_page/dev/development.svg",
    },
    {
      title: "Testing",
      description: "Conduct performance, security, and integration tests to ensure stability, scalability, and fault tolerance of all cloud-based components.",
      iconSrc: "/images/services_page/dev/testing.svg",
    },
    {
      title: "Deployment",
      description: "Go live with real-time monitoring, logging, and alert systems in place to ensure uptime and track application behavior post-deployment.",
      iconSrc: "/images/services_page/dev/launch.svg",
    },
    {
      title: "Maintenance",
      description: "Continuously update, patch, and optimize cloud services for cost, performance, and reliability based on usage trends and feedback.",
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