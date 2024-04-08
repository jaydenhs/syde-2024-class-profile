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
      <Graph srcs={["5-lifestyle/politics.html"]}></Graph>
      <Graph
        title="We have an even split of extroverts and introverts."
        srcs={["5-lifestyle/myers-briggs.html"]}
      >
        Our most common Myers-Briggs Personality Types were{" "}
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
      <Graph
        title="60% of the class is currently in a relationship."
        className="full"
        srcs={[
          "5-lifestyle/relation-status.html",
          "5-lifestyle/relation-forever.html",
        ]}
        questions={[
          "Are you currently in a relationship?",
          "If yes, do you think you’ll be with them forever?",
        ]}
      >
        Of those in a relationship, 87% think it will last forever.
      </Graph>
      <Graph
        title="Most of us had 1 or 2 committed relationships in university."
        srcs={["5-lifestyle/num-relations.html"]}
      ></Graph>
      <Graph
        title="42% of us had sex for the first time in university."
        className="full"
        srcs={[
          "5-lifestyle/lost-virginity.html",
          "5-lifestyle/sex-partners.html",
        ]}
        questions={[
          "When did you first have sex?",
          "How many sexual partners did you have during university?",
        ]}
      >
        73% of us have now had sex, a similar proportion to past cohorts.
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
