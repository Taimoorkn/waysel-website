"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialCard = ({ quote, name, role, image, isActive }) => {
  return (
    <div className="relative h-[98.5%] w-[98.5%] rounded-3xl bg-primary_bg p-6 sm:p-10">
      {/* Dark background effect for active card */}
      {isActive && (
        <div
          className="absolute inset-0 rounded-3xl bg-black"
          style={{
            transform: "translate(6px, 6px)",
            zIndex: -1,
            opacity: 1,
          }}
        />
      )}
      <div className="relative z-10 flex min-h-full min-w-full flex-col justify-between">
        <p className="w-full font-neueMontreal text-sm text-tertiary_text sm:text-base">
          "{quote}"
        </p>
        <div className="mt-4 flex items-center justify-start gap-3 sm:gap-4">
          <img
            src={image}
            alt={`${name}'s profile`}
            className="size-[56px] rounded-full object-cover sm:size-[72px]"
          />
          <div>
            <h3 className="mb-1 font-neueMontreal text-lg font-medium text-primary_text sm:text-xl">
              {name}
            </h3>
            <p className="font-neueMontreal text-xs text-primary_text sm:text-sm">{role}</p>
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
      quote:
        "The Andy project management software allows me to have greater connection with different departments. For example, I can interact with engineers directly and establish working relationships—and that collaboration has been extremely valuable.",
      name: "Kyler Rose",
      role: "Marketing Services Manager",
      image: "/images/gregory.webp",
    },
    {
      quote:
        "Andy has become such an integral part of our work! By setting up weekly Sprints to discuss and organize our work, we can easily collaborate with other departments without spending hours at a time in meetings.",
      name: "Sagor Ahmad",
      role: "Inbound Marketing Team",
      image: "/images/gregory.webp",
    },
    {
      quote:
        "What can I say? Pepe was there when I needed him most. Kind colleagues he has and the support he offered has been invaluable.",
      name: "Laoty AllGren",
      role: "Support Team",
      image: "/images/gregory.webp",
    },
    {
      quote:
        "The Andy project management software allows me to have greater connection with different departments. For example, I can interact with engineers directly and establish working relationships—and that collaboration has been extremely valuable.",
      name: "Kyler Rose",
      role: "Marketing Services Manager",
      image: "/images/gregory.webp",
    },
    {
      quote:
        "Andy has become such an integral part of our work! By setting up weekly Sprints to discuss and organize our work, we can easily collaborate with other departments without spending hours at a time in meetings.",
      name: "Sagor Ahmad",
      role: "Inbound Marketing Team",
      image: "/images/gregory.webp",
    },
    {
      quote:
        "What can I say? Pepe was there when I needed him most. Kind colleagues he has and the support he offered has been invaluable.",
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
    <section ref={sectionRef} className="section_padding bg-light_blue_bg">
      <h1 className="section-header">What our clients say about us.</h1>
      <div>
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 16,
              centeredSlides: false,
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
              <TestimonialCard {...testimonial} isActive={index === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center gap-10 p-10">
          <button
            className="swiper-button-prev rounded-full bg-primary_bg p-2"
            style={{ boxShadow: "0 8px 20px 0 rgba(193,125,6,0.18)" }}
            aria-label="Previous slide"
          >
            <CaretLeftIcon className="text-primary_text" />
          </button>
          <button
            className="swiper-button-next rounded-full bg-primary_bg p-2"
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
