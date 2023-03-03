import React, { useState } from "react";
import axios from "axios";
import { API_URLS } from "../api/apiConfig";
import { Link } from "react-router-dom";

export default function Player({
  songUrl,
  songName,
  artistName,
  albumImageUrl,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center">
      <img className="h-16 w-16 mr-4" src={albumImageUrl} alt="" />
      <div>
        <div className="text-lg font-medium text-gray-900">{songName}</div>
        <div className="text-gray-500">{artistName}</div>
      </div>
      <div className="ml-auto flex items-center">
        <button onClick={handlePlay}>
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.5 5.5L14.5 18.5M9.5 5.5L9.5 18.5M5 9.5L19 9.5M5 14.5L19 14.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3l14 9-14 9V3z"
              />
            </svg>
          )}
        </button>
        {isPlaying && (
          <audio src={songUrl} autoPlay onEnded={() => setIsPlaying(false)} />
        )}
      </div>
    </div>
  );
}
