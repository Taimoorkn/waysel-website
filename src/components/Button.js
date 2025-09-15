"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TextField from "./TextField";
import Link from "next/link";

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  textVariant = "animated",
  ...props
}) => {
  const router = useRouter();
  const baseStyles =
    "font-neueMontreal font-medium w-full rounded-md px-4 py-3 sm:w-auto sm:px-[26px] sm:py-[15px]";

  const variants = {
    primary: "button bg-[#efeeec] text-center text-[#131313]",
    secondary: "button-animate button text-[#efeeec] bg-[#efeeec26] backdrop-blur-[25px] rounded-md",
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
