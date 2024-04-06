import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageCollection from "@components/image-collection";
import SpotifyEmbed from "@components/music/spotify-embed";

import Pic1 from "@images/2-academics/IMG_1994.png";
import Pic2 from "@images/2-academics/IMG_3855.jpg";
import Pic3 from "@images/2-academics/IMG_8284.jpg";

export default function Academics() {
  return (
    <Section bgColor="bg-purple-100" className="section-layout" id="Academics">
      <h2>ACADEMICS</h2>
      <Graph src="/graphs/2-academics/grades.html"></Graph>
      <ImageCollection srcs={[Pic1, Pic2, Pic3]} />
      <Graph src="/graphs/2-academics/ease_vs_use.html"></Graph>
      <Graph src="/graphs/2-academics/attendance.html"></Graph>
      <SpotifyEmbed
        title="Songs that remind us of Waterloo"
        playlistId={"3bHSJ5LYdASACOlzO9bc2l"}
      />
    </Section>
  );
}
