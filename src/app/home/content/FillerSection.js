import React from "react";

const FillerSection = () => {
  const cardData = [
    {
      title: "Strategic Design",
      items: [
        {
          label: "UX/UI Design:",
          description: "We craft seamless user experiences and modern interfaces that users love."
        },
        {
          label: "Brand Strategy:",
          description: "We define your brand's digital identity to stand out in the market."
        }
      ]
    },
    {
      title: "Strategic Design",
      items: [
        {
          label: "UX/UI Design:",
          description: "We craft seamless user experiences and modern interfaces that users love."
        },
        {
          label: "Brand Strategy:",
          description: "We define your brand's digital identity to stand out in the market."
        }
      ]
    },
    {
      title: "Strategic Design",
      items: [
        {
          label: "UX/UI Design:",
          description: "We craft seamless user experiences and modern interfaces that users love."
        },
        {
          label: "Brand Strategy:",
          description: "We define your brand's digital identity to stand out in the market."
        }
      ]
    },
    {
      title: "Strategic Design",
      items: [
        {
          label: "UX/UI Design:",
          description: "We craft seamless user experiences and modern interfaces that users love."
        },
        {
          label: "Brand Strategy:",
          description: "We define your brand's digital identity to stand out in the market."
        }
      ]
    }
  ];

  const getBorderRadius = (index) => {
    const isLeft = index % 2 === 0;
    return isLeft
      ? "rounded-tl-[32px] rounded-tr-none rounded-br-none rounded-bl-[32px]"
      : "rounded-tl-none rounded-tr-[32px] rounded-br-[32px] rounded-bl-none";
  };

  const renderCard = (card, index) => (
    <div
      key={index}
      className={`flex h-[520px] pt-[40px] pr-[40px] pb-[40px] pl-[40px] flex-col gap-[120px] items-start grow shrink-0 basis-0 flex-nowrap ${getBorderRadius(index)} border-solid border border-accent relative overflow-hidden z-[${5 + index * 5}]`}
    >
      <div className={`flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[${6 + index * 5}]`}>
        <span className={`flex w-[235px] h-[48px] justify-center items-start shrink-0 basis-auto font-['Hurme_Geometric_Sans_1'] text-[32px] font-semibold leading-[48px] tracking-[-0.64px] relative text-center whitespace-nowrap z-[${7 + index * 5}]`}>
          {card.title}
        </span>
        <div className={`flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[${8 + index * 5}]`}>
          <div className={`self-stretch shrink-0 font-['Hurme_Geometric_Sans_1'] text-[20px] font-normal leading-[42px] relative text-left z-[${9 + index * 5}]`}>
            {card.items.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                <span className="font-['Hurme_Geometric_Sans_1'] text-[20px] font-bold leading-[42px] relative text-left">
                  {item.label}
                </span>
                <span className="font-['Hurme_Geometric_Sans_1'] text-[20px] font-normal leading-[42px] relative text-left">
                  {" "}{item.description}
                  {itemIndex < card.items.length - 1 && <br />}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderRow = (startIndex) => (
    <div className={`flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[${startIndex === 0 ? 4 : 15}]`}>
      {cardData.slice(startIndex, startIndex + 2).map((card, index) =>
        renderCard(card, startIndex + index)
      )}
    </div>
  );

  return (
    <div className="main-container flex w-[1440px] pt-[80px] pr-0 pb-[160px] pl-0 flex-col items-center flex-nowrap bg-[#0d0d0c] text-primary relative overflow-hidden mx-auto my-0">
      <div className="flex pt-[64px] pr-0 pb-[64px] pl-0 flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative">
        <span className="flex w-[825px] h-[160px] justify-center items-start shrink-0 font-['Hurme_Geometric_Sans_1'] text-[64px] font-normal leading-[80px] tracking-[-1.92px] relative text-center overflow-hidden z-[1]">
          The platform we wish we had, <br />
          so we built it for you
        </span>
        <span className="h-[25px] shrink-0 basis-auto font-['Hurme_Geometric_Sans_1'] text-[20px] font-normal leading-[25px] relative text-left whitespace-nowrap z-[2]">
          Crafting user-friendly, cross platform solutions with efficiency
        </span>
      </div>
      <div className="flex w-[1440px] pt-0 pr-[64px] pb-0 pl-[64px] flex-col gap-[16px] items-start shrink-0 flex-nowrap relative z-[3]">
        {renderRow(0)}
        {renderRow(2)}
      </div>
    </div>
  );
}

export default FillerSection;