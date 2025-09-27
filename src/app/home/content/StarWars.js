import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../../components/SectionHeading";

const StarWars = () => {
  const binaryText =
    "0110100101001010101010010101001010100101010010101001010100101010010101001010100101010010101001010100101010010101001010100101010010101001010100101010010101001010100101010010101001010100101010010101001010100101010010101001010";

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Top Binary Pattern */}
      <div className="absolute left-0 top-0 h-1/2 w-full overflow-hidden">
        <div
          className="relative h-full w-full font-mono text-gray-300/80"
          style={{
            transform: "perspective(200px) rotateX(-25deg)",
            transformOrigin: "center top",
            clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)",
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-full text-center"
              style={{
                fontSize: "1rem",
                opacity: 0.6,
                letterSpacing: "0.1rem",
              }}
              animate={{
                y: [600, -200],
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
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-full text-center"
              style={{
                fontSize: "1rem",
                opacity: 0.6,
                letterSpacing: "0.1rem",
              }}
              animate={{
                y: [600, -200],
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
    </div>
  );
};

export default StarWars;
