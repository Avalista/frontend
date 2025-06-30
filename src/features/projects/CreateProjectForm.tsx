// src/features/projects/CreateProjectForm.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../../api/projectApi';
import './CreateProjectForm.css'; 

function CreateProjectForm() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !description) {
      setError('Nome e descrição são obrigatórios.');
      return;
    }

    setError('');
    setSuccessMessage('');
    setIsSubmitting(true);

    try {
      await createProject({ name, description });
      setSuccessMessage('Projeto criado com sucesso.');
      setTimeout(() => {
        navigate('/profile'); 
      }, 2000);

    } catch (err) {
      setError('Ocorreu um erro ao criar o projeto.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-project-container">
      <h1 className="create-project-title">Criar Novo Projeto</h1>
      <p className="create-project-subtitle">Dê um nome e descreva o objetivo do seu projeto.</p>

      <form onSubmit={handleSubmit} className="project-form">
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="form-group">
          <label htmlFor="projectName">Nome do Projeto</label>
          <input 
            id="projectName" 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Ex: App de Finanças Pessoais"
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectDescription">Descrição</label>
          <textarea 
            id="projectDescription" 
            rows={5} 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descreva o que este projeto faz, seus objetivos, etc."
          />
        </div>

        <button type="submit" className="create-button" disabled={isSubmitting}>
          {isSubmitting ? 'Criando...' : 'Criar Projeto'}
        </button>
      </form>
    </div>
  );
}

export default CreateProjectForm;