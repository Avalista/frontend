import apiClient from './apiClient';
import { Project, CreateProjectPayload, Screen, CreateScreenPayload } from '../types/project.types';

export const createProject = async (payload: CreateProjectPayload): Promise<Project> => {
  const response = await apiClient.post<Project>('/projects', payload);
  return response.data;
};

export const updateProject = async (projectId: string | number, payload: CreateProjectPayload): Promise<Project> => {
  const response = await apiClient.patch<Project>(`/projects/${projectId}`, payload);
  return response.data;
};

export const addScreenToProject = async (projectId: string | number, payload: CreateScreenPayload): Promise<Screen> => {
  console.log(`SIMULANDO ADIÇÃO DE TELA ao projeto ${projectId} com:`, payload);

  return new Promise((resolve) => {
    setTimeout(() => {
      const newScreen: Screen = {
        id: `screen-${Math.random().toString(36).substr(2, 9)}`,
        title: payload.title,
        imageUrl: URL.createObjectURL(payload.screenshot),
        evaluationTree: { id: 'new-root', person: { id: 'nr', name: payload.title, type: 'category' }, children: [] },
      };
      console.log('Tela criada com SUCESSO (simulado)', newScreen);
      resolve(newScreen);
    }, 1000);
  });
};