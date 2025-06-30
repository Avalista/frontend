import axios from 'axios';

const API_URL = 'http://54.161.59.227:3000/'; 

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;