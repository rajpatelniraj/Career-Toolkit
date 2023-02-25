import axios from "axios";
//creating a base url
const instance = axios.create({
  baseURL: "https://job-portal-backend.herokuapp.com/api",
});

export default instance;