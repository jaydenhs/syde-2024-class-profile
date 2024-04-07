import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageBlob from "@components/image-blob";
import SpotifyEmbed from "@components/music/spotify-embed";

export default function Future() {
  return (
    <Section bgColor="bg-yellow-100" className="section-layout" id="Future">
      <h2>FUTURE</h2>
      <Graph
        title="Most of us are planning to work full-time after graduation."
        src="/graphs/6-future/next-year-plans.html"
      >
        Of those planning on pursuing graduate studies, all are focused on
        engineering or computer science.
      </Graph>
      <Graph src="/graphs/6-future/full-time-locations.html"></Graph>
      <Graph
        title="The median salary of those working in the US is 147% higher than those working in Canada."
        src="/graphs/6-future/salary-vs-location.html"
      ></Graph>
      <Graph
        title="Most of us want to get married, several in the next year."
        className="full"
        src="/graphs/6-future/marriage-by-gender.html"
      ></Graph>
      <Graph
        title="Most of us want kids, but men want kids sooner."
        className="full"
        src="/graphs/6-future/kids-by-gender.html"
      ></Graph>
    </Section>
  );
}
