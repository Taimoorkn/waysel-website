import React from "react";
import SectionHeading from "../../../components/SectionHeading";
import AnimatedSVG from "@/components/AnimatedSVG";
import GradientText from "@/components/GradientText";

const StarWars = () => {
  return (
    <div className="relative mt-10 flex w-full flex-col overflow-hidden bg-primary_bg text-white">
      {/* Top Binary Pattern */}
      <div className="w-full overflow-hidden">
        <AnimatedSVG />
      </div>

      {/* Main Content */}
      <div className="mx-auto flex max-w-5xl flex-1 items-center justify-center py-6 xl:py-12">
        <SectionHeading
          title={
            <>
              We are a <GradientText>team of innovators</GradientText> dedicated to
              <br />
              <GradientText>solving complex challenges</GradientText> with
              <br />
              elegant digital solutions.
            </>
          }
        />
      </div>

      {/* Bottom Binary Pattern (flipped) */}
      <div className="w-full scale-y-[-1] overflow-hidden">
        <AnimatedSVG />
      </div>
    </div>
  );
};

export default StarWars;
