import apiClient from './apiClient';
import { EurecaCategory } from '../types/eureca.types';

interface CreateCategoryPayload {
  name: string;
  color: string;
}

export const createCategory = async (payload: CreateCategoryPayload): Promise<EurecaCategory> => {
  const response = await apiClient.post<EurecaCategory>('/categories', payload);
  return response.data;
};