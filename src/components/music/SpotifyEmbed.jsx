import React, { useState, useEffect, useRef } from "react";
import TrackCard from "./TrackCard";
import axios from "axios";

const SpotifyEmbed = ({ title, playlistId }) => {
  const [playlistData, setPlaylistData] = useState(null);
  // const [accessToken, setAccessToken] = useState(null);

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

        setPlaylistData(playlistResponse.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPlaylistData();
  }, []);

  useEffect(() => {
    console.log("Playlist data:", playlistData);
  }, [playlistData]);

  const getRandomizedTracks = () => {
    if (!playlistData) return [];

    const tracks = playlistData.tracks.items.filter(
      (item) => item.track.preview_url !== null
    );

    for (let i = tracks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tracks[i], tracks[j]] = [tracks[j], tracks[i]];
    }

    return tracks;
  };

  return (
    <div>
      {playlistData ? (
        <div className="playlist-container space-y-8">
          <h3>
            {title}.{" "}
            <a
              className="underline"
              href={`https://open.spotify.com/playlist/${playlistId}`}
              target="_blank"
            >
              View the full playlist.
            </a>
          </h3>

          <div className="flex items-start space-x-8">
            {getRandomizedTracks()
              .slice(0, 5)
              .map((item, index) => (
                <TrackCard key={index} track={item.track} />
              ))}
          </div>
        </div>
      ) : (
        <div>Loading playlist data...</div>
      )}
    </div>
  );
};

export default SpotifyEmbed;
