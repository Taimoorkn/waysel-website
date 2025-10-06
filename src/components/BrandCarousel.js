"use client";
import Marquee from "react-fast-marquee";

export default function BrandCarousel() {
  const brands = [
    "/logos_google.png",
    "/logos_google.png",
    "/logos_google.png",
    "/logos_google.png",
    "/logos_google.png",
  ];

  return (
    <div className="bg-primary_bg py-8">
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {brands.map((src, i) => (
          <div key={i} className="mx-16">
            <img
              src={src}
              alt={`brand-${i}`}
              className="h-12 w-auto object-contain opacity-80 transition hover:opacity-100"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
