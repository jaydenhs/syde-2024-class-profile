import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageBlob from "@components/image-blob";
import SpotifyEmbed from "@components/music/spotify-embed";

export default function Syde() {
  return (
    <Section bgColor="bg-red-100" className="section-layout" id="SYDE">
      <h2>SYDE</h2>
      <SpotifyEmbed
        title="Our go-to party songs"
        playlistId={"3vrZrfEDjja4y6BwXD5Xs6"}
      />
    </Section>
  );
}
