"use client";

import React from "react";

const DashedLineCircle = ({ iconSrc, isReversed }) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Dashed line */}
      {isReversed ? (
        <>
          <div className="size-2 rounded-full bg-black md:size-[8px]" />
          <div className="h-8 w-0 border-l-2 border-dashed border-black md:h-10" />
          {/* Circular container with semicircular border */}
          <div className="semicircle-border" style={{ "--semicircle-side": "top" }}>
            <img src={iconSrc} alt="Icon" className="size-7 md:size-9" />
          </div>
        </>
      ) : (
        <>
          {/* Circular container with semicircular border */}
          <div className="semicircle-border" style={{ "--semicircle-side": "bottom" }}>
            <img src={iconSrc} alt="Icon" className="size-7 md:size-9" />
          </div>
          <div className="h-8 w-0 border-l-2 border-dashed border-black md:h-10" />
          <div className="size-2 rounded-full bg-black md:size-[8px]" />
        </>
      )}
    </div>
  );
};

export default DashedLineCircle;
