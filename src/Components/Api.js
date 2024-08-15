import axios from "axios";

// Accessing the environment variable
const baseURL = process.env.REACT_APP_BASE_URL;

// Creating an Axios instance with the base URL
export default axios.create({ baseURL: baseURL });
