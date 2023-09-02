import axios from "axios";


// ...

const customAxios = axios.create({
  baseURL: 'http://localhost:5000', // Update this URL to match your backend's URL
  timeout: 50000,
  headers: {},
});

export default customAxios;