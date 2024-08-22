import axios from "axios";
import { UserParams } from "@/utils/types";
import Cookies from "js-cookie";
const { VITE_API_URL_DEV } = import.meta.env;

const api = axios.create({
  baseURL: VITE_API_URL_DEV,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("_token");
    token ? (config.headers["Authorization"] = `Bearer ${token}`) : (location.href = "/login");
    return config;
  },
  (error) => {
    location.href = "/login";
    return Promise.reject(error);
  }
);

//? start end-point apis

export const postLoginUserAPI = (data: UserParams) => api.post("/auth/login", data);

export const getUserAPI = () => api.post("/auth/me");
