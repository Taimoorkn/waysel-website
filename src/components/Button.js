"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TextField from "./TextField";

const Button = ({ children, variant = "primary", className = "", onClick, textVariant = "animated", ...props }) => {
  const router = useRouter();
  const baseStyles = "font-neueMontreal font-medium transition-all duration-200";

  const variants = {
    primary:
      "w-full rounded-md bg-[#efeeec] px-4 py-3 text-center text-[#131313] sm:w-auto sm:px-[26px] sm:py-[15px] text-sm sm:text-[17px]",
    secondary:
      "bg-surface_bg text-primary_text px-6 py-[10px] font-medium text-[14px] border border-border_primary hover:bg-hover_bg hover:text-primary_text rounded-lg transition-all duration-200 max-sm:text-xs max-sm:px-3 max-sm:py-[6px] max-sm:font-medium",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  // Default onClick handler to navigate to "/contact" if no onClick is provided
  const handleClick = onClick || (() => router.push("/contact"));

  return (
    <button className={classes} onClick={handleClick} {...props}>
      <TextField variant={textVariant}>{children}</TextField>
    </button>
  );
};

export default Button;
