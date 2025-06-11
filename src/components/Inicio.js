import React, { useState } from 'react';

function Inicio({ onAvancar }) {
  const [abrindo, setAbrindo] = useState(false);

  const handleClick = () => {
    setAbrindo(true);
    setTimeout(() => {
      onAvancar();
    }, 1500);
  };

  return (
    <div className="tela-inicio">
      <p className="mensagem-inicial">
        Feliz dia dos namorados<br />
        Nossos filhos me ajudaram a criar algo especial<br />
        para expressar todo meu amor por você.<br />
        Clique na cartinha.
      </p>
      <div className={`cartinha ${abrindo ? 'aberta' : ''}`} onClick={handleClick}>
        <div className="tampa">
          <span className="texto-tampa" style={{ fontSize: '1.2rem' }}>Para meu eterno amor ❤️</span>
        </div>
        <div className="carta">
          <div className="conteudo-carta">
            <span>💌</span>
            <p>Para a mulher da minha vida...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
