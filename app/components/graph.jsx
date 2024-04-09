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
      <div className="space-y-1.5">
        <h3 className="break-words">{title ? title : srcs}</h3>
        {children && <p>{children}</p>}
      </div>

      <div className="flex flex-col space-y-6 md:flex-row md:space-x-8 md:space-y-0">
        {srcs.map((src, index) => (
          <div key={index} className="flex flex-col space-y-4 w-full">
            {questions[index] && (
              <div className="flex items-start space-x-2 text-slate-500">
                <Image className="opacity-50" src={HelpIcon} />
                <p>{questions[index]}</p>
              </div>
            )}
            <iframe
              className="min-h-[360px] md:min-h-[600px]"
              src={`/graphs/${src}?show_link=false`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
