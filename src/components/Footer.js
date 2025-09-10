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
  LightbulbIcon
} from "@phosphor-icons/react";

const Footer = () => {
  const offices = [
    {
      city: "Austin",
      label: "Headquarters",
      address: "701 Tillery St, Austin, TX 78702",
      phone: "+1 (512) 555-0142",
      email: "austin@techtech.com",
      timezone: "CST"
    },
    {
      city: "Lahore",
      label: "Development Hub",
      address: "33-A Khayaban-e-Iqbal, Sector XX DHA Phase 3, Lahore, Punjab, 54792", 
      phone: "+92 (42) 555-0198",
      email: "lahore@techtech.com",
      timezone: "PKT"
    },
    {
      city: "Manchester",
      label: "European Office",
      address: "173 Cheetham Hill Rd, Manchester M8 8LG",
      phone: "+44 (161) 555-0176",
      email: "manchester@techtech.com",
      timezone: "GMT"
    },
  ];

  const services = [
    "Custom Software Development",
    "Mobile App Development", 
    "Cloud Solutions",
    "AI & Machine Learning",
    "DevOps & Infrastructure"
  ];

  const technologies = [
    "React & Next.js",
    "Node.js & Python",
    "AWS & Azure",
    "Docker & Kubernetes",
    "PostgreSQL & MongoDB"
  ];

  return (
    <footer className="bg-dark_purple relative overflow-hidden">
      <div className="relative z-10 pt-20 pb-8 px-4 md:px-8 lg:px-16 2xl:px-[9.5rem]">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <CodeIcon size={24} weight="bold" className="text-accent" />
              </div>
              <img 
                src="/images/TechiTechLogo.svg" 
                alt="TechTech" 
                className="h-8" 
              />
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Transforming ideas into powerful digital solutions. We craft custom software, 
              mobile apps, and cloud platforms that drive business growth.
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
              <span className="text-gray-400 text-sm font-medium">Follow us:</span>
              <div className="flex gap-3">
                {[
                  { Icon: LinkedinLogoIcon, href: "https://linkedin.com", color: "hover:text-blue-400" },
                  { Icon: GithubLogoIcon, href: "https://github.com", color: "hover:text-gray-300" },
                  { Icon: TwitterLogoIcon, href: "https://twitter.com", color: "hover:text-blue-400" },
                  { Icon: InstagramLogoIcon, href: "https://instagram.com", color: "hover:text-pink-400" },
                ].map(({ Icon, href, color }, index) => (
                  <a 
                    key={index}
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-gray-800/50 text-gray-500 ${color} transition-all duration-300 hover:scale-110 hover:bg-gray-700/50`}
                  >
                    <Icon size={20} weight="fill" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services & Technologies */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-accent/20 rounded-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-400 hover:text-gray-300 transition-colors cursor-pointer text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-accent/20 rounded-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                Technologies
              </h3>
              <ul className="space-y-3">
                {technologies.map((tech, index) => (
                  <li key={index} className="text-gray-400 hover:text-gray-300 transition-colors cursor-pointer text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-6 h-6 bg-accent/20 rounded-md flex items-center justify-center">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </div>
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              {offices.map(({ city, label, address, phone, email, timezone }, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPinIcon size={18} className="text-accent" weight="fill" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-medium text-sm">{city}</h4>
                        <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-0.5 rounded-full">{label}</span>
                      </div>
                      <p className="text-gray-400 text-xs mb-2 leading-relaxed">{address}</p>
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
                    <div className="text-xs text-gray-600 font-mono">{timezone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>© 2025 TechTech. All rights reserved.</span>
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
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