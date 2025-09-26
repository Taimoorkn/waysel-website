import React from "react";

function SectionHeading({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <h1 className="HeadingH3">{title}</h1>
      <p className="BodyText max-w-[360px]">{description}</p>
    </div>
  );
}

export default SectionHeading;
