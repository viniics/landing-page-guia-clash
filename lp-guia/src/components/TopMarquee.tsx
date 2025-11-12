import { useRef, useState, useLayoutEffect } from "react";

export default function TopMarquee() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [, setSpacerHeight] = useState(0);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const updateHeight = () => {
        setSpacerHeight(containerRef.current?.offsetHeight || 0);
      };
      updateHeight();

      const resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(containerRef.current);

      window.addEventListener("resize", updateHeight);
      return () => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", updateHeight);
      };
    }
  }, []);

  const styles = `
  .top-marquee-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw; /* ocupa 100% da largura da viewport */
    z-index: 9999;
    overflow: hidden;
    background: linear-gradient(90deg, #0b3d91 0%, #1e90ff 50%, #0b3d91 100%);
    color: #fff;
    font-weight: 700;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    box-shadow: 0 6px 30px rgba(2, 6, 23, 0.35);
    transition: all 0.3s ease;
    mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
  }

  .top-marquee-content {
    display: flex;
    flex-shrink: 0;
    white-space: nowrap;
    padding: 10px 12px;
    font-size: 0.95rem;
    letter-spacing: 0.2px;
    animation: marquee-scroll 40s linear infinite;
  }

  .top-marquee-container:hover .top-marquee-content {
    animation-play-state: paused;
  }

  .top-marquee-container:hover {
    padding: 14px 0;
  }

  .marquee-item {
    display: inline-block;
    padding: 2px 0;
    margin-right: 3rem;
    flex-shrink: 0;
  }

  @keyframes marquee-scroll {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
`;


  const items = [
    "🔥 PROMOÇÃO POR TEMPO LIMITADO",
    "💎 GUIA COMPLETO DO 0 AOS 10.000 🏆",
    "⚡ ACESSO IMEDIATO",
    "🔐 100% SEGURO",
  ];

  return (
    <>
      <style>{styles}</style>

      <div
        ref={containerRef}
        className="top-marquee-container"
        role="status"
        aria-live="polite"
        onMouseEnter={() => setIsAnimating(false)}
        onMouseLeave={() => setIsAnimating(true)}
      >
        <div
          ref={contentRef}
          className="top-marquee-content"
          style={{ animationPlayState: isAnimating ? "running" : "paused" }}
        >
          {items.concat(items, items, items).map((item, index) => (
            <span key={index} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>

    </>
  );
}
