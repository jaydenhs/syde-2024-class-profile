import React from "react";

import ImageBlob from "@components/image-blob";
import Section from "@components/section";
import Graph from "@components/graph";
import SpotifyEmbed from "@components/music/spotify-embed";

export default function Background() {
  return (
    <Section className="bg-indigo-100 section-layout" id="Background">
      <h2>BACKGROUND</h2>
      <SpotifyEmbed
        title="Our top songs of 2023"
        playlistId={"3tiseqtV4xRZMu82daC1bk"}
      />
      {/* <SpotifyEmbed
        title="Songs that remind us of Waterloo"
        playlistId={"3bHSJ5LYdASACOlzO9bc2l"}
      />
      <SpotifyEmbed
        title="Our favourite songs to cry to"
        playlistId={"0VMMnwpjyeOM9F02h2RxYP"}
      />
      <SpotifyEmbed
        title="Our go-to party songs"
        playlistId={"3vrZrfEDjja4y6BwXD5Xs6"}
      />
      <SpotifyEmbed
        title="Our hype-up gym songs"
        playlistId={"4DPpCEemc5XueoQ3OT0bxw"}
      /> */}
    </Section>
  );
}
