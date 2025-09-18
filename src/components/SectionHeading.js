import React from "react";

function SectionHeading({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center max-w-4xl mx-auto">
      <h1 className="font-hurme bg-gradient-to-b from-white to-[#FFBA8F] bg-clip-text text-4xl tracking-[-3%] text-transparent sm:text-[64px] sm:leading-[80px]">
        {title}
      </h1>
      <p className="text-lg leading-relaxed text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;