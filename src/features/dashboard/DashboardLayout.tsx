import React from 'react';
import { Sidebar } from './Sidebar';
import './DashboardLayout.css';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}