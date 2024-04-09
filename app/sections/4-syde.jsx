import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageCollection from "@components/image-collection";
import SpotifyEmbed from "@components/music/spotify-embed";

import IMG_1087 from "@images/4-syde/IMG_1087.jpg";
import IMG_1750 from "@images/4-syde/IMG_1750.jpg";
import IMG_4234 from "@images/4-syde/IMG_4234.jpeg";
import IMG_8072 from "@images/4-syde/IMG_8072.jpg";
import IMG_9417 from "@images/4-syde/IMG_9417.jpg";

export default function Syde() {
  return (
    <Section bgColor="bg-red-100" className="section-layout" id="SYDE">
      <h2>SYDE</h2>
      <Graph
        title="59% of us have five or more close friends in SYDE."
        srcs={["4-syde/close-friends.html"]}
        questions={["How many close friends do you have in SYDE?"]}
      ></Graph>
      <ImageCollection srcs={[IMG_8072, IMG_9417, IMG_4234]} />
      <Graph
        className="full"
        title="67% of us would've chosen SYDE if we could start university again."
        srcs={[
          "4-syde/restart-program.html",
          "4-syde/restart-program-historical.html",
        ]}
        questions={["What program would you do if you could start again?"]}
      >
        This marks the second consecutive year of 67%, a decline from the higher
        percentages seen between 2018 and 2021.
      </Graph>
      <Graph
        className="full"
        title="73% of us were not romantically involved with someone in SYDE."
        srcs={["4-syde/sydecest.html", "4-syde/crush.html"]}
        questions={[
          "Have you committed SYDEcest? Any romantic involvement with someone in SYDE counts",
          "Have you ever had a crush on someone in the cohort? If yes, have you ever confessed?",
        ]}
      >
        However, 56% of us have had a crush on a classmate.
      </Graph>

      <SpotifyEmbed
        title="Our go-to party songs"
        playlistId={"3vrZrfEDjja4y6BwXD5Xs6"}
      />
    </Section>
  );
}
