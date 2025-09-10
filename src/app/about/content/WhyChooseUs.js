"use client";

import React from "react";
import {
  UsersIcon,
  LightbulbIcon,
  BriefcaseIcon,
  ChatIcon,
} from "@phosphor-icons/react";

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
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 2xl:px-[9.5rem] bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>

      <div className="relative z-10 mx-auto ">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-primary_text font-clashGrotesk">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Choose
            </span>{" "}
            Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary_text font-manrope max-w-3xl mx-auto leading-relaxed">
            Our core values shape the way we develop, collaborate, and provide
            quality services to our clients. These principles help us deliver
            scalable software solutions.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 sm:mt-8 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              data-animate
              id={`value-${index}`}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <value.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold font-clashGrotesk text-primary_text mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-secondary_text font-manrope leading-relaxed text-sm sm:text-base lg:text-lg">
                {value.description}
              </p>
              <div className="mt-4 sm:mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${value.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
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