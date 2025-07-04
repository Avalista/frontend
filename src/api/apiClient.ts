import axios from 'axios';

const API_URL = 'http://ec2-3-90-66-5.compute-1.amazonaws.com:3000/'; 

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;