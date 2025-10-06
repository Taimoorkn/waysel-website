"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const brands = [
  "/logos/google.svg",
  "/logos/meta.svg",
  "/logos/apple.svg",
  "/logos/amazon.svg",
  "/logos/microsoft.svg",
  "/logos/netflix.svg",
  "/logos/spotify.svg",
  "/logos/adobe.svg",
];

export default function BrandCarousel() {
  return (
    <div className="w-screen overflow-hidden border bg-primary_bg py-8">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={64} // 64px gap between slides
        loop={true}
        speed={2500} // smooth scrolling
        autoplay={{
          delay: 0, // continuous movement
          disableOnInteraction: false,
        }}
        freeMode={true}
        grabCursor={false}
        allowTouchMove={false}
        className="!overflow-visible"
      >
        {brands.map((src, i) => (
          <SwiperSlide key={i} className="flex !w-auto items-center justify-center">
            <img
              src={src}
              alt={`brand-${i}`}
              className="h-12 w-auto object-contain opacity-80 transition hover:opacity-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
