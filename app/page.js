import React from "react";

import Nav from "@components/nav";

import Hero from "@sections/0-hero";
import Background from "@sections/1-background";
import Academics from "@sections/2-academics";

export default function Home() {
  return (
    <main>
      <Hero />
      <Background />
      <Academics />
      <Nav />
    </main>
  );
}
