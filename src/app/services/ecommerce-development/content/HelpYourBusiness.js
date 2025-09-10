"use client";

import Button from "@/components/Button";

const HelpYourBusiness = () => {
  const item = {
    title: "How E-Commerce Can Help Your Business?",
    description:
      "An e-commerce platform expands your market reach, simplifies online sales, and boosts customer engagement with personalized shopping experiences. It enables 24/7 availability, secure transactions, and data-driven insights—driving revenue growth and enhancing your brand presence.",
    image: "/images/services_page/ecommerce/business-ecommerce.jpg",
    buttonText: "Start Today",
  };

  return (
    <section className="section_padding flex flex-col gap-8 bg-light_blue_bg md:flex-row md:items-center md:justify-between md:gap-12">
      <img src={item.image} alt={`${item.title} illustration`} className="w-full md:w-[400px]" />
      <div className="text-start">
        <h2 className="mb-2 font-neueMontreal text-2xl font-semibold text-primary_text sm:mb-4 sm:text-3xl md:text-[38px]">
          How <span className="text-accent">E-Commerce </span>Can Help Your Business?
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
