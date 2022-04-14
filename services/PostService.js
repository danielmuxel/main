import axios from "axios";

const api = axios.create({
  baseURL: "https://api.nuxtjs.dev/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPosts() {
    return api.get("posts");
  },
};
