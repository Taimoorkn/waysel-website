"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import SectionHeading from "../../../components/SectionHeading";
import GradientText from "@/components/GradientText";

const OurServicesSection = () => {
  useEffect(() => {
    const handleMouseMove = (ev) => {
      const cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        const blob = card.querySelector(".blob");
        const fakeblob = card.querySelector(".fakeblob");
        const rec = fakeblob.getBoundingClientRect();
        blob.style.opacity = "1";

        blob.animate(
          [
            {
              transform: `translate(${
                ev.clientX - rec.left - rec.width / 3
              }px, ${ev.clientY - rec.top - rec.height / 3}px)`,
            },
          ],
          {
            duration: 300,
            fill: "forwards",
          }
        );
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      title: "AI-Integrated Web & App Development",
      desc: `Full-stack web and software builds that merge intuitive Material 3 UI with automation. AI handles OCR, validation, and predictions - your users get faster, smarter workflows.`,
      image: "/images/digital-marketing.svg",
    },
    {
      title: "Next-Generation EHR & SaaS Platforms",
      desc: `Enterprise-grade systems built for healthcare and regulated industries - guided by Material 3, Apple HIG, and WCAG, and powered by secure, scalable cloud architecture.`,
      image: "/images/development.svg",
    },
    {
      title: "Digital Infrastructure & Analytics",
      desc: `From websites to complex ecosystems - we wire analytics into every layer, turning clicks and scrolls into actionable insights for smarter, continuous improvement.`,
      image: "/images/ocr.svg",
    },
    {
      title: "AI Models & OCR Integrations",
      desc: `We turn paper into structured data. Our AI-powered OCR systems transform handwritten or printed forms into accurate, usable records - ready for any industry.`,
      image: "/images/ehr-saas.svg",
    },
    {
      title: "Cross-Platform Product Engineering",
      desc: `Apps that perform on every device. Built with Flutter Bloc, AWS, and CI/CD pipelines for reproducibility, speed, and continuous improvement.`,
      image: "/images/pc.svg",
    },
    {
      title: "Cloud-Native Deployment & DevOps",
      desc: `Serverless by design - AWS Lambda, Amplify, or Vercel. Automated CI/CD, uptime monitoring, and blue-green releases come standard.`,
      image: "/images/cross-platform-product.svg",
    },
    {
      title: "Digital Marketing Ecosystems",
      desc: `From SEO to HubSpot to Salesforce - we connect every piece into one measurable marketing engine that gets smarter with every campaign.`,
      image: "/images/digital-analytics.svg",
    },
  ];

  return (
    <div className="relative">
      <style jsx>{`
        .blob {
          filter: blur(40px);
          position: absolute;
          z-index: -1;
          top: 0;
          opacity: 0;
          left: 0;
          width: 350px;
          height: 350px;
          background: linear-gradient(to bottom, rgba(251, 48, 129), rgba(251, 48, 129, 0.2));
          transition: all 300ms ease-in-out;
        }
        .fakeblob {
          display: hidden;
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          width: 500px;
          height: 500px;
        }
      `}</style>

      <div className="section text-primary relative mx-auto flex w-full flex-col items-center pb-[80px] xl:pb-[160px]">
        <SectionHeading
          title={
            <>
              This is <GradientText>(some of the stuff)</GradientText>
              <br /> we actually do.
            </>
          }
        />

        <div className="z-10 grid w-full grid-cols-1 gap-4 xl:grid-cols-2">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;

            return (
              <div
                key={index}
                className={`card relative overflow-hidden rounded-[32px] p-[1px] pr-[0.5px] ${
                  isLast
                    ? "xl:col-span-2 xl:mx-auto xl:w-1/2 xl:rounded-bl-[32px] xl:rounded-br-[32px] xl:rounded-tl-none xl:rounded-tr-none"
                    : index % 2 === 0
                      ? "xl:rounded-bl-[32px] xl:rounded-br-none xl:rounded-tl-[32px] xl:rounded-tr-none"
                      : "xl:rounded-bl-none xl:rounded-br-[32px] xl:rounded-tl-none xl:rounded-tr-[32px]"
                }`}
                style={{
                  background: "rgba(128, 128, 128, 0.1)",
                  transition: "all 300ms ease-in-out",
                }}
              >
                <div
                  className={`flex h-full flex-col rounded-[32px] !p-6 xl:min-h-[520px] xl:!p-10 ${
                    isLast
                      ? "xl:rounded-bl-[32px] xl:rounded-br-[32px] xl:rounded-tl-none xl:rounded-tr-none"
                      : index % 2 === 0
                        ? "xl:rounded-bl-[32px] xl:rounded-br-none xl:rounded-tl-[32px] xl:rounded-tr-none"
                        : "xl:rounded-bl-none xl:rounded-br-[32px] xl:rounded-tl-none xl:rounded-tr-[32px]"
                  } ${isLast ? "bg-black/50 backdrop-blur-md" : "bg-[#0D0D0C]"} `}
                  style={{
                    transition: "all 300ms ease-in-out",
                    backgroundImage: !isLast
                      ? index % 2 === 0
                        ? "linear-gradient(45deg, #1A1A1A 0%, transparent 100%)"
                        : "linear-gradient(315deg, #1A1A1A 0%, transparent 100%)"
                      : "none",
                  }}
                >
                  <h3 className="HeadingH5 mb-4">{service.title}</h3>
                  <p className="BodyText mb-8">{service.desc}</p>

                  <div className="mt-auto flex justify-center xl:justify-end">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={280}
                      height={200}
                      className="w-[200px] object-contain xl:w-[280px]"
                    />
                  </div>
                </div>

                <div className="blob rounded-full"></div>
                <div className="fakeblob"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gradient spotlight at bottom */}
      <div className="absolute bottom-0 left-[49.12%] -z-10 w-full -translate-x-1/2 scale-y-[-1] transform">
        <Image
          src="/images/filler/spotlight.png"
          width={0}
          height={0}
          alt=""
          unoptimized
          className="mx-auto h-auto w-auto"
        />
      </div>
    </div>
  );
};

export default OurServicesSection;

// <div className="z-10 grid w-full grid-cols-2 gap-4">
//   {cards.map((card, index) => (
//     <div
//       key={index}
//       className={`card relative overflow-hidden p-[1px] pb-[0.5px] pr-[0.5px] ${
//         index % 2 === 0 ? "rounded-bl-[32px] rounded-tl-[32px]" : "rounded-br-[32px] rounded-tr-[32px]"
//       }`}
//       style={{
//         background: "rgba(128, 128, 128, 0.1)",
//         transition: "all 300ms ease-in-out",
//       }}
//     >
//       <div
//         className={`bg-primary_bg flex h-full flex-col !p-10 xl:min-h-[520px] ${
//           index % 2 === 0 ? "rounded-bl-[32px] rounded-tl-[32px]" : "rounded-br-[32px] rounded-tr-[32px]"
//         } ${index >= 2 ? "bg-primary_bg/10" : "bg-primary_bg"} `}
//         style={{
//           backdropFilter: "blur(80px)",
//           transition: "all 300ms ease-in-out",
//           backgroundImage:
//             index === 0
//               ? "linear-gradient(45deg, #1A1A1A 0%, transparent 100%)"
//               : index === 1
//                 ? "linear-gradient(315deg, #1A1A1A 0%, transparent 100%)"
//                 : index === 2
//                   ? "linear-gradient(45deg, #1A1A1A 0%, rgba(26, 26, 26, 0.6) 100%)"
//                   : "linear-gradient(315deg, #1A1A1A 0%, rgba(26, 26, 26, 0.6) 100%)",
//         }}
//       >
//         <h3 className="HeadingH5 mb-4">{card.title}</h3>

//         <div className="flex-1">
//           {card.content.map((item, i) => (
//             <p key={i} className="BodyText">
//               <span className="BodyTextBold">{item.label}</span> {item.text}
//             </p>
//           ))}
//         </div>

//         <div className="flex justify-end">
//           <img src={card.image} alt={card.title} className="w-[280px] object-contain" />
//         </div>
//       </div>
//       <div className="blob"></div>
//       <div className="fakeblob"></div>
//     </div>
//   ))}
// </div>
