"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Button = ({ children, variant = "primary", className = "", onClick, ...props }) => {
  const router = useRouter();

  const variants = {
    base: "!p-0",
    primary: "btn-scale btn-primary rounded-[4px] px-4 py-[11px] xl:px-7",
    secondary: "btn-scale btn-secondary rounded-[4px] px-4 py-[11px] xl:px-7",
  };

  const classes = `button ${variants[variant]} ${className}`;
  const handleClick = onClick || (() => router.push("/contact"));

  // Get text styling based on variant
  const getTextClasses = () => {
    switch (variant) {
      case "primary":
        return "gradient-primary BodyTextBold nav-link-text";
      case "secondary":
        return "BodyTextBold BodyText nav-link-text";
      default:
        return "BodyText nav-link-text";
    }
  };

  // Create animated text
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
      <div style={{ position: "relative", overflow: "hidden" }}>{letters}</div>
    </Link>
  );
};

export default Button;
