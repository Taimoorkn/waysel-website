"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const brands = [
  "/logos_google.png",
  "/logos_google.png",
  "/logos_google.png",
  "/logos_google.png",
  "/logos_google.png",
  "/logos_google.png",
];

export default function BrandCarousel() {
  return (
    <div className="w-full overflow-hidden bg-primary_bg py-8">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={64} // 64px gap between slides
        loop={true}
        speed={5000} // Increased for smoother continuous effect
        autoplay={{
          delay: 1, // Small delay for continuous movement
          disableOnInteraction: false,
          pauseOnMouseEnter: false, // Prevents pausing on hover
        }}
        centeredSlides={false}
        allowTouchMove={false}
        className="!overflow-visible"
      >
        {brands.map((src, i) => (
          <SwiperSlide
            key={i}
            className="flex !w-auto items-center justify-center"
          >
            <img
              src={src}
              alt={`brand-${i}`}
              className="h-12 w-auto object-contain opacity-80 transition hover:opacity-100"
              onError={() => console.error(`Failed to load image: ${src}`)} // Debug image loading issues
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}