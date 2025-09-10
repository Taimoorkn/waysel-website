"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { ArrowCircleDownIcon, StarFourIcon } from "@phosphor-icons/react";

const ServicesSection = () => {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState(0);
  const [openMobile, setOpenMobile] = useState(0); // For mobile accordion

  const handleOpenMobile = (value) => setOpenMobile(openMobile === value ? null : value);

  const services = [
    {
      title: "Web Development",
      shortDesc: "Modern, responsive websites that convert",
      description:
        "Craft exceptional digital experiences with cutting-edge web development that combines stunning visuals with lightning-fast performance and seamless user interactions.",
      icon: "🌐",
      gradient: "from-blue-500 to-cyan-500",
      buttonText: "Book a Call",
      src: "/services/web-development",
      features: [
        "Next.js & React",
        "Progressive Web Apps",
        "Core Web Vitals Optimization",
        "Headless CMS Integration",
      ],
      benefits: [
        { icon: "⚡", title: "Lightning Fast", desc: "Optimized for speed and performance" },
        { icon: "📱", title: "Mobile First", desc: "Responsive across all devices" },
        { icon: "🔍", title: "SEO Ready", desc: "Built for search engine success" },
      ],
    },
    {
      title: "Custom Software Development",
      shortDesc: "Enterprise-grade software solutions",
      description:
        "Transform complex business challenges into elegant software solutions with scalable architecture, robust security, and intuitive user experiences.",
      icon: "⚙️",
      gradient: "from-purple-500 to-pink-500",
      buttonText: "Let's Talk Strategy",
      src: "/services/custom-software-development",
      features: [
        "Microservices Architecture",
        "Real-time Data Processing",
        "Advanced Security Protocols",
        "Third-party Integrations",
      ],
      benefits: [
        { icon: "🏗️", title: "Scalable Design", desc: "Grows with your business needs" },
        { icon: "🔒", title: "Enterprise Security", desc: "Bank-level security protocols" },
        { icon: "🔄", title: "Seamless Integration", desc: "Works with existing systems" },
      ],
    },
    {
      title: "Mobile App Development",
      shortDesc: "Native and cross-platform experiences",
      description:
        "Create compelling mobile experiences that users love, with native performance, intuitive design, and powerful features that drive engagement.",
      icon: "📱",
      gradient: "from-green-500 to-emerald-500",
      buttonText: "Book a Consultation",
      src: "/services/mobile-development",
      features: [
        "React Native & Flutter",
        "Offline Functionality",
        "Push Notifications",
        "Biometric Authentication",
      ],
      benefits: [
        { icon: "🚀", title: "Native Performance", desc: "Smooth, responsive user experience" },
        { icon: "🔔", title: "Smart Notifications", desc: "Personalized user engagement" },
        {
          icon: "📊",
          title: "Analytics Integration",
          desc: "Data-driven insights and optimization",
        },
      ],
    },
    {
      title: "E-Commerce Development",
      shortDesc: "Complete online selling platforms",
      description:
        "Build powerful e-commerce platforms that convert visitors into customers with optimized checkout flows, inventory management, and payment processing.",
      icon: "🛒",
      gradient: "from-orange-500 to-red-500",
      buttonText: "Contact Us",
      src: "/services/ecommerce-development",
      features: [
        "Shopify Plus & WooCommerce",
        "Multi-currency Support",
        "Advanced Analytics",
        "Inventory Automation",
      ],
      benefits: [
        { icon: "💳", title: "Secure Payments", desc: "Multiple payment gateways integrated" },
        { icon: "📈", title: "Conversion Focused", desc: "Optimized for maximum sales" },
        { icon: "🌍", title: "Global Ready", desc: "Multi-language and currency support" },
      ],
    },
    {
      title: "Cloud Integration",
      shortDesc: "Scalable cloud infrastructure",
      description:
        "Leverage cloud power with enterprise-grade infrastructure that scales automatically, reduces costs, and ensures 99.9% uptime for your applications.",
      icon: "☁️",
      gradient: "from-sky-500 to-blue-500",
      buttonText: "Get Started",
      src: "/services/cloud-integration",
      features: [
        "AWS, Azure & GCP",
        "Kubernetes Orchestration",
        "Auto-scaling Solutions",
        "Disaster Recovery",
      ],
      benefits: [
        { icon: "📊", title: "Cost Optimization", desc: "Pay only for what you use" },
        { icon: "🛡️", title: "High Availability", desc: "99.9% uptime guarantee" },
        { icon: "⚡", title: "Instant Scaling", desc: "Handle traffic spikes automatically" },
      ],
    },
    {
      title: "Enterprise Solutions",
      shortDesc: "Business automation & workflow",
      description:
        "Streamline operations with intelligent automation, comprehensive CRM systems, and workflow optimization that empowers teams and delights customers.",
      icon: "🏢",
      gradient: "from-indigo-500 to-purple-500",
      buttonText: "Book Meeting",
      src: "/services/enterprise-solutions",
      features: [
        "Salesforce Integration",
        "Workflow Automation",
        "Business Intelligence",
        "Team Collaboration Tools",
      ],
      benefits: [
        { icon: "🤖", title: "Smart Automation", desc: "Reduce manual tasks by 80%" },
        { icon: "📊", title: "Data Insights", desc: "Real-time business analytics" },
        { icon: "👥", title: "Team Efficiency", desc: "Improved collaboration and productivity" },
      ],
    },
    {
      title: "Chrome Browser Extensions",
      shortDesc: "Productivity & workflow tools",
      description:
        "Enhance browser functionality with custom Chrome extensions that boost productivity, automate tasks, and create seamless workflow experiences.",
      icon: "🔧",
      gradient: "from-yellow-500 to-orange-500",
      buttonText: "Let's Talk",
      src: "/services/chrome-extension-development",
      features: [
        "Manifest V3 Compliant",
        "Background Processing",
        "Cross-tab Communication",
        "Chrome Web Store Ready",
      ],
      benefits: [
        { icon: "⚡", title: "Instant Access", desc: "One-click functionality" },
        { icon: "🔗", title: "Web Integration", desc: "Seamless website interaction" },
        { icon: "🎯", title: "Targeted Solutions", desc: "Built for specific workflows" },
      ],
    },
  ];

  const handleClick = (url) => {
    router.push(url);
  };

  return (
    <section className="bg-secondary_bg px-4 py-6 sm:px-6 sm:py-8 lg:px-8 2xl:px-[9.5rem]">
      {/* Header Section */}
      <div className="mb-6 text-center sm:mb-8 lg:mb-10">
        <div className="mb-3 inline-flex items-center rounded-full bg-blue-100 px-3 py-1.5 font-neueMontreal text-xs font-medium text-accent sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
          <StarFourIcon weight="fill" className="mr-2 h-4 w-4" />
          Our Technology Services
        </div>
        <h2 className="mb-3 font-neueMontreal text-3xl font-medium text-primary_text sm:mb-4 sm:text-4xl lg:text-5xl">
          Services that <span className="text-accent">Transform</span>
        </h2>
        <p className="mx-auto max-w-3xl font-neueMontreal text-base text-secondary_text sm:text-lg lg:text-xl">
          From cutting-edge web development to enterprise automation, we deliver technology services
          that drive growth and create exceptional user experiences.
        </p>
      </div>

      {/* Mobile Material Tailwind Accordions */}
      <div className="mb-6 lg:hidden">
        {services.map((service, index) => (
          <Accordion
            key={index}
            open={openMobile === index}
            className="mb-3 overflow-hidden rounded-xl border border-gray-200 shadow-lg"
          >
            <AccordionHeader
              onClick={() => handleOpenMobile(index)}
              className="border-b-0 px-0 py-0 hover:text-current"
            >
              <div
                className={`relative w-full overflow-hidden bg-gradient-to-br ${service.gradient} text-white`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute right-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full bg-white"></div>
                  <div className="absolute bottom-0 left-0 h-14 w-14 -translate-x-6 translate-y-6 rounded-full bg-white"></div>
                </div>

                <div className="relative z-10 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/20 backdrop-blur-sm">
                        <span className="text-lg">{service.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-neueMontreal text-lg font-medium">{service.title}</h3>
                        <p className="mt-0.5 text-sm opacity-80">{service.shortDesc}</p>
                      </div>
                    </div>
                    <ArrowCircleDownIcon
                      className={`ml-3 h-5 w-5 transition-transform duration-300 ease-in-out ${
                        openMobile === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </AccordionHeader>

            <AccordionBody className="px-0 py-0">
              <div className="space-y-4 bg-white p-4">
                <p className="font-neueMontreal text-sm text-secondary_text">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-3 flex items-center gap-2 font-neueMontreal text-base font-medium text-primary_text">
                      <div
                        className={`h-4 w-1 rounded-full bg-gradient-to-b ${service.gradient}`}
                      ></div>
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 rounded-lg bg-gray-50 p-2"
                        >
                          <div
                            className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}
                          ></div>
                          <span className="font-neueMontreal text-xs font-medium text-secondary_text">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 flex items-center gap-2 font-neueMontreal text-base font-medium text-primary_text">
                      <div
                        className={`h-4 w-1 rounded-full bg-gradient-to-b ${service.gradient} opacity-60`}
                      ></div>
                      Why Choose This?
                    </h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 p-2"
                        >
                          <div className="mb-1 flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white shadow-sm">
                              <span className="text-xs">{benefit.icon}</span>
                            </div>
                            <span className="font-neueMontreal text-xs font-medium text-primary_text">
                              {benefit.title}
                            </span>
                          </div>
                          <p className="ml-7 font-neueMontreal text-xs text-secondary_text">
                            {benefit.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 border-t border-gray-100 pt-3 sm:flex-row">
                  <button
                    className={`group relative flex-1 overflow-hidden rounded-md bg-gradient-to-r px-3 py-2 text-xs font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.02] ${service.gradient}`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {service.buttonText}
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </button>

                  <Button
                    variant="tertiary"
                    className="flex-1 py-2"
                    onClick={() => handleClick(service.src)}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="flex flex-col gap-8 xl:flex-row">
          {/* Enhanced Service Navigation */}
          <div className="xl:w-1/3">
            <div className="sticky top-8 rounded-2xl border border-gray-50 bg-white p-6 shadow-xl">
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${services[selectedService].gradient} shadow-lg transition-all duration-300`}
                >
                  <span className="text-lg text-white">{services[selectedService].icon}</span>
                </div>
                <div>
                  <h3 className="font-neueMontreal text-xl font-medium text-primary_text">
                    Choose Service
                  </h3>
                  <p className="font-neueMontreal text-sm text-secondary_text">
                    Explore our expertise
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedService(index)}
                    className={`group relative w-full overflow-hidden rounded-xl p-4 text-left transition-all duration-300 hover:scale-[1.02] ${
                      selectedService === index
                        ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
                        : "bg-gray-50 text-secondary_text hover:bg-gray-100 hover:shadow-md"
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="mb-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-base">{service.icon}</span>
                          <span className="font-neueMontreal text-sm font-medium">
                            {service.title}
                          </span>
                        </div>
                        <div
                          className={`flex items-center gap-2 ${
                            selectedService === index ? "text-white/80" : "text-gray-400"
                          }`}
                        >
                          <span className="text-xs font-medium">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div
                            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                              selectedService === index ? "bg-white/60" : "bg-gray-300"
                            }`}
                          ></div>
                        </div>
                      </div>
                      <p
                        className={`text-xs ${
                          selectedService === index ? "text-white/80" : "text-gray-500"
                        }`}
                      >
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Active indicator */}
                    {selectedService === index && (
                      <div className="absolute bottom-0 left-0 top-0 w-1 rounded-r-full bg-white/30"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Service Details */}
          <div className="xl:w-2/3">
            <div className="overflow-hidden rounded-2xl border border-gray-50 bg-white shadow-xl">
              {/* Enhanced Service Header */}
              <div
                className={`relative overflow-hidden bg-gradient-to-br p-6 text-white ${services[selectedService].gradient}`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-white"></div>
                  <div className="absolute bottom-0 left-0 h-16 w-16 -translate-x-8 translate-y-8 rounded-full bg-white"></div>
                </div>

                <div className="relative z-10">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                        Service {String(selectedService + 1).padStart(2, "0")}
                      </span>
                      <div className="h-4 w-px bg-white/30"></div>
                      <span className="text-xs font-medium opacity-80">Professional Solution</span>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-sm">
                      <span className="text-2xl">{services[selectedService].icon}</span>
                    </div>
                  </div>

                  <h3 className="mb-4 font-neueMontreal text-3xl font-medium lg:text-4xl">
                    {services[selectedService].title}
                  </h3>
                  <p className="max-w-2xl font-neueMontreal text-base opacity-90">
                    {services[selectedService].description}
                  </p>
                </div>
              </div>

              {/* Enhanced Service Content */}
              <div className="p-6">
                <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div>
                    <h4 className="mb-4 flex items-center gap-2 font-neueMontreal text-lg font-medium text-primary_text">
                      <div
                        className={`h-6 w-1 rounded-full bg-gradient-to-b ${services[selectedService].gradient}`}
                      ></div>
                      Key Features
                    </h4>

                    <div className="space-y-3">
                      {services[selectedService].features.map((feature, index) => (
                        <div
                          key={index}
                          className="group flex items-center gap-3 rounded-lg bg-gray-50 p-3 transition-colors duration-200 hover:bg-gray-100"
                        >
                          <div
                            className={`h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-r ${services[selectedService].gradient} transition-transform duration-200 group-hover:scale-125`}
                          ></div>
                          <span className="font-neueMontreal text-sm font-medium text-secondary_text transition-colors duration-200 group-hover:text-primary_text">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 flex items-center gap-2 font-neueMontreal text-lg font-medium text-primary_text">
                      <div
                        className={`h-6 w-1 rounded-full bg-gradient-to-b ${services[selectedService].gradient} opacity-60`}
                      ></div>
                      Why Choose This?
                    </h4>

                    <div className="space-y-3">
                      {services[selectedService].benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 p-3"
                        >
                          <div className="mb-1 flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white shadow-sm">
                              <span className="text-sm">{benefit.icon}</span>
                            </div>
                            <span className="font-neueMontreal text-sm font-medium text-primary_text">
                              {benefit.title}
                            </span>
                          </div>
                          <p className="ml-8 font-neueMontreal text-xs text-secondary_text">
                            {benefit.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    className={`group relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.02] ${services[selectedService].gradient}`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {services[selectedService].buttonText}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </button>

                  <button
                    onClick={() => handleClick(services[selectedService].src)}
                    className={`group relative flex-1 overflow-hidden rounded-xl border-2 border-gray-300 px-6 py-3 font-medium text-primary_text transition-all duration-300 hover:scale-[1.02] hover:border-gray-400 hover:bg-gray-50`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Learn More
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Progress Indicator */}
            <div className="mt-6 flex justify-center gap-2">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedService(index)}
                  className={`relative transition-all duration-300 hover:scale-125 ${
                    selectedService === index ? "h-3 w-8" : "h-3 w-3"
                  }`}
                >
                  <div
                    className={`h-full w-full rounded-full transition-all duration-300 ${
                      selectedService === index
                        ? `bg-gradient-to-r ${service.gradient}`
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  ></div>
                  {selectedService === index && (
                    <div className="absolute inset-0 animate-pulse rounded-full bg-white/30"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
