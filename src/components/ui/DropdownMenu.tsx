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

  return (
    <div className="dropdown-overlay" onClick={onClose}>
      <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
        <button onClick={onEdit} className="dropdown-item">
          <Pencil className="dropdown-icon" size={16} />
          Editar
        </button>
        <button onClick={onDelete} className="dropdown-item danger">
          <Trash2 className="dropdown-icon" size={16} />
          Excluir
        </button>
      </div>
    </div>
  );
}