import React from "react";
import Background from "../sections/Background";
import Academics from "../sections/Academics";
import Coop from "../sections/Coop";
import { StaticImage } from "gatsby-plugin-image";

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
      <section className="h-screen pl-24 pr-24 bg-white">
        <h1 className="mb-8">SYDE '24 CLASS PROFILE</h1>
        <StaticImage
          className="blob h-96 object-contain"
          imgClassName="opacity-5"
          objectFit="contain"
          src="../images/1A.jpeg"
        />
      </section>

      <Background />
      <Academics />
      <Coop />

      <SideNav sections={sections} />
    </div>
  );
}
