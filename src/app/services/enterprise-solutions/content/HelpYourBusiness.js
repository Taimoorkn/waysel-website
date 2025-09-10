"use client";

import Button from "@/components/Button";

const HelpYourBusiness = () => {
  const item = {
    title: "How Enterprise Solutions can Help Your Business?",
    description: "Enterprise solutions empower your business with robust infrastructure, streamlined operations, and minimized management costs. They support large teams, enable efficient scaling and strengthen data protection. Whether optimizing processes, integrating systems, or enhancing analytics, enterprise solutions offer flexibility, cost-effectiveness, and reliability giving your organization the agility to expand, adapt and provide digital experiences to stakeholders & clients.",
    image: "/images/services_page/enterprise/business-enterprise.jpg",
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
          How <span className="text-accent">Enterprise Solutions </span>can Help
          Your Business?
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