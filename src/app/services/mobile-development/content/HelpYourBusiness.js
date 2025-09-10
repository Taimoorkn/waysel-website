"use client";

import Button from "@/components/Button";

const HelpYourBusiness = () => {
  const item = {
    title: "How a Mobile App can Help Your Business?",
    description: "A mobile app lets you engage customers directly, boost brand loyalty, and provide instant access anytime, anywhere. It simplifies purchases, delivers personalized experiences, and offers real-time insights into user behavior. With push notifications and seamless functionality, your app can open new revenue streams and strengthen customer relationships—making it a powerful tool for business growth.",
    image: "/images/services_page/mobile/business-mobile.jpg",
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
          How a <span className="text-accent">Mobile App </span>can Help Your
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