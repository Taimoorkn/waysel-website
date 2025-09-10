"use client";

import ServiceBox from "@/components/ServiceBox";

const ServiceBoxes = () => {
 const items = [
 {
 title: "Frontend Development",
 description:
 "Craft responsive, user-friendly interfaces using React, Vue, or Angular. Focus on performance, accessibility, and seamless user experiences across devices.",
 image: "/images/services_page/web/frontend.svg",
 },
 {
 title: "Backend Development",
 description:
 "Develop robust server-side logic with Node.js, Python, or Ruby. Manage databases, APIs, and ensure scalable, secure web application architecture.",
 image: "/images/services_page/web/backend.svg",
 },
 {
 title: "Full Stack Development",
 description:
 "Deliver end-to-end web solutions combining modern frontends and powerful backends. Build scalable, maintainable apps tailored to your business needs.",
 image: "/images/services_page/web/fullstack.svg",
 },
 {
 title: "E-Commerce Development",
 description:
 "Create secure, scalable online stores with platforms like Shopify, WooCommerce, or custom solutions. Optimize checkout, payment gateways, and user experience.",
 image: "/images/services_page/web/ecommerce.svg",
 },
 {
 title: "Maintenance & Updates",
 description:
 "Provide ongoing support with security patches, feature enhancements, and performance optimizations to keep your website secure and up-to-date.",
 image: "/images/services_page/web/maintenance.svg",
 },
 ];

 return (
 <section className="bg-primary_bg section_padding">
 <h2 className="section-header !text-center mb-8">
 Web Development <br /> <span className="text-accent">Services</span>
 </h2>
 <div className="flex flex-wrap justify-center gap-8 w-full">
 {items.map((item, index) => (
 <ServiceBox
 key={index}
 title={item.title}
 description={item.description}
 image={item.image}
 />
 ))}
 </div>
 </section>
 );
};

export default ServiceBoxes;
