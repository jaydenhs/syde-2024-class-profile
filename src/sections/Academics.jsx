import React from "react";
import Section from "../components/Section";
import SpotifyEmbed from "../components/music/SpotifyEmbed";

export default function Academics() {
  return (
    <Section id="Academics" color="bg-red-100">
      <h2 className="text-6xl font-bold mb-8">Academics</h2>
      <SpotifyEmbed
        title="What SYDE listens to when they're studying"
        playlistId={"37i9dQZF1DXd5zUwdn6lPb"}
      />
    </Section>
  );
}
