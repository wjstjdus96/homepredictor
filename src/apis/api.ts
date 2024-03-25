import axios from "axios";

export const BASE_URL = "https://api.home-predictor.com";

export const instance = axios.create({
  baseURL: "https://api.home-predictor.com",
});
