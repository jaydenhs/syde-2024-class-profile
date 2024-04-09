import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageCollection from "@components/image-collection";
import SpotifyEmbed from "@components/music/spotify-embed";

import IMG_6535 from "@images/1-background/IMG_6535.jpg";
import IMG_6543 from "@images/1-background/IMG_6543.jpg";
import IMG_2839 from "@images/1-background/IMG_2839.jpg";
import IMG_0087 from "@images/1-background/IMG_0087.jpg";
import IMG_1122 from "@images/1-background/IMG_1122.jpg";
import IMG_1081 from "@images/1-background/IMG_1081.jpg";
import IMG_2786 from "@images/1-background/IMG_2786.jpg";
import IMG_6394 from "@images/1-background/IMG_6394.jpg";
import IMG_2345 from "@images/1-background/IMG_2345.jpeg";
import IMG_8533 from "@images/1-background/IMG_8533.jpg";

export default function Background() {
  return (
    <Section
      bgColor="bg-indigo-100"
      className=" section-layout"
      id="Background"
    >
      <h2>BACKGROUND</h2>
      <Graph
        title="We have an equal proportion of males and females."
        srcs={["1-background/gender.html"]}
        questions={["What gender do you identify with?"]}
      />
      <ImageCollection srcs={[IMG_6535, IMG_6543, IMG_2839]} />
      <Graph
        title="The ethnicities of our class is similar to the university."
        className="full"
        srcs={["1-background/ethnicity.html"]}
        questions={["What ethnicity do you identify with?"]}
      >
        However, we have no one who identifies as Middle Eastern (UW: 7%).
      </Graph>

      <Graph
        title="We are less religious than the university."
        className="full"
        srcs={["1-background/religion.html", "1-background/uw-religion.html"]}
        questions={[
          "Which of the following religions, if any, do you identify with?",
        ]}
        labels={["SYDE 2024", "UWaterloo"]}
      >
        Christianity is the most common religious affiliation for both groups,
        but to a lesser extent for our class. "No religious affiliation"
        includes 33.9% atheist and 23.7% agnostic.
      </Graph>
      <Graph
        title="97% of us have at least one parent with a post-secondary degree."
        srcs={["1-background/parent-education.html"]}
        questions={[
          "What is the highest level of education attained by (either of) your parent(s)?",
        ]}
      />
      <ImageCollection srcs={[IMG_0087, IMG_1081, IMG_1122]} />
      {/* Comment for now, x-axis is unordered */}
      {/* <Graph
        title="Combined parental income"
        srcs={["1-background/parent-income.html"]}
      />
      <ImageCollection srcs={[IMG_2786, IMG_6394, IMG_2345]} /> */}
      <Graph
        title="The sexual orientations of our class is similar to the university."
        className="full"
        srcs={["1-background/sexual-orientation.html"]}
        questions={["What sexual identities do you identify with?"]}
      >
        However, we have no one who identifies as gay or lesbian (UW: 3% gay, 2%
        lesbian).
      </Graph>
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
