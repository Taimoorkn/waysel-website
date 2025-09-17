import React from "react";

const FillerSection = () => {
  const cards = [
    {
      title: "Strategic Design",
      content: [
        { label: "UX/UI Design:", text: "We craft seamless user experiences and modern interfaces that users love." },
        { label: "Brand Strategy:", text: "We define your brand's digital identity to stand out in the market." }
      ]
    },
    {
      title: "Development",
      content: [
        { label: "Frontend:", text: "Modern web applications built with cutting-edge technologies and frameworks." },
        { label: "Backend:", text: "Scalable server solutions and robust API development for your business needs." }
      ]
    },
    {
      title: "Consultation",
      content: [
        { label: "Tech Advisory:", text: "Expert guidance on technology stack selection and architecture decisions." },
        { label: "Digital Strategy:", text: "Comprehensive roadmaps for your digital transformation journey." }
      ]
    },
    {
      title: "Support",
      content: [
        { label: "Maintenance:", text: "Ongoing support and updates to keep your systems running smoothly." },
        { label: "Optimization:", text: "Performance improvements and feature enhancements for existing solutions." }
      ]
    }
  ];

  return (
    <div className="w-full max-w-[1440px] pt-20 pb-40 flex flex-col items-center bg-[#0d0d0c] text-primary mx-auto">
      <div className="py-16 flex flex-col gap-4 items-center">
        <h1 className="w-full max-w-[825px] text-6xl font-normal leading-tight text-center">
          The platform we wish we had, <br />
          so we built it for you
        </h1>
        <p className="text-xl text-center">
          Crafting user-friendly, cross platform solutions with efficiency
        </p>
      </div>

      <div className="w-full px-16 grid grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`h-[520px] p-10 border border-accent ${
              index % 2 === 0 ? 'rounded-tl-[32px] rounded-bl-[32px]' : 'rounded-tr-[32px] rounded-br-[32px]'
            }`}
          >
            <h3 className="text-3xl font-semibold mb-8">{card.title}</h3>
            <div className="text-lg leading-relaxed">
              {card.content.map((item, i) => (
                <p key={i} className="mb-4">
                  <span className="font-bold">{item.label}</span> {item.text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FillerSection;