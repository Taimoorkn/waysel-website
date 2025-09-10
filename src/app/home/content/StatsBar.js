import { ArchiveBoxIcon, ChartLineUpIcon, PackageIcon, UserIcon } from "@phosphor-icons/react";
import React from "react";

const StatsBar = () => {
  const stats = [
    {
      value: "300 +",
      label: "Websites & Apps Developed",
      icon: <PackageIcon size={24} color="#ffffff" />,
    },
    {
      value: "150 +",
      label: "Brands & Startups Served",
      icon: <UserIcon size={24} color="#ffffff" />,
    },
    {
      value: "$350M +",
      label: "Client Revenue Generated",
      icon: <ChartLineUpIcon size={24} color="#ffffff" />,
    },
  ];

  return (
    <div className="absolute -mt-[138px] mb-6 flex w-full items-center justify-center px-4 py-4 max-lg:hidden sm:mb-9 sm:mt-7 sm:h-[144px] sm:px-4 sm:py-5 xl:relative xl:mt-4 xl:bg-primary_bg 2xl:px-[9.5rem]">
      <div className="flex h-full w-full flex-col items-stretch overflow-hidden rounded-2xl shadow-stats_bar sm:flex-row sm:rounded-3xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex h-full w-full flex-row items-center justify-between gap-3 bg-accent px-4 py-4 sm:flex-col sm:justify-center sm:gap-4 sm:px-6 sm:py-0 lg:flex-row lg:justify-between lg:gap-3 lg:px-10 ${
              // Mobile borders (horizontal dividers)
              index !== stats.length - 1 ? "border-b border-black sm:border-b-0" : ""
            } ${
              // Desktop borders (vertical dividers)
              index !== stats.length - 1 ? "sm:border-r-2 sm:border-black" : ""
            }`}
          >
            <div className="flex flex-1 flex-col items-start font-neueMontreal text-white sm:flex-none sm:items-center lg:flex-1 lg:items-start">
              <p className="text-xl font-semibold sm:text-2xl lg:text-[2rem]">{stat.value}</p>
              <p className="mt-1 text-xs font-medium sm:text-center sm:text-sm lg:text-left lg:text-sm">
                {stat.label}
              </p>
            </div>
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-white bg-accent sm:h-14 sm:w-14">
              <div className="sm:hidden">{React.cloneElement(stat.icon, { size: 20 })}</div>
              <div className="hidden sm:block lg:hidden">
                {React.cloneElement(stat.icon, { size: 24 })}
              </div>
              <div className="hidden lg:block">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
