"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TextField from "./TextField";
import Link from "next/link";

const Button = ({ children, variant = "primary", className = "", onClick, textVariant = "animated", ...props }) => {
  const router = useRouter();
  const baseStyles =
    "button text-sm xl:text-base tracking-wide font-medium text-center w-full rounded-[4px] px-4 py-3 xl:w-auto xl:px-[26px] xl:py-[14px]";

  const variants = {
    base: "text-primary !p-0 !w-auto",
    primary: "btn-scale btn-primary text-secondary",
    secondary: "btn-scale btn-secondary text-primary",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  // Default onClick handler to navigate to "/contact" if no onClick is provided
  const handleClick = onClick || (() => router.push("/contact"));

  return (
    <Link className={classes} onClick={handleClick} {...props}>
      <TextField variant={textVariant}>{children}</TextField>
    </Link>
  );
};

export default Button;
