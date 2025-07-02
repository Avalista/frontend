import React from 'react';
import './CategoryTable.css';

interface Category {
  name: string;
  popularity: number;
  sales: string;
}

export function CategoryTable({ categories }: { categories: Category[] }) {
  return (
    <div className="card">
      <h3 className="card-title">Top Categorias</h3>
      <div className="table-content">
        {categories.map((category, index) => (
          <div key={index} className="table-row">
            <span className="category-name">{category.name}</span>
            <div className="popularity-bar-container">
              <div className="popularity-bar" style={{ width: `${category.popularity}%` }}></div>
            </div>
            <span className="category-sales">{category.sales}</span>
          </div>
        ))}
      </div>
    </div>
  );
}