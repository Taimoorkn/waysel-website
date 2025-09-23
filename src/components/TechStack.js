"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const TechStack = ({ techToDisplay }) => {
  const techStack = [
    // Frontend
    { name: "React", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="tech_stack_icon_img" />, category: "Frontend" },
    { name: "Next.js", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="tech_stack_icon_img" />, category: "Frontend" },
    { name: "Angular", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" className="tech_stack_icon_img" />, category: "Frontend" },
    { name: "Vue.js", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" className="tech_stack_icon_img" />, category: "Frontend" },
    { name: "Tailwind CSS", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="tech_stack_icon_img" />, category: "Frontend" },

    // Backend
    { name: "NestJS", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" className="tech_stack_icon_img" />, category: "Backend" },
    { name: "Rails", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg" className="tech_stack_icon_img" />, category: "Backend" },
    { name: "Ruby", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" className="tech_stack_icon_img" />, category: "Backend" },
    { name: "Django", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" className="tech_stack_icon_img" />, category: "Backend" },
    { name: "C#", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" className="tech_stack_icon_img" />, category: "Backend" },
    { name: "Express", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className="tech_stack_icon_img" />, category: "Backend" },
    { name: "Laravel", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" className="tech_stack_icon_img" />, category: "Backend" },

    // Database
    { name: "MySQL", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className="tech_stack_icon_img" />, category: "Database" },
    { name: "SQLite", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" className="tech_stack_icon_img" />, category: "Database" },
    { name: "MongoDB", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="tech_stack_icon_img" />, category: "Database" },

    // Other
    { name: "TypeScript", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="tech_stack_icon_img" />, category: "Other" },
    { name: "Python", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="tech_stack_icon_img" />, category: "Other" },
    { name: "Docker", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="tech_stack_icon_img" />, category: "DevOps" },
    { name: "Kubernetes", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" className="tech_stack_icon_img" />, category: "DevOps" },
    { name: "GraphQL", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" className="tech_stack_icon_img" />, category: "Other" },
    { name: "Flutter", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" className="tech_stack_icon_img" />, category: "Other" },
    { name: "Webpack", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg" className="tech_stack_icon_img" />, category: "Other" },
    { name: "Canva", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" className="tech_stack_icon_img" />, category: "UX/UI" },
    { name: "Figma", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="tech_stack_icon_img" />, category: "UX/UI" },

    // Cloud
    { name: "AWS", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="tech_stack_icon_img" />, category: "Cloud" },
    { name: "Microsoft Azure", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" className="tech_stack_icon_img" />, category: "Cloud" },
    { name: "Google Cloud", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" className="tech_stack_icon_img" />, category: "Cloud" },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "DevOps", "Other", "Cloud", "UX/UI"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter tech stack based on techToDisplay prop or active category
  const filteredTech = techToDisplay
    ? techStack.filter((item) => techToDisplay.includes(item.name))
    : activeCategory === "All"
      ? techStack
      : techStack.filter((item) => item.category === activeCategory);

  return (
    <section className="section">
      <SectionHeading
        title="Technologies We Master"
        description="Cutting-edge tools and frameworks that power our solutions"
      />
      {/* Button Bar - Render only if no techToDisplay prop is provided */}
      {!techToDisplay && (
        <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 sm:px-6 py-3 sm:py-4 font-medium text-sm sm:text-base rounded-xl transition-all duration-300 ease-in-out
                ${activeCategory === category
                  ? "bg-[#ffffffcc] text-dark shadow-lg scale-105"
                  : "text-[#ffffffb3] border border-[#fed7be33] hover:bg-[#ffffffcc] hover:text-dark hover:border-[#fed7be55] hover:scale-105 hover:shadow-md"}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      {/* Grid Layout */}
      <div className="w-full flex flex-wrap justify-center min-w-full gap-4 sm:gap-8 mx-auto">
        {filteredTech.map((item, index) => (
          <div
            key={index}
            className="group relative size-24 sm:size-32 bg-[#121211] rounded-2xl flex flex-col items-center justify-center border border-[#fed7be22] transition-all duration-300 ease-in-out hover:bg-[#1A1A1A] hover:border-[#fed7be44] hover:scale-105 hover:shadow-lg font-manrope sm:max-w-[10.196%] gap-[6px] text-[15px]"
          >
            <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {item.logo}
            </div>
            <p className="text-xs sm:text-sm text-[#ffffffb3] font-medium text-center leading-tight mt-1 group-hover:text-[#ffffffcc] transition-colors duration-300">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;