"use client";

import React, { useState, useEffect } from "react";
import TrackCard from "./track-card";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import SyncIcon from "@icons/sync.svg";

const SpotifyEmbed = ({ title, children, playlistId }) => {
  const [playlistData, setPlaylistData] = useState(null);
  const [tracksStart, setTracksStart] = useState(0);

  const shownTracks = 3;

  useEffect(() => {
    const clientId = "3b688e6717e64da4a591c11875fdcbc0";
    const clientSecret = "8b7d9765545946df9a0e232234e3f4bc";

    const fetchPlaylistData = async () => {
      try {
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

        console.log(playlistResponse.data.name, playlistResponse.data.uri);

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

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleLoadMoreTracks = () => {
    if (tracksStart + shownTracks * 2 >= playlistData.length) {
      // Reset to zero when another full 3 tracks can't be shown
      setTracksStart(0);
    } else {
      // Shown another 3 tracks
      setTracksStart((prevTracksStart) => prevTracksStart + shownTracks);
    }
  };

  return (
    <div>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h3>{title}</h3>
              {playlistData && (
                <button
                  onClick={handleLoadMoreTracks}
                  className="bg-white border border-gray-300 rounded-lg p-0.5 group"
                >
                  <Image
                    src={SyncIcon}
                    className="group-hover:rotate-45 rotate transition-transform"
                  />
                </button>
              )}
            </div>

            <Link
              href={`https://open.spotify.com/playlist/${playlistId}`}
              target="_blank"
            >
              View the full playlist
            </Link>
          </div>
          {/* Insights generated with: http://organizeyourmusic.playlistmachinery.com/# */}
          <div>{children}</div>
        </div>
        {playlistData && (
          <div className="grid grid-cols-3 gap-x-6">
            {playlistData
              .slice(tracksStart, tracksStart + shownTracks)
              .map((item, index) => {
                return <TrackCard key={index} track={item.track} />;
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpotifyEmbed;
