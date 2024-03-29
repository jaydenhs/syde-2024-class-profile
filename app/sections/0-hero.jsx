import React from "react";
import Link from "next/link";
import ImageBlob from "@components/image-blob";
import Section from "@components/section";
import classPic1 from "@images/0-hero/1A.jpeg";

export default function Hero() {
  return (
    <Section className="flex flex-col space-y-8 items-center" id="Home">
      <h1>SYDE '24 CLASS PROFILE</h1>
      <ImageBlob src={classPic1} className={"flex-1 object-cover"} />
    </Section>
  );
}
