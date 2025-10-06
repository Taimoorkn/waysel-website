import React from "react";

import SectionHeading from "../../../components/SectionHeading";
import AnimatedSVG from "@/components/AnimatedSVG";

const StarWars = () => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden bg-black text-white xl:h-[90vh]">
      {/* Top Binary Pattern */}
      <div className="absolute left-0 top-0 z-50 w-full overflow-hidden">
        <AnimatedSVG />
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 z-10 mt-[10%] flex items-center justify-center xl:mt-[2%]">
        <SectionHeading title="We are a team of innovators dedicated to solving complex challenges with elegant digital solutions." />
      </div>
    </div>
  );
};

export default StarWars;
