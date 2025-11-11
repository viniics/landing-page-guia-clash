import React, { useRef, useState } from "react";

export default function TopMarquee() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  // CSS embutido
  const styles = `
    .top-marquee-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 9999;
      overflow: hidden; /* Esconde o conteúdo que sai da tela */
      background: linear-gradient(90deg, #0b3d91 0%, #1e90ff 50%, #0b3d91 100%);
      color: #fff;
      font-weight: 700;
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      box-shadow: 0 6px 30px rgba(2, 6, 23, 0.35);
      
      mask-image: linear-gradient(to right, 
        transparent 0%, 
        black 5%, 
        black 95%, 
        transparent 100%
      );
      -webkit-mask-image: linear-gradient(to right, 
        transparent 0%, 
        black 5%, 
        black 95%, 
        transparent 100%
      );
    }

    .top-marquee-content {
      display: flex;
      flex-shrink: 0;
      white-space: nowrap;
      padding: 8px 12px;
      font-size: 0.95rem;
      letter-spacing: 0.2px;
      
      /* Ajustamos a duração para 40s para compensar o conteúdo duplicado,
        mantendo a velocidade de rolagem consistente.
      */
      animation: marquee-scroll 40s linear infinite;
    }

    .top-marquee-container:hover .top-marquee-content {
      animation-play-state: paused;
    }

    .marquee-item {
      display: inline-block;
      padding: 2px 0;
      gap: 3rem;
      margin-right: 3rem; /* Equivalente ao 'gap' */
      flex-shrink: 0; /* Garante que os itens não encolham */
    }

    @keyframes marquee-scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        /* Isso ainda está correto. 
          Movemos -50% do container total (que agora tem 4 cópias).
          Isso move as 2 primeiras cópias para fora e as 2 últimas para dentro.
        */
        transform: translateX(-50%);
      }
    }
  `;

  const items = [
    "🔥 OFERTA LIMITADA",
    "💎 GUIA COMPLETO DE CLASH ROYALE",
    "⚡ ACESSO IMEDIATO",
    "🏆 ESTRATÉGIAS DE TOP PLAYERS",
  ];

  return (
    <>
      <style>{styles}</style>
      
      <div 
        className="top-marquee-container" 
        role="status" 
        aria-live="polite"
        onMouseEnter={() => setIsAnimating(false)}
        onMouseLeave={() => setIsAnimating(true)}
      >
        <div 
          ref={contentRef} 
          className="top-marquee-content"
          style={{ animationPlayState: isAnimating ? 'running' : 'paused' }}
        >
          {/* Agora temos 4 cópias no total.
            O CSS anima 50% do container, movendo [Cópia 1 + Cópia 2] para fora
            e trazendo [Cópia 3 + Cópia 4] para o lugar, criando um loop perfeito
            e garantindo que o conteúdo seja longo o suficiente para qualquer tela.
          */}

          {/* Cópia 1 */}
          {items.map((item, index) => (
            <span key={`item1-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
          {/* Cópia 2 */}
          {items.map((item, index) => (
            <span key={`item2-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
          {/* Cópia 3 (para o loop) */}
          {items.map((item, index) => (
            <span key={`item3-${index}`} className="marquee-item" aria-hidden="true">
              {item}
            </span>
          ))}
          {/* Cópia 4 (para o loop) */}
          {items.map((item, index) => (
            <span key={`item4-${index}`} className="marquee-item" aria-hidden="true">
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
``