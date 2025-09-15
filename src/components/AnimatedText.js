import React from "react";

const AnimatedText = ({ text, className = "", ...props }) => {
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
        <span>{char === " " ? "\u00A0" : char}</span>
        <span style={{ position: "absolute", top: "100%", left: 0 }}>
          {char === " " ? "\u00A0" : char}
        </span>
      </div>
    );
  });

  return (
    <div
      data-letters-delay=""
      data-split="letters"
      className={`nav-link-text border ${className}`}
      split-ran="true"
      {...props}
    >
      <p style={{ position: "relative", overflow: "hidden" }}>{letters}</p>
    </div>
  );
};

export default AnimatedText;
