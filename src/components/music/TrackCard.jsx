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
      className="group transition-all space-y-1 hover:scale-110"
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
      <div className="text-sm opacity-0 pointer-events-none group-hover:opacity-100">
        <p className="title">{track.name}</p>
        <p className="artist">
          Artist: {track.artists.map((artist) => artist.name).join(", ")}
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
