import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserProfile, updateUserProfile, changePassword } from '../../api/userApi';
import { UserProfile, ApiErrorResponse } from '../../types/auth.types';
import { isAxiosError } from 'axios';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'activity' | 'settings'>('activity');

  const [editName, setEditName] = useState('');
  const [editBio, setEditBio] = useState('');
  const [editAvatarUrl, setEditAvatarUrl] = useState('');
  
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [formErrors, setFormErrors] = useState<any>({});
  const [successMessage, setSuccessMessage] = useState('');
  
  useEffect(() => {
    getUserProfile()
      .then(data => {
        setUser(data);
        setEditName(data.name);
        setEditBio(data.bio);
        setEditAvatarUrl(data.avatarUrl);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleInfoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('');
    setFormErrors({});

    try {
      const updatedUser = await updateUserProfile({
        name: editName,
        bio: editBio,
        avatarUrl: editAvatarUrl,
      });
      setUser(updatedUser);
      setSuccessMessage('Perfil atualizado com sucesso!');
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

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  if (loading) {
    return <div className="profile-page">Carregando perfil...</div>;
  }
  if (!user) {
    return <div className="profile-page">Não foi possível carregar o perfil.</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <button onClick={handleLogout} className="logout-button">Sair</button>
        <div className="profile-header"></div>
        <img src={editAvatarUrl} alt="Foto de perfil" className="profile-avatar" />
        <h1 className="profile-name">{editName}</h1>
        <p className="profile-email">{user.email}</p>

        <div className="profile-bio">
          <h2 className="section-title">Sobre Mim</h2>
          <p>{editBio}</p>
        </div>
        
        <div className="profile-tabs">
          <button className={`tab-button ${activeTab === 'activity' ? 'active' : ''}`} onClick={() => setActiveTab('activity')}>Atividade</button>
          <button className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>Configurações</button>
        </div>

        <div className="tab-content">
          {activeTab === 'activity' && (
            <div className="activity-section">
            <h2 className="section-title">Meus Emblemas</h2>
            <div className="badges-grid">
              {user.badges.map(badge => (
                <div key={badge.id} className="badge-item">
                  <img src={badge.imageUrl} alt={badge.name} className="badge-image" />
                  <span className="badge-name">{badge.name}</span>
                </div>
              ))}
            </div>
            <h2 className="section-title" style={{ marginTop: '2rem' }}>Avaliações Recentes</h2>
            <ul className="activity-list">
              {user.recentActivity.map(activity => (
                <li key={activity.id} className="activity-item">
                  <span>Avaliou <strong>{activity.projectName}</strong></span>
                  <span className="activity-date">{activity.date}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

          {activeTab === 'settings' && (
            <div className="settings-section">
              {successMessage && <p className="success-message">{successMessage}</p>}
              
              <form onSubmit={handleInfoSubmit} className="settings-form-card">
                <h3>Informações Pessoais</h3>
                <div className="form-group">
                  <label htmlFor="editName">Nome</label>
                  <input id="editName" type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="editAvatarUrl">URL do Avatar</label>
                  <input id="editAvatarUrl" type="text" value={editAvatarUrl} onChange={(e) => setEditAvatarUrl(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="editBio">Sobre mim</label>
                  <textarea id="editBio" rows={4} value={editBio} onChange={(e) => setEditBio(e.target.value)} />
                </div>
                {formErrors.info && <p className="field-error-message">{formErrors.info}</p>}
                <button type="submit" className="save-button">Salvar Alterações</button>
              </form>
              
              {/* --- Formulário de Alterar Senha --- */}
              <form onSubmit={handlePasswordSubmit} className="settings-form-card">
                <h3>Alterar Senha</h3>
                <div className="form-group">
                  <label htmlFor="currentPassword">Senha Atual</label>
                  <input id="currentPassword" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="newPassword">Nova Senha</label>
                  <input id="newPassword" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmNewPassword">Confirmar Nova Senha</label>
                  <input id="confirmNewPassword" type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                </div>
                {formErrors.password && <p className="field-error-message">{formErrors.password}</p>}
                <button type="submit" className="save-button">Alterar Senha</button>
              </form>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;