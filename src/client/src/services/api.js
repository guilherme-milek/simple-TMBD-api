import axios from "axios";

export const baseURL =
  process.env.REACT_APP_API_URL || "https://simple-tmdb-api.herokuapp.com/api";

export const api = axios.create({
  baseURL: baseURL,
});
