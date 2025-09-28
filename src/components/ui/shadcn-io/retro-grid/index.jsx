"use client";
import { cn } from "@/lib/utils";

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
  ...props
}) {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  };

  return (
    <div
      className={cn("pointer-events-none absolute z-0 size-full overflow-hidden [perspective:200px]", className)}
      style={{
        ...gridStyles,
        opacity: opacity,
      }}
      {...props}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className="animate-grid [background-repeat:repeat] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]"
          style={{
            backgroundImage: `linear-gradient(to right, ${lightLineColor} 1px, transparent 0), linear-gradient(to bottom, ${lightLineColor} 1px, transparent 0)`,
            backgroundSize: `${cellSize}px ${cellSize}px`,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-90%" />
    </div>
  );
}
