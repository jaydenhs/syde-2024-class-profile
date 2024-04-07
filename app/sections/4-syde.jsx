import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageBlob from "@components/image-blob";
import SpotifyEmbed from "@components/music/spotify-embed";

export default function Syde() {
  return (
    <Section bgColor="bg-red-100" className="section-layout" id="SYDE">
      <h2>SYDE</h2>
      <Graph
        title="59% of us had five or more close friends in SYDE."
        src="/graphs/4-syde/close-friends.html"
      ></Graph>
      <Graph
        title="67% of us would've chosen SYDE if we could start university again."
        src="/graphs/4-syde/restart-program.html"
      >
        16% of us would've chosen a different engineering program, and 9%
        of us would've chosen Computer Science.
        {/* Compare with past profiles? 2021 was 86.7% SYDE, 2023 was 67% SYDE - decreasing trend of SYDE confidence? */}
      </Graph>
      <SpotifyEmbed
        title="Our go-to party songs"
        playlistId={"3vrZrfEDjja4y6BwXD5Xs6"}
      />
    </Section>
  );
}
