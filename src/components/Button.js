"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Button = ({ children, variant = "primary", className = "", onClick, ...props }) => {
  const router = useRouter();
  const baseStyles = "font-neueMontreal transition-colors duration-200";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent_dark hover:text-white px-6 py-2 rounded-lg font-medium text-base border border-accent transition-all duration-200 max-sm:text-xs max-sm:px-3 max-sm:py-[6px] max-sm:font-medium",
    secondary:
      "bg-surface_bg text-primary_text px-6 py-[10px] font-medium text-[14px] border border-border_primary hover:bg-hover_bg hover:text-primary_text rounded-lg transition-all duration-200 max-sm:text-xs max-sm:px-3 max-sm:py-[6px] max-sm:font-medium",
    tertiary:
      "bg-transparent text-secondary_text hover:bg-surface_bg hover:text-primary_text px-6 py-2 border border-border_secondary rounded-lg font-medium text-base transition-all duration-200 max-sm:text-xs max-sm:px-3 max-sm:py-[6px] max-sm:font-medium",
    footer:
      "bg-accent w-1/2 text-white px-6 py-2 font-medium text-[16px] border border-accent hover:bg-accent_dark hover:text-white rounded-lg transition-all duration-200 max-sm:text-xs max-sm:px-3 max-sm:py-[6px] max-sm:font-medium",
    project_card:
      "border border-border_primary bg-card_bg text-primary_text px-4 py-[8px] font-medium text-[14px] hover:bg-hover_bg hover:text-primary_text rounded-lg transition-all duration-200 max-sm:text-xs max-sm:px-3 max-sm:py-[6px] max-sm:font-medium",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  // Default onClick handler to navigate to "/contact" if no onClick is provided
  const handleClick = onClick || (() => router.push("/contact"));

  return (
    <button className={classes} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
