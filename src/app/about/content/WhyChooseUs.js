"use client";

import React from "react";
import { UsersIcon, LightbulbIcon, BriefcaseIcon, ChatIcon } from "@phosphor-icons/react";

const WhyChooseUs = () => {
  const values = [
    {
      title: "Experience",
      description:
        "We curate unparalleled experiences, blending technical expertise with creative solutions. Our commitment to crafting exceptional user experiences defines our approach.",
      icon: BriefcaseIcon,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      title: "Collaboration",
      description:
        "Collaboration is the heartbeat of TechiTech. We foster a culture that thrives on teamwork, uniting diverse talents to deliver seamless software solutions.",
      icon: UsersIcon,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      title: "Communication",
      description:
        "Clear and effective communication is foundational for us. We prioritize transparent and open dialogue, ensuring understanding and alignment.",
      icon: ChatIcon,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      title: "Innovation",
      description:
        "Innovation is ingrained in our culture. We embrace diverse perspectives, encourage curiosity, and foster an environment where ideas flow freely.",
      icon: LightbulbIcon,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 2xl:px-[9.5rem]">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>

      <div className="relative z-10 mx-auto">
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-4 font-neueMontreal text-3xl font-medium text-primary_text sm:mb-6 sm:text-4xl lg:text-5xl">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Choose
            </span>{" "}
            Us
          </h2>
          <p className="mx-auto max-w-3xl font-neueMontreal text-base text-secondary_text sm:text-lg lg:text-xl">
            Our core values shape the way we develop, collaborate, and provide quality services to
            our clients. These principles help us deliver scalable software solutions.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 sm:mt-8 sm:w-24"></div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              data-animate
              id={`value-${index}`}
              className="animate-fade-in-up group rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-500 hover:border-gray-200 hover:shadow-2xl sm:rounded-3xl sm:p-8"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`h-12 w-12 bg-gradient-to-br sm:h-14 sm:w-14 ${value.color} mb-4 flex items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 sm:mb-6 sm:rounded-2xl`}
              >
                <value.icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
              </div>
              <h3 className="mb-3 font-neueMontreal text-xl font-medium text-primary_text transition-colors group-hover:text-blue-600 sm:mb-4 sm:text-2xl">
                {value.title}
              </h3>
              <p className="font-neueMontreal text-sm text-secondary_text sm:text-base lg:text-lg">
                {value.description}
              </p>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-gray-100 sm:mt-6">
                <div
                  className={`h-full bg-gradient-to-r ${value.color} origin-left scale-x-0 transform rounded-full transition-transform duration-500 group-hover:scale-x-100`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
