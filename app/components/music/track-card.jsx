"use client";

import React, { useEffect, useRef } from "react";

const TrackCard = ({ track }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Reset audio when track changes
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [track]);

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
      className="group transition-all space-y-1 hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {albumArt && (
        <img
          src={albumArt}
          className="rounded-lg h-full object-cover saturate-50 hover:saturate-100"
          alt={`Album Art for ${albumName}`}
        />
      )}
      <div className="text-xs space-y-0.5">
        <p className="font-medium">{track.name}</p>
        <p className="artist">
          {track.artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>
      <audio key={track.id} ref={audioRef}>
        <source src={track.preview_url} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default TrackCard;
