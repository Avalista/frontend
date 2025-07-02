import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import './DropdownMenu.css';

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function DropdownMenu({ isOpen, onClose, onEdit, onDelete }: DropdownMenuProps) {
  if (!isOpen) {
    return null;
  }

  const handleEditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onEdit();
  };
  
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete();
  };

  return (
    <div className="dropdown-menu">
      <button onClick={handleEditClick} className="dropdown-item">
        <Pencil className="dropdown-icon" size={16} />
        Editar
      </button>
      <button onClick={handleDeleteClick} className="dropdown-item danger">
        <Trash2 className="dropdown-icon" size={16} />
        Excluir
      </button>
    </div>
  );
}