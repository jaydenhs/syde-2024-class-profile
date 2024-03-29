import React from "react";
import Image from "next/image";

export default function ImageBlob({ src, className }) {
  const min = 70;
  const max = 30;

  const getRandomValue = () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Generate random borderRadius values for each corner
  // Based on https://9elements.github.io/fancy-border-radius/
  const borderRadiusStyle = {
    borderRadius: `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`,
  };

  return (
    <Image
      src={src}
      className={`saturate-0 hover:saturate-100 transition-all duration-300 ${className}`}
      placeholder="blur"
      style={borderRadiusStyle}
    />
  );
}
