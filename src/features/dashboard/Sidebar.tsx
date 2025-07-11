import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  PlusSquare, 
  LayoutDashboard, 
  BookOpen,
  GraduationCap,
  Eye,
  BarChart3, 
  Settings, 
  Shield,
  LogOut 
} from 'lucide-react';
import parrotIcon from '../../assets/icon-azul-marinho.svg';
import './Sidebar.css';

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ElementType;
}

interface StoredUser {
  funcao: string;
}

const NavItem = ({ icon: Icon, to, label }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);

  return (
    <Link to={to} title={label} className={`nav-item ${isActive ? 'active' : ''}`}>
      <Icon className="nav-icon icon-md" />
    </Link>
  );
};

export function Sidebar() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user: StoredUser = JSON.parse(userString);
      if (user.funcao === 'ADMIN') {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={parrotIcon} alt="Logo Avalista" className="logo-icon" />
      </div>

      <nav className="sidebar-nav">
        <Link to="/projects/create" title="Adicionar novo projeto" className="add-project-button">
          <PlusSquare className="nav-icon icon-lg filled" />
        </Link>
        <NavItem icon={LayoutDashboard} to="/dashboard" label="Início" />
        <NavItem icon={BookOpen} to="/projects" label="Projetos" />
        <NavItem icon={BarChart3} to="/metrics" label="Métricas" />
        <NavItem icon={GraduationCap} to="/studies" label="Estudos" />
        <NavItem icon={Eye} to="/eureka" label="Técnica Eureka" />
        <NavItem icon={Settings} to="/profile" label="Configurações" />
        {isAdmin && (
          <NavItem icon={Shield} to="/admin/categories" label="Administração" />
        )}
      </nav>

      <div className="sidebar-logout">
        <button onClick={handleLogout} title="Sair" className="logout-button">
          <LogOut className="nav-icon icon-lg" />
        </button>
      </div>
    </aside>
  );
}