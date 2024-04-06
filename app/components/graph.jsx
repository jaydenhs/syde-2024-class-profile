import React from "react";

export default function Graph({
  title,
  src,
  children = React.createElement("p", null, "Secondary takeaways"),
  className,
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <h3 className="break-words">{title ? title : src}</h3>
        {children}
      </div>
      <iframe
        className="w-full h-[360px] md:h-[600px]"
        src={`${src}?show_link=false`}
      ></iframe>
    </div>
  );
}
