import React, { useState } from 'react';
import { createCategory } from '../../api/categoryApi';
import { isAxiosError } from 'axios';
import { ApiErrorResponse } from '../../types/auth.types';

interface AddCategoryFormProps {
  onSuccess: () => void;
}

export function AddCategoryForm({ onSuccess }: AddCategoryFormProps) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#CECDFF');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (!name) {
      setError('O nome da categoria é obrigatório.');
      return;
    }
    if (!colorRegex.test(color)) {
      setError('O formato da cor é inválido. Use um formato hexadecimal, ex: #CECDFF');
      return;
    }

    setIsSubmitting(true);
    try {
      await createCategory({ name, color });
      alert('Categoria cadastrada com sucesso!');
      onSuccess();
    } catch (err) {
      if (isAxiosError<ApiErrorResponse>(err) && err.response) {
        setError(err.response.data.message[0] || 'Erro ao cadastrar.');
      } else {
        setError('Um erro inesperado ocorreu.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="alert alert-error">{error}</p>}
      <div className="form-group">
        <label htmlFor="name" className="form-label">Nome da Categoria</label>
        <input
          id="name"
          type="text"
          className="form-input"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="color" className="form-label">Cor Principal</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <input
            id="color"
            type="color"
            className="form-color-input"
            value={color}
            onChange={e => setColor(e.target.value)}
          />
          <input
            type="text"
            className="form-input"
            value={color}
            onChange={e => setColor(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
        {isSubmitting ? 'Cadastrando...' : 'Cadastrar Categoria'}
      </button>
    </form>
  );
}