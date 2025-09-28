"use client";;
import React, { useMemo, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  cellSize = 56
}) => {
  const [clickedCell, setClickedCell] = useState(null);
  const [rippleKey, setRippleKey] = useState(0);
  const [dimensions, setDimensions] = useState({ rows: 20, cols: 35 });
  const ref = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      const cols = Math.ceil(window.innerWidth / cellSize) + 2;
      const rows = Math.ceil(window.innerHeight / cellSize) + 2;
      setDimensions({ rows, cols });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [cellSize]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 h-full w-full z-0">
      <div className="relative h-auto w-auto overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden" />
        <DivGrid
          key={`base-${rippleKey}`}
          className="mask-radial-from-20% mask-radial-at-top opacity-30"
          rows={dimensions.rows}
          cols={dimensions.cols}
          cellSize={cellSize}
          clickedCell={clickedCell}
          onCellClick={(row, col) => {
            setClickedCell({ row, col });
            setRippleKey((k) => k + 1);
          }}
          interactive />
      </div>
    </div>
  );
};

const DivGrid = ({
  className,
  rows = 20,
  cols = 35,
  cellSize = 56,
  // borderColor = "#d4d4d8",
  // fillColor = "rgba(245, 245, 245, 0.1)",
  // shadowColor = "#737373",
  borderColor = "#000000",
  fillColor = "rgba(245, 245, 245, 0.2)",
  shadowColor = "rgba(255, 255, 255, 0.3)",
  clickedCell = null,
  onCellClick = () => { },
  interactive = true
}) => {
  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, idx) => idx), [rows, cols]);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: "100vw",
    height: "100vh",
    transform: "translate(-50px, -50px)",
  };

  return (
    <div className={cn("relative z-[3]", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0; // ms
        const duration = 200 + distance * 80; // ms

        const style = clickedCell
          ? {
            "--delay": `${delay}ms`,
            "--duration": `${duration}ms`,
          }
          : {};

        return (
          <div
            key={idx}
            className={cn(
              "cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80",
              clickedCell && "animate-cell-ripple [animation-fill-mode:none]",
              !interactive && "pointer-events-none"
            )}
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
              boxShadow: `0px 0px 40px 1px ${shadowColor} inset`,
              ...style,
            }}
            onClick={
              interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
            } />
        );
      })}
    </div>
  );
};
