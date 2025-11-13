"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen({ children }) {
  const pathname = usePathname();
  const [showChildren, setShowChildren] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setShowChildren(false);
    setFadeOut(false);

    const visibleTime = 1500;
    const fadeDuration = 500;

    const fadeTimer = setTimeout(() => setFadeOut(true), visibleTime);
    const showTimer = setTimeout(() => setShowChildren(true), visibleTime + fadeDuration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(showTimer);
    };
  }, [pathname]);

  const letters = "LOADING".split("");

  return (
    <>
      {!showChildren && (
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
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="font-satoshi text-xl font-thin tracking-[0.4em]"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* render page only after loader finishes */}
      {showChildren && children}
    </>
  );
}
