import React, { useEffect } from "react";
import SectionHeading from "../../../components/SectionHeading";

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
          width: 500px;
          height: 500px;
          background: #ff4c24;
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

      <div className="section relative mx-auto flex w-full flex-col items-center text-primary">
        <SectionHeading
          title="This is (some of the insane stuff) we actually do."
          description="Crafting user-friendly, cross platform solutions with efficiency"
        />

        <div className="z-10 grid w-full grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card relative overflow-hidden p-[1px] pr-[0.5px] ${
                index % 2 === 0
                  ? "rounded-bl-[32px] rounded-tl-[32px]"
                  : "rounded-br-[32px] rounded-tr-[32px]"
              }`}
              style={{
                background: "rgba(128, 128, 128, 0.1)",
                transition: "all 300ms ease-in-out",
              }}
            >
              <div
                className={`flex h-full flex-col !p-10 font-hurme sm:min-h-[520px] ${
                  index % 2 === 0
                    ? "rounded-bl-[32px] rounded-tl-[32px]"
                    : "rounded-br-[32px] rounded-tr-[32px]"
                }`}
                style={{
                  backdropFilter: "blur(80px)",
                  transition: "all 300ms ease-in-out",
                  background: `${
                    index === 0 ? "linear-gradient(to top right, #1A1A1A 0%, rgba(13, 13, 12, 0.8) 100%)" :
                    index === 1 ? "linear-gradient(to top left, #1A1A1A 0%, rgba(13, 13, 12, 0.8) 100%)" :
                    index === 2 ? "linear-gradient(to top right, #1A1A1A 0%, rgba(13, 13, 12, 0.9) 100%)" :
                    "linear-gradient(to top left, #1A1A1A 0%, rgba(13, 13, 12, 0.9) 100%)"
                  }, #0D0D0C`
                }}
              >
                <h3 className="mb-4 text-base font-semibold leading-[48px] tracking-[-2%] text-[#ffffffcc] sm:text-[32px]">
                  {card.title}
                </h3>

                <div className="flex-1">
                  {card.content.map((item, i) => (
                    <p
                      key={i}
                      className="mb-4 text-base leading-[36px] text-[#ffffffcc] sm:text-[20px]"
                    >
                      <span className="font-semibold">{item.label}</span> {item.text}
                    </p>
                  ))}
                </div>

                <div className="flex justify-end">
                  <img src={card.image} alt={card.title} className="object-contain opacity-60" />
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
