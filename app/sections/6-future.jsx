import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageCollection from "@components/image-collection";

import IMG_1698 from "@images/6-future/IMG_1698.jpeg";
import IMG_6543 from "@images/6-future/IMG_6543.jpeg";
import IMG_7554 from "@images/6-future/IMG_7554.jpeg";

export default function Future() {
  return (
    <Section bgColor="bg-yellow-100" className="section-layout" id="Future">
      <h2>FUTURE</h2>
      <Graph
        title="Most of us are planning to work full-time after graduation."
        srcs={["6-future/next-year-plans.html"]}
      >
        Of those planning on pursuing graduate studies, all are focused on
        engineering or computer science.
      </Graph>
      <ImageCollection srcs={[IMG_1698, IMG_6543, IMG_7554]} />

      {/* Make a stacked bar chart to show proportions compared to previous cohorts */}
      {/* <Graph srcs={["6-future/full-time-locations.html"]}></Graph> */}
      <Graph
        title="The median salary of those working in the US is 2.47 times higher than those working in Canada."
        srcs={["6-future/salary-vs-location.html"]}
      ></Graph>
      <Graph
        title="Most of us want to get married, several in the next year."
        className="full"
        srcs={["6-future/marriage-by-gender.html"]}
      ></Graph>
      <Graph
        title="Most of us want kids, but men want kids sooner."
        className="full"
        srcs={["6-future/kids-by-gender.html"]}
      ></Graph>
    </Section>
  );
}
