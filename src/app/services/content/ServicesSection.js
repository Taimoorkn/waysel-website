"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import {
 Accordion,
 AccordionHeader,
 AccordionBody,
} from "@material-tailwind/react";
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
 description: "Craft exceptional digital experiences with cutting-edge web development that combines stunning visuals with lightning-fast performance and seamless user interactions.",
 icon: "🌐",
 gradient: "from-blue-500 to-cyan-500",
 buttonText: "Book a Call",
 src: "/services/web-development",
 features: ["Next.js & React", "Progressive Web Apps", "Core Web Vitals Optimization", "Headless CMS Integration"],
 benefits: [
 { icon: "⚡", title: "Lightning Fast", desc: "Optimized for speed and performance" },
 { icon: "📱", title: "Mobile First", desc: "Responsive across all devices" },
 { icon: "🔍", title: "SEO Ready", desc: "Built for search engine success" }
 ]
 },
 {
 title: "Custom Software Development",
 shortDesc: "Enterprise-grade software solutions",
 description: "Transform complex business challenges into elegant software solutions with scalable architecture, robust security, and intuitive user experiences.",
 icon: "⚙️",
 gradient: "from-purple-500 to-pink-500",
 buttonText: "Let's Talk Strategy",
 src: "/services/custom-software-development",
 features: ["Microservices Architecture", "Real-time Data Processing", "Advanced Security Protocols", "Third-party Integrations"],
 benefits: [
 { icon: "🏗️", title: "Scalable Design", desc: "Grows with your business needs" },
 { icon: "🔒", title: "Enterprise Security", desc: "Bank-level security protocols" },
 { icon: "🔄", title: "Seamless Integration", desc: "Works with existing systems" }
 ]
 },
 {
 title: "Mobile App Development",
 shortDesc: "Native and cross-platform experiences",
 description: "Create compelling mobile experiences that users love, with native performance, intuitive design, and powerful features that drive engagement.",
 icon: "📱",
 gradient: "from-green-500 to-emerald-500",
 buttonText: "Book a Consultation",
 src: "/services/mobile-development",
 features: ["React Native & Flutter", "Offline Functionality", "Push Notifications", "Biometric Authentication"],
 benefits: [
 { icon: "🚀", title: "Native Performance", desc: "Smooth, responsive user experience" },
 { icon: "🔔", title: "Smart Notifications", desc: "Personalized user engagement" },
 { icon: "📊", title: "Analytics Integration", desc: "Data-driven insights and optimization" }
 ]
 },
 {
 title: "E-Commerce Development",
 shortDesc: "Complete online selling platforms",
 description: "Build powerful e-commerce platforms that convert visitors into customers with optimized checkout flows, inventory management, and payment processing.",
 icon: "🛒",
 gradient: "from-orange-500 to-red-500",
 buttonText: "Contact Us",
 src: "/services/ecommerce-development",
 features: ["Shopify Plus & WooCommerce", "Multi-currency Support", "Advanced Analytics", "Inventory Automation"],
 benefits: [
 { icon: "💳", title: "Secure Payments", desc: "Multiple payment gateways integrated" },
 { icon: "📈", title: "Conversion Focused", desc: "Optimized for maximum sales" },
 { icon: "🌍", title: "Global Ready", desc: "Multi-language and currency support" }
 ]
 },
 {
 title: "Cloud Integration",
 shortDesc: "Scalable cloud infrastructure",
 description: "Leverage cloud power with enterprise-grade infrastructure that scales automatically, reduces costs, and ensures 99.9% uptime for your applications.",
 icon: "☁️",
 gradient: "from-sky-500 to-blue-500",
 buttonText: "Get Started",
 src: "/services/cloud-integration",
 features: ["AWS, Azure & GCP", "Kubernetes Orchestration", "Auto-scaling Solutions", "Disaster Recovery"],
 benefits: [
 { icon: "📊", title: "Cost Optimization", desc: "Pay only for what you use" },
 { icon: "🛡️", title: "High Availability", desc: "99.9% uptime guarantee" },
 { icon: "⚡", title: "Instant Scaling", desc: "Handle traffic spikes automatically" }
 ]
 },
 {
 title: "Enterprise Solutions",
 shortDesc: "Business automation & workflow",
 description: "Streamline operations with intelligent automation, comprehensive CRM systems, and workflow optimization that empowers teams and delights customers.",
 icon: "🏢",
 gradient: "from-indigo-500 to-purple-500",
 buttonText: "Book Meeting",
 src: "/services/enterprise-solutions",
 features: ["Salesforce Integration", "Workflow Automation", "Business Intelligence", "Team Collaboration Tools"],
 benefits: [
 { icon: "🤖", title: "Smart Automation", desc: "Reduce manual tasks by 80%" },
 { icon: "📊", title: "Data Insights", desc: "Real-time business analytics" },
 { icon: "👥", title: "Team Efficiency", desc: "Improved collaboration and productivity" }
 ]
 },
 {
 title: "Chrome Browser Extensions",
 shortDesc: "Productivity & workflow tools",
 description: "Enhance browser functionality with custom Chrome extensions that boost productivity, automate tasks, and create seamless workflow experiences.",
 icon: "🔧",
 gradient: "from-yellow-500 to-orange-500",
 buttonText: "Let's Talk",
 src: "/services/chrome-extension-development",
 features: ["Manifest V3 Compliant", "Background Processing", "Cross-tab Communication", "Chrome Web Store Ready"],
 benefits: [
 { icon: "⚡", title: "Instant Access", desc: "One-click functionality" },
 { icon: "🔗", title: "Web Integration", desc: "Seamless website interaction" },
 { icon: "🎯", title: "Targeted Solutions", desc: "Built for specific workflows" }
 ]
 },
 ];

 const handleClick = (url) => {
 router.push(url);
 };

 return (
 <section className="bg-secondary_bg py-6 sm:py-8 px-4 sm:px-6 lg:px-8 2xl:px-[9.5rem]">
 {/* Header Section */}
 <div className="text-center mb-6 sm:mb-8 lg:mb-10">
 <div className="font-neueMontreal inline-flex items-center bg-blue-100 text-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
 <StarFourIcon weight="fill" className="w-4 h-4 mr-2" />
 Our Technology Services
 </div>
 <h2 className="font-neueMontreal text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 text-primary_text">
 Services that <span className="text-accent">Transform</span>
 </h2>
 <p className="text-base sm:text-lg lg:text-xl text-secondary_text mx-auto font-neueMontreal max-w-3xl">
 From cutting-edge web development to enterprise automation, we deliver technology services 
 that drive growth and create exceptional user experiences.
 </p>
 </div>

 {/* Mobile Material Tailwind Accordions */}
 <div className="lg:hidden mb-6">
 {services.map((service, index) => (
 <Accordion
 key={index}
 open={openMobile === index}
 className="mb-3 rounded-xl border border-gray-200 shadow-lg overflow-hidden"
 >
 <AccordionHeader
 onClick={() => handleOpenMobile(index)}
 className="px-0 py-0 border-b-0 hover:text-current"
 >
 <div className={`w-full relative overflow-hidden bg-gradient-to-br ${service.gradient} text-white`}>
 {/* Background pattern */}
 <div className="absolute inset-0 opacity-10">
 <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full -translate-y-10 translate-x-10"></div>
 <div className="absolute bottom-0 left-0 w-14 h-14 bg-white rounded-full translate-y-6 -translate-x-6"></div>
 </div>
 
 <div className="relative z-10 p-4">
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
 <span className="text-lg">{service.icon}</span>
 </div>
 <div className="flex-1">
 <h3 className="font-neueMontreal text-lg font-semibold">
 {service.title}
 </h3>
 <p className="text-sm opacity-80 mt-0.5">
 {service.shortDesc}
 </p>
 </div>
 </div>
 <ArrowCircleDownIcon
 className={`w-5 h-5 transition-transform duration-300 ease-in-out ml-3 ${
 openMobile === index ? "rotate-180" : ""
 }`}
 />
 </div>
 </div>
 </div>
 </AccordionHeader>
 
 <AccordionBody className="px-0 py-0">
 <div className="bg-white p-4 space-y-4">
 <p className="font-neueMontreal text-sm text-secondary_text">
 {service.description}
 </p>
 
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <h4 className="font-neueMontreal text-base font-semibold text-primary_text mb-3 flex items-center gap-2">
 <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${service.gradient}`}></div>
 Key Features
 </h4>
 <div className="space-y-2">
 {service.features.map((feature, idx) => (
 <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
 <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}></div>
 <span className="font-neueMontreal text-xs font-medium text-secondary_text">
 {feature}
 </span>
 </div>
 ))}
 </div>
 </div>
 
 <div>
 <h4 className="font-neueMontreal text-base font-semibold text-primary_text mb-3 flex items-center gap-2">
 <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${service.gradient} opacity-60`}></div>
 Why Choose This?
 </h4>
 <div className="space-y-2">
 {service.benefits.map((benefit, idx) => (
 <div key={idx} className="p-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
 <div className="flex items-center gap-2 mb-1">
 <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center shadow-sm">
 <span className="text-xs">{benefit.icon}</span>
 </div>
 <span className="font-neueMontreal text-xs font-semibold text-primary_text">{benefit.title}</span>
 </div>
 <p className="font-neueMontreal text-xs text-secondary_text ml-7">
 {benefit.desc}
 </p>
 </div>
 ))}
 </div>
 </div>
 </div>
 
 <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-gray-100">
 <button className={`flex-1 relative rounded-md text-xs px-3 py-2 font-normal text-white transition-all duration-300 hover:scale-[1.02] shadow-lg overflow-hidden group bg-gradient-to-r ${service.gradient}`}>
 <span className="relative z-10 flex items-center justify-center gap-2">
 {service.buttonText} 
 </span>
 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
 <div className="flex flex-col xl:flex-row gap-8">
 {/* Enhanced Service Navigation */}
 <div className="xl:w-1/3">
 <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8 border border-gray-50">
 <div className="flex items-center gap-3 mb-6">
 <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r ${services[selectedService].gradient} transition-all duration-300 shadow-lg`}>
 <span className="text-white text-lg">
 {services[selectedService].icon}
 </span>
 </div>
 <div>
 <h3 className="font-neueMontreal text-xl font-semibold text-primary_text">
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
 className={`w-full text-left p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden ${
 selectedService === index
 ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
 : 'bg-gray-50 text-secondary_text hover:bg-gray-100 hover:shadow-md'
 }`}
 >
 <div className="relative z-10">
 <div className="flex items-center justify-between mb-1">
 <div className="flex items-center gap-2">
 <span className="text-base">{service.icon}</span>
 <span className="font-neueMontreal font-semibold text-sm">
 {service.title}
 </span>
 </div>
 <div className={`flex items-center gap-2 ${
 selectedService === index ? 'text-white/80' : 'text-gray-400'
 }`}>
 <span className="text-xs font-medium">
 {String(index + 1).padStart(2, '0')}
 </span>
 <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
 selectedService === index ? 'bg-white/60' : 'bg-gray-300'
 }`}></div>
 </div>
 </div>
 <p className={`text-xs ${
 selectedService === index ? 'text-white/80' : 'text-gray-500'
 }`}>
 {service.shortDesc}
 </p>
 </div>
 
 {/* Active indicator */}
 {selectedService === index && (
 <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30 rounded-r-full"></div>
 )}
 </button>
 ))}
 </div>
 </div>
 </div>

 {/* Enhanced Service Details */}
 <div className="xl:w-2/3">
 <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-50">
 {/* Enhanced Service Header */}
 <div className={`relative p-6 text-white overflow-hidden bg-gradient-to-br ${services[selectedService].gradient}`}>
 {/* Background pattern */}
 <div className="absolute inset-0 opacity-10">
 <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full -translate-y-12 translate-x-12"></div>
 <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full translate-y-8 -translate-x-8"></div>
 </div>
 
 <div className="relative z-10">
 <div className="flex items-start justify-between mb-4">
 <div className="flex items-center gap-3">
 <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
 Service {String(selectedService + 1).padStart(2, '0')}
 </span>
 <div className="h-4 w-px bg-white/30"></div>
 <span className="text-xs font-medium opacity-80">
 Professional Solution
 </span>
 </div>
 <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
 <span className="text-2xl">
 {services[selectedService].icon}
 </span>
 </div>
 </div>
 
 <h3 className="font-neueMontreal text-3xl lg:text-4xl font-semibold mb-4">
 {services[selectedService].title}
 </h3>
 <p className="font-neueMontreal text-base opacity-90 max-w-2xl">
 {services[selectedService].description}
 </p>
 </div>
 </div>

 {/* Enhanced Service Content */}
 <div className="p-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
 <div>
 <h4 className="font-neueMontreal text-lg font-semibold text-primary_text mb-4 flex items-center gap-2">
 <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${services[selectedService].gradient}`}></div>
 Key Features
 </h4>
 
 <div className="space-y-3">
 {services[selectedService].features.map((feature, index) => (
 <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group">
 <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 bg-gradient-to-r ${services[selectedService].gradient} group-hover:scale-125 transition-transform duration-200`}></div>
 <span className="font-neueMontreal font-medium text-sm text-secondary_text group-hover:text-primary_text transition-colors duration-200">
 {feature}
 </span>
 </div>
 ))}
 </div>
 </div>
 
 <div>
 <h4 className="font-neueMontreal text-lg font-semibold text-primary_text mb-4 flex items-center gap-2">
 <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${services[selectedService].gradient} opacity-60`}></div>
 Why Choose This?
 </h4>
 
 <div className="space-y-3">
 {services[selectedService].benefits.map((benefit, index) => (
 <div key={index} className="p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
 <div className="flex items-center gap-2 mb-1">
 <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
 <span className="text-sm">{benefit.icon}</span>
 </div>
 <span className="font-neueMontreal font-semibold text-sm text-primary_text">{benefit.title}</span>
 </div>
 <p className="font-neueMontreal text-xs text-secondary_text ml-8">
 {benefit.desc}
 </p>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Enhanced Action Buttons */}
 <div className="flex flex-col sm:flex-row gap-3">
 <button className={`flex-1 relative py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] shadow-lg overflow-hidden group bg-gradient-to-r ${services[selectedService].gradient}`}>
 <span className="relative z-10 flex items-center justify-center gap-2">
 {services[selectedService].buttonText}
 <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
 </span>
 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
 </button>
 
 <button 
 onClick={() => handleClick(services[selectedService].src)}
 className={`flex-1 py-3 px-6 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden text-primary_text border-gray-300 hover:border-gray-400 hover:bg-gray-50`}
 >
 <span className="relative z-10 flex items-center justify-center gap-2">
 Learn More
 </span>
 </button>
 </div>
 </div>
 </div>

 {/* Enhanced Progress Indicator */}
 <div className="flex justify-center mt-6 gap-2">
 {services.map((service, index) => (
 <button
 key={index}
 onClick={() => setSelectedService(index)}
 className={`relative transition-all duration-300 hover:scale-125 ${
 selectedService === index ? 'w-8 h-3' : 'w-3 h-3'
 }`}
 >
 <div className={`w-full h-full rounded-full transition-all duration-300 ${
 selectedService === index
 ? `bg-gradient-to-r ${service.gradient}`
 : 'bg-gray-300 hover:bg-gray-400'
 }`}></div>
 {selectedService === index && (
 <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse"></div>
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