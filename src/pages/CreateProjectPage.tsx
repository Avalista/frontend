import React from 'react';
import { CreateProjectForm } from '../features/projects/CreateProjectForm';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';

export function CreateProjectPage() {
  return (
    <DashboardLayout>
      <div style={{ padding: '2rem' }}>
        <CreateProjectForm />
      </div>
    </DashboardLayout>
  );
}