import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/e-shop-5cc19/us-central1/api", //need to change
});

export default instance;
