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
    <section className="relative overflow-hidden bg-white px-4 py-8 lg:px-8 lg:py-16 xl:px-6 xl:py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30"></div>

      <div className="relative z-10 mx-auto">
        <div className="mb-8 text-center lg:mb-16 xl:mb-12">
          <h2 className="text-primary_text mb-4 text-3xl font-medium lg:text-5xl xl:mb-6 xl:text-4xl">
            <span className="gradient-primary">Why</span>{" "}
            Choose{" "}
            Us
          </h2>
          <p className="text-secondary_text mx-auto max-w-3xl text-base lg:text-xl xl:text-lg">
            Our core values shape the way we develop, collaborate, and provide quality services to our clients. These
            principles help us deliver scalable software solutions.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 xl:mt-8 xl:w-24"></div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 xl:grid-cols-2 xl:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              data-animate
              id={`value-${index}`}
              className="animate-fade-in-up group rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-500 hover:border-gray-200 hover:shadow-2xl xl:rounded-3xl xl:p-8"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`h-12 w-12 bg-gradient-to-br xl:h-14 xl:w-14 ${value.color} mb-4 flex items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 xl:mb-6 xl:rounded-2xl`}
              >
                <value.icon className="h-6 w-6 text-white xl:h-7 xl:w-7" />
              </div>
              <h3 className="text-primary_text mb-3 text-xl font-medium transition-colors group-hover:text-blue-600 xl:mb-4 xl:text-2xl">
                {value.title}
              </h3>
              <p className="text-secondary_text text-sm lg:text-lg xl:text-base">{value.description}</p>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-gray-100 xl:mt-6">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 origin-left scale-x-0 transform rounded-full transition-transform duration-500 group-hover:scale-x-100"
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
