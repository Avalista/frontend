import React from 'react';
import { Link } from 'react-router-dom';
import { MoreHorizontal } from 'lucide-react';
import { useDropdown } from '../../hooks/useDropdown';
import { DropdownMenu } from '../../components/ui/DropdownMenu';
import parrotEyeIcon from '../../assets/icon-parrot-eye.svg';
import './ProjectCard.css';

interface ProjectCardProps {
  id: string | number;
  name: string;
  progress: number;
  backgroundColor: string;
  textColor: string;
}

export function ProjectCard({ id, name, progress, backgroundColor, textColor }: ProjectCardProps) {
  const { isOpen, toggleDropdown, closeDropdown, dropdownRef } = useDropdown();

  const cardStyle = {
    '--card-bg-color': backgroundColor,
    '--card-text-color': textColor,
  } as React.CSSProperties;

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDropdown();
  };

  return (
    <Link to={`/projects/${id}`} className="project-card-layout" style={cardStyle}>
      <div className="card-header">
        <div className="card-icon-container">
          <img src={parrotEyeIcon} alt="Ícone do projeto" className="card-icon" />
        </div>
        <div className="menu-container" ref={dropdownRef}>
          <button className="card-menu-button" title="Opções do projeto" onClick={handleMenuClick}>
            <MoreHorizontal size={20} />
          </button>
          <DropdownMenu isOpen={isOpen} onClose={closeDropdown} onEdit={() => {}} onDelete={() => {}} />
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
    </Link>
  );
}