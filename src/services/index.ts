import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://your-api-base-url.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
