"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Chrome, ShoppingBag, Smartphone, Layers, Cloud } from "lucide-react";
import "swiper/css";
import SectionHeading from "@/components/SectionHeading";

const TestimonialsSection = () => {
  const swiperRef = useRef(null);
  const [expanded, setExpanded] = useState({}); // track which testimonial is expanded

  const testimonials = [
    {
      id: 1,
      projectName: "The Rizzler",
      content: "We didn't need to manage them. That was the best part.",
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
        "WORST PEOPLE ON THE PLANET, THEY MAKE YOU FEEL LIKE SHIT but they make good shit so i guess it all evens out at the end. win - win  :)",
      name: "Tandoori Chicken aka Taimoor Khan",
      position: "Smol nuts tester",
      avatar: "/images/gregory.webp",
      company: "Big Nuts LTD",
      icon: ShoppingBag,
    },
    {
      id: 3,
      projectName: "Fart Machine",
      content: "WaySel worked like an internal team. But faster.",
      name: "Sarah Johnson",
      position: "Product Lead at Apple",
      avatar: "/images/gregory.webp",
      company: "Apple",
      icon: Smartphone,
    },
    {
      id: 4,
      projectName: "Gugu Gaga",
      content: "We didn't need to manage them. That was the best part.",
      name: "David Wilson",
      position: "Head of Engineering at Meta",
      avatar: "/images/gregory.webp",
      company: "Meta",
      icon: Layers,
    },
    {
      id: 5,
      projectName: "Hastalavista",
      content: "They asked the right questions. And then just built it.",
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
      <SectionHeading title={"Some of the nicest things we heard from our clients"} />
      <Swiper
        ref={swiperRef}
        slidesPerView={1.1}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        speed={600}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          1280: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        className="testimonials-swiper"
      >
        {testimonials.map((testimonial, index) => {
          const IconComponent = testimonial.icon;
          const isExpanded = expanded[testimonial.id];
          const textLimit = 140; // truncate text to ~200 chars
          const isOverflow = testimonial.content.length > textLimit;

          return (
            <SwiperSlide key={testimonial.id} onClick={() => handleSlideClick(index)}>
              <div
                className={`flex flex-col gap-6 overflow-hidden rounded-2xl border border-b-0 border-r-0 border-[#fed7be33] bg-card bg-opacity-80 px-6 py-6 backdrop-blur-sm transition-all duration-500 ease-in-out xl:gap-8 xl:px-10 xl:py-8 ${isExpanded ? "max-h-[500px]" : "h-[300px]"} `}
              >
                <div className="flex h-full flex-col items-start justify-between gap-6">
                  <h3 className="HeadingH5">{testimonial.projectName}</h3>

                  {/* Content + Inline Button */}
                  <p className="BodyText flex-1 transition-all duration-500 ease-in-out">
                    {isExpanded ? (
                      <>
                        {testimonial.content}{" "}
                        {isOverflow && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpanded((prev) => ({
                                ...prev,
                                [testimonial.id]: false,
                              }));
                            }}
                            className="inline font-medium text-[#fed7beaa] hover:text-[#fed7bedd]"
                          >
                            Show Less
                          </button>
                        )}
                      </>
                    ) : (
                      <>
                        {testimonial.content.slice(0, textLimit)}
                        {isOverflow && (
                          <>
                            ...{" "}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpanded((prev) => ({
                                  ...prev,
                                  [testimonial.id]: true,
                                }));
                              }}
                              className="inline font-medium text-[#fed7beaa] hover:text-[#fed7bedd]"
                            >
                              Read More
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto flex w-full items-center justify-between pt-4">
                    {/* Left: Avatar + Info */}
                    <div className="flex items-center gap-3 xl:gap-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="size-9 rounded-full border-2 border-text-tertiary object-cover xl:size-12"
                      />
                      <div className="flex flex-col justify-center">
                        <h4 className="text-base font-medium leading-tight text-white xl:text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-text-tertiary xl:text-sm">{testimonial.position}</p>
                      </div>
                    </div>

                    {/* Right: Company + Icon */}
                    <div className="flex shrink-0 items-center gap-2 text-text-secondary">
                      <IconComponent className="size-5 xl:size-6" />
                      <span className="hidden text-base font-medium xl:inline xl:text-lg">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Gradient vector blur */}
      <div className="absolute left-[49.12%] top-0 -z-10 w-full -translate-x-1/2 transform">
        <Image
          src="/images/filler/spotlight.png"
          width={0}
          height={0}
          style={{ width: "auto", height: "auto" }}
          alt=""
          unoptimized
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
