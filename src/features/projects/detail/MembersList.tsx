import React from 'react';
import { Plus } from 'lucide-react';
import { ProjectMember } from '../../../types/project.types';
import './MembersList.css';

interface MembersListProps {
  members: ProjectMember[];
  onAddClick: () => void;
}

export function MembersList({ members, onAddClick }: MembersListProps) {
  return (
    <div className="card">
      <h3 className="card-title">Membros do Projeto</h3>
      <div className="members-list">
        {members.map(member => (
          <div key={member.id} className="member-item" title={member.name}>
            <img src={member.avatarUrl} alt={member.name} />
          </div>
        ))}
        <button className="add-member-button" title="Adicionar novo membro" onClick={onAddClick}>
          <Plus />
        </button>
      </div>
    </div>
  );
}