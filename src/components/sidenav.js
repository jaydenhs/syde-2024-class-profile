import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function SideNav({ sections }) {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 space-y-0">
      {sections.map((section) => (
        <AnchorLink className="block" key={section.id} to={`/#${section.text}`}>
          <div className="group flex items-center space-x-2">
            <div className="w-8 group-hover:w-16 h-2 rounded-xl bg-gray-900 transition-all duration-200" />
            <p className="opacity-0 group-hover:opacity-100 transition">
              {section.text}
            </p>
          </div>
        </AnchorLink>
      ))}
    </div>
  );
}
