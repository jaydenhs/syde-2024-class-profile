"use client";

import React, { useState, useEffect, useCallback } from "react";
import TrackCard from "./track-card";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import SyncIcon from "@icons/sync.svg";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const SpotifyEmbed = ({ title, children, playlistId }) => {
  const [playlistData, setPlaylistData] = useState(null);
  const [tracksStart, setTracksStart] = useState(0);

  const isBreakpoint = useMediaQuery(768);
  const shownTracks = isBreakpoint ? 4 : 3;

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const res = await axios.get(`/api/spotify`, { params: { playlistId } });
        console.log(res.data.name, res.data.uri);
        const shuffledTracks = shuffleArray(res.data.items);
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
          <div className="flex flex-col md:items-center md:flex-row justify-between">
            <div className="flex items-center justify-between md:justify-normal space-x-2 mb-1 md:mb-0">
              <h3>{title}</h3>
              {playlistData && (
                <button
                  onClick={handleLoadMoreTracks}
                  className="bg-white border border-gray-300 rounded-lg p-0.5 group"
                >
                  <Image
                    src={SyncIcon}
                    className="w-8 md:w-6 group-hover:rotate-45 rotate transition-transform"
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
          <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-x-6 gap-y-4">
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
