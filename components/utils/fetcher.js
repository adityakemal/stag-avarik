import axios from "axios";

const fetcher = axios.create({
  baseURL: '',
  timeout: 1000,
});

export default fetcher;
