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
    <section className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden bg-primary_bg px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 2xl:px-[9.5rem]">
      <div className="relative z-10 mx-auto">
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-4 font-neueMontreal text-3xl font-medium text-primary_text sm:mb-6 sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <p className="mx-auto max-w-3xl font-neueMontreal text-base text-secondary_text sm:text-lg lg:text-xl">
            The passionate people behind every project at TechiTech Solutions. Meet the talented
            individuals who bring your ideas to life.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 sm:mt-8 sm:w-24"></div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-animate
              id={`team-${index}`}
              className="animate-fade-in-up group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:border-blue-200 hover:shadow-2xl sm:rounded-3xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={400}
                  height={320}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-64 lg:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="p-4 font-neueMontreal sm:p-6">
                <div className="mb-2 text-xs font-medium uppercase text-blue-600 sm:text-sm">
                  {member.role}
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 transition-colors group-hover:text-blue-600 sm:mb-4 sm:text-xl lg:text-2xl">
                  {member.name}
                </h3>
                <div className="h-1 w-full overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full origin-left scale-x-0 transform rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-500 group-hover:scale-x-100"></div>
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
