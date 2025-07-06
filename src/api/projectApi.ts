import apiClient from './apiClient';
import { Project, CreateProjectPayload, Screen, CreateScreenPayload, EvaluationSession } from '../types/project.types';

export const createProject = async (payload: CreateProjectPayload): Promise<Project> => {
  const response = await apiClient.post<Project>('/projects', payload);
  return response.data;
};

export const updateProject = async (projectId: string | number, payload: CreateProjectPayload): Promise<Project> => {
  const response = await apiClient.patch<Project>(`/projects/${projectId}`, payload);
  return response.data;
};

export const addScreenToProject = async (payload: CreateScreenPayload): Promise<Screen> => {
  const response = await apiClient.post<Screen>('/screens', payload);
  return response.data;
};

export const getProjects = async (): Promise<Project[]> => {
  const response = await apiClient.get<Project[]>('/projects');
  return response.data;
};

export const getProjectById = async (projectId: string): Promise<Project> => {
  const response = await apiClient.get<Project>(`/projects/${projectId}`);
  return response.data;
};

export const startEvaluation = async (projectId: string | number): Promise<EvaluationSession> => {
  const response = await apiClient.post<EvaluationSession>('/evaluations/initialize', { projectId });
  return response.data;
};