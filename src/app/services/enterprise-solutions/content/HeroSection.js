"use client";

import Button from "@/components/Button";

const HeroSection = () => {
  const item = {
    title: "Enterprise Solutions",
    description:
      "Transform your enterprise operations with fully managed, end-to-end technology solutions tailored to your unique business needs.",
    image: "/images/services_page/enterprise-dev.svg",
    buttonText: "Book a demo",
  };

  return (
    <section className="bg-primary_bg section_padding flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
      <div className="w-full md:w-1/2 text-start order-2 md:order-none">
        <h2 className="service-header">
          <span className="text-accent">Enterprise </span>Solutions
        </h2>
        <p className="font-manrope text-sm sm:text-base md:text-lg leading-5 sm:leading-6 text-secondary_text mb-6 sm:mb-8">
          {item.description}
        </p>
        <Button variant="primary">{item.buttonText}</Button>
      </div>
      <img src={item.image} alt={`${item.title}`} className="w-[500px]" />
    </section>
  );
};

export default HeroSection;
