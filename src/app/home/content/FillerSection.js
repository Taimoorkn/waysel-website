import React, { useEffect } from "react";

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
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transition: all 300ms ease-in-out;
        }
        .fakeblob {
          display: hidden;
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          width: 200px;
          height: 200px;
          border-radius: 50%;
        }
        .card {
          overflow: hidden;
          padding: 3px;
          margin: 0;
          background: rgba(128, 128, 128, 0.2);
          border-radius: 10px;
          position: relative;
          transition: all 300ms ease-in-out;
        }
        .inner {
          border-radius: 7px;
          padding: 10px;
          width: 210px;
          height: 150px;
          background: rgb(26, 26, 26);
          backdrop-filter: blur(80px);
          transition: all 300ms ease-in-out;
        }
        .card:hover > .inner {
          background: rgba(26, 26, 26, 0.6);
          backdrop-filter: blur(80px);
        }
      `}</style>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-[#0d0d0c]  pb-40 pt-20 text-primary">
        <div className="flex flex-col items-center gap-4 py-16">
          <h1 className="w-full max-w-[825px] text-center text-6xl font-normal leading-tight">
            The platform we wish we had, <br />
            so we built it for you
          </h1>
          <p className="text-center text-xl">
            Crafting user-friendly, cross platform solutions with efficiency
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 px-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card relative overflow-hidden p-1 ${
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
                className={`h-[520px] bg-[#0d0d0c] p-10 ${
                  index % 2 === 0
                    ? "rounded-bl-[31px] rounded-tl-[31px]"
                    : "rounded-br-[31px] rounded-tr-[31px]"
                }`}
                style={{
                  backdropFilter: "blur(80px)",
                  transition: "all 300ms ease-in-out",
                }}
              >
                <h3 className="mb-8 text-3xl font-semibold">{card.title}</h3>
                <div className="text-lg leading-relaxed">
                  {card.content.map((item, i) => (
                    <p key={i} className="mb-4">
                      <span className="font-bold">{item.label}</span> {item.text}
                    </p>
                  ))}
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
