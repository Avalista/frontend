import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getUserProfile, updateUserProfile, changePassword } from '../../api/userApi';
import { UserProfile, ApiErrorResponse, UserProfileUpdate } from '../../types/auth.types';
import { isAxiosError } from 'axios';
import { Edit3 } from 'lucide-react';
import './Profile.css';

export function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'activity' | 'settings'>('activity');

  const [editName, setEditName] = useState('');
  const [editBio, setEditBio] = useState('');
  
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [formErrors, setFormErrors] = useState<any>({});
  const [successMessage, setSuccessMessage] = useState('');
  
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getUserProfile()
      .then(data => {
        setUser(data);
        setEditName(data.name);
        setEditBio(data.bio);
        setImagePreview(data.avatarUrl);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleInfoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('');
    setFormErrors({});
    try {
      const updatedData: UserProfileUpdate = {
        name: editName,
        bio: editBio,
        avatarUrl: imagePreview === null ? undefined : imagePreview,
      };
      const updatedUser = await updateUserProfile(updatedData);
      setUser(updatedUser);
      setSuccessMessage('Perfil atualizado com sucesso!');
      setIsEditing(false);
    } catch (err) {
      setFormErrors({ info: 'Não foi possível atualizar o perfil.' });
    }
  };
  
  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('');
    setFormErrors({});
    
    if (newPassword !== confirmNewPassword) {
      setFormErrors({ password: 'As novas senhas não coincidem.' });
      return;
    }
    if (newPassword.length < 8) {
      setFormErrors({ password: 'A nova senha deve ter no mínimo 8 caracteres.' });
      return;
    }
    
    try {
      const result = await changePassword({ currentPassword, newPassword });
      setSuccessMessage(result.message);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (err) {
      if (isAxiosError<ApiErrorResponse>(err) && err.response) {
        setFormErrors({ password: err.response.data.message[0] });
      } else {
        setFormErrors({ password: 'Ocorreu um erro inesperado.' });
      }
    }
  };
  
  const handleCancelEdit = () => {
    if (user) {
      setEditName(user.name);
      setEditBio(user.bio);
      setImagePreview(user.avatarUrl);
    }
    setIsEditing(false);
    setFormErrors({});
    setSuccessMessage('');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  if (loading) {
    return <div className="profile-page-centered">Carregando perfil...</div>;
  }
  if (!user) {
    return <div className="profile-page-centered">Não foi possível carregar o perfil.</div>;
  }

  return (
    <div className="profile-layout">
      <div className="card profile-container">
        <button onClick={handleLogout} className="logout-button">Sair</button>
        <div className="profile-header"></div>
        <img src={imagePreview || user.avatarUrl} alt="Foto de perfil" className="profile-avatar" />
        
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
           <h1 className="profile-name">{editName}</h1>
        )}

        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{user.stats.projectsEvaluated}</span>
            <span className="stat-label">Projetos Avaliados</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{user.stats.averageRating} ★</span>
            <span className="stat-label">Média</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{user.badges.length}</span>
            <span className="stat-label">Emblemas</span>
          </div>
        </div>
        
        {isEditing ? (
          <div className="settings-section">
            {successMessage && <p className="success-message">{successMessage}</p>}
            
            <form onSubmit={handleInfoSubmit} className="settings-form-card">
              <div className="form-group">
                <label htmlFor="editName" className="form-label">Nome</label>
                <input id="editName" type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Foto de Perfil</label>
                <div className="file-upload-container">
                  <input type="file" id="avatarUpload" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} accept="image/png, image/jpeg, image/gif" />
                  <button type="button" className="btn btn-secondary" onClick={() => fileInputRef.current?.click()}>
                    Escolher arquivo
                  </button>
                </div>
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

            <form onSubmit={handlePasswordSubmit} className="settings-form-card">
              <h3>Alterar Senha</h3>
              <div className="form-group">
                <label htmlFor="currentPassword">Senha Atual</label>
                <input id="currentPassword" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">Nova Senha</label>
                <input id="newPassword" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmNewPassword">Confirmar Nova Senha</label>
                <input id="confirmNewPassword" type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} className="form-input" />
              </div>
              {formErrors.password && <p className="error-message-field">{formErrors.password}</p>}
              <button type="submit" className="btn btn-primary">Alterar Senha</button>
            </form>
          </div>
        ) : (
          <div className="profile-bio">
            <h2 className="section-title">Sobre Mim</h2>
            <p>{user.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;