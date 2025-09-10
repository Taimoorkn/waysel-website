"use client";

import Button from "@/components/Button";

const HelpYourBusiness = () => {
  const item = {
    title: "How Custom Software Can Help Your Business?",
    description:
      "Custom software streamlines operations, automates workflows, and provides tailored tools to enhance efficiency and competitiveness. It integrates with your existing systems, offers real-time data insights, and adapts to your growth—unlocking new opportunities and strengthening your market position.",
    image: "/images/services_page/custom/business-custom.jpg",
    buttonText: "Start Today",
  };

  return (
    <section className="section_padding flex flex-col gap-8 bg-light_blue_bg md:flex-row md:items-center md:justify-between md:gap-12">
      <img src={item.image} alt={`${item.title} illustration`} className="w-full md:w-[400px]" />
      <div className="text-start">
        <h2 className="mb-2 font-neueMontreal text-2xl font-medium text-primary_text sm:mb-4 sm:text-3xl md:text-[38px]">
          How <span className="text-accent">Custom Software </span>Can Help Your Business?
        </h2>
        <p className="mb-6 font-neueMontreal text-sm text-secondary_text sm:mb-8 sm:text-base md:text-lg">
          {item.description}
        </p>
        <Button variant="primary" className="w-full sm:w-auto">
          {item.buttonText}
        </Button>
      </div>
    </section>
  );
};

export default HelpYourBusiness;
