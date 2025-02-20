import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-api-my-own-website-7cde0046b9f5.herokuapp.com/",
});

export default api;
