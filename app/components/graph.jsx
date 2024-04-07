import React from "react";

export default function Graph({ title, srcArray, children, className }) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="space-y-2">
        <h3 className="break-words">{title ? title : srcArray}</h3>
        {children && <div>{children}</div>}
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:space-x-8">
        {srcArray.map((src, index) => (
          <iframe
            key={index}
            className="flex-shrink-0 h-[360px] md:h-[600px]"
            src={`/graphs/${src}?show_link=false`}
          />
        ))}
      </div>
    </div>
  );
}
