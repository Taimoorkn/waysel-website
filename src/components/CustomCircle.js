"use client";

const CustomCircle = ({ size, iconSize, children }) => {
  const style = {
    position: "relative",
    borderRadius: "50%", // Ensure perfect circle
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    boxShadow:
      "-0.15em -0.15em 0.15em -0.075em rgba(5, 5, 5, 0.25), 0.0375em 0.0375em 0.0675em 0 rgba(5, 5, 5, 0.1)",
    width: `${size}px`,
    height: `${size}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const outerStyle = {
    position: "relative",
    zIndex: 1,
    borderRadius: "50%", // Ensure perfect circle
    boxShadow:
      "0 0.05em 0.05em -0.01em rgba(5, 5, 5, 1), 0 0.01em 0.01em -0.01em rgba(5, 5, 5, 0.5), 0.15em 0.3em 0.1em -0.01em rgba(5, 5, 5, 0.25)",
  };

  const innerStyle = {
    "--inset": "0.035em",
    position: "relative",
    zIndex: 1,
    borderRadius: "50%", // Ensure perfect circle
    padding: "1em 1.5em",
    backgroundImage: "linear-gradient(135deg, rgba(230, 230, 230, 1), rgba(180, 180, 180, 1))",
    boxShadow: `
 0 0 0 0 inset rgba(5, 5, 5, 0.1),
 -0.05em -0.05em 0.05em 0 inset rgba(5, 5, 5, 0.25),
 0 0 0 0 inset rgba(5, 5, 5, 0.1),
 0 0 0.05em 0.2em inset rgba(255, 255, 255, 0.25),
 0.025em 0.05em 0.1em 0 inset rgba(255, 255, 255, 1),
 0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.25),
 -0.075em -0.25em 0.25em 0.1em inset rgba(5, 5, 5, 0.25)
 `,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  };

  const spanStyle = {
    position: "relative",
    zIndex: 4,
    fontFamily: '"Inter", sans-serif',
    letterSpacing: "-0.05em",
    fontWeight: 500, // Using medium weight (500)
    color: "rgba(0, 0, 0, 0)",
    backgroundImage: "linear-gradient(135deg, rgba(25, 25, 25, 1), rgba(75, 75, 75, 1))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    textShadow: "rgba(0, 0, 0, 0.1) 0 0 0.1em",
    userSelect: "none",
    fontSize: `${iconSize}px`, // Use iconSize for text scaling
    textAlign: "center",
  };

  const iconStyle = {
    fontSize: `${iconSize}px`,
  };

  return (
    <div style={style}>
      <div style={outerStyle}>
        <div style={innerStyle}>
          {children ? <span style={spanStyle}>{children}</span> : <div style={iconStyle}>👤</div>}
        </div>
      </div>
      <div
        style={{
          content: '""',
          position: "absolute",
          zIndex: 0,
          width: `calc(100% + 0.3em)`,
          height: `calc(100% + 0.3em)`,
          top: "-0.15em",
          left: "-0.15em",
          borderRadius: "50%", // Ensure perfect circle
          background:
            "linear-gradient(-135deg, rgba(5, 5, 0.5), transparent 20%, transparent 100%)",
          filter: "blur(0.0125em)",
          opacity: 0.25,
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
};

export default CustomCircle;
