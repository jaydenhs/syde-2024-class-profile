import React from "react";

import Nav from "@components/nav";

import Hero from "@sections/0-hero";
import Background from "@sections/1-background";
import Academics from "@sections/2-academics";
import Coop from "@sections/3-co-op";
import Syde from "@sections/4-syde";
import Lifestyle from "@sections/5-lifestyle";
import Future from "@sections/6-future";

export default function Home() {
  return (
    <main>
      <Hero />
      <Background />
      <Academics />
      <Coop />
      <Syde />
      <Lifestyle />
      <Future />
      <Nav />
    </main>
  );
}
