import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Chrome, ShoppingBag, Smartphone, Layers, Cloud } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const TestimonialsSection = () => {
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

  return (
    <>
      <style jsx>{`
        .swiper {
          overflow: visible !important;
        }
        
        .swiper-slide {
          background: transparent;
          height: auto;
        }
        
        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right {
          background-image: none;
        }
        
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #4B5563;
          opacity: 1;
          transition: all 0.3s;
        }
        
        .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 4px;
          background: #FFFFFF;
        }
        
        .testimonial-card {
          background: #0A0A0A;
          border: 1px solid #1F2937;
          border-radius: 16px;
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
        }
        
        .swiper-slide-active .testimonial-card {
          border-color: #374151;
        }
        
        .swiper-slide:not(.swiper-slide-active) .testimonial-card {
          opacity: 0.5;
        }
      `}</style>

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

          <div className="max-w-7xl mx-auto">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false
              }}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                clickable: true,
                dynamicBullets: false
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }}
              modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
              className="testimonials-swiper pb-12"
            >
              {testimonials.map((testimonial) => {
                const IconComponent = testimonial.icon;
                return (
                  <SwiperSlide key={testimonial.id} style={{ width: '400px', height: 'auto' }}>
                    <div className="testimonial-card">
                      <div>
                        <h3 className="text-white text-xl font-medium mb-6">
                          {testimonial.projectName}
                        </h3>
                        <blockquote className="text-gray-300 text-base leading-relaxed mb-8">
                          "{testimonial.content}"
                        </blockquote>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                          />
                          <div>
                            <h4 className="text-white font-medium">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-400 text-sm">{testimonial.position}</p>
                          </div>
                        </div>
                        {/* Company Icon */}
                        <div className="flex items-center space-x-2 text-gray-500">
                          <IconComponent className="w-5 h-5" />
                          <span className="text-sm font-medium">{testimonial.company}</span>
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
    </>
  );
};

export default TestimonialsSection;