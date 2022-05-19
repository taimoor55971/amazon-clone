import axios from 'axios';
const instance = axios.create({
  baseURL: "http://localhost:5001/clone-59964/us-central1/api", //API base URL
});
export default axios;