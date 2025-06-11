import React, { useState } from 'react';
import Inicio from './components/Inicio';
import Declaracao from './components/Declaracao';
import Galeria from './components/Galeria';

function App() {
  const [etapa, setEtapa] = useState('inicio');

  const avancarEtapa = () => {
    if (etapa === 'inicio') setEtapa('galeria');
    else if (etapa === 'galeria') setEtapa('declaracao');
  };

  const voltarInicio = () => {
    setEtapa('inicio');
  };

  return (
    <div className="App">
      {etapa === 'inicio' && <Inicio onAvancar={avancarEtapa} />}
      {etapa === 'galeria' && <Galeria onAvancar={avancarEtapa} />}
      {etapa === 'declaracao' && <Declaracao onVoltar={voltarInicio} />}
    </div>
  );
}

export default App;