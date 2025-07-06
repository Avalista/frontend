import apiClient from './apiClient';
import { UserProfile, UserProfileUpdate } from '../types/auth.types';

export const updateUserProfile = async (data: UserProfileUpdate): Promise<UserProfile> => {
  const response = await apiClient.patch<UserProfile>('/evaluators', data);
  return response.data;
};

export const changePassword = async (passwordData: any): Promise<{ message: string }> => {
  const response = await apiClient.patch('/evaluators/password', passwordData);
  return response.data;
};