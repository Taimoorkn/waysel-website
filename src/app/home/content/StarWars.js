import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../../components/SectionHeading";

const StarWars = () => {
  const [binaryText, setBinaryText] = useState("");

  useEffect(() => {
    const generateBinaryText = () => {
      const screenWidth = window.innerWidth;
      // Estimate characters that fit based on screen width and letter spacing
      const charactersNeeded = Math.floor(screenWidth / 20.5); // Adjust 20 based on font size and spacing
      let text = "";
      for (let i = 0; i < charactersNeeded; i++) {
        text += Math.random() > 0.5 ? "1" : "0";
      }
      setBinaryText(text);
    };

    generateBinaryText();
    window.addEventListener("resize", generateBinaryText);

    return () => window.removeEventListener("resize", generateBinaryText);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Top Binary Pattern */}
      <div className="absolute left-0 top-0 h-1/2 w-full overflow-hidden">
        <div
          className="relative h-full w-full font-mono text-gray-300/80"
          style={{
            transform: "perspective(170px) rotateX(-25deg)",
            transformOrigin: "center top",
          }}
        >
          {Array.from({ length: 120 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-full text-center opacity-65"
              animate={{
                y: [-100, 700],
                letterSpacing: ["0.8rem", "0.02rem"],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.6,
              }}
            >
              {binaryText}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 z-10 flex min-h-[70dvh] items-center justify-center">
        <SectionHeading title="We are a team of innovators dedicated to solving complex challenges with elegant digital solutions." />
      </div>

      {/* Bottom Binary Pattern */}
      <div className="absolute bottom-0 left-0 h-1/2 w-full overflow-hidden">
        <div
          className="relative h-full w-full font-mono text-gray-300/80"
          style={{
            transform: "perspective(170px) rotateX(25deg)",
            transformOrigin: "center bottom",
          }}
        >
          {Array.from({ length: 120 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-full text-center opacity-65"
              animate={{
                y: [700, -100],
                letterSpacing: ["0.8rem", "0.02rem"],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
                delay: (112 - i) * 0.6,
              }}
            >
              {binaryText}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarWars;
