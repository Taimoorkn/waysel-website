import React, { useEffect } from "react";
import SectionHeading from "../../../components/SectionHeading";
import GradientText from "@/components/GradientText";

const FillerSection = () => {
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
                ev.clientX - rec.left - rec.width / 2
              }px, ${ev.clientY - rec.top - rec.height / 2}px)`,
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cards = [
    {
      title: "Strategic Design",
      image: "/images/filler/filler1.svg",
      content: [
        {
          label: "UX/UI Design:",
          text: "We craft seamless user experiences and modern interfaces that users love.",
        },
        {
          label: "Brand Strategy:",
          text: "We define your brand's digital identity to stand out in the market.",
        },
      ],
    },
    {
      title: "Development",
      image: "/images/filler/filler2.svg",
      content: [
        {
          label: "Frontend:",
          text: "Modern web applications built with cutting-edge technologies and frameworks.",
        },
        {
          label: "Backend:",
          text: "Scalable server solutions and robust API development for your business needs.",
        },
      ],
    },
    {
      title: "Consultation",
      image: "/images/filler/filler3.svg",
      content: [
        {
          label: "Tech Advisory:",
          text: "Expert guidance on technology stack selection and architecture decisions.",
        },
        {
          label: "Digital Strategy:",
          text: "Comprehensive roadmaps for your digital transformation journey.",
        },
      ],
    },
    {
      title: "Support",
      image: "/images/filler/filler4.svg",
      content: [
        {
          label: "Maintenance:",
          text: "Ongoing support and updates to keep your systems running smoothly.",
        },
        {
          label: "Optimization:",
          text: "Performance improvements and feature enhancements for existing solutions.",
        },
      ],
    },
  ];

  return (
    <>
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

      <div className="section text-primary relative mx-auto flex w-full flex-col items-center">
        <SectionHeading
          title={
            <>
              This is <GradientText>(some of the insane stuff)</GradientText>
              <br /> we actually do.
            </>
          }
        />

        <div className="z-10 grid w-full grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card relative overflow-hidden p-[1px] pb-[0.5px] pr-[0.5px] ${
                index % 2 === 0 ? "rounded-bl-[32px] rounded-tl-[32px]" : "rounded-br-[32px] rounded-tr-[32px]"
              }`}
              style={{
                background: "rgba(128, 128, 128, 0.1)",
                transition: "all 300ms ease-in-out",
              }}
            >
              <div
                className={`flex h-full flex-col bg-[#0D0D0C] !p-10 xl:min-h-[520px] ${
                  index % 2 === 0 ? "rounded-bl-[32px] rounded-tl-[32px]" : "rounded-br-[32px] rounded-tr-[32px]"
                }`}
                style={{
                  backdropFilter: "blur(80px)",
                  transition: "all 300ms ease-in-out",
                  backgroundImage:
                    index === 0
                      ? "linear-gradient(45deg, #1A1A1A 0%, transparent 100%)"
                      : index === 1
                        ? "linear-gradient(315deg, #1A1A1A 0%, transparent 100%)"
                        : index === 2
                          ? "linear-gradient(45deg, #1A1A1A 0%, rgba(26, 26, 26, 0.6) 100%)"
                          : "linear-gradient(315deg, #1A1A1A 0%, rgba(26, 26, 26, 0.6) 100%)",
                }}
              >
                <h3 className="HeadingH5 mb-4">{card.title}</h3>

                <div className="flex-1">
                  {card.content.map((item, i) => (
                    <p key={i} className="BodyText">
                      <span className="BodyTextBold">{item.label}</span> {item.text}
                    </p>
                  ))}
                </div>

                <div className="flex justify-end">
                  <img src={card.image} alt={card.title} className="w-[280px] object-contain" />
                </div>
              </div>
              <div className="blob"></div>
              <div className="fakeblob"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FillerSection;
