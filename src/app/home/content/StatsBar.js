import {
  ArchiveBoxIcon,
  ChartLineUpIcon,
  PackageIcon,
  UserIcon,
} from "@phosphor-icons/react";
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
    <div className="max-lg:hidden absolute -mt-[138px] flex w-full items-center justify-center xl:relative xl:bg-primary_bg py-4 sm:py-5 sm:h-[144px] mb-6 sm:mb-9 xl:mt-4 sm:mt-7 px-4 sm:px-4 2xl:px-[9.5rem]">
      <div className="shadow-stats_bar w-full h-full flex flex-col sm:flex-row items-stretch rounded-2xl sm:rounded-3xl overflow-hidden">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`w-full h-full px-4 sm:px-6 lg:px-10 py-4 sm:py-0 bg-accent  flex flex-row sm:flex-col lg:flex-row items-center justify-between sm:justify-center lg:justify-between gap-3 sm:gap-4 lg:gap-3 ${
              // Mobile borders (horizontal dividers)
              index !== stats.length - 1
                ? "border-b sm:border-b-0 border-black"
                : ""
              } ${
              // Desktop borders (vertical dividers)
              index !== stats.length - 1 ? "sm:border-r-2 sm:border-black" : ""
              }`}
          >
            <div className="font-manrope text-white flex flex-col items-start sm:items-center lg:items-start flex-1 sm:flex-none lg:flex-1">
              <p className="font-semibold text-xl sm:text-2xl lg:text-[2rem] leading-tight">
                {stat.value}
              </p>
              <p className="font-medium text-xs sm:text-sm lg:text-sm leading-tight sm:text-center lg:text-left mt-1">
                {stat.label}
              </p>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-accent rounded-full border-2 border-white flex-shrink-0">
              <div className="sm:hidden  ">
                {React.cloneElement(stat.icon, { size: 20 })}
              </div>
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
