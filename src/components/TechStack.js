"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const TechStack = ({ techToDisplay }) => {
  const techStack = [
    // Frontend
    {
      name: "React",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="React"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Frontend",
    },
    {
      name: "Next.js",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          alt="Next.js"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Frontend",
    },
    {
      name: "Angular",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg"
          alt="Angular"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Frontend",
    },
    {
      name: "Vue.js",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
          alt="Vue.js"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          alt="Tailwind CSS"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Frontend",
    },

    // Backend
    {
      name: "NestJS",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
          alt="NestJS"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },
    {
      name: "Rails",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg"
          alt="Rails"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },
    {
      name: "Ruby",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
          alt="Ruby"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },
    {
      name: "Django",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
          alt="Django"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },
    {
      name: "C#",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
          alt="C#"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },
    {
      name: "Express",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          alt="Express"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },
    {
      name: "Laravel",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
          alt="Laravel"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },

    // Database
    {
      name: "MySQL",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
          alt="MySQL"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Database",
    },
    {
      name: "SQLite",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
          alt="SQLite"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Database",
    },
    {
      name: "MongoDB",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Database",
    },

    // Other
    {
      name: "TypeScript",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Other",
    },
    {
      name: "Python",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          alt="Python"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Other",
    },
    {
      name: "Docker",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
          alt="Docker"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "DevOps",
    },
    {
      name: "Kubernetes",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"
          alt="Kubernetes"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "DevOps",
    },
    {
      name: "GraphQL",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
          alt="GraphQL"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Other",
    },
    {
      name: "Flutter",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
          alt="Flutter"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Other",
    },
    {
      name: "Webpack",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"
          alt="Webpack"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Other",
    },
    {
      name: "Canva",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg"
          alt="Canva"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "UX/UI",
    },
    {
      name: "Figma",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
          alt="Figma"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "UX/UI",
    },

    // Cloud
    {
      name: "AWS",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          alt="AWS"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Cloud",
    },
    {
      name: "Microsoft Azure",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
          alt="Microsoft Azure"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Cloud",
    },
    {
      name: "Google Cloud",
      logo: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
          alt="Google Cloud"
          width={40}
          height={40}
          className="tech_stack_icon_img"
        />
      ),
      category: "Cloud",
    },
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
        <div className="mb-6 flex flex-wrap justify-center gap-2 xl:mb-12 xl:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-all duration-300 ease-in-out xl:rounded-xl xl:px-6 xl:py-4 xl:text-base ${
                activeCategory === category
                  ? "scale-105 bg-[#ffffffcc] text-dark shadow-lg"
                  : "border border-[#fed7be33] text-[#ffffffb3] hover:scale-105 hover:border-[#fed7be55] hover:bg-[#ffffffcc] hover:text-dark hover:shadow-md"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      {/* Grid Layout */}
      <div className="mx-auto flex w-full min-w-full flex-wrap justify-center gap-3 xl:gap-8">
        {filteredTech.map((item, index) => (
          <div
            key={index}
            className="font-manrope group relative flex size-20 flex-col items-center justify-center gap-[4px] rounded-xl border border-[#fed7be22] bg-[#121211] text-[13px] transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#fed7be44] hover:bg-[#1A1A1A] hover:shadow-lg xl:size-32 xl:max-w-[10.196%] xl:gap-[6px] xl:rounded-2xl xl:text-[15px]"
          >
            <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {item.logo}
            </div>
            <p className="mt-1 text-center text-[10px] font-medium leading-tight text-[#ffffffb3] transition-colors duration-300 group-hover:text-[#ffffffcc] xl:text-sm">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
