"use client";

import ServiceBox from "@/components/ServiceBox";

const ServiceBoxes = () => {
 const items = [
 {
 title: "Shopify Development",
 description:
 "Build fast, scalable e-commerce stores using Shopify, optimized for seamless user experiences and easy management.",
 image: "/images/services_page/ecommerce/shopify.svg",
 },
 {
 title: "WooCommerce Development",
 description:
 "Create customizable WordPress-based e-commerce solutions with WooCommerce, tailored to your branding and business needs.",
 image: "/images/services_page/ecommerce/woocommerce.jpeg",
 },
 {
 title: "Custom E-Commerce Solutions",
 description:
 "Develop bespoke e-commerce platforms from scratch, offering unique features and full control over your online store.",
 image: "/images/services_page/ecommerce/custom.svg",
 },
 ];

 return (
 <section className="bg-primary_bg section_padding">
 <h2 className="section-header !text-center mb-8">
 E-Commerce <br />{" "}
 <span className="text-accent">Development Services</span>
 </h2>
 <div className="flex flex-wrap justify-center gap-8 w-full">
 {items.map((item, index) => (
 <ServiceBox
 key={index}
 title={item.title}
 description={item.description}
 image={item.image}
 className="w-full"
 />
 ))}
 </div>
 </section>
 );
};

export default ServiceBoxes;
