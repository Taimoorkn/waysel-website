"use client";

import Button from "@/components/Button";

const HeroSection = () => {
  const item = {
    title: "E-Commerce Development",
    description:
      "Crafting powerful, secure, and scalable online stores tailored to your business goals. We enhance user experience and drive sales with innovative e-commerce solutions.",
    image: "/images/services_page/ecommerce-dev.svg",
    buttonText: "Book a Consultation",
  };

  return (
    <section className="bg-primary_bg section_padding flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
      <div className="w-full md:w-1/2 text-start order-2 md:order-none">
        <h2 className="service-header">
          E-Commerce <span className="text-accent">Development</span>
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
