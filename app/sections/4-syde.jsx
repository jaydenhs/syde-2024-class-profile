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
        title="59% of us have five or more close friends in SYDE."
        srcs={["4-syde/close-friends.html"]}
      ></Graph>
      <Graph
        className="full"
        title="67% of us would've chosen SYDE if we could start university again."
        srcs={[
          "4-syde/restart-program.html",
          "4-syde/restart-program-historical.html",
        ]}
      >
        This marks the second consecutive year of 67%, a decline from the higher
        percentages seen between 2018 and 2021.
      </Graph>
      <Graph
        title="Most of us were not romantically involved with someone in SYDE."
        srcs={["4-syde/sydecest.html"]}
      ></Graph>
      <Graph
        title="56% of us have had a crush on a classmate."
        srcs={["4-syde/crush.html"]}
      >
        Of those, 38% have confessed their feelings.
      </Graph>

      <SpotifyEmbed
        title="Our go-to party songs"
        playlistId={"3vrZrfEDjja4y6BwXD5Xs6"}
      />
    </Section>
  );
}
