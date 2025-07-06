import { useState } from 'react';
import { Plus } from 'lucide-react';
import { DashboardLayout } from '../../features/dashboard/DashboardLayout';
import { Modal } from '../../components/ui/Modal';
import { AddCategoryForm } from '../../features/categories/AddCategoryForm';
import './ManageCategoriesPage.css';

export function ManageCategoriesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSuccess = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <DashboardLayout>
        <div className="page-header">
          <h1 className="page-title">Gerenciamento de Categorias</h1>
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
            <Plus size={16} />
            Nova Categoria
          </button>
        </div>
      </DashboardLayout>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Cadastrar Nova Categoria"
      >
        <AddCategoryForm onSuccess={handleSuccess} />
      </Modal>
    </>
  );
}