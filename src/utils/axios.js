// src/utils/axios.js
import axios from "axios";
import { setupInterceptors } from "./interceptors";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.example.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Setup all interceptors from separate file
setupInterceptors(axiosInstance);

export default axiosInstance;
