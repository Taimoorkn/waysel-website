import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../../components/SectionHeading";

const StarWars = () => {
  const [binaryText, setBinaryText] = useState("");

  const generateBinaryText = () => {
    if (typeof window === "undefined") return "";
    const screenWidth = window.innerWidth;
    // Estimate characters that fit based on screen width and letter spacing
    const charactersNeeded = Math.floor(screenWidth / 32); // Adjust 20 based on font size and spacing
    let text = "";
    for (let i = 0; i < charactersNeeded; i++) {
      text += Math.random() > 0.5 ? "1" : "0";
    }
    return text;
  };

  useEffect(() => {
    setBinaryText(generateBinaryText());

    const handleResize = () => {
      setBinaryText(generateBinaryText());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Top Binary Pattern */}
      <div className="absolute left-0 top-0 h-1/2 w-full overflow-hidden">
        <div
          className="relative h-full w-full font-mono text-gray-300/50"
          style={{
            transform: "perspective(170px) rotateX(-25deg)",
            transformOrigin: "center top",
          }}
        >
          {Array.from({ length: 120 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-full text-center"
              animate={{
                y: [-100, 700],
                letterSpacing: ["0.8rem", "0.2rem"],
                fontSize: ["2rem", "1rem"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
            >
              {generateBinaryText()}
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
          {Array.from({ length: 110 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-full text-center opacity-65"
              animate={{
                y: [700, -100],
                letterSpacing: ["0.8rem", "0.2rem"],
                fontSize: ["2rem", "1rem"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                delay: (103 - i) * 1.5,
              }}
            >
              {generateBinaryText()}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarWars;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import SectionHeading from "../../../components/SectionHeading";

// import Crawl from "react-star-wars-crawl";

// // Import the necessary styles, or include them another way with your build process
// import "react-star-wars-crawl/lib/index.css";

// const StarWars = () => (
//   <>
//     {/* <div className="scale-y-[-1]">
//       <Crawl text="0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, " />
//     </div>
//     <div className="absolute inset-0 z-10 flex min-h-[70dvh] items-center justify-center">
//       <SectionHeading title="We are a team of innovators dedicated to solving complex challenges with elegant digital solutions." />
//     </div>
//     <Crawl text="0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, 0I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I0I0I00I0I00I0I00I0I00I0I0I0I00I0I00I0I00I, " /> */}

//     <div class="fade"></div>

//     <section class="star-wars">
//       <div class="crawl">
//         <div class="title">
//           <p>Episode IV</p>
//           <h1>A New Hope</h1>
//         </div>

//         <p>
//           It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory
//           against the evil Galactic Empire.
//         </p>
//         <p>
//           During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR,
//           an armored space station with enough power to destroy an entire planet.
//         </p>
//         <p>
//           Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen
//           plans that can save her people and restore freedom to the galaxy…
//         </p>
//       </div>
//     </section>
//   </>
// );
