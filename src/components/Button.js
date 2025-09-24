"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Button = ({ children, variant = "primary", className = "", onClick, textVariant = "animated", ...props }) => {
  const router = useRouter();
  const baseStyles = "button rounded-[4px] px-4 py-[11px] xl:px-7";

  const variants = {
    base: "!p-0",
    primary: "btn-scale btn-primary",
    secondary: "btn-scale btn-secondary",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  // Default onClick handler to navigate to "/contact" if no onClick is provided
  const handleClick = onClick || (() => router.push("/contact"));

  // Apply gradient to text for primary variant
  const textClass = variant === "primary" ? "gradient-primary" : "";

  // TextField logic merged into Button
  const renderText = () => {
    const textBaseStyles = "BodyText";

    const textVariants = {
      static: (
        <div className={`${textBaseStyles} static ${textClass}`}>
          <p>{children}</p>
        </div>
      ),
      animated: renderAnimatedText(children, `${textBaseStyles} nav-link-text ${textClass}`),
      animated_underlined: renderAnimatedText(
        children,
        `${textBaseStyles} nav-link-text animated-underlined ${textClass}`,
        false
      ),
    };

    return textVariants[textVariant];
  };

  return (
    <Link className={classes} onClick={handleClick} {...props}>
      {renderText()}
    </Link>
  );
};

const renderAnimatedText = (text, className, showUnderline = false) => {
  // Extract gradient class from className if present
  const hasGradient = className.includes("gradient-primary");
  const baseClassName = className.replace("gradient-primary", "").trim();
  const gradientClass = hasGradient ? "gradient-primary" : "";

  const letters = text.split("").map((char, index) => {
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
        <span className={gradientClass}>{char === " " ? "\u00A0" : char}</span>
        <span className={gradientClass} style={{ position: "absolute", top: "100%", left: 0 }}>
          {char === " " ? "\u00A0" : char}
        </span>
      </div>
    );
  });

  return (
    <div data-letters-delay="" data-split="letters" className={baseClassName} split-ran="true">
      <div style={{ position: "relative", overflow: "hidden" }}>{letters}</div>
    </div>
  );
};

export default Button;
