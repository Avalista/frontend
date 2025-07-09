import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserProfile } from '../../api/userApi';
import { UserProfile, ApiErrorResponse, UserProfileUpdate } from '../../types/auth.types';
import { isAxiosError } from 'axios';
import { Edit3 } from 'lucide-react';
import { LoadingScreen } from '../../components/ui/LoadingScreen';
import './Profile.css';

interface StoredUser {
  id: string;
  name: string;
  email: string;
  funcao: string;
  avatarUrl: string;
  bio: string;
}

export function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<StoredUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [editName, setEditName] = useState('');
  const [editBio, setEditBio] = useState('');
  const [editFuncao, setEditFuncao] = useState('');
  const [editAvatarUrl, setEditAvatarUrl] = useState('');

  const [formErrors, setFormErrors] = useState<any>({});
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setEditName(parsedUser.name);
      setEditBio(parsedUser.bio || '');
      setEditFuncao(parsedUser.funcao || '');
      setEditAvatarUrl(parsedUser.avatarUrl || '');
    }
    setLoading(false);
  }, []);

  const handleInfoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('');
    setFormErrors({});
    try {
      const updatedData: UserProfileUpdate = {
        name: editName,
        bio: editBio,
        funcao: editFuncao,
        avatarUrl: editAvatarUrl,
      };
      
      const updatedUserResponse = await updateUserProfile(updatedData);
      const newUserData = { ...user, ...updatedUserResponse };
      localStorage.setItem('user', JSON.stringify(newUserData));
      setUser(newUserData as StoredUser);
      setSuccessMessage('Perfil atualizado com sucesso!');
      setIsEditing(false);
    } catch (err) {
      setFormErrors({ info: 'Não foi possível atualizar o perfil.' });
    }
  };

  const handleCancelEdit = () => {
    if (user) {
      setEditName(user.name);
      setEditBio(user.bio);
      setEditFuncao(user.funcao);
      setEditAvatarUrl(user.avatarUrl);
    }
    setIsEditing(false);
    setFormErrors({});
    setSuccessMessage('');
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <p className="alert alert-error">Não foi possível carregar o perfil. Por favor, faça login novamente.</p>;
  }

  return (
    <div className="profile-layout">
      <div className="card profile-container">
        <button onClick={handleLogout} className="logout-button">Sair</button>
        <div className="profile-header"></div>
        <img src={isEditing ? editAvatarUrl : user.avatarUrl} alt="Foto de perfil" className="profile-avatar" />
        
        {!isEditing ? (
          <div className="profile-view-mode">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-email">{user.email}</p>
            <p className="profile-funcao">{user.funcao}</p>
            <div className="profile-bio">
              <h2 className="section-title">Sobre Mim</h2>
              <p>{user.bio || "Nenhuma bio adicionada."}</p>
            </div>
            <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
              <Edit3 size={16} />
              Editar Perfil
            </button>
          </div>
        ) : (
          <div className="settings-section">
            {successMessage && <p className="alert alert-success">{successMessage}</p>}
            <form onSubmit={handleInfoSubmit}>
              <div className="form-group">
                <label htmlFor="editName" className="form-label">Nome</label>
                <input id="editName" type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="editFuncao" className="form-label">Função</label>
                <input id="editFuncao" type="text" value={editFuncao} onChange={(e) => setEditFuncao(e.target.value)} className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="editAvatarUrl" className="form-label">URL da Foto de Perfil</label>
                <input id="editAvatarUrl" type="text" value={editAvatarUrl} onChange={(e) => setEditAvatarUrl(e.target.value)} className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="editBio" className="form-label">Sobre mim</label>
                <textarea id="editBio" rows={4} value={editBio} onChange={(e) => setEditBio(e.target.value)} className="form-textarea" />
              </div>
              {formErrors.info && <p className="error-message-field">{formErrors.info}</p>}
              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>Cancelar</button>
                <button type="submit" className="btn btn-primary">Salvar Alterações</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}