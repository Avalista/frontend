import { Project, CreateProjectPayload } from '../types/project.types';

export const createProject = async (payload: CreateProjectPayload): Promise<Project> => {
  console.log('SIMULANDO CRIAÇÃO DE PROJETO com:', payload);

  return new Promise((resolve) => {
    setTimeout(() => {
      const newProject: Project = {
        id: `proj-${Math.random().toString(36).substr(2, 9)}`, 
        name: payload.name,
        description: payload.description,
      };
      console.log('Projeto criado com SUCESSO (simulado)', newProject);
      resolve(newProject);
    }, 1000);
  });
};