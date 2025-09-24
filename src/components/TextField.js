import React from "react";

const TextField = ({ children, variant = "animated", className = "", ...props }) => {
  const baseStyles = "BodyText";

  const variants = {
    static: {
      component: (
        <div className={`${baseStyles} static ${className}`} {...props}>
          <p>{children}</p>
        </div>
      ),
    },
    animated: {
      component: renderAnimatedText(children, `${baseStyles} nav-link-text ${className}`, props),
    },
    animated_underlined: {
      component: renderAnimatedText(
        children,
        `${baseStyles} nav-link-text animated-underlined ${className}`,
        props,
        false
      ),
    },
  };

  return variants[variant].component;
};

const renderAnimatedText = (text, className, props, showUnderline = false) => {
  // Extract gradient class from className if present
  const hasGradient = className.includes('gradient-primary');
  const baseClassName = className.replace('gradient-primary', '').trim();
  const gradientClass = hasGradient ? 'gradient-primary' : '';

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
        <span className={gradientClass} style={{ position: "absolute", top: "100%", left: 0 }}>{char === " " ? "\u00A0" : char}</span>
      </div>
    );
  });

  return (
    <div data-letters-delay="" data-split="letters" className={baseClassName} split-ran="true" {...props}>
      <div style={{ position: "relative", overflow: "hidden" }}>{letters}</div>
    </div>
  );
};

export default TextField;
