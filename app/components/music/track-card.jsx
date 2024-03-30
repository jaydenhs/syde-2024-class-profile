"use client";

import React, { useRef } from "react";

const TrackCard = ({ track }) => {
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const albumArt = track.album.images[0].url;
  const albumName = track.album.name;

  return (
    <div
      className="group transition-all space-y-1 hover:scale-110 mb-16"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {albumArt && (
        <img
          src={albumArt}
          className="rounded-lg h-full object-cover"
          alt={`Album Art for ${albumName}`}
        />
      )}
      <div className="text-xs opacity-0 pointer-events-none h-0 group-hover:opacity-100 space-y-0.5">
        <p className="font-medium">{track.name}</p>
        <p className="artist">
          {track.artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>
      <audio ref={audioRef}>
        <source src={track.preview_url} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default TrackCard;
