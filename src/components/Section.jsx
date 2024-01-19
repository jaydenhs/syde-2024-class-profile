import React from "react";

export default function Section({ children, id, color }) {
  return (
    <section className={`h-screen pl-64 pr-12 py-24 ${color}`} id={id}>
      {children}
    </section>
  );
}
