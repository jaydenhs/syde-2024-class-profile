import React from "react";
import Section from "@components/section";
import Graph from "@components/graph";

export default function Academics() {
  return (
    <Section
      className="bg-purple-100 grid grid-cols-12 space-y-8"
      id="Academics"
    >
      <h2 className="col-span-7">ACADEMICS</h2>
      <Graph
        title="Title"
        src="/salary.html"
        className={"col-span-7"}
      >
        See the sample Plotly embedded plot below!
      </Graph>
    </Section>
  );
}
