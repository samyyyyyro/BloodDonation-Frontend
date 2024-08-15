import axios from "axios";
const dotenv = require("dotenv");

const baseURL = REACT_BASE_URL

export default axios.create({ baseURL: baseURL });
