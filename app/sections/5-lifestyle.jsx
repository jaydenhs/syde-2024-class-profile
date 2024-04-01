import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageBlob from "@components/image-blob";
import SpotifyEmbed from "@components/music/spotify-embed";

export default function Lifestyle() {
  return (
    <Section bgColor="bg-pink-100" className="section-layout" id="Lifestyle">
      <h2>LIFESTYLE</h2>
      <SpotifyEmbed
        title="Our hype-up gym songs"
        playlistId={"4DPpCEemc5XueoQ3OT0bxw"}
      />
      <SpotifyEmbed
        title="Our favourite songs to cry to"
        playlistId={"0VMMnwpjyeOM9F02h2RxYP"}
      />
    </Section>
  );
}
