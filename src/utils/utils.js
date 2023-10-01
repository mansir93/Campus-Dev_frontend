import React, { useState, useEffect } from "react";

export const useDominantColor = (imageSrc) => {
  const [dominantColor, setDominantColor] = useState("");

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const pixels = imageData.data;
      const pixelCount = pixels.length / 4;

      let colorSum = { r: 0, g: 0, b: 0 };

      for (let i = 0; i < pixels.length; i += 4) {
        colorSum.r += pixels[i];
        colorSum.g += pixels[i + 1];
        colorSum.b += pixels[i + 2];
      }

      const averageColor = {
        r: Math.floor(colorSum.r / pixelCount),
        g: Math.floor(colorSum.g / pixelCount),
        b: Math.floor(colorSum.b / pixelCount),
      };

      const rgbColor = `rgb(${averageColor.r}, ${averageColor.g}, ${averageColor.b})`;
      setDominantColor(rgbColor);
    };
  }, [imageSrc]);

  return dominantColor;
};
