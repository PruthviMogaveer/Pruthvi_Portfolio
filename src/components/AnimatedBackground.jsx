import React, { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [squares, setSquares] = useState([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const gridSize = 40; // The size of each grid square

  useEffect(() => {
    // Generate static grid squares that light up randomly
    const updateGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowSize({ width, height });

      const cols = Math.floor(width / gridSize) + 1;
      const rows = Math.floor(height / gridSize) + 1;
      const numSquares = Math.floor(cols * rows * 0.05); // 5% of squares are active

      const newSquares = [];
      for (let i = 0; i < numSquares; i++) {
        newSquares.push({
          id: i,
          x: Math.floor(Math.random() * cols) * gridSize,
          y: Math.floor(Math.random() * rows) * gridSize,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 4,
        });
      }
      setSquares(newSquares);
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-lightwhite dark:bg-secondary pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.05"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* The Grid lines */}
        <rect
          width="100%"
          height="100%"
          fill="url(#grid-pattern)"
          className="text-primary dark:text-white"
        />

        {/* The Animated Squares */}
        {squares.map((sq) => (
          <rect
            key={sq.id}
            x={sq.x + 0.5} // slightly offset to fit inside the stroke
            y={sq.y + 0.5}
            width={gridSize - 1}
            height={gridSize - 1}
            fill="currentColor"
            className="text-primary/10 dark:text-primary/20 animate-fade-in-out opacity-0"
            style={{
              animationDelay: `${sq.delay}s`,
              animationDuration: `${sq.duration}s`,
            }}
          />
        ))}
      </svg>

      {/* Gradient overlay to soften the edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-lightwhite via-transparent to-lightwhite dark:from-secondary dark:via-transparent dark:to-secondary opacity-60"></div>
    </div>
  );
};

export default AnimatedBackground;
