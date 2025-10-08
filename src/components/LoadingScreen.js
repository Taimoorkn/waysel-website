"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen({ children }) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true); // controls mount/unmount
  const [fadeOut, setFadeOut] = useState(false); // controls opacity

  useEffect(() => {
    setIsVisible(true);
    setFadeOut(false);

    // 1️⃣ Duration before fade-out starts
    const visibleTime = 1500; // adjust this (ms)

    // 2️⃣ Duration of fade-out itself
    const fadeDuration = 500; // adjust this (ms)

    const fadeTimer = setTimeout(() => setFadeOut(true), visibleTime);
    const removeTimer = setTimeout(() => setIsVisible(false), visibleTime + fadeDuration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [pathname]);

  const letters = "LOADING".split("");

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text- xl font-satoshi font-thin tracking-[0.4em]"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      )}
      {children}
    </>
  );
}
