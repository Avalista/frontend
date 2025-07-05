import { Plus } from 'lucide-react';
import { ScreenEvaluation } from './ScreenEvaluation';
import { IScreen } from '../../../interfaces/Screen';

interface ScreenListProps {
  screens: IScreen[];
  onAddScreenClick: () => void;
}

export function ScreenList({ screens, onAddScreenClick }: ScreenListProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="section-header flex justify-between items-center">
        <h2 className="section-title text-2xl font-semibold">Telas e Avaliações</h2>
        <button className="btn btn-secondary flex items-center gap-2" onClick={onAddScreenClick}>
          <Plus size={16} />
          Adicionar Tela
        </button>
      </div>

      {/* Flex container para os cards */}
      <div className="flex flex-wrap gap-6 justify-start">
        {screens.map((screen) => (
          <div
            key={screen.id}
            className="bg-white p-4 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-blue-500"
            style={{ width: '200px' }} // Largura do card
          >
            <div className="flex justify-center mb-4">
              <img
                src={screen.screenshot}
                alt={screen.title}
                className="w-full h-32 object-cover rounded-lg"
                style={{ maxWidth: '200px', height: 'auto' }}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">{screen.title}</h3>
            <p className="text-gray-600 mt-2 text-center">{screen.description}</p>
          </div>
        ))}
      </div>

      {/* {screens.map(screen => (
        <ScreenEvaluation key={screen.id} screen={screen} />
      ))} */}
    </div>
  );
}
