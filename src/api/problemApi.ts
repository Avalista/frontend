import apiClient from './apiClient';
import { AddProblemPayload } from '../types/problem.types';

export const addProblemToEvaluation = async (payload: AddProblemPayload): Promise<any> => {
  const response = await apiClient.post('/problems', payload);
  return response.data;
};