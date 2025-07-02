import React, { useState } from 'react';
import { createProject } from '../../api/projectApi';

interface CreateProjectFormProps {
  onSuccess: () => void;
}

export function CreateProjectForm({ onSuccess }: CreateProjectFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !description) {
      setError('Nome e descrição são obrigatórios.');
      return;
    }
    setError('');
    setIsSubmitting(true);
    
    try {
      await createProject({ name, description });
      alert('Projeto criado com sucesso!');
      onSuccess();
    } catch (err) {
      setError('Ocorreu um erro ao criar o projeto.');
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
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Criando...' : 'Criar Projeto'}
      </button>
    </form>
  );
}