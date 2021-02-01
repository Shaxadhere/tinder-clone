import axios from "axios";

const instance = axios.create({
  baseURL: "localhost:8001"
});

export default instance;