import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CompaniesShowcase = () => {
  const items = [
    { image: "/images/company_logos/notion.svg" },
    { image: "/images/company_logos/doordash.svg" },
    { image: "/images/company_logos/evernote.svg" },
    { image: "/images/company_logos/freshworks.svg" },
    { image: "/images/company_logos/mailchamp.svg" },
    { image: "/images/company_logos/webflow.svg" },
  ];

  const swiperRef = useRef(null);

  return (
    <div
      className="relative overflow-hidden py-10"
      onMouseEnter={() => swiperRef.current?.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()}
    >
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        grabCursor={true}
        centeredSlides={false}
        slideToClickedSlide={true}
        speed={500}
        ref={swiperRef}
        className="flex"
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="custom-dashed-border relative !flex !h-[60px] !items-center !justify-center lg:!h-[100px]"
          >
            <img
              src={item.image}
              alt="Company logo"
              style={{
                maxWidth: "80%",
                maxHeight: "80%",
                objectFit: "contain",
              }}
            />
            <div className="absolute bottom-[20%] left-0 top-[20%] w-[0.5px] bg-tertiary_text" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompaniesShowcase;
