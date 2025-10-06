import React from "react";

import SectionHeading from "../../../components/SectionHeading";
import AnimatedSVG from "@/components/AnimatedSVG";

const StarWars = () => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden bg-primary_bg text-white xl:h-[90vh]">
      {/* Top Binary Pattern */}
      <div className="absolute left-0 top-0 w-full overflow-hidden">
        <AnimatedSVG />
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 mx-auto mt-[10%] flex max-w-5xl items-center justify-center border xl:mt-[2%]">
        <SectionHeading title="We are a team of innovators dedicated to solving complex challenges with elegant digital solutions." />
      </div>
      <div className="absolute bottom-0 left-0 w-full scale-y-[-1] overflow-hidden">
        <AnimatedSVG />
      </div>
    </div>
  );
};

export default StarWars;
