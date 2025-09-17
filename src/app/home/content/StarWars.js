import React, { useState, useEffect } from "react";

const StarWars = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const generateBinaryLine = () => {
    const charWidth = 8; // approximate width of a monospace character in pixels
    const length = Math.ceil(screenWidth / charWidth) + 20; // add buffer for transforms
    return Array.from({ length }, () => Math.round(Math.random())).join('');
  };

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Top Binary Pattern */}
      <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
        <div
          className="absolute inset-0 text-gray-300/80 font-mono"
          style={{
            transform: "perspective(170px) rotateX(-25deg)",
            transformOrigin: "center top",
            clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)"
          }}
        >
          {Array.from({ length: 20 }, (_, i) => {
            const distance = (19 - i) / 19;
            const scale = 1 + distance * 0.8;
            const opacity = 0.3 - distance * 0.2;

            return (
              <div
                key={i}
                className="w-full text-center"
                style={{
                  fontSize: `${1.2 + distance * 1.5}rem`,
                  lineHeight: `${1.4 + distance * 0.5}`,
                  opacity: opacity,
                  letterSpacing: `${distance * 0.2}rem`
                }}
              >
                {generateBinaryLine()}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center max-w-5xl px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
            We are a team of innovators dedicated to solving complex challenges with elegant digital solutions.
          </h1>
        </div>
      </div>

      {/* Bottom Binary Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden">
        <div
          className="absolute inset-0 text-gray-300/80 font-mono"
          style={{
            transform: "perspective(170px) rotateX(25deg)",
            transformOrigin: "center bottom",
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)"
          }}
        >
          {Array.from({ length: 20 }, (_, i) => {
            const distance = (19 - i) / 19;
            const scale = 1 + distance * 0.8;
            const opacity = 0.3 - distance * 0.2;

            return (
              <div
                key={i}
                className="w-full text-center"
                style={{
                  fontSize: `${1.2 + distance * 1.5}rem`,
                  lineHeight: `${1.4 + distance * 0.5}`,
                  opacity: opacity,
                  letterSpacing: `${distance * 0.2}rem`
                }}
              >
                {generateBinaryLine()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StarWars;