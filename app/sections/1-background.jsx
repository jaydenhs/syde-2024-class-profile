import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageBlob from "@components/image-blob";
import SpotifyEmbed from "@components/music/spotify-embed";

export default function Background() {
  return (
    <Section
      bgColor="bg-indigo-100"
      className=" section-layout"
      id="Background"
    >
      <h2>BACKGROUND</h2>
      <Graph src="/graphs/1-background/ethnicity.html" />
      <Graph src="/graphs/1-background/gender.html" />
      <Graph src="/graphs/1-background/parent_education.html" />
      <Graph src="/graphs/1-background/sexual_orientation.html" />
      <SpotifyEmbed
        title="Our top songs of 2023"
        playlistId={"3tiseqtV4xRZMu82daC1bk"}
      >
        <p>
          <span className="font-medium">Top genres:</span> pop, rap, pov: indie,
          EDM, art pop
        </p>
        <p>
          <span className="font-medium">Top artists:</span> Taylor Swift, Peach
          Pit, Drake
        </p>
      </SpotifyEmbed>
    </Section>
  );
}
