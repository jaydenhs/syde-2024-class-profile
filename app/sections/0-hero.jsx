import React from "react";

import Link from "next/link";

import ImageBlob from "@components/image-blob";
import Section from "@components/section";
import classPic1 from "@images/0-hero/4A.jpg";
import classPic2 from "@images/0-hero/1A.jpeg";

const tickerItems = [
  "What courses did we find the most useful?",
  "What are we doing after graduation?",
  "Would we pick SYDE again?",
  "Have we confessed a crush to a classmate?",
];

const renderTickerDivs = () => {
  return (
    <div className="flex-shrink-0 flex justify-around min-w-full gap-8 marquee-scroll">
      {tickerItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <Section
      className="flex flex-col space-y-8 items-center"
      bgColor="bg-white"
      id="Home"
    >
      <div className="flex flex-col w-full items-center space-y-6 md:space-y-4">
        <h1 className="px-4 md:px-0 md:text-center">SYDE '24 CLASS PROFILE</h1>
        <div className="flex w-full overflow-hidden gap-8 relative select-none border-black border-y-2 py-2">
          {renderTickerDivs()}
          {renderTickerDivs()}
        </div>
      </div>
      <div className="w-full relative">
        <div className="overflow-x-hidden overflow-y-hidden">
          <ImageBlob
            src={classPic1}
            className={
              "scale-150 mt-16 mb-12 md:my-0 md:scale-100 object-cover"
            }
            quality={75}
          />
        </div>
        <Link
          href="/about"
          className="absolute right-0 -bottom-12 md:bottom-0 flex flex-row items-center w-32 h-32 md:w-48 md:h-48 p-4 text-center no-underline rounded-full bg-purple-100 border-purple-400 border-4 hover:bg-purple-200  hover:border-8 transition-all"
        >
          <p className="text-base md:text-2xl mx-auto">About this project</p>
        </Link>
      </div>
      {/* <ImageBlob src={classPic2} className={"flex-1 object-cover"} /> */}
    </Section>
  );
}
