import React from "react";

const TextField = ({ children, variant = "animated", className = "", ...props }) => {
  const baseStyles = "text-field";

  const variants = {
    static: {
      component: (
        <div className={`${baseStyles} static ${className}`} {...props}>
          <p>{children}</p>
        </div>
      )
    },
    animated: {
      component: renderAnimatedText(children, `${baseStyles} nav-link-text border ${className}`, props)
    },
    animated_underlined: {
      component: renderAnimatedText(children, `${baseStyles} nav-link-text border animated-underlined ${className}`, props, true)
    }
  };

  return variants[variant].component;
};

const renderAnimatedText = (text, className, props, showUnderline = false) => {
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
      className={className}
      split-ran="true"
      {...props}
    >
      <p style={{ position: "relative", overflow: "hidden" }}>{letters}</p>
      {showUnderline && <div className="animated-underline"></div>}
    </div>
  );
};

export default TextField;