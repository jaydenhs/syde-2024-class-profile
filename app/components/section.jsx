import React from "react";

export default function Section({ children, className, id, color }) {
  return (
    <section className={`px-24 py-24 ${className}`} id={id}>
      {children}
    </section>
  );
}
