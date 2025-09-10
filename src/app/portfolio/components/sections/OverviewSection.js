'use client'
import React from 'react';
import { User, Code, Briefcase } from 'lucide-react';
import { getTechIcon } from '@/utils/techicons';

const OverviewSection = ({ data }) => {
  const { project, development } = data;

  // Sample role data - replace with actual data from your project or pass through props
  const role = {
    title: "Lead Frontend Developer",
    description: "Led the design and implementation of the user interface, ensuring a seamless and intuitive experience for all users."
  };

  // Sample responsibilities - replace with actual data
  const responsibilities = [
    "Architected and implemented the frontend application using React and TypeScript",
    "Collaborated with UX designers to create an intuitive and accessible interface",
    "Implemented responsive design ensuring compatibility across all devices",
    "Optimized application performance and loading speeds",
    "Integrated with backend APIs and services"
  ];

  // Get tech stack from data
  const techStack = development?.techStack || {
    frontend: "TypeScript, React, Outlook Add-in API, Office.js",
    backend: "Node.js, Express, OpenAI GPT, Natural Language Processing",
    infrastructure: "Azure Cloud Services, Azure Functions, Cosmos DB"
  };

  return (
    <section id="overview" className="scroll-mt-20 bg-white section_padding">
      <h2 className="section-header border-l-4 border-indigo-500 pl-4">
        Project Overview
      </h2>

      {/* Overview description */}
      <p className="font-manrope text-base leading-[21.9px] text-secondary_text mb-8">
        {project.overview}
      </p>

      {/* Project details cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left Column: Role and Tech Stack */}
        <div className="space-y-8">
          {/* Role Section - Clean and simple */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
                <User size={16} className="text-gray-600" />
                Role
              </h3>
            </div>
            <div className="p-6 font-manrope">
              <p className="text-gray-900 font-medium mb-2">
                {role.title}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {role.description}
              </p>
            </div>
          </div>

          {/* Responsibilities card */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
                <Briefcase size={16} className="text-gray-600" />
                Responsibilities
              </h3>
            </div>
            <div className="p-6 font-manrope">
              <ul className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2">
                    </span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack card */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
              <Code size={16} className="text-gray-600" />
              Tech Stack
            </h3>
          </div>
          <div className="p-6 font-manrope">
            <div className="space-y-5">
              {Object.entries(techStack).map(([category, technologies], index) => (
                <div key={index}>
                  <h4 className="text-sm font-medium text-gray-900 capitalize mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.split(',').map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors border border-gray-200"
                        title={tech.trim()}
                      >
                        <span className="text-sm">{getTechIcon(tech.trim())}</span>
                        <span>{tech.trim()}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;