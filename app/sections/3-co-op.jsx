import React from "react";
import Section from "@components/section";
import Graph from "@components/graph";

export default function Coop() {
  return (
    <Section className="bg-emerald-100 section-layout" id="Co-op">
      <h2>CO-OP</h2>
      <Graph src="/graphs/3-co-op/salary.html"></Graph>
    </Section>
  );
}
