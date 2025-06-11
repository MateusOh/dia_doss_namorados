import React, { useState } from 'react';
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import foto3 from '../assets/foto3.jpg';

const fotos = [
  { imagem: foto1, rotacao: -3, posicao: '50% 30%' },
  { imagem: foto2, rotacao: 2, posicao: '50% 50%' },
  { imagem: foto3, rotacao: -2, posicao: '50% 40%' }
];

function Galeria({ onAvancar }) {
  const [fotoAtiva, setFotoAtiva] = useState(null);

  return (
    <div className="tela-galeria" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div className="galeria-content" style={{
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '2rem',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        maxWidth: '900px',
        width: '90%',
        margin: '0 auto'
      }}>
        <h2>Nossa História em Fotos - 33 Anos de Amor 📸</h2>
        <div className="galeria" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          margin: '2rem 0'
        }}>
          {fotos.map((foto, index) => (
            <div 
              key={index} 
              className={`polaroid ${fotoAtiva === index ? 'ativo' : ''}`}
              style={{ 
                transform: `rotate(${foto.rotacao}deg)`,
                background: 'white',
                padding: '1rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                width: '250px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onClick={() => setFotoAtiva(fotoAtiva === index ? null : index)}
            >
              <div className="polaroid-inner" style={{
                width: '100%',
                height: '300px',
                overflow: 'hidden',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={foto.imagem} 
                  alt="Momento especial" 
                  className="foto"
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: foto.posicao
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <p style={{ 
            marginTop: '20px', 
            fontStyle: 'italic', 
            color: '#ff1493', 
            userSelect: 'none'
          }}>
            Cada foto conta um pedacinho da nossa história...
          </p>

          <p style={{ 
            marginTop: '5px', 
            fontWeight: 'bold', 
            color: '#db7093', 
            userSelect: 'none'
          }}>
            PS: Você continua linda como no primeiro dia 💖
          </p>

          <button onClick={onAvancar} style={{ 
            marginTop: '2rem',
            background: '#ff4081',
            color: 'white',
            border: 'none',
            padding: '0.8rem 2rem',
            borderRadius: '25px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }}>
            Continuar
          </button>
        </div>
      </div>

      <div className="decoracao-coracao coracao-1" style={{
        position: 'fixed',
        top: '10%',
        left: '10%',
        fontSize: '2rem'
      }}>💝</div>
      <div className="decoracao-coracao coracao-2" style={{
        position: 'fixed',
        top: '20%',
        right: '10%',
        fontSize: '2rem'
      }}>💖</div>
      <div className="decoracao-coracao coracao-3" style={{
        position: 'fixed',
        bottom: '10%',
        left: '15%',
        fontSize: '2rem'
      }}>💗</div>
    </div>
  );
}

export default Galeria;
