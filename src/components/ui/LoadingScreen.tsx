import React, { useState, useEffect } from 'react';
import parrotIcon from '../../assets/icon-parrot-eye.svg';
import './LoadingScreen.css';

const thematicPhrases = [
  'Analisando heurísticas...',
  'Calibrando lentes críticas...',
  'Buscando novos insights...',
  'Preparando a prancheta de avaliação...',
  'Afiando o olhar analítico...',
  'Construindo conhecimento...',
];

export function LoadingScreen() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % thematicPhrases.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="loading-container">
      <img src={parrotIcon} alt="Logo Avalista" className="loading-logo" />
      <p className="loading-text">
        {thematicPhrases[phraseIndex]}
      </p>
    </div>
  );
}