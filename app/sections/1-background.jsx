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
      <Graph
        title="The ethnicities of our class is similar to the university."
        className="full"
        srcArray={["1-background/ethnicity.html"]}
      />
      <Graph
        title="We have an equal proportion of males and females."
        srcArray={["1-background/gender.html"]}
      />
      <Graph
        title="We are less religious than the university."
        className="full"
        srcArray={["1-background/religion.html"]}
      ></Graph>
      <Graph
        title="97% of us have at least one parent with a post-secondary degree."
        srcArray={["1-background/parent-education.html"]}
      />
      <Graph
        title="Combined parental income"
        srcArray={["1-background/parent-income.html"]}
      />
      <Graph
        title="The sexual orientations of our class is similar to the university."
        className="full"
        srcArray={["1-background/sexual-orientation.html"]}
      />
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
