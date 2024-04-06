import React from "react";

export default function Section({ children, className, id, bgColor }) {
  return (
    <section
      className={`h-full px-4 lg:px-24 py-24 first:pt-10 md:first:pt-16 ${bgColor} flex flex-col items-center`}
      id={id}
    >
      <div className={`w-full max-w-screen-xl ${className}`}>{children}</div>
    </section>
  );
}
