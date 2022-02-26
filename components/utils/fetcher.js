import axios from "axios";

const fetcher = axios.create({
  baseURL: '',
  timeout: '5000',
});

export default fetcher;
