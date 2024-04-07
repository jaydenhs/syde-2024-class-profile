import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageCollection from "@components/image-collection";
import SpotifyEmbed from "@components/music/spotify-embed";
import Link from "next/link";

import Pic1 from "@images/2-academics/IMG_1994.png";
import Pic2 from "@images/2-academics/IMG_3855.jpg";
import Pic3 from "@images/2-academics/IMG_8284.jpg";

export default function Academics() {
  return (
    <Section bgColor="bg-purple-100" className="section-layout" id="Academics">
      <h2>ACADEMICS</h2>
      <Graph
        title="Our grades were the highest in 4A, when we had the most choice over the courses we took."
        src="/graphs/2-academics/grades.html"
      >
        As expected, our median grade inflated by 8% during COVID (1B-2B) and
        fell by 10% when we returned in-person.
      </Graph>
      <ImageCollection srcs={[Pic1, Pic2, Pic3]} />
      <Graph
        title="We found Human Factors in Design (SYDE 162) to be the best balance of easy and useful."
        src="/graphs/2-academics/ease-vs-use.html"
      >
        We found the programming courses, SYDE 121 and SYDE 223, more useful but
        more difficult.{" "}
        <Link
          href="https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/SJgggJRRoh"
          target="_blank"
        >
          View our course program.
        </Link>
      </Graph>
      <Graph
        title="Class attendance has decreased by 23% since first term, from 74% to 51%."
        src="/graphs/2-academics/attendance.html"
      >
        Our lowest class attendance was 44% during 2A, our second fully-online
        term. Attendance did not have a significant effect on grades.
      </Graph>
      <SpotifyEmbed
        title="Songs that remind us of Waterloo"
        playlistId={"3bHSJ5LYdASACOlzO9bc2l"}
      />
      {/* <Graph title="" src="/graphs/2-academics/how-challenging.html" /> */}
    </Section>
  );
}
