import React from "react";
import Link from "next/link";

const sections = [
  { id: 0, text: "Home" },
  { id: 1, text: "Background" },
  { id: 2, text: "Academics" },
  { id: 3, text: "Co-op" },
  { id: 4, text: "SYDE" },
  { id: 5, text: "Lifestyle" },
  { id: 6, text: "Future" },
];

export default function Nav() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 space-y-0">
      {sections.map((section) => (
        <Link href={`#${section.text}`} className="block h-5" key={section.id}>
          <div className="group flex items-center space-x-2">
            <div className="w-6 group-hover:w-16 h-1.5 rounded-xl bg-gray-900 transition-all duration-200" />
            <p className="opacity-0 group-hover:opacity-100 transition">
              {section.text}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
