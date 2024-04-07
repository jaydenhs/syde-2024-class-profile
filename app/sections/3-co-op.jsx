import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageBlob from "@components/image-blob";
import SpotifyEmbed from "@components/music/spotify-embed";

export default function Coop() {
  return (
    <Section bgColor="bg-emerald-100" className="section-layout" id="Co-op">
      <h2>CO-OP</h2>
      <Graph
        title="Median salary increased from $19/hr to $32/hr."
        srcArray={["3-co-op/salary.html"]}
      >
        Salary differences within the class have widened, with the range between
        low and high salaries increasing from $7/hr to $26/hr.
      </Graph>
      {/* <Graph srcArray={["3-co-op/brain-drain.html"]} /> */}
      {/* <Graph srcArray={["3-co-op/grades-vs-salary.html"]} /> */}
      <Graph
        title="The fully in-person working model has fallen from 85% to 32%."
        srcArray={["3-co-op/work-model.html"]}
      >
        The hybrid working model is now the most prevalent, at 48%.
      </Graph>
    </Section>
  );
}
