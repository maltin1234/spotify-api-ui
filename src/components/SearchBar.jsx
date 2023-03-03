import { useState } from "react";
import axios from "axios";
import { API_URLS } from "../api/apiConfig";
import { Link } from "react-router-dom";
import Player from "./Player";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(API_URLS.search(query));
      const searchResults = response.data.tracks.items;
      setSearchResults(searchResults);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-8 px-4 max-w-lg mx-auto">
      <div className="flex mb-4">
        <input
          className="bg-white focus:outline-none border-2 border-gray-300 rounded-l-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Search for songs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
          onClick={() => handleSearch(query)}
        >
          Search
        </button>
      </div>
      <ul className="divide-y divide-gray-300">
        {searchResults.map((track) => (
          <li key={track.id} className="py-4">
            <Player
              songUrl={track.preview_url}
              songName={track.name}
              artistName={track.artists[0].name}
              albumImageUrl={track.album.images[2].url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
