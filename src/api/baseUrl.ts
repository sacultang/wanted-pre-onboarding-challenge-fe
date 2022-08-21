import axios from "axios";
const { accessToken } = JSON.parse(localStorage.getItem("user") || "{}");

export const baseUrl = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
});
