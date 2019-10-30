import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://uinames.com/api/",
  headers: {
    "Content-Type": "application/json"
  }
});

export const axiosGit = Axios.create({
  baseURL: "https://api.github.com/users",
  headers: {
    "Content-Type": "application/json"
  }
});

axiosGit.interceptors.request.use((config: any) => {
  config.headers.Authorization = config.xsrfHeaderName;
  // console.log('Request was sent to Git', config)
  localStorage.setItem("token", config.headers.Authorization);
  return config;
});
