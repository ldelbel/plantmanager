import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.77:3333", // not localhost because of expo go in cellphone
});

export default api;
