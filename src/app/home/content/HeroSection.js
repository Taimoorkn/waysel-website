"use client";

import Button from "@/components/Button";
import { useRef, useState, useEffect } from "react";

const HeroSection = () => {
  const mapRef = useRef(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    city: "",
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const object = mapRef.current;

    const setupEventListeners = () => {
      if (object && object.contentDocument) {
        const svgDoc = object.contentDocument;
        const svg = svgDoc.querySelector("svg");
        const paths = {
          Lahore: svgDoc.getElementById("Lahore"),
          Manchester: svgDoc.getElementById("Manchester"),
          Texas: svgDoc.getElementById("Texas"),
        };

        const showTooltip = (city, path) => {
          if (!path) return;
          const bbox = path.getBBox();
          const svgPoint = svg.createSVGPoint();
          // Center horizontally, top vertically
          svgPoint.x = bbox.x + bbox.width / 2; // Center of the hexagon
          svgPoint.y = bbox.y; // Top of the hexagon
          const screenPoint = svgPoint.matrixTransform(svg.getScreenCTM());
          const x = screenPoint.x;
          const y = screenPoint.y - 10; // Small offset above the hexagon
          setTooltip({ visible: true, city, x, y });
        };

        const hideTooltip = () => {
          setTooltip({ visible: false, city: "", x: 0, y: 0 });
        };

        Object.entries(paths).forEach(([city, path]) => {
          if (path) {
            path.addEventListener("mouseenter", () => showTooltip(city, path));
            path.addEventListener("mouseleave", hideTooltip);
          }
        });

        return () => {
          Object.entries(paths).forEach(([city, path]) => {
            if (path) {
              path.removeEventListener("mouseenter", () => showTooltip(city, path));
              path.removeEventListener("mouseleave", hideTooltip);
            }
          });
        };
      }
    };

    const checkSVGLoaded = () => {
      if (object && object.contentDocument) {
        const cleanup = setupEventListeners();
        return cleanup;
      } else {
        const timeout = setTimeout(checkSVGLoaded, 100);
        return () => clearTimeout(timeout);
      }
    };

    const handleLoad = () => {
      const cleanup = setupEventListeners();
      if (cleanup) {
        cleanupFunctions.push(cleanup);
      }
    };

    const cleanupFunctions = [];
    if (object) {
      object.addEventListener("load", handleLoad);
      const cleanup = checkSVGLoaded();
      if (cleanup) {
        cleanupFunctions.push(cleanup);
      }
    }

    return () => {
      if (object) {
        object.removeEventListener("load", handleLoad);
      }
      cleanupFunctions.forEach((cleanup) => cleanup && cleanup());
    };
  }, []);

  return (
    <section className="relative flex h-[630px] bg-primary_bg px-4 max-2xl:items-center max-2xl:justify-center max-2xl:overflow-hidden max-2xl:bg-gradient-to-br max-2xl:from-indigo-900 max-2xl:to-blue-900 2xl:px-[9.5rem] 3xl:h-[800px]">
      {/* -----------------------------Animated Pulsing elements & Grid pattern overlay------------------------------*/}
      <div className="absolute left-10 top-20 size-24 animate-pulse rounded-full bg-blue-400/20 blur-xl 2xl:hidden" />
      <div className="absolute bottom-20 right-10 size-24 animate-pulse rounded-full bg-purple-400/30 blur-2xl 2xl:hidden" />
      <div className="bg-grid-white10 absolute inset-0 2xl:hidden" />
      {/* -----------------------------------------------------------------------------------------------------------*/}

      <div className="flex h-full flex-col items-center justify-center max-sm:z-10 max-sm:text-center 2xl:items-start 2xl:text-left">
        <p className="font-neueMontreal text-[10px] font-medium text-white 2xl:text-primary_text 3xl:text-sm">
          All good stories deserve embellishment - Gandalf the Grey
        </p>
        <span className="font-neueMontreal text-4xl font-medium text-white xl:text-[54px] xl:font-medium 2xl:text-primary_text 3xl:text-[64px]">
          We are a{" "}
          <span className="text-accent">
            Software
            <p>
              Development <span className="text-white 2xl:text-primary_text">Company.</span>
            </p>
          </span>
        </span>
        <p className="mt-4 font-neueMontreal text-sm font-medium text-white xl:text-lg 2xl:text-primary_text">
          Partnering with You to Build Smarter, Stronger Digital Solutions
        </p>
        <Button variant="primary" className="mt-4 xl:mt-8">
          Get Started
        </Button>
        <div className="mt-8 flex w-full items-center justify-center gap-4 text-xs font-medium text-white lg:hidden">
          <div className="w-1/3 rounded-lg bg-accent/20 py-3">
            <div className="mx-auto mb-2 h-3 w-3 rounded-full bg-accent"></div>
            <span>Lahore</span>
          </div>
          <div className="w-1/3 rounded-lg bg-accent/20 py-3">
            <div className="mx-auto mb-2 h-3 w-3 rounded-full bg-accent"></div>
            <span>Manchester</span>
          </div>
          <div className="w-1/3 rounded-lg bg-accent/20 py-3">
            <div className="mx-auto mb-2 h-3 w-3 rounded-full bg-accent"></div>
            <span>Texas</span>
          </div>
        </div>
      </div>

      <div className="absolute right-6 hidden 2xl:block 3xl:right-20">
        <object
          ref={mapRef}
          type="image/svg+xml"
          data="/images/Map.svg"
          className="2xl:h-[500px] 2xl:w-[878px] 3xl:h-[600px] 3xl:w-[1052px]"
        >
          Your browser does not support SVG
        </object>
        {tooltip.visible && (
          <div
            className="absolute rounded-lg bg-primary_bg px-4 py-2 text-black shadow-lg"
            style={{
              left: tooltip.x,
              top: tooltip.y,
              transform: "translate(-50%, -100%)",
            }}
          >
            {tooltip.city}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
