import apiClient from './apiClient';
import { EurecaCategory } from '../types/eureca.types';

export const getEurecaData = async (): Promise<EurecaCategory[]> => {
  const response = await apiClient.get<EurecaCategory[]>('/categories');
  return response.data;
};