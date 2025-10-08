"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  isActive = false,
  scrollToContact = false, // 👈 new optional prop
  ...props
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const isCurrentPage = props.href && pathname === props.href;
  const shouldBeActive = isActive || isCurrentPage;

  const variants = {
    base: "!p-0 animated-underlined BodyText",
    primary: "btn-scale btn-primary BodyTextMedium !text-dark",
    secondary: "btn-scale btn-secondary BodyTextMedium",
  };

  const classes = `button rounded-[4px] px-4 py-[10px] xl:px-7 ${variants[variant]} ${
    shouldBeActive ? "active" : ""
  } ${className}`;

  const handleClick = async (e) => {
    // If scrollToContact is not true → default button behavior
    if (!scrollToContact) {
      if (onClick) onClick(e);
      return;
    }

    // Otherwise trigger the homepage + scroll behavior
    e.preventDefault();

    if (pathname !== "/") {
      await router.push("/");
    }

    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 600); // delay allows route transition to complete
  };

  const letters = children.split("").map((char, index) => {
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
        className="single-letter nav-link-text"
      >
        <span>{char === " " ? "\u00A0" : char}</span>
        <span style={{ position: "absolute", top: "100%", left: 0 }}>
          {char === " " ? "\u00A0" : char}
        </span>
      </div>
    );
  });

  return (
    <Link href={props.href || "/"} onClick={handleClick} className={classes} {...props}>
      <div style={{ position: "relative", overflow: "hidden" }}>{letters}</div>
    </Link>
  );
};

export default Button;
