"use client";

import Button from "@/components/Button";

const HelpYourBusiness = () => {
  const item = {
    title: "How Cloud Integration can Help Your Business?",
    description: "Cloud integration empower your business with scalable infrastructure, seamless collaboration, and reduced IT overhead. They support remote teams, enable rapid deployment, and enhance data security. Whether hosting apps, storing data, or automating workflows, the cloud offers flexibility, cost-efficiency, and resilience—giving your business the agility to grow, adapt quickly, and deliver better digital experiences to customers.",
    image: "/images/services_page/cloud/business-cloud.jpg",
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
          How <span className="text-accent">Cloud Integration </span>can Help
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