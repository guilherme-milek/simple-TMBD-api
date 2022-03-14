import axios from "axios";

export const baseURL = "https://simple-tmdb-api.herokuapp.com/api";

export const api = axios.create({
  baseURL: baseURL,
});
