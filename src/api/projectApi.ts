import apiClient from './apiClient';
import { Project, CreateProjectPayload, Screen, CreateScreenPayload, EvaluationSession, StartEvaluationResponse } from '../types/project.types';

export const createProject = async (payload: CreateProjectPayload): Promise<Project> => {
  const response = await apiClient.post<Project>('/projects', payload);
  return response.data;
};

export const updateProject = async (projectId: string | number, payload: CreateProjectPayload): Promise<Project> => {
  const response = await apiClient.patch<Project>(`/projects/${projectId}`, payload);
  return response.data;
};

export const addScreenToProject = async (formData: FormData): Promise<Screen> => {
  try {
    const response = await apiClient.post<Screen>(
      `/screens`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar tela:', error);
    throw error;
  }
};

export const getProjects = async (): Promise<Project[]> => {
  const response = await apiClient.get<Project[]>('/projects');
  return response.data;
};

export const getProjectById = async (projectId: string): Promise<Project> => {
  const response = await apiClient.get<Project>(`/projects/${projectId}`);
  return response.data;
};

export const startEvaluation = async (projectId: string): Promise<StartEvaluationResponse> => {
  const response = await apiClient.post<StartEvaluationResponse>('/evaluations/initialize', { projectId });
  return response.data;
};