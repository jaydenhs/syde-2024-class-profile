import React from "react";

import ImageBlob from "@components/image-blob";
import Section from "@components/section";
import Graph from "@components/graph";

import Pic1 from "@images/1-background/IMG_1994.png";
import Pic2 from "@images/1-background/IMG_3855.jpg";
import Pic3 from "@images/1-background/IMG_8284.jpg";

export default function Background() {
  return (
    <Section
      className="bg-indigo-100 grid grid-cols-12 space-y-8"
      id="Background"
    >
      <h2 className="col-span-7">BACKGROUND</h2>
      <Graph
        title="The class average across terms was 79.90%"
        src="//plotly.com/~chris/17557.embed"
        className={"col-span-7"}
      >
        The lowest term average was 3A (median of 75.7%) and the highest was 4B
        (median of 86.3%). Higher averages in fourth year were likely due to
        online school and more flexible course selection. Grades trended down
        and then back up.
      </Graph>
      <div className="flex flex-col col-start-9 col-span-4 relative">
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
      <Graph
        title="Program averages by group"
        src="//plotly.com/~chris/17558.embed"
        className={"col-span-7"}
      >
        Men in SYDE had slightly higher averages than women (average of 80.6%
        across terms for men vs 79.3% for women). Of the three most represented
        ethnicities, East Asians had the highest average (80.8% across terms).
      </Graph>
      {/* <ImageBlob src={classPic1} className={"flex-1 object-cover"} /> */}
    </Section>
  );
}
