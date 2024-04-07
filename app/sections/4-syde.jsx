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
        srcArray={["4-syde/close-friends.html"]}
      ></Graph>
      <Graph
        className="full"
        title="67% of us would've chosen SYDE if we could start university again."
        srcArray={[
          "4-syde/restart-program.html",
          "4-syde/restart-program-historical.html",
        ]}
      >
        This marks the second consecutive year of 67%, a decline from the higher
        percentages seen between 2018 and 2021.
      </Graph>
      <SpotifyEmbed
        title="Our go-to party songs"
        playlistId={"3vrZrfEDjja4y6BwXD5Xs6"}
      />
    </Section>
  );
}
