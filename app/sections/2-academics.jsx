import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageCollection from "@components/image-collection";
import SpotifyEmbed from "@components/music/spotify-embed";
import Link from "next/link";

import IMG_1994 from "@images/2-academics/IMG_1994.png";
import IMG_3855 from "@images/2-academics/IMG_3855.jpg";
import IMG_8284 from "@images/2-academics/IMG_8284.jpg";
import IMG_6666 from "@images/2-academics/IMG_6666.webp";
import IMG_7953 from "@images/2-academics/IMG_7953.jpg";
import IMG_9301 from "@images/2-academics/IMG_9301.jpeg";
import IMG_2022 from "@images/2-academics/IMG_2022.jpeg";
import IMG_3912 from "@images/2-academics/IMG_3912.jpg";
import IMG_7777 from "@images/2-academics/IMG_7777.jpeg";
import IMG_9351 from "@images/2-academics/IMG_9351.jpg";

export default function Academics() {
  return (
    <Section bgColor="bg-purple-100" className="section-layout" id="Academics">
      <h2>ACADEMICS</h2>
      <Graph
        title="Our grades were the highest in 4A, when we had the most choice over the courses we took."
        srcs={["2-academics/grades.html"]}
      >
        As expected, our median grade inflated by 8% during COVID (1B-2B) and
        fell by 10% when we returned in-person.
      </Graph>
      <ImageCollection srcs={[IMG_1994, IMG_9301, IMG_3855]} />
      <Graph
        title="We found Human Factors in Design (SYDE162) to be the best balance of easy and useful."
        srcs={["2-academics/ease-vs-use.html"]}
      >
        We found the programming courses, SYDE121 and SYDE223, more useful but
        more difficult.{" "}
        <Link
          href="https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/programs/SJgggJRRoh"
          target="_blank"
        >
          View our full course program.
        </Link>
      </Graph>
      <ImageCollection srcs={[IMG_6666, IMG_2022, IMG_7953]} />
      <Graph
        title="Class attendance has decreased by 23% since first term, from 74% to 51%."
        srcs={["2-academics/attendance.html"]}
      >
        Our lowest class attendance was 44% during 2A, our second fully-online
        term. Attendance did not have a significant effect on grades.
      </Graph>
      <ImageCollection srcs={[IMG_8284, IMG_9351, IMG_7777]} />

      <Graph
        title="23 of us went on exchange."
        className="full"
        srcs={["2-academics/exchange-locations.html"]}
      >
        We studied abroad in Eastern Europe and South-east Asia. The most
        popular universities were the National University of Singapore (6) and
        Charles III University of Madrid (4).
      </Graph>
      {/* <Graph title="" srcs={["2-academics/how-challenging.html"]} /> */}
      <SpotifyEmbed
        title="Songs that remind us of Waterloo"
        playlistId={"3bHSJ5LYdASACOlzO9bc2l"}
      />
    </Section>
  );
}
