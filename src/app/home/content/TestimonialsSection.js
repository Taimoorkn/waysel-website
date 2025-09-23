import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Chrome, ShoppingBag, Smartphone, Layers, Cloud } from "lucide-react";
import "swiper/css";
import SectionHeading from "@/components/SectionHeading";

const TestimonialsSection = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      projectName: "The Rizzler",
      content:
        "Crafting user-friendly, cross platform solutions with efficiency. Crafting user-friendly, cross platform solutions with efficiency. Crafting user-friendly, cross platform solutions with efficiency.",
      name: "Emily Kristen",
      position: "CEO at Google",
      avatar: "/images/gregory.webp",
      company: "Google",
      icon: Chrome,
    },
    {
      id: 2,
      projectName: "Deez nuts",
      content:
        "The team delivered an exceptional solution that exceeded our expectations. Their attention to detail and technical expertise made all the difference in our project's success.",
      name: "Michael Chen",
      position: "CTO at Amazon",
      avatar: "/images/gregory.webp",
      company: "Amazon",
      icon: ShoppingBag,
    },
    {
      id: 3,
      projectName: "Mobile Banking App",
      content:
        "Outstanding work on our mobile application. The user experience is seamless and the performance is exceptional. Couldn't have asked for a better development partner.",
      name: "Sarah Johnson",
      position: "Product Lead at Apple",
      avatar: "/images/gregory.webp",
      company: "Apple",
      icon: Smartphone,
    },
    {
      id: 4,
      projectName: "AI Analytics Dashboard",
      content:
        "Their innovative approach to solving complex problems helped us streamline our operations. The dashboard they built has become an essential tool for our team.",
      name: "David Wilson",
      position: "Head of Engineering at Meta",
      avatar: "/images/gregory.webp",
      company: "Meta",
      icon: Layers,
    },
    {
      id: 5,
      projectName: "Hastalavista",
      content:
        "Exceptional expertise in cloud architecture and deployment. They helped us migrate our entire infrastructure with zero downtime. Highly recommended for complex projects.Exceptional expertise in cloud architecture and deployment.",
      name: "Lisa Thompson",
      position: "VP of Technology at Microsoft",
      avatar: "/images/gregory.webp",
      company: "Microsoft",
      icon: Cloud,
    },
  ];

  const handleSlideClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  // Add custom styles for Swiper states since Tailwind can't directly target pseudo-classes
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .testimonials-swiper {
        overflow: hidden !important;
      }
      .testimonials-swiper .swiper-slide {
        transition: all 0.3s ease;
        opacity: 0.3;
        transform: scale(0.85);
      }
      .testimonials-swiper .swiper-slide-active {
        opacity: 1 !important;
        transform: scale(1) !important;
      }
      .testimonials-swiper .swiper-slide-prev,
      .testimonials-swiper .swiper-slide-next {
        opacity: 0.5;
        transform: scale(0.92);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="section relative px-0">
      <SectionHeading
        title={"Our clients be talking shit man"}
        description={
          "Crafting user-friendly? nah, cross platform? never solutions? more like preblems with efficiency"
        }
      />
      <Swiper
        ref={swiperRef}
        slidesPerView={2.5}
        centeredSlides={true}
        spaceBetween={40}
        grabCursor={true}
        loop={true}
        speed={600}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="testimonials-swiper"
      >
        {testimonials.map((testimonial, index) => {
          const IconComponent = testimonial.icon;
          return (
            <SwiperSlide key={testimonial.id} onClick={() => handleSlideClick(index)}>
              <div className="flex h-full flex-col gap-8 rounded-2xl border border-b-0 border-r-0 border-[#fed7be33] bg-[#121211] bg-opacity-80 px-10 py-8 backdrop-blur-sm transition-all duration-300 sm:max-h-[460px]">
                <div className="flex flex-col items-start justify-between gap-4">
                  <h3 className="text-base font-semibold tracking-[-2%] text-[#ffffffcc] sm:text-[32px]">
                    {testimonial.projectName}
                  </h3>
                  <blockquote className="text-[20px] text-gray-300 sm:text-[20px]">
                    {testimonial.content}
                  </blockquote>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="size-8 rounded-full border-2 border-[#ffffff33] object-cover sm:size-12"
                    />
                    <div className="flex flex-col items-start justify-start gap-[2px]">
                      <h4 className="bg-gradient-to-b from-white to-[#F7FEDD] bg-clip-text text-[20px] font-normal tracking-[-2%] text-transparent text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-[#ffffffb3] sm:text-base">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-[#ffffffb3]">
                    <IconComponent className="size-5 sm:size-6" />
                    <span className="hidden text-sm sm:inline sm:text-xl">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Gradient vector blur at bottom edge */}
      <div className="gradient-vector-blur bottom-0 left-1/2 z-50 -translate-x-1/2 transform" />
    </section>
  );
};

export default TestimonialsSection;
