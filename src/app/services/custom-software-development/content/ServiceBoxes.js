"use client";

import ServiceBox from "@/components/ServiceBox";

const ServiceBoxes = () => {
 const items = [
 {
 title: "Custom Solutions",
 description: "Design and develop tailored software from scratch to address specific business challenges, ensuring flexibility and alignment with your strategic goals.",
 image: "/images/services_page/custom/custom.svg",
 },
 {
 title: "Enterprise Integration",
 description: "Seamlessly integrate custom software with existing enterprise systems, enhancing workflow efficiency and data consistency across your organization.",
 image: "/images/services_page/custom/enterprise.svg",
 },
 {
 title: "Technology Stack Development",
 description: "Utilize diverse tech stacks (e.g., .NET, Java, Python) to build robust, scalable applications tailored to your project's technical and performance needs.",
 image: "/images/services_page/custom/ai.svg",
 },
 ];

 return (
 <section className="bg-primary_bg section_padding">
 <h2 className="section-header !text-center mb-8">
 Custom Software <br />{" "}
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
