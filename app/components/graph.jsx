import React from "react";
import Image from "next/image";
import HelpIcon from "@icons/help.svg";

export default function Graph({
  title,
  children,
  questions = [],
  srcs,
  className,
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="space-y-2">
        <h3 className="break-words">{title ? title : srcs}</h3>
        {children && <div>{children}</div>}
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
        {srcs.map((src, index) => (
          <div className="flex flex-col w-full">
            {questions[index] && (
              <div className="flex items-center space-x-2 text-slate-500">
                <Image className="opacity-50" src={HelpIcon} />
                <p>{questions[index]}</p>
              </div>
            )}
            <iframe
              key={index}
              className="min-h-[360px] md:min-h-[600px]"
              src={`/graphs/${src}?show_link=false`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
