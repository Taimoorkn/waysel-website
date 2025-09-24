import React from "react";

function SectionHeading({ title, description }) {
  // Split title to apply gradient to first word
  const titleWords = title.split(" ");
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(" ");

  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 py-16 text-center">
      <h1 className="text-4xl tracking-[-3%] text-white xl:text-[64px] xl:leading-[80px]">
        <span className="gradient-primary">{firstWord}</span>
        {restOfTitle && ` ${restOfTitle}`}
      </h1>
      <p className="text-xl leading-[32px] text-[#ffffffe6]">{description}</p>
    </div>
  );
}

export default SectionHeading;
