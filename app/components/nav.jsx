import React from "react";
import Link from "next/link";
import Image from "next/image";
import InfoIcon from "@icons/info.svg";

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
    <div className="hidden md:block fixed left-0 top-1/2 -translate-y-1/2 group/nav rounded-r-lg ml-4 border-slate-300 2xl:bg-white 2xl:border-2 2xl:border-l-0 2xl:ml-0 2xl:p-4 hover:bg-white hover:border-2 hover:border-l-0 hover:ml-0 hover:p-4">
      {sections.map((section) => (
        <Link
          href={`#${section.text}`}
          className="block no-underline h-8"
          key={section.id}
        >
          <div className="group flex h-full items-center space-x-2">
            <div
              className={`w-6 group-hover:w-12 h-1/4 rounded-2xl ${section.color} opacity-75 group-hover:opacity-100 transition-all duration-200`}
            />
            <p className="hidden 2xl:inline group-hover/nav:inline">
              {section.text}
            </p>
          </div>
        </Link>
      ))}
      <Link
        href="/about"
        target="_blank"
        className="group no-underline mt-4 flex space-x-2"
      >
        <Image
          className="opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-transform"
          src={InfoIcon}
        />
        <p className="hidden 2xl:inline group-hover/nav:inline">About</p>
      </Link>
    </div>
  );
}
