import React, { useState } from 'react';
import { addProblemToEvaluation } from '../../api/problemApi';
import { isAxiosError } from 'axios';
import { ApiErrorResponse } from '../../types/auth.types';
import { ProblemSeverity, ProblemEffort } from '../../types/problem.types';
import './AddProblemForm.css';

interface AddProblemFormProps {
  screenId: string;
  heuristicId: string;
  onSuccess: () => void;
}

export function AddProblemForm({ screenId, heuristicId, onSuccess }: AddProblemFormProps) {
  const [description, setDescription] = useState('');
  const [improvementSuggestions, setImprovementSuggestions] = useState('');
  const [severity, setSeverity] = useState<ProblemSeverity>('LOW');
  const [effort, setEffort] = useState<ProblemEffort>('LIGHT');
  const [priority, setPriority] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description) {
      setError('A descrição do problema é obrigatória.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      await addProblemToEvaluation({
        screenId,
        heuristicId,
        description,
        improvementSuggestions,
        severity,
        effort,
        priority,
        screenshots: screenshotUrl ? [screenshotUrl] : [],
      });
      alert('Problema adicionado com sucesso!');
      onSuccess();
    } catch (err) {
      if (isAxiosError<ApiErrorResponse>(err) && err.response) {
        const errorMessage = Array.isArray(err.response.data.message)
          ? err.response.data.message.join(', ')
          : err.response.data.message;
        setError(errorMessage);
      } else {
        setError('Um erro inesperado ocorreu.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-problem-form">
      {error && <p className="alert alert-error">{error}</p>}

      <div className="form-group">
        <label htmlFor="description" className="form-label">Descrição do Problema</label>
        <textarea id="description" rows={4} className="form-textarea" value={description} onChange={e => setDescription(e.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="improvementSuggestions" className="form-label">Sugestão de Melhoria</label>
        <textarea id="improvementSuggestions" rows={3} className="form-textarea" value={improvementSuggestions} onChange={e => setImprovementSuggestions(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="screenshotUrl" className="form-label">URL da Evidência (Opcional)</label>
        <input id="screenshotUrl" type="text" className="form-input" value={screenshotUrl} onChange={e => setScreenshotUrl(e.target.value)} placeholder="https://..." />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="severity" className="form-label">Gravidade</label>
          <select id="severity" className="form-input" value={severity} onChange={e => setSeverity(e.target.value as ProblemSeverity)}>
            <option value="LOW">Baixa</option>
            <option value="MEDIUM">Média</option>
            <option value="HIGH">Alta</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="effort" className="form-label">Esforço</label>
          <select id="effort" className="form-input" value={effort} onChange={e => setEffort(e.target.value as ProblemEffort)}>
            <option value="LIGHT">Leve</option>
            <option value="MODERATE">Moderado</option>
            <option value="HEAVY">Pesado</option>
          </select>
        </div>
      </div>

      <div className="form-group form-checkbox-group">
        <input type="checkbox" id="priority" checked={priority} onChange={e => setPriority(e.target.checked)} />
        <label htmlFor="priority">Marcar como prioritário</label>
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
        {isSubmitting ? 'Adicionando...' : 'Adicionar Problema'}
      </button>
    </form>
  );
}