import React from "react";

function SectionHeading({ title, description }) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 py-16 text-center font-hurme">
      <h1 className="bg-gradient-to-b from-white to-[#FFBA8F] bg-clip-text text-4xl tracking-[-3%] text-transparent sm:text-[64px] sm:leading-[80px]">
        {title}
      </h1>
      <p className="text-xl leading-[32px] text-[#ffffffe6]">{description}</p>
    </div>
  );
}

export default SectionHeading;
