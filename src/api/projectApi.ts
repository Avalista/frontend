import apiClient from './apiClient';
import { Project, CreateProjectPayload } from '../types/project.types';

export const createProject = async (payload: CreateProjectPayload): Promise<Project> => {
  const response = await apiClient.post<Project>('/projects', payload);
  return response.data;
};

export const updateProject = async (projectId: string | number, payload: CreateProjectPayload): Promise<Project> => {
  const response = await apiClient.patch<Project>(`/projects/${projectId}`, payload);
  return response.data;
};