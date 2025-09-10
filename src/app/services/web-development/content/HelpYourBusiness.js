"use client";

import Button from "@/components/Button";

const HelpYourBusiness = () => {
  const item = {
    title: "How a Website can Help Your Business?",
    description:
      "A website expands your reach, builds credibility, and connects you with customers 24/7. It offers a convenient platform to showcase your products or services, gather valuable visitor insights, and improve marketing effectiveness. With e-commerce and SEO, your website can generate new sales channels and grow your brand's visibility—making it essential for long-term business success.",
    image: "/images/services_page/web/business-web.jpg",
    buttonText: "Start Today",
  };

  return (
    <section className="section_padding flex flex-col gap-8 bg-light_blue_bg md:flex-row md:items-center md:justify-between md:gap-12">
      <img src={item.image} alt={`${item.title} illustration`} className="w-full md:w-[400px]" />
      <div className="text-start">
        <h2 className="mb-2 font-neueMontreal text-2xl font-medium text-primary_text sm:mb-4 sm:text-3xl md:text-[38px]">
          How a <span className="text-accent">Website </span>can Help Your Business?
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
