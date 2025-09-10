"use client";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { DeviceMobileIcon, DesktopIcon, CodeIcon } from "@phosphor-icons/react";
import Button from "@/components/Button";
import "swiper/css";

const NextGenAICard = ({ name, description, buttonText, icon, backgroundImage }) => {
  return (
    <div className="relative w-full h-[500px] bg-black rounded-3xl px-6 sm:px-12 pt-8 flex items-center shadow-lg overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-3xl"
        style={{
          backgroundImage: `url(${backgroundImage}), 
          linear-gradient(to right, #0A0A0A 30%, transparent 70%)`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="w-full max-w-[480px] relative flex flex-col items-start text-start">
        <div className="text-white mb-6">
          <h1 className="text-2xl  font-clashGrotesk font-medium mb-2 sm:font-semibold sm:text-4xl">{name}</h1>
          <p className="font-manrope text-base sm:text-lg">{description}</p>
        </div>
        <Button variant="primary">{buttonText}</Button>
      </div>
    </div>
  );
};

const NextGenAICarousel = () => {
  const aicards = [
    {
      name: "Transform Data Strategy for GenAI",
      description: "Elevate your online presence with our cutting-edge web development services, designed to deliver visually stunning and highly functional websites that resonate with your audience.",
      buttonText: "Get Started",
      icon: <DeviceMobileIcon className="size-20 text-white" />,
      backgroundImage: "/images/nextgen-ai/pic3.webp",
    },
    {
      name: "Innovative AI Solutions",
      description: "Leverage advanced AI to optimize your business processes and enhance user experiences.",
      buttonText: "Get Started",
      icon: <DesktopIcon className="size-20 text-white" />,
      backgroundImage: "/images/nextgen-ai/pic2.webp",
    },
    {
      name: "Custom AI Development",
      description: "Tailored AI solutions to meet your unique business needs and goals.",
      buttonText: "Get Started",
      icon: <CodeIcon className="size-20 text-white" />,
      backgroundImage: "/images/nextgen-ai/pic1.webp",
    },
  ];

  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          swiperRef.current?.autoplay?.start();
        } else {
          swiperRef.current?.autoplay?.stop();
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

  return (
    <section ref={sectionRef} className="bg-white section_padding">
      <div>
        <h1 className="section-header">
          Next-Gen Solutions Through AI
        </h1>
        <div className="relative">
          <div className="overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={700}
              grabCursor={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper.realIndex);
              }}
              className="flex"
            >
              {aicards.map((service, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <NextGenAICard {...service} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10 rounded-md px-5 py-[14px] backdrop-blur-xl sm:bottom-8 sm:px-7 sm:py-4 sm:rounded-xl">
            {aicards.map((_, index) => (
              <span
                key={index}
                className={`size-[9.5px] sm:size-[11.5px] rounded-full cursor-pointer transition-colors ${currentIndex === index ? "bg-accent" : "bg-white"}`}
                onClick={() => {
                  setCurrentIndex(index);
                  swiperRef.current?.slideToLoop(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextGenAICarousel;