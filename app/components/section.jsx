import React from "react";

export default function Section({ children, className, id, bgColor }) {
  return (
    <section
      className={`h-full last:px-0 last:md:px-24 first:px-0 first:md:px-24 px-4 lg:px-24 py-24 lg:py-40 first:pt-10 md:first:pt-20 ${bgColor} flex flex-col items-center`}
      id={id}
    >
      <div className={`w-full max-w-screen-xl ${className}`}>{children}</div>
    </section>
  );
}
