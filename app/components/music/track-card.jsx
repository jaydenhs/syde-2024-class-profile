import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import PlayIcon from "@icons/play.svg";
import PauseIcon from "@icons/pause.svg";

const TrackCard = ({ track }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered && isPlaying) {
      // Pause the audio when the user is no longer hovering
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isHovered, isPlaying]);

  const handlePlayButtonClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const albumArt = track.album.images[0].url;
  const albumName = track.album.name;

  return (
    <div
      className="group transition-all space-y-2 hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative"
        onClick={handlePlayButtonClick}
        style={{ cursor: "pointer" }}
      >
        {albumArt && (
          <Image
            width={640}
            height={640}
            placeholder="empty"
            src={albumArt}
            className="rounded-lg object-cover saturate-50 group-hover:saturate-100"
            alt={`Album Art for ${albumName}`}
          />
        )}
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-1"
          onClick={(e) => {
            e.stopPropagation();
            handlePlayButtonClick();
          }}
        >
          {isPlaying ? <Image src={PauseIcon} /> : <Image src={PlayIcon} />}
        </button>
      </div>
      <div className="text-sm space-y-0">
        <p className="font-medium truncate">{track.name}</p>
        <p className="artist truncate">
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
