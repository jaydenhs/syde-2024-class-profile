import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageCollection from "@components/image-collection";
import SpotifyEmbed from "@components/music/spotify-embed";
import Link from "next/link";

import IMG_0791 from "@images/5-lifestyle/IMG_0791.jpeg";
import IMG_1768 from "@images/5-lifestyle/IMG_1768.jpeg";
import IMG_7373 from "@images/5-lifestyle/IMG_7373.jpg";
import IMG_7787 from "@images/5-lifestyle/IMG_7787.jpg";
import IMG_8640 from "@images/5-lifestyle/IMG_8640.jpeg";
import IMG_9404 from "@images/5-lifestyle/IMG_9404.jpg";

export default function Lifestyle() {
  return (
    <Section bgColor="bg-pink-100" className="section-layout" id="Lifestyle">
      <h2>LIFESTYLE</h2>
      {/* <Graph srcs={["5-lifestyle/politics.html"]}></Graph> */}
      <Graph
        title="We have an even split of extroverts and introverts."
        srcs={["5-lifestyle/myers-briggs.html"]}
        questions={["What is your MBTI?"]}
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
      <ImageCollection srcs={[IMG_0791, IMG_7373, IMG_8640]} />
      <SpotifyEmbed
        title="Our hype-up gym songs"
        playlistId={"4DPpCEemc5XueoQ3OT0bxw"}
      />
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
        questions={[
          "How many committed relationships have you been in during university?",
        ]}
      ></Graph>
      <ImageCollection srcs={[IMG_7787, IMG_9404, IMG_1768]} />

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

      {/* Number of drugs tried vs. grade / co-op pay lol? */}
      <Graph
        title="Our drugs of choice are alcohol, weed, and shrooms."
        className="full"
        srcs={["5-lifestyle/drugs.html"]}
      ></Graph>
      <SpotifyEmbed
        title="Our favourite songs to cry to"
        playlistId={"0VMMnwpjyeOM9F02h2RxYP"}
      />
    </Section>
  );
}
