"use client";

import React from "react";
import Image from "next/image";

const OurTeam = () => {
  const teamMembers = [
    {
      role: "CEO & Founder",
      name: "Alex Johnson",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      role: "Senior Fullstack Developer",
      name: "Alex Johnson",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      role: "UI/UX Designer",
      name: "Alex Johnson",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      role: "DevOps Engineer",
      name: "Alex Johnson",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      role: "Product Manager",
      name: "Alex Johnson",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      role: "Junior Developer",
      name: "Alex Johnson",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="bg-primary_bg relative min-h-[calc(100vh-4.5rem)] overflow-hidden px-4 py-8 lg:px-8 lg:py-16 xl:px-6 xl:py-12">
      <div className="relative z-10 mx-auto">
        <div className="mb-8 text-center lg:mb-16 xl:mb-12">
          <h2 className="text-primary_text mb-4 text-3xl font-medium lg:text-5xl xl:mb-6 xl:text-4xl">
            <span className="gradient-primary">Our</span> Team
          </h2>
          <p className="text-secondary_text mx-auto max-w-3xl text-base lg:text-xl xl:text-lg">
            The passionate people behind every project at TechiTech Solutions. Meet the talented individuals who bring
            your ideas to life.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 xl:mt-8 xl:w-24"></div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 xl:grid-cols-2 xl:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-animate
              id={`team-${index}`}
              className="animate-fade-in-up group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:border-blue-200 hover:shadow-2xl xl:rounded-3xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={400}
                  height={320}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 lg:h-80 xl:h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="p-4 xl:p-6">
                <div className="mb-2 text-xs font-medium uppercase text-blue-600 xl:text-sm">{member.role}</div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 transition-colors group-hover:text-blue-600 lg:text-2xl xl:mb-4 xl:text-xl">
                  {member.name}
                </h3>
                <div className="h-1 w-full overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full origin-left scale-x-0 transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-500 group-hover:scale-x-100"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
