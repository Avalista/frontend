import apiClient from './apiClient';
import { LoginCredentials, RegisterCredentials, LoginSuccessResponse } from '../types/auth.types';

export const loginUser = async (credentials: LoginCredentials): Promise<LoginSuccessResponse> => {
  const response = await apiClient.post<LoginSuccessResponse>('/signIn', credentials);
  return response.data;
};

export const registerUser = async (credentials: Omit<RegisterCredentials, 'passwordConfirm'>): Promise<any> => {
  const response = await apiClient.post('/evaluators', credentials);
  return response.data;
};