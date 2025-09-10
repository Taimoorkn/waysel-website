"use client";

import React from "react";

const DashedLineCircle = ({ iconSrc, isReversed }) => {
 return (
 <div className="relative flex flex-col justify-center items-center">
 {/* Dashed line */}
 {isReversed ? (
 <>
 <div className="size-2 md:size-[8px] bg-black rounded-full" />
 <div className="w-0 h-8 md:h-10 border-l-2 border-dashed border-black" />
 {/* Circular container with semicircular border */}
 <div
 className="semicircle-border"
 style={{ "--semicircle-side": "top" }}
 >
 <img src={iconSrc} alt="Icon" className="size-7 md:size-9" />
 </div>
 </>
 ) : (
 <>
 {/* Circular container with semicircular border */}
 <div
 className="semicircle-border"
 style={{ "--semicircle-side": "bottom" }}
 >
 <img src={iconSrc} alt="Icon" className="size-7 md:size-9" />
 </div>
 <div className="w-0 h-8 md:h-10 border-l-2 border-dashed border-black" />
 <div className="size-2 md:size-[8px] bg-black rounded-full" />
 </>
 )}
 </div>
 );
};

export default DashedLineCircle;