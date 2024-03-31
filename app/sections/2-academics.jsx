import React from "react";
import Section from "@components/section";
import Graph from "@components/graph";
import ImageBlob from "@components/image-blob";

import Pic1 from "@images/2-academics/IMG_1994.png";
import Pic2 from "@images/2-academics/IMG_3855.jpg";
import Pic3 from "@images/2-academics/IMG_8284.jpg";

export default function Academics() {
  return (
    <Section className="bg-purple-100 section-layout" id="Academics">
      <h2>ACADEMICS</h2>
      <Graph src="/graphs/2-academics/grades.html"></Graph>
      <div className="flex flex-col relative right">
        <ImageBlob className={"absolute w-48 h-auto"} src={Pic1} />
        <ImageBlob
          className={"absolute top-64 right-0 w-72 h-auto"}
          src={Pic2}
        />
        <ImageBlob
          className={"absolute top-128 left-2 w-72 h-auto"}
          src={Pic3}
        />
      </div>
      <Graph src="/graphs/2-academics/ease_vs_use.html"></Graph>
      <Graph src="/graphs/2-academics/attendance.html"></Graph>
    </Section>
  );
}
