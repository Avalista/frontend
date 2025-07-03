import React, { useState, useEffect } from 'react';
import { createProject, updateProject } from '../../api/projectApi';
import { Project, CreateProjectPayload } from '../../types/project.types';

interface ProjectFormProps {
  project?: Project | null;
  onSuccess: (updatedProject: Project) => void;
}

export function ProjectForm({ project, onSuccess }: ProjectFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditing = !!project;

  useEffect(() => {
    if (isEditing && project) {
      setName(project.name);
      setDescription(project.description);
    }
  }, [project, isEditing]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !description) {
      setError('Nome e descrição são obrigatórios.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      const payload: CreateProjectPayload = { name, description };
      const updatedProject = isEditing 
        ? await updateProject(project.id, payload)
        : await createProject(payload);

      alert(isEditing ? 'Projeto atualizado com sucesso!' : 'Projeto criado com sucesso!');
      onSuccess(updatedProject);

    } catch (err) {
      setError('Ocorreu um erro. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="alert alert-error">{error}</p>}
      <div className="form-group">
        <label htmlFor="projectName" className="form-label">Nome do Projeto</label>
        <input 
          id="projectName" 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Ex: App de Finanças Pessoais"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="projectDescription" className="form-label">Descrição</label>
        <textarea 
          id="projectDescription" 
          rows={5} 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descreva o que este projeto faz, seus objetivos, etc."
          className="form-textarea"
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isSubmitting || !name || !description}>
        {isSubmitting ? (isEditing ? 'Salvando...' : 'Criando...') : (isEditing ? 'Salvar Alterações' : 'Criar Projeto')}
      </button>
    </form>
  );
}