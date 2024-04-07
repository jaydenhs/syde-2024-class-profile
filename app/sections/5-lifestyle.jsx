import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageBlob from "@components/image-blob";
import SpotifyEmbed from "@components/music/spotify-embed";
import Link from "next/link";

export default function Lifestyle() {
  return (
    <Section bgColor="bg-pink-100" className="section-layout" id="Lifestyle">
      <h2>LIFESTYLE</h2>
      <Graph src="/graphs/5-lifestyle/politics.html"></Graph>
      <Graph
        title="We have an even split of extroverts and introverts, according to the Myers-Briggs Type Indicator."
        src="/graphs/5-lifestyle/myers-briggs.html"
      >
        The most common types were{" "}
        <Link
          href="https://www.16personalities.com/enfj-personality"
          target="_blank"
        >
          ENFJ (The Protagonist)
        </Link>
        ,{" "}
        <Link
          href="https://www.16personalities.com/entj-personality"
          target="_blank"
        >
          ENTJ (The Commander)
        </Link>
        , and{" "}
        <Link
          href="https://www.16personalities.com/infj-personality"
          target="_blank"
        >
          INFJ (The Advocate)
        </Link>
        .
      </Graph>
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
