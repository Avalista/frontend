import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../../api/projectApi';

export function CreateProjectForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProject({ name, description });
      navigate('/dashboard');
    } catch (error) {
      console.error("Erro ao criar projeto:", error);
    }
  };

  return (
    <div className="create-project-page">
      <div className="card create-project-container">
        <h1 className="create-project-title">Novo Projeto</h1>
        <p className="create-project-subtitle">Dê um nome e descreva o objetivo da sua avaliação.</p>
        
        <form onSubmit={handleSubmit} className="project-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nome do Projeto</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">Descrição</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="form-textarea"
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={!name}>
            Criar Projeto
          </button>
        </form>
      </div>
    </div>
  );
}