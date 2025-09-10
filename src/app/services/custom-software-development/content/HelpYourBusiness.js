"use client";

import Button from "@/components/Button";

const HelpYourBusiness = () => {
  const item = {
    title: "How Custom Software Can Help Your Business?",
    description: "Custom software streamlines operations, automates workflows, and provides tailored tools to enhance efficiency and competitiveness. It integrates with your existing systems, offers real-time data insights, and adapts to your growth—unlocking new opportunities and strengthening your market position.",
    image: "/images/services_page/custom/business-custom.jpg",
    buttonText: "Start Today",
  };

  return (
    <section className="bg-light_blue_bg section_padding flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
      <img
        src={item.image}
        alt={`${item.title} illustration`}
        className="w-full md:w-[400px]"
      />
      <div className="text-start">
        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-clashGrotesk font-semibold leading-tight text-primary_text mb-2 sm:mb-4">
          How <span className="text-accent">Custom Software </span>Can Help Your
          Business?
        </h2>
        <p className="font-manrope text-sm sm:text-base md:text-lg leading-5 sm:leading-6 text-secondary_text mb-6 sm:mb-8">
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