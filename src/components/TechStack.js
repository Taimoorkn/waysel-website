"use client";

import Button from "@/components/Button";
import { useState } from "react";

const TechStack = ({ techToDisplay }) => {
  const techStack = [
    // Frontend
    {
      name: "React",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Frontend",
    },
    {
      name: "Next.js",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Frontend",
    },
    {
      name: "Angular",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Frontend",
    },
    {
      name: "Vue.js",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Frontend",
    },

    // Backend
    {
      name: "NestJS",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },
    {
      name: "Rails",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },
    {
      name: "Ruby",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },
    {
      name: "Django",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },
    {
      name: "C#",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },
    {
      name: "Express",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },
    {
      name: "Laravel",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Backend",
    },

    // Database
    {
      name: "MySQL",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Database",
    },
    {
      name: "SQLite",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Database",
    },
    {
      name: "MongoDB",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Database",
    },

    // Other
    {
      name: "TypeScript",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Other",
    },
    {
      name: "Python",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Other",
    },
    {
      name: "Docker",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "DevOps",
    },
    {
      name: "Kubernetes",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "DevOps",
    },
    {
      name: "GraphQL",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Other",
    },
    {
      name: "Flutter",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Other",
    },
    {
      name: "Webpack",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Other",
    },
    {
      name: "Canva",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "UX/UI",
    },
    {
      name: "Figma",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "UX/UI",
    },

    // Cloud
    {
      name: "AWS",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Cloud",
    },
    {
      name: "Microsoft Azure",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Cloud",
    },
    {
      name: "Google Cloud",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
          className="tech_stack_icon_img"
        />
      ),
      category: "Cloud",
    },
  ];

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "DevOps",
    "Cloud",
    "UX/UI",
    "Other",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter tech stack based on techToDisplay prop or active category
  const filteredTech = techToDisplay
    ? techStack.filter((item) => techToDisplay.includes(item.name))
    : activeCategory === "All"
      ? techStack
      : techStack.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-primary_bg px-4 py-10 text-center 2xl:px-[9.5rem]">
      <h1 className="section-header max-sm:hidden">Technologies Our Company Uses</h1>
      <h1 className="section-header !text-center sm:hidden">Tech Stack</h1>
      {/* Button Bar - Render only if no techToDisplay prop is provided */}
      {!techToDisplay && (
        <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-primary-text rounded-lg px-4 py-2 text-sm font-semibold sm:px-6 sm:py-3 sm:text-[16px] ${
                activeCategory === category
                  ? "bg-black text-primary_bg"
                  : "border border-black hover:bg-black hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      {/* Grid Layout */}
      <div className="mx-auto flex w-full min-w-full flex-wrap justify-center gap-2 sm:gap-8">
        {filteredTech.map((item, index) => (
          <div
            key={index}
            className="tech_stack_icon gap-[6px] font-neueMontreal text-[15px] sm:max-w-[10.196%]"
          >
            {item.logo}
            <p className="text-xs sm:text-base">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
