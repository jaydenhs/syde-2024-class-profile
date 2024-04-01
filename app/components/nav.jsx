import React from "react";
import Link from "next/link";

const sections = [
  { id: 0, text: "Home", color: "bg-gray-500" },
  { id: 1, text: "Background", color: "bg-indigo-500" },
  { id: 2, text: "Academics", color: "bg-purple-500" },
  { id: 3, text: "Co-op", color: "bg-emerald-500" },
  { id: 4, text: "SYDE", color: "bg-red-500" },
  { id: 5, text: "Lifestyle", color: "bg-pink-500" },
  { id: 6, text: "Future", color: "bg-yellow-500" },
];

export default function Nav() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 group/nav rounded-r-lg ml-4 hover:bg-white hover:ml-0 hover:p-4">
      {sections.map((section) => (
        <Link
          href={`#${section.text}`}
          className="block no-underline h-8"
          key={section.id}
        >
          <div className="group flex h-full items-center space-x-2">
            <div
              className={`w-6 group-hover:w-12 h-1/4 rounded-xl ${section.color} transition-all duration-200`}
            />
            <p className="hidden group-hover/nav:inline">{section.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
