import axios from "axios";

const API_BASE_URL = "https://api.spotify.com/v1";

export const API_URLS = {
  login: `https://accounts.spotify.com/authorize`,
  search: (query) =>
    `${API_BASE_URL}/search?q=${query}&type=track&access_token=${localStorage.getItem(
      "token"
    )}`,
  // Add more API URLs here
};

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
