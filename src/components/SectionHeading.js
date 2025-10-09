import React from "react";

function SectionHeading({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8 text-center xl:gap-4 xl:py-16">
      <h1 className="HeadingH3">{title}</h1>
      <p className="BodyText max-w-[280px] xl:max-w-[560px]">{description}</p>
    </div>
  );
}

export default SectionHeading;
