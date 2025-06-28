// src/api/apiClient.ts

import axios from 'axios';

// ❗️ Troque pela URL do seu back-end!
const API_URL = 'http://localhost:3000'; 

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Futuramente, aqui é um ótimo lugar para adicionar "interceptors"
// para, por exemplo, anexar o token de autenticação em todas as requisições.

export default apiClient;