import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageBlob from "@components/image-blob";
import SpotifyEmbed from "@components/music/spotify-embed";

export default function Coop() {
  return (
    <Section bgColor="bg-emerald-100" className="section-layout" id="Co-op">
      <h2>CO-OP</h2>
      <Graph src="/graphs/3-co-op/salary.html"></Graph>
    </Section>
  );
}
