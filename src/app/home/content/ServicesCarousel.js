"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  ArrowRightIcon,
  DeviceMobileIcon,
  DesktopIcon,
  CodeIcon,
  BuildingIcon,
  BrowserIcon,
  CloudIcon,
  ShoppingCartIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/Button";

const ServiceCard = ({
  name,
  description,
  icon,
  backgroundImage,
  path,
  onCardHover,
  onCardUnhover,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      className="relative flex h-[400px] cursor-pointer flex-col items-center justify-between rounded-3xl bg-primary_bg p-6 shadow-lg sm:h-[460px] sm:p-10"
      onClick={() => router.push(path)}
      onMouseEnter={() => {
        setIsHovered(true);
        onCardHover();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onCardUnhover();
      }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-300"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: 1,
            filter: isHovered ? "brightness(1.2)" : "brightness(1)",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
            opacity: 1,
          }}
        />
      </div>
      <div className="relative flex h-full flex-col items-start text-primary_text">
        <div className="mb-6 rounded-full border border-white p-2 text-white sm:p-3">{icon}</div>
        <div className="flex h-full flex-col justify-between">
          <div>
            <h3 className="mb-2 font-neueMontreal text-lg font-medium text-white sm:text-2xl">
              {name}
            </h3>
            <p className="font-neueMontreal text-base text-white sm:text-xl">{description}</p>
          </div>
          <div
            className={`hidden transform self-end transition-transform duration-300 sm:block ${isHovered ? "-rotate-45 text-accent" : "text-white"}`}
          >
            <ArrowRightIcon size={40} weight="bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesCarousel = () => {
  const services = [
    {
      name: "Mobile App Development",
      description:
        "Powerful mobile apps with intuitive interfaces, robust performance, and seamless integration. Scalable, cross-platform solutions tailored to your business and user expectations.",
      icon: <DeviceMobileIcon className="size-6 sm:size-8" />,
      backgroundImage: "/images/services_carousel/mobile-dev-bg2.png",
      path: "/services/mobile-development",
    },
    {
      name: "Website Development",
      description:
        "End-to-end web development with modern frontends and powerful backends. Scalable, secure solutions tailored to your business logic, performance needs, and user experience.",
      icon: <DesktopIcon className="size-6 sm:size-8" />,
      backgroundImage: "/images/services_carousel/web-dev-bg.png",
      path: "/services/web-development",
    },
    {
      name: "Custom Software Development",
      description:
        "Complete development solutions from frontend to backend. We build responsive, scalable, and secure systems tailored to your product vision and performance requirements.",
      icon: <CodeIcon className="size-6 sm:size-8" />,
      backgroundImage: "/images/services_carousel/custom-dev-bg.png",
      path: "/services/custom-software-development",
    },
    {
      name: "Enterprise Solutions",
      description: "Scalable solutions for large organizations with complex needs.",
      icon: <BuildingIcon className="size-6 sm:size-8" />,
      backgroundImage: "/images/services_carousel/enterprise-dev-bg2.png",
      path: "/services/enterprise-solutions",
    },
    {
      name: "Chrome Extension Development",
      description: "Custom extensions to enhance browser functionality.",
      icon: <BrowserIcon className="size-6 sm:size-8" />,
      backgroundImage: "/images/services_carousel/extensions-dev-bg.jpg",
      path: "/services/chrome-extension-development",
    },
    {
      name: "Cloud Solutions",
      description: "Reliable and scalable cloud-based services for your business.",
      icon: <CloudIcon className="size-6 sm:size-8" />,
      backgroundImage: "/images/services_carousel/cloud-dev-bg.jpg",
      path: "/services/cloud-integration",
    },
    {
      name: "E-commerce Development",
      description: "Robust online stores with seamless user experiences.",
      icon: <ShoppingCartIcon className="size-6 sm:size-8" />,
      backgroundImage: "/images/services_carousel/ecommerce-dev-bg.jpg",
      path: "/services/ecommerce",
    },
  ];

  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const router = useRouter();

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

  return (
    <section ref={sectionRef} className="section_padding bg-secondary_bg">
      <div className="flex items-start justify-between">
        <h1 className="section-header">Our Services</h1>
        <Button variant="primary" onClick={() => router.push("/services")}>
          View All Services
        </Button>
      </div>
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          speed={700}
          grabCursor={true}
          ref={swiperRef}
          className="flex h-[420px] sm:h-[480px]"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard
                {...service}
                onCardHover={() => swiperRef.current?.swiper?.autoplay?.stop()}
                onCardUnhover={() => swiperRef.current?.swiper?.autoplay?.resume()}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-6 flex items-center justify-center gap-4 pb-8 sm:mt-8">
          <button
            className="swiper-button-prev rounded-full bg-primary_bg p-2"
            style={{ boxShadow: "rgba(193,125,6,0.25) 0px 0px 16px" }}
            aria-label="Previous slide"
          >
            <CaretLeftIcon className="h-5 w-5 text-primary_text sm:h-6 sm:w-6" />
          </button>
          <div className="swiper-pagination flex items-center justify-center" />
          <button
            className="swiper-button-next rounded-full bg-primary_bg p-2"
            style={{ boxShadow: "rgba(193,125,6,0.25) 0px 0px 16px" }}
            aria-label="Next slide"
          >
            <CaretRightIcon className="h-5 w-5 text-primary_text sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 40px !important;
          height: 40px !important;
          position: relative !important;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          display: none !important;
        }
        .swiper-pagination {
          position: relative !important;
          width: auto !important;
        }
        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background: #d1d5db !important;
          opacity: 1 !important;
          margin: 0 8px !important;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
        }
        @media (max-width: 640px) {
          .swiper {
            overflow: hidden !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesCarousel;
