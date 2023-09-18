// LoadingBar.js
import React, { useState, useEffect } from "react";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        const increment = Math.random() * 40;
        const newProgress =
          progress + increment > 100 ? 100 : progress + increment;
        setProgress(newProgress);
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div
      className="loading h-1 w-[0%] bg-blue-500 transition-all duration-200 absolute z-40 top-0"
      style={{ width: `${progress}%`, transition: "width 0.3s linear" }}
    ></div>
  );
};

export default LoadingBar;
