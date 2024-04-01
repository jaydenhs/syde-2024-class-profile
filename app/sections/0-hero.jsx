import React from "react";
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
    <Section className="flex flex-col space-y-8 items-center" id="Home">
      <div className="flex flex-col items-center space-y-4">
        <h1>SYDE &#39;24 CLASS PROFILE</h1>
        <div className="flex overflow-hidden gap-8 relative select-none border-black border-y-2 py-2 border-">
          {renderTickerDivs()}
          {renderTickerDivs()}
        </div>
      </div>
      <ImageBlob src={classPic1} className={"flex-1 object-cover"} />
      {/* <ImageBlob src={classPic2} className={"flex-1 object-cover"} /> */}
    </Section>
  );
}
