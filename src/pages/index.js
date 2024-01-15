import React from "react";

import SideNav from "../components/sidenav";
import "../styles/global.css";

const sections = [
  { id: 1, color: "#f3d2ac", text: "Academics" },
  { id: 2, color: "#f3b8b1", text: "Co-op" },
  { id: 3, color: "#cecbd6", text: "Lifestyle" },
  { id: 4, color: "#7dc8ca", text: "Future" },
];

export default function Index() {
  return (
    <div>
      <div className="h-96">
        <h1 className="text-3xl text-red-500">hero</h1>
      </div>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.text}
          className="h-screen"
          style={{ backgroundColor: section.color }}
        >
          {/* {section.text} */}
        </section>
      ))}

      <SideNav sections={sections} />
    </div>
  );
}
