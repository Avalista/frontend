import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { ProjectCard } from '../dashboard/ProjectCard';
import { Project } from '../../types/project.types';
import { getProjectColors } from '../../utils/color.utils';
import './ProjectList.css';

type SortOption = 'alphabetical' | 'recent';
type FilterStatus = 'all' | 'active' | 'completed';
type FilterCategory = 'all' | 'AF' | 'CO' | 'FM' | 'NA' | 'PU' | 'PD' | 'AC' | 'LGPD';

const categoryOptions = [
  { value: 'all', label: 'Todas Categorias' },
  { value: 'AF', label: 'Aspectos Funcionais' },
  { value: 'CO', label: 'Comunicação' },
  { value: 'FM', label: 'Formatação' },
  { value: 'NA', label: 'Navegação' },
  { value: 'PU', label: 'Usuário' },
  { value: 'PD', label: 'Dispositivo' },
  { value: 'AC', label: 'Acessibilidade' },
  { value: 'LGPD', label: 'LGPD' },
];

export function ProjectList({ projects }: { projects: Project[] }) {
  const [sort, setSort] = useState<SortOption>('recent');
  const [status, setStatus] = useState<FilterStatus>('all');
  const [category, setCategory] = useState<FilterCategory>('all');

  const filteredAndSortedProjects = useMemo(() => {
    let processedProjects = [...projects];

    if (status !== 'all') {
      processedProjects = processedProjects.filter(p => p.status === status);
    }

    if (category !== 'all') {
      processedProjects = processedProjects.filter(p => p.mainCategory === category);
    }

    if (sort === 'alphabetical') {
      processedProjects.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return processedProjects;
  }, [projects, sort, status, category]);

  return (
    <div className="card">
      <div className="section-header">
        <h2 className="section-title">Meus Projetos ({filteredAndSortedProjects.length})</h2>
        <Link to="/projects/create" className="btn btn-secondary">
          <Plus size={16} />
          Novo Projeto
        </Link>
      </div>

      <div className="filter-controls">
        <div className="filter-group">
          <label>Ordenar por:</label>
          <select value={sort} onChange={e => setSort(e.target.value as SortOption)} className="form-input">
            <option value="recent">Mais Recentes</option>
            <option value="alphabetical">Ordem Alfabética</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Status:</label>
          <select value={status} onChange={e => setStatus(e.target.value as FilterStatus)} className="form-input">
            <option value="all">Todos</option>
            <option value="active">Ativos</option>
            <option value="completed">Finalizados</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Categoria:</label>
          <select value={category} onChange={e => setCategory(e.target.value as FilterCategory)} className="form-input">
            {categoryOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>
      </div>

      <div className="projects-grid">
        {filteredAndSortedProjects.length > 0 ? (
          filteredAndSortedProjects.map(project => {
            const colors = getProjectColors(project.mainCategory);
            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                progress={project.progress}
                backgroundColor={colors.pastel}
                textColor={colors.primary}
              />
            );
          })
        ) : (
          <p className="no-projects-message">Nenhum projeto encontrado com os filtros selecionados.</p>
        )}
      </div>
    </div>
  );
}