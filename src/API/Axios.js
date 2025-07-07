import axios from 'axios';

const API = "https://manasdev.pythonanywhere.com/NirmalFarms/api";

const axiosInstance = axios.create({
  baseURL: API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
