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
              path.removeEventListener("mouseenter", () =>
                showTooltip(city, path)
              );
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
    <section className="relative bg-primary_bg h-[630px] px-4 2xl:px-[9.5rem] 3xl:h-[800px] flex max-2xl:items-center max-2xl:justify-center max-2xl:overflow-hidden max-2xl:bg-gradient-to-br max-2xl:from-indigo-900 max-2xl:to-blue-900">
      {/* -----------------------------Animated Pulsing elements & Grid pattern overlay------------------------------*/}
      <div className="absolute top-20 left-10 size-24 bg-blue-400/20 rounded-full blur-xl animate-pulse 2xl:hidden" />
      <div className="absolute bottom-20 right-10 size-24 bg-purple-400/30 rounded-full blur-2xl animate-pulse 2xl:hidden" />
      <div className="absolute inset-0 bg-grid-white10 2xl:hidden" />
      {/* -----------------------------------------------------------------------------------------------------------*/}

      <div className="h-full flex flex-col items-center justify-center 2xl:items-start 2xl:text-left max-sm:z-10 max-sm:text-center">
        <p className="font-manrope text-white 2xl:text-primary_text font-medium text-[10px] 3xl:text-sm">
          All good stories deserve embellishment - Gandalf the Grey
        </p>
        <span className="text-white 2xl:text-primary_text font-normal font-clashGrotesk text-4xl xl:font-semibold xl:text-[54px] xl:leading-[54px] xl:tracking-[-1%] 3xl:text-[64px]">
          We are a{" "}
          <span className="text-accent">
            Software
            <p>
              Development{" "}
              <span className="text-white 2xl:text-primary_text">Company.</span>
            </p>
          </span>
        </span>
        <p className="mt-4 font-manrope text-white 2xl:text-primary_text font-medium text-sm xl:text-lg">
          Partnering with You to Build Smarter, Stronger Digital Solutions
        </p>
        <Button variant="primary" className="mt-4 xl:mt-8">
          Get Started
        </Button>
        <div className="lg:hidden w-full flex items-center justify-center gap-4 mt-8 text-white text-xs font-medium">
          <div className="bg-accent/20 rounded-lg py-3 w-1/3">
            <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-2"></div>
            <span>Lahore</span>
          </div>
          <div className="bg-accent/20 rounded-lg py-3 w-1/3">
            <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-2"></div>
            <span>Manchester</span>
          </div>
          <div className="bg-accent/20 rounded-lg py-3 w-1/3">
            <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-2"></div>
            <span>Texas</span>
          </div>
        </div>
      </div>

      <div className="hidden 2xl:block absolute right-6 3xl:right-20">
        <object
          ref={mapRef}
          type="image/svg+xml"
          data="/images/Map.svg"
          className="2xl:w-[878px] 2xl:h-[500px] 3xl:w-[1052px] 3xl:h-[600px]"
        >
          Your browser does not support SVG
        </object>
        {tooltip.visible && (
          <div
            className="absolute bg-primary_bg text-black px-4 py-2 rounded-lg shadow-lg"
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
