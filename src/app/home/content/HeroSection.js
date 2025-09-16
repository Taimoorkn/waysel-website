"use client";

import Link from "next/link";
import { useEffect } from "react";
import TextField from "../../../components/TextField";
import Button from "@/components/Button";

const HeroSection = () => {
  useEffect(() => {
    // Load Unicorn Studio library with initialization
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: !1 };
      var i = document.createElement("script");
      i.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js";
      i.onload = function () {
        window.UnicornStudio.isInitialized ||
          (UnicornStudio.init(), (window.UnicornStudio.isInitialized = !0));
      };
      (document.head || document.body).appendChild(i);
    }
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-start overflow-hidden px-4 pt-[200px] sm:px-9">
      {/* Unicorn Studio WebGL mesh background */}
      <div
        data-us-project="u8G0keiRdDw7PbxSpQ3N"
        className="absolute inset-0 -z-20 h-full w-full"
      ></div>
      {/* Overlay to cover watermark - adjust position as needed */}
      <div className="absolute bottom-6 left-0 right-0 -z-10 mx-auto h-16 w-48 bg-[#090909]"/>

      {/* Left sidebar text */}
      <div className="flex items-start justify-between gap-24">
        <div className="hidden items-center justify-between pr-20 pt-6 font-neueMontreal text-sm font-medium text-[#9c9b9a] sm:flex sm:text-lg">
          <div className="flex gap-4 sm:gap-8 md:gap-12">
            <div className="flex flex-col">
              {["Buttons", "Components", "Transitions", "Animations", "Loaders"].map(
                (item, index) => (
                  <span key={index}>{item}</span>
                )
              )}
            </div>
            <div className="flex flex-col">
              {["Documentation", "Tools", "References", "Tutorials"].map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex w-full flex-col items-start justify-start">
          <div className="space-y-[10px] text-start font-neueMontreal text-3xl font-medium !leading-[0.9] !tracking-[-1px] text-[#EFEEEC] sm:text-[94px]">
            <h1>Start building websites</h1>
            <h1>people remember.</h1>
          </div>
          <div className="mt-8 flex items-center justify-between gap-2 font-neueMontreal text-sm font-medium sm:mt-12 sm:text-base">
            <Button variant="primary" href="/login">Become a Member</Button>
            <Button variant="secondary" href="/get-started">Abous Us</Button>
          </div>
          <div className="mt-20 max-w-md">
            <p className="font-neueMontreal text-sm font-medium leading-snug text-[#EFEEEC] sm:text-base">
              Waysel came from constantly digging through old projects wondering, &apos;How did I build
              that again?&apos; It is basically our personal toolbox, packed with components, techniques,
              tricks and tutorials—and it will keep growing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
