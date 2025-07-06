import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { updateUserProfile, changePassword } from '../../api/userApi';
import { UserProfile, ApiErrorResponse, UserProfileUpdate } from '../../types/auth.types';
import { isAxiosError } from 'axios';
import { Edit3 } from 'lucide-react';
import './Profile.css';

interface StoredUser {
  id: string;
  name: string;
  email: string;
}

export function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<StoredUser | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [editName, setEditName] = useState('');
  const [editBio, setEditBio] = useState('');
  const [editFuncao, setEditFuncao] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setEditName(parsedUser.name);
    }
  }, []);

  const handleInfoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const updatedData = { name: editName, bio: editBio, funcao: editFuncao };
      const updatedUserResponse = await updateUserProfile(updatedData);
      const newUserData = {
        id: updatedUserResponse.id,
        name: updatedUserResponse.name,
        email: updatedUserResponse.email,
      };
      localStorage.setItem('user', JSON.stringify(newUserData));
      setUser(newUserData);
      setIsEditing(false);
      alert('Perfil atualizado com sucesso!');
    } catch (err) {
      alert('Não foi possível atualizar o perfil.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return <div className="profile-page-centered">Carregando perfil...</div>;
  }

  return (
    <div className="profile-layout">
      <div className="card profile-container">
        <button onClick={handleLogout} className="logout-button">Sair</button>
        <div className="profile-header"></div>
        <img src={imagePreview || 'https://i.pravatar.cc/150'} alt="Foto de perfil" className="profile-avatar" />
        
        {!isEditing ? (
          <>
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-email">{user.email}</p>
            <button className="btn btn-secondary edit-profile-button" onClick={() => setIsEditing(true)}>
              <Edit3 size={16} />
              Editar Perfil
            </button>
          </>
        ) : (
          <form onSubmit={handleInfoSubmit} className="settings-form-card">
            <h3>Informações Pessoais</h3>
            <div className="form-group">
              <label htmlFor="editName" className="form-label">Nome</label>
              <input id="editName" type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="form-input" />
            </div>
            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancelar</button>
              <button type="submit" className="btn btn-primary">Salvar Alterações</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}