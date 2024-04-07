import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageCollection from "@components/image-collection";

import IMG_0701 from "@images/3-co-op/IMG_0701.jpg";
import IMG_1084 from "@images/3-co-op/IMG_1084.jpg";
import IMG_3977 from "@images/3-co-op/IMG_3977.jpg";
import IMG_7335 from "@images/3-co-op/IMG_7335.jpg";
import IMG_8542 from "@images/3-co-op/IMG_8542.jpg";
import IMG_9171 from "@images/3-co-op/IMG_9171.jpg";

export default function Coop() {
  return (
    <Section bgColor="bg-emerald-100" className="section-layout" id="Co-op">
      <h2>CO-OP</h2>
      <Graph
        title="Median salary increased from $19/hr to $32/hr."
        srcArray={["3-co-op/salary.html"]}
      >
        Salary differences within the class have widened, with the range between
        low and high salaries increasing from $7/hr to $26/hr.
      </Graph>
      <ImageCollection srcs={[IMG_1084, IMG_9171, IMG_0701]} />
      {/* <Graph srcArray={["3-co-op/brain-drain.html"]} /> */}
      {/* <Graph srcArray={["3-co-op/grades-vs-salary.html"]} /> */}
      <Graph
        title="The fully in-person working model has fallen from 85% to 32%."
        srcArray={["3-co-op/work-model.html"]}
      >
        The hybrid working model is now the most prevalent, at 48%.
      </Graph>
      <ImageCollection srcs={[IMG_7335, IMG_3977, IMG_8542]} />
    </Section>
  );
}
