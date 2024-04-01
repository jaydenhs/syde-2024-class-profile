import React from "react";

export default function Section({ children, className, id, bgColor }) {
  return (
    <section
      className={`px-24 py-24 ${bgColor} flex flex-col items-center`}
      id={id}
    >
      <div className={`w-full max-w-screen-xl ${className}`}>{children}</div>
    </section>
  );
}
