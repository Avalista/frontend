import React, { useState, useRef } from 'react';
import { addScreenToProject } from '../../../api/projectApi';
import { Screen } from '../../../types/project.types';

interface AddScreenFormProps {
  projectId: string;
  onSuccess: (newScreen: Screen) => void;
}

export function AddScreenForm({ projectId, onSuccess }: AddScreenFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [urlScreenshot, seturlScreenshot] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const newErrors: any = {};
    if (title.length < 2 || title.length > 40) newErrors.title = 'O título deve ter entre 2 e 40 caracteres.';
    if (description.length < 10 || description.length > 90) newErrors.description = 'A descrição deve ter entre 10 e 90 caracteres.';
    if (description.length < 10) newErrors.description = 'A imagem do screenshot é obrigatória.';
    // if (!screenshot) newErrors.screenshot = 'A imagem do screenshot é obrigatória.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setScreenshot(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const newScreen = await addScreenToProject({ title, description, screenshot: urlScreenshot, projectId });
      alert('Tela cadastrada com sucesso.');
      onSuccess(newScreen);
    } catch (err) {
      setErrors({ api: 'Erro ao cadastrar a tela.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.api && <p className="alert alert-error">{errors.api}</p>}
      <div className="form-group">
        <label className="form-label" htmlFor="title">Título da Tela</label>
        <input id="title" type="text" className="form-input" value={title} onChange={e => setTitle(e.target.value)} />
        {errors.title && <p className="error-message-field">{errors.title}</p>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="description">Descrição</label>
        <textarea id="description" className="form-textarea" value={description} onChange={e => setDescription(e.target.value)} rows={3} />
        {errors.description && <p className="error-message-field">{errors.description}</p>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="urlScreenshot">URL do screenshot</label>
        <input id="urlScreenshot" type="text" className="form-input" value={urlScreenshot} onChange={e => seturlScreenshot(e.target.value)} />
        {errors.urlScreenshot && <p className="error-message-field">{errors.urlScreenshot}</p>}
      </div>
      <div className="form-group">
        <label className="form-label">Screenshot</label>
        <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} />
        <button type="button" className="btn btn-secondary" onClick={() => fileInputRef.current?.click()}>Carregar Imagem</button>
        {preview && <img src={preview} alt="Preview" style={{ maxWidth: '100%', marginTop: '1rem', borderRadius: '8px' }} />}
        {errors.screenshot && <p className="error-message-field">{errors.screenshot}</p>}
      </div>
      <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
        {isSubmitting ? 'Cadastrando...' : 'Cadastrar Tela'}
      </button>
    </form>
  );
}