import React from 'react';
import './Header.css';

interface HeaderProps {
  user: {
    name: string;
    avatarUrl: string;
  };
}

export function Header({ user }: HeaderProps) {
  return (
    <header className="dashboard-header">
      <div className="header-text">
        <h1 className="header-title">Bem vinda, {user.name}!</h1>
        <p className="header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <img src={user.avatarUrl} alt="Avatar do usuário" className="header-avatar" />
    </header>
  );
}