import apiClient from './apiClient';
import { AxiosError } from 'axios';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginSuccessResponse {
  token: string;
}

export interface ApiErrorResponse {
  statusCode: number;
  message: string[];
  error: string;
}

export const loginUser = async (credentials: LoginCredentials): Promise<LoginSuccessResponse> => {
  try {
    const response = await apiClient.post<LoginSuccessResponse>('/auth/login', credentials);
    return response.data;
  } catch (err) {
    throw err;
  }
};