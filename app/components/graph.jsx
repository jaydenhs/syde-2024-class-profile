import React from "react";

export default function Graph({
  title = "Primary takeaway",
  src,
  children = React.createElement("p", null, "Secondary takeaways"),
  className,
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <h3>{title}</h3>
        {children}
      </div>
      <iframe
        className="w-full"
        height="600"
        src={`${src}?show_link=false`}
      ></iframe>
    </div>
  );
}
