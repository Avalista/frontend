import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import parrotEyeIcon from '../../assets/icon-parrot-eye.svg';
import { DropdownMenu } from '../../components/ui/DropdownMenu';
import { useDropdown } from '../../hooks/useDropdown';
import './ProjectCard.css';

type CategoryKey = 'AF' | 'CO' | 'FM' | 'NA' | 'PU' | 'PD' | 'AC' | 'LGPD';

interface ProjectCardProps {
  name: string;
  progress: number;
  mainCategory: CategoryKey | null;
}

const categoryColorMap: Record<CategoryKey, { primary: string; pastel: string }> = {
  AF: { primary: 'var(--color-af-primary)', pastel: 'var(--color-af-pastel)' },
  CO: { primary: 'var(--color-co-primary)', pastel: 'var(--color-co-pastel)' },
  FM: { primary: 'var(--color-fm-primary)', pastel: 'var(--color-fm-pastel)' },
  NA: { primary: 'var(--color-na-primary)', pastel: 'var(--color-na-pastel)' },
  PU: { primary: 'var(--color-pu-primary)', pastel: 'var(--color-pu-pastel)' },
  PD: { primary: 'var(--color-pd-primary)', pastel: 'var(--color-pd-pastel)' },
  AC: { primary: 'var(--color-ac-primary)', pastel: 'var(--color-ac-pastel)' },
  LGPD: { primary: 'var(--color-lgpd-primary)', pastel: 'var(--color-lgpd-pastel)' },
};

export function ProjectCard({ name, progress, mainCategory }: ProjectCardProps) {
  const { isOpen, toggleDropdown, closeDropdown, dropdownRef } = useDropdown();

  const theme = mainCategory ? categoryColorMap[mainCategory] : null;
  const cardStyle = theme
  ? { '--card-bg-color': theme.pastel } as React.CSSProperties
  : {};

  const handleEdit = () => {
    console.log(`Editando o projeto: ${name}`);
    closeDropdown();
  };

  const handleDelete = () => {
    if (window.confirm(`Tem certeza que deseja excluir o projeto "${name}"?`)) {
      console.log(`Excluindo o projeto: ${name}`);
    }
    closeDropdown();
  };

  return (
     <div className={`project-card ${isOpen ? 'is-active' : ''}`} style={cardStyle}>
      <div className="card-header">
        <div className="card-icon-container">
          <img src={parrotEyeIcon} alt="Ícone do projeto" className="card-icon" />
        </div>
        <div className="menu-container" ref={dropdownRef}>
          <button 
            className="card-menu-button" 
            title="Opções do projeto"
            onClick={toggleDropdown}
          >
            <MoreHorizontal size={20} />
          </button>
          <DropdownMenu 
            isOpen={isOpen}
            onClose={closeDropdown}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>

      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-info">
          <span className="progress-label">Progresso</span>
          <span className="progress-percentage">{progress}%</span>
        </div>
        
      </div>
    </div>
  );
}