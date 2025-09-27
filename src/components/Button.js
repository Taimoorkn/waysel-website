"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", className = "", onClick, ...props }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    base: "!p-0 animated-underlined",
    primary: "btn-scale btn-primary rounded-[4px] px-4 py-[8px] xl:px-7",
    secondary: "btn-scale btn-secondary rounded-[4px] px-4 py-[8px] xl:px-7",
  };

  const classes = `button ${variants[variant]} ${className}`;
  const handleClick = onClick || (() => router.push("/contact"));

  // Get text styling based on variant
  const getTextClasses = () => {
    switch (variant) {
      case "primary":
        return "gradient-btn BodyTextMedium nav-link-text gradient-animated-text";
      case "secondary":
        return "BodyTextMedium BodyText nav-link-text";
      default:
        return "BodyText nav-link-text";
    }
  };

  if (variant === "primary") {
    // For gradient primary buttons, use calculated gradient positions for continuous effect
    const letters = children.split("");

    return (
      <Link
        className={classes}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <div style={{ position: "relative", overflow: "hidden", display: "inline-flex", alignItems: "baseline" }}>
          {letters.map((char, index) => {
            return (
              <motion.span
                key={index}
                className="BodyTextMedium nav-link-text"
                style={{
                  display: "inline-block",
                  position: "relative",
                  background: "linear-gradient(90deg, #4227CA 0%, #FB3081 50%, #ED3D0C 100%)",
                  backgroundSize: `${letters.length}00%`,
                  backgroundPosition: `${(index / (letters.length - 1)) * 100}% 0`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  WebkitFontSmoothing: "antialiased",
                }}
                initial={{ y: "100%" }}
                animate={{ y: isHovered ? "-100%" : "0%" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.012,
                  ease: [0.625, 0.05, 0.1, 0.9],
                }}
              >
                {char === " " ? "\u00A0" : char}
                <span
                  className="BodyTextMedium nav-link-text"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    display: "inline-block",
                    background: "linear-gradient(90deg, #4227CA 0%, #FB3081 50%, #ED3D0C 100%)",
                    backgroundSize: `${letters.length}00%`,
                    backgroundPosition: `${(index / (letters.length - 1)) * 100}% 0`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              </motion.span>
            );
          })}
        </div>
      </Link>
    );
  }

  // Create animated text for non-gradient buttons
  const letters = children.split("").map((char, index) => {
    const delay = (index * 0.01).toFixed(8);

    return (
      <div
        key={index}
        style={{
          position: "relative",
          display: "inline-block",
          transitionDelay: `${delay}s`,
          animationDelay: `${delay}s`,
        }}
        className="single-letter"
      >
        <span className={getTextClasses()}>{char === " " ? "\u00A0" : char}</span>
        <span className={getTextClasses()} style={{ position: "absolute", top: "100%", left: 0 }}>
          {char === " " ? "\u00A0" : char}
        </span>
      </div>
    );
  });

  return (
    <Link className={classes} onClick={handleClick} {...props}>
      <>
        <div style={{ position: "relative", overflow: "hidden" }}>{letters}</div>
      </>
    </Link>
  );
};

export default Button;
