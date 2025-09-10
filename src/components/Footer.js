"use client";

import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
  GithubLogoIcon,
  CodeIcon,
  RocketLaunchIcon,
  LightbulbIcon,
} from "@phosphor-icons/react";

const Footer = () => {
  const offices = [
    {
      city: "Austin",
      label: "Headquarters",
      address: "701 Tillery St, Austin, TX 78702",
      phone: "+1 (512) 555-0142",
      email: "austin@techtech.com",
      timezone: "CST",
    },
    {
      city: "Lahore",
      label: "Development Hub",
      address: "33-A Khayaban-e-Iqbal, Sector XX DHA Phase 3, Lahore, Punjab, 54792",
      phone: "+92 (42) 555-0198",
      email: "lahore@techtech.com",
      timezone: "PKT",
    },
    {
      city: "Manchester",
      label: "European Office",
      address: "173 Cheetham Hill Rd, Manchester M8 8LG",
      phone: "+44 (161) 555-0176",
      email: "manchester@techtech.com",
      timezone: "GMT",
    },
  ];

  const services = [
    "Custom Software Development",
    "Mobile App Development",
    "Cloud Solutions",
    "AI & Machine Learning",
    "DevOps & Infrastructure",
  ];

  const technologies = [
    "React & Next.js",
    "Node.js & Python",
    "AWS & Azure",
    "Docker & Kubernetes",
    "PostgreSQL & MongoDB",
  ];

  return (
    <footer className="relative overflow-hidden bg-dark_purple">
      <div className="relative z-10 px-4 pb-8 pt-20 md:px-8 lg:px-16 2xl:px-[9.5rem]">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                <CodeIcon size={24} weight="bold" className="text-accent" />
              </div>
              <img src="/images/TechiTechLogo.svg" alt="TechTech" className="h-8" />
            </div>

            <p className="text-lg text-gray-300">
              Transforming ideas into powerful digital solutions. We craft custom software, mobile
              apps, and cloud platforms that drive business growth.
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <RocketLaunchIcon size={16} weight="fill" className="text-accent" />
                <span>50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <LightbulbIcon size={16} weight="fill" className="text-accent" />
                <span>Innovation First</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm font-medium text-gray-400">Follow us:</span>
              <div className="flex gap-3">
                {[
                  {
                    Icon: LinkedinLogoIcon,
                    href: "https://linkedin.com",
                    color: "hover:text-blue-400",
                  },
                  {
                    Icon: GithubLogoIcon,
                    href: "https://github.com",
                    color: "hover:text-gray-300",
                  },
                  {
                    Icon: TwitterLogoIcon,
                    href: "https://twitter.com",
                    color: "hover:text-blue-400",
                  },
                  {
                    Icon: InstagramLogoIcon,
                    href: "https://instagram.com",
                    color: "hover:text-pink-400",
                  },
                ].map(({ Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg bg-gray-800/50 p-2 text-gray-500 ${color} transition-all duration-300 hover:scale-110 hover:bg-gray-700/50`}
                  >
                    <Icon size={20} weight="fill" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services & Technologies */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-medium text-white">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/20">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                </div>
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-sm text-gray-400 transition-colors hover:text-gray-300"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-medium text-white">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/20">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                </div>
                Technologies
              </h3>
              <ul className="space-y-3">
                {technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-sm text-gray-400 transition-colors hover:text-gray-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-medium text-white">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/20">
                <div className="h-2 w-2 rounded-full bg-accent"></div>
              </div>
              Get In Touch
            </h3>

            <div className="space-y-6">
              {offices.map(({ city, label, address, phone, email, timezone }, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4 rounded-xl border border-gray-700/50 bg-gray-800/30 p-4 transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-800/50">
                    <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20">
                      <MapPinIcon size={18} className="text-accent" weight="fill" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h4 className="text-sm font-medium text-white">{city}</h4>
                        <span className="rounded-full bg-gray-700/50 px-2 py-0.5 text-xs text-gray-500">
                          {label}
                        </span>
                      </div>
                      <p className="mb-2 text-xs text-gray-400">{address}</p>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <PhoneIcon size={12} />
                          <span>{phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <EnvelopeIcon size={12} />
                          <span>{email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-gray-600">{timezone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-700/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>© 2025 TechTech. All rights reserved.</span>
              <div className="hidden items-center gap-2 sm:flex">
                <div className="h-2 w-2 animate-pulse rounded-full bg-accent"></div>
                <span>Available for new projects</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-600">
              <span>Built with ❤️ by our team</span>
              <span>•</span>
              <span>Made in Austin, Lahore & Manchester</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
