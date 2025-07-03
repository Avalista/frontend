import React, { useState, useMemo } from 'react';
import { mockAllUsers } from '../../../mocks/projects.mocks';
import { ProjectMember } from '../../../types/project.types';
import './AddMemberForm.css';

interface AddMemberFormProps {
  currentMembers: ProjectMember[];
  onAddMembers: (selectedIds: string[]) => void;
}

export function AddMemberForm({ currentMembers, onAddMembers }: AddMemberFormProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const availableUsers = useMemo(() => {
    const currentMemberIds = new Set(currentMembers.map(m => m.id));
    return mockAllUsers.filter(user => !currentMemberIds.has(user.id));
  }, [currentMembers]);

  const searchResults = useMemo(() => {
    if (!searchTerm) {
      return availableUsers;
    }
    return availableUsers.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, availableUsers]);

  const handleToggleSelection = (userId: string) => {
    setSelectedIds(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddMembers(selectedIds);
  };

  return (
    <form onSubmit={handleSubmit} className="add-member-form">
      <input
        type="text"
        className="form-input"
        placeholder="Buscar por nome ou e-mail..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="search-results-list">
        {searchResults.length > 0 ? (
          searchResults.map(user => (
            <div key={user.id} className="user-select-item">
              <input
                type="checkbox"
                id={`user-${user.id}`}
                checked={selectedIds.includes(user.id)}
                onChange={() => handleToggleSelection(user.id)}
              />
              <img src={user.avatarUrl} alt={user.name} />
              <label htmlFor={`user-${user.id}`}>{user.name}</label>
            </div>
          ))
        ) : (
          <p className="no-results-text">Nenhum avaliador encontrado.</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary btn-block" disabled={selectedIds.length === 0}>
        Adicionar Selecionados
      </button>
    </form>
  );
}