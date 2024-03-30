"use client";

import React, { useState, useEffect } from "react";
import TrackCard from "./track-card";
import axios from "axios";
import Image from "next/image";

import SyncIcon from "@icons/sync.svg";

const SpotifyEmbed = ({ title, playlistId }) => {
  const [playlistData, setPlaylistData] = useState(null);
  const [tracksStart, setTracksStart] = useState(0);

  const shownTracks = 3;

  useEffect(() => {
    const clientId = "3b688e6717e64da4a591c11875fdcbc0";
    const clientSecret = "8b7d9765545946df9a0e232234e3f4bc";

    const fetchPlaylistData = async () => {
      try {
        console.warn("Fetching Playlist Data");

        // Step 1: Get Access Token
        const tokenResponse = await axios.post(
          "https://accounts.spotify.com/api/token",
          null,
          {
            params: {
              grant_type: "client_credentials",
            },
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
            },
          }
        );

        const accessToken = tokenResponse.data.access_token;

        // Step 2: Fetch Playlist Data
        const playlistResponse = await axios.get(
          `https://api.spotify.com/v1/playlists/${playlistId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const shuffledTracks = shuffleArray(
          playlistResponse.data.tracks.items.filter(
            (item) => item.track.preview_url !== null
          )
        );
        setPlaylistData(shuffledTracks);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPlaylistData();
  }, []);

  // Function to shuffle array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div>
      <div className="playlist-container space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h3>{title}</h3>
            {playlistData &&
              tracksStart + shownTracks * 2 < playlistData.length && (
                <button
                  onClick={() =>
                    setTracksStart(
                      (prevTracksStart) => prevTracksStart + shownTracks
                    )
                  }
                  className="hover:rotate-45 rotate transition-transform"
                >
                  <Image src={SyncIcon} />
                </button>
              )}
          </div>

          <a
            className="underline"
            href={`https://open.spotify.com/playlist/${playlistId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View the full playlist
          </a>
        </div>
        {playlistData && (
          <div className="flex items-start space-x-6">
            {playlistData
              .slice(tracksStart, tracksStart + shownTracks)
              .map((item, index) => {
                console.log(index, item.track.name);

                return <TrackCard key={index} track={item.track} />;
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpotifyEmbed;
