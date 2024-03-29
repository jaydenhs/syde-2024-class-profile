import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Image({ src }) {
  console.log({ src });

  src = "../images/1A.jpeg";

  return (
    <div>
      <StaticImage
        src={src}
        alt="Description of the image"
        placeholder="blurred"
      />
    </div>
  );
}
