import React from "react";
import Background from "../sections/Background";
import Academics from "../sections/Academics";
import Coop from "../sections/Coop";

import SideNav from "../components/SideNav";
import "../styles/global.css";

const sections = [
  { id: 1, text: "Background" },
  { id: 2, text: "Academics" },
  { id: 3, text: "Co-op" },
  // { id: 2, color: "#f3b8b1", text: "Co-op" },
  // { id: 3, color: "#cecbd6", text: "Lifestyle" },
  // { id: 4, color: "#7dc8ca", text: "Future" },
];

export default function Index() {
  return (
    <div>
      <section className="h-96 pl-64 pr-12 py-24 bg-white">
        <h2 className="text-6xl font-bold mb-8">Hero</h2>
      </section>

      <Background />
      <Academics />
      <Coop />

      <SideNav sections={sections} />
    </div>
  );
}
