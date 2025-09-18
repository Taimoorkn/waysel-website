import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Chrome, ShoppingBag, Smartphone, Layers, Cloud } from 'lucide-react';
import 'swiper/css';

const TestimonialsSection = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      projectName: "Project Name",
      content: "Crafting user-friendly, cross platform solutions with efficiency. Crafting user-friendly, cross platform solutions with efficiency. Crafting user-friendly, cross platform solutions with efficiency.",
      name: "Emily Kristen",
      position: "CEO at Google",
      avatar: "https://via.placeholder.com/48x48?text=EK&bg=374151&color=fff",
      company: "Google",
      icon: Chrome
    },
    {
      id: 2,
      projectName: "E-Commerce Platform",
      content: "The team delivered an exceptional solution that exceeded our expectations. Their attention to detail and technical expertise made all the difference in our project's success.",
      name: "Michael Chen",
      position: "CTO at Amazon",
      avatar: "https://via.placeholder.com/48x48?text=MC&bg=374151&color=fff",
      company: "Amazon",
      icon: ShoppingBag
    },
    {
      id: 3,
      projectName: "Mobile Banking App",
      content: "Outstanding work on our mobile application. The user experience is seamless and the performance is exceptional. Couldn't have asked for a better development partner.",
      name: "Sarah Johnson",
      position: "Product Lead at Apple",
      avatar: "https://via.placeholder.com/48x48?text=SJ&bg=374151&color=fff",
      company: "Apple",
      icon: Smartphone
    },
    {
      id: 4,
      projectName: "AI Analytics Dashboard",
      content: "Their innovative approach to solving complex problems helped us streamline our operations. The dashboard they built has become an essential tool for our team.",
      name: "David Wilson",
      position: "Head of Engineering at Meta",
      avatar: "https://via.placeholder.com/48x48?text=DW&bg=374151&color=fff",
      company: "Meta",
      icon: Layers
    },
    {
      id: 5,
      projectName: "Cloud Infrastructure",
      content: "Exceptional expertise in cloud architecture and deployment. They helped us migrate our entire infrastructure with zero downtime. Highly recommended for complex projects.",
      name: "Lisa Thompson",
      position: "VP of Technology at Microsoft",
      avatar: "https://via.placeholder.com/48x48?text=LT&bg=374151&color=fff",
      company: "Microsoft",
      icon: Cloud
    }
  ];

  const handleSlideClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  // Add custom styles for Swiper states since Tailwind can't directly target pseudo-classes
  useEffect(() => {
    const style = document.createElement('style');
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
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            What clients are saying about us
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Crafting user-friendly, cross platform solutions with efficiency
          </p>
        </div>

        <div className="relative -mx-4 md:-mx-8 lg:-mx-16 xl:-mx-32">
          <Swiper
            ref={swiperRef}
            slidesPerView={1.8}
            centeredSlides={true}
            spaceBetween={40}
            grabCursor={true}
            loop={true}
            speed={600}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 1.4,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 1.6,
                spaceBetween: 35
              },
              1024: {
                slidesPerView: 1.8,
                spaceBetween: 40
              },
              1280: {
                slidesPerView: 1.8,
                spaceBetween: 50
              }
            }}
            modules={[Autoplay]}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => {
              const IconComponent = testimonial.icon;
              return (
                <SwiperSlide 
                  key={testimonial.id}
                  onClick={() => handleSlideClick(index)}
                  className="cursor-pointer"
                >
                  <div className="max-w-2xl mx-auto bg-gray-900 bg-opacity-80 border border-gray-800 rounded-2xl p-10 md:p-10 h-full flex flex-col justify-between backdrop-blur-sm transition-all duration-300 min-h-[420px] md:min-h-[420px] hover:border-gray-700">
                    <div>
                      <h3 className="text-white text-2xl md:text-3xl font-medium mb-6">
                        {testimonial.projectName}
                      </h3>
                      <blockquote className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                        "{testimonial.content}"
                      </blockquote>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h4 className="text-white text-base md:text-lg font-medium">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-400 text-sm md:text-base">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-sm md:text-base font-medium hidden sm:inline">
                          {testimonial.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;