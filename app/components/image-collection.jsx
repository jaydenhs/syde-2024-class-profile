import React from "react";
import ImageBlob from "./image-blob";

export default function ImageCollection({ srcs = [] }) {
  const marginClasses = ["ml-auto", "mr-auto", "mx-auto"];

  return (
    <div className="grid grid-cols-3 place-items-center lg:block lg:h-[680px] right">
      {srcs.map((src, i) => (
        <ImageBlob
          key={i}
          className={`relative h-auto z-0 hover:z-20 lg:h-1/3 lg:w-auto ${marginClasses[i]}`}
          src={src}
          style={{ marginTop: `-${i}rem` }}
        />
      ))}
    </div>
  );
}
