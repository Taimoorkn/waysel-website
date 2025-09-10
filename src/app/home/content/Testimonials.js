"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialCard = ({ quote, name, role, image, isActive }) => {
  return (
    <div className="relative h-[98.5%] w-[98.5%] p-6 sm:p-10 bg-primary_bg rounded-3xl">
      {/* Dark background effect for active card */}
      {isActive && (
        <div
          className="absolute inset-0 bg-black rounded-3xl"
          style={{
            transform: "translate(6px, 6px)",
            zIndex: -1,
            opacity: 1,
          }}
        />
      )}
      <div className="min-h-full min-w-full flex flex-col justify-between relative z-10">
        <p className="text-tertiary_text w-full font-manrope text-sm sm:text-base leading-snug sm:leading-[21.9px]">
          "{quote}"
        </p>
        <div className="flex justify-start items-center gap-3 sm:gap-4 mt-4">
          <img
            src={image}
            alt={`${name}'s profile`}
            className="size-[56px] sm:size-[72px] rounded-full object-cover"
          />
          <div>
            <h3 className="font-manrope font-medium text-lg sm:text-xl mb-1 text-primary_text">
              {name}
            </h3>
            <p className="font-manrope text-xs sm:text-sm leading-tight sm:leading-[19.1px] text-primary_text">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const testimonials = [
    {
      quote: "The Andy project management software allows me to have greater connection with different departments. For example, I can interact with engineers directly and establish working relationships—and that collaboration has been extremely valuable.",
      name: "Kyler Rose",
      role: "Marketing Services Manager",
      image: "/images/gregory.webp",
    },
    {
      quote: "Andy has become such an integral part of our work! By setting up weekly Sprints to discuss and organize our work, we can easily collaborate with other departments without spending hours at a time in meetings.",
      name: "Sagor Ahmad",
      role: "Inbound Marketing Team",
      image: "/images/gregory.webp",
    },
    {
      quote: "What can I say? Pepe was there when I needed him most. Kind colleagues he has and the support he offered has been invaluable.",
      name: "Laoty AllGren",
      role: "Support Team",
      image: "/images/gregory.webp",
    },
    {
      quote: "The Andy project management software allows me to have greater connection with different departments. For example, I can interact with engineers directly and establish working relationships—and that collaboration has been extremely valuable.",
      name: "Kyler Rose",
      role: "Marketing Services Manager",
      image: "/images/gregory.webp",
    },
    {
      quote: "Andy has become such an integral part of our work! By setting up weekly Sprints to discuss and organize our work, we can easily collaborate with other departments without spending hours at a time in meetings.",
      name: "Sagor Ahmad",
      role: "Inbound Marketing Team",
      image: "/images/gregory.webp",
    },
    {
      quote: "What can I say? Pepe was there when I needed him most. Kind colleagues he has and the support he offered has been invaluable.",
      name: "Laoty AllGren",
      role: "Support Team",
      image: "/images/gregory.webp",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          swiperRef.current?.swiper?.autoplay?.start();
        } else {
          swiperRef.current?.swiper?.autoplay?.stop();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      const handleSlideChange = () => {
        setActiveIndex(swiper.realIndex);
      };
      swiper.on("slideChange", handleSlideChange);
      swiper.slideTo(1, 0);
      return () => {
        swiper.off("slideChange", handleSlideChange);
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-light_blue_bg section_padding">
      <h1 className="section-header">
        What our clients say about us.
      </h1>
      <div>
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 16,
              centeredSlides: false
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          loop={true}
          centeredSlides={true}
          initialSlide={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          speed={700}
          grabCursor={true}
          ref={swiperRef}
          className="h-[380px] sm:h-[430px]"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                {...testimonial}
                isActive={index === activeIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center gap-10 p-10">
          <button
            className="swiper-button-prev p-2 rounded-full bg-primary_bg"
            style={{ boxShadow: "0 8px 20px 0 rgba(193,125,6,0.18)" }}
            aria-label="Previous slide"
          >
            <CaretLeftIcon className="text-primary_text" />
          </button>
          <button
            className="swiper-button-next p-2 rounded-full bg-primary_bg"
            style={{ boxShadow: "0 8px 20px 0 rgba(193,125,6,0.18)" }}
            aria-label="Next slide"
          >
            <CaretRightIcon className="text-primary_text" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;