import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageBlob from "@components/image-blob";
import SpotifyEmbed from "@components/music/spotify-embed";

export default function Background() {
  return (
    <Section className="bg-indigo-100 section-layout" id="Background">
      <h2>BACKGROUND</h2>
      <SpotifyEmbed
        title="Our top songs of 2023"
        playlistId={"3tiseqtV4xRZMu82daC1bk"}
      />
    </Section>
  );
}
