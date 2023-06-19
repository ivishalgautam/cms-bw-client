import axios from "axios";

// const BASE_URL = "http://localhost:4000/api";
const BASE_URL = "https://cms-bw-production-646c.up.railway.app/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
