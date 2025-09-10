"use client";

import Button from "@/components/Button";

const HelpYourBusiness = () => {
  const item = {
    title: "How a Mobile App can Help Your Business?",
    description:
      "A mobile app lets you engage customers directly, boost brand loyalty, and provide instant access anytime, anywhere. It simplifies purchases, delivers personalized experiences, and offers real-time insights into user behavior. With push notifications and seamless functionality, your app can open new revenue streams and strengthen customer relationships—making it a powerful tool for business growth.",
    image: "/images/services_page/mobile/business-mobile.jpg",
    buttonText: "Start Today",
  };

  return (
    <section className="section_padding flex flex-col gap-8 bg-light_blue_bg md:flex-row md:items-center md:justify-between md:gap-12">
      <img src={item.image} alt={`${item.title} illustration`} className="w-full md:w-[400px]" />
      <div className="text-start">
        <h2 className="mb-2 font-neueMontreal text-2xl font-semibold text-primary_text sm:mb-4 sm:text-3xl md:text-[38px]">
          How a <span className="text-accent">Mobile App </span>can Help Your Business?
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
