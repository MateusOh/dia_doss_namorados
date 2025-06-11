import React, { useEffect, useState } from 'react';

const mensagensRomanticas = [
  "33 anos de amor, companheirismo, felicidade e Deus! ❤️",
  "Depois de todos esses anos, continuo me apaixonando por você todos os dias",
  "33 anos juntos e você continua sendo a razão do meu sorriso",
  "Você é a maior bênção que Deus colocou na minha vida",
  "Obrigado por construir essa linda história ao meu lado",
  "Cada momento ao seu lado fez esses 33 anos serem especiais",
  "Você é o amor da minha vida, minha companheira, minha melhor amiga",
];

function Declaracao({ onVoltar }) {
  const [indiceMensagem, setIndiceMensagem] = useState(0);

  useEffect(() => {
    const container = document.querySelector('.coracoes');

    function criarCoracao() {
      const coracao = document.createElement('div');
      coracao.classList.add('coracao');
      
      // Posição inicial aleatória na horizontal
      const startX = Math.random() * 100;
      coracao.style.left = startX + 'vw';
      
      // Movimento aleatório para os lados
      const moverX = (Math.random() - 0.5) * 200;
      coracao.style.setProperty('--mover-x', `${moverX}px`);
      
      // Tamanho e duração aleatórios
      coracao.style.fontSize = 12 + Math.random() * 24 + 'px';
      coracao.style.animationDuration = 2 + Math.random() * 3 + 's';
      coracao.textContent = '💖';

      container.appendChild(coracao);

      coracao.addEventListener('animationend', () => {
        coracao.remove();
      });
    }

    const intervaloCoracao = setInterval(criarCoracao, 200);
    const intervaloMensagem = setInterval(() => {
      setIndiceMensagem((prev) => (prev + 1) % mensagensRomanticas.length);
    }, 5000);

    return () => {
      clearInterval(intervaloCoracao);
      clearInterval(intervaloMensagem);
    };
  }, []);

  return (
    <div className="tela-mensagem">
      <div className="mensagem-container">
        <h2>Depois de 33 anos, ainda quero te dizer que...</h2>
        <p className="mensagem-romantica">
          {mensagensRomanticas[indiceMensagem]}
        </p>
        <p className="mensagem-final">
          Te amo para sempre 🌹
        </p>
        <button onClick={onVoltar}>
          Voltar ao Início
        </button>
      </div>
      <div className="coracoes"></div>
    </div>
  );
}

export default Declaracao;
