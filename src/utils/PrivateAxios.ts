import axios from "axios";
import { TLocalstorage } from "../types/Localstorage";

export const privateAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem(TLocalstorage.ACCESSTOKEN)}`,
  },
});
