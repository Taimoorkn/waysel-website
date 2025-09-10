"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Button = ({
 children,
 variant = "primary",
 className = "",
 onClick,
 ...props
}) => {
 const router = useRouter();
 const baseStyles = "font-neueMontreal transition-colors duration-200";

 const variants = {
 primary: "bg-accent text-white hover:bg-black hover:text-white px-6 py-2 rounded-md font-medium text-base border border-accent max-sm:text-xs max-sm:px-3 max-sm:py-[6px] max-sm:font-normal",
 secondary: "bg-transparent text-primary-text px-6 py-[10px] font-semibold text-[14px] border border-black hover:bg-black hover:text-white rounded-[32px] max-sm:text-xs max-sm:px-3 max-sm:py-[6px] max-sm:font-normal",
 tertiary: "bg-transparent text-primary-text hover:bg-black hover:text-white px-6 py-2 border border-black rounded-md font-medium text-base max-sm:text-xs max-sm:px-3 max-sm:py-[6px] max-sm:font-normal",
 footer: "bg-accent w-1/2 text-white px-6 py-2 font-light text-[16px] border border-black hover:bg-white hover:text-black rounded-md max-sm:text-xs max-sm:px-3 max-sm:py-[6px] max-sm:font-normal",
 project_card: "border border-dark_border bg-transparent text-primary-text px-4 py-[8px] font-semibold text-[14px] hover:bg-black hover:text-white rounded-[32px] max-sm:text-xs max-sm:px-3 max-sm:py-[6px] max-sm:font-normal"
 };

 const classes = `${baseStyles} ${variants[variant]} ${className}`;

 // Default onClick handler to navigate to "/contact" if no onClick is provided
 const handleClick = onClick || (() => router.push("/contact"));

 return (
 <button
 className={classes}
 onClick={handleClick}
 {...props}
 >
 {children}
 </button>
 );
};

export default Button;