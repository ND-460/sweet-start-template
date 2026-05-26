import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  color: string;
  opacity: number;
  lineScale: number;
};

const SurveyVistaIntelligenceVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
        
        // Reinitialize particles on resize
        const colors = ['#0981B5', '#27A8E0', '#005C90', '#73CFE1', '#39B44A'];
        const baseArea = 600 * 400;
        const currentArea = canvas.width * canvas.height;
        const scaleMultiplier = Math.sqrt(currentArea / baseArea) * 1.5;
        
        particlesRef.current = Array.from({ length: 55 }, () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: (Math.random() * 3.2 + 1.5) * scaleMultiplier,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.2,
          lineScale: scaleMultiplier,
        }));
      }
    }
    
    resize();
    const resizeHandler = () => resize();
    window.addEventListener('resize', resizeHandler);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const particles = particlesRef.current;
      
      if (particles.length === 0) return;
      
      const lineScale = particles[0].lineScale;
      const centerDist = 110 * lineScale; // Responsive center distance
      const particleDist = 60 * lineScale; // Responsive particle connection distance

      particles.forEach((p) => {
        const dist = Math.hypot(p.x - cx, p.y - cy);
        if (dist < centerDist) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(cx, cy);
          ctx.strokeStyle = `rgba(9,129,181,${0.07 * (1 - dist / centerDist)})`;
          ctx.lineWidth = 0.8 * lineScale;
          ctx.stroke();
        }
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(
            particles[i].x - particles[j].x,
            particles[i].y - particles[j].y
          );
          if (d < particleDist) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(39,168,224,${0.12 * (1 - d / particleDist)})`;
            ctx.lineWidth = 0.5 * lineScale;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        const hexValue = Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fillStyle = p.color + hexValue;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationRef.current = requestAnimationFrame(draw);
    }
    
    draw();

    return () => {
      window.removeEventListener('resize', resizeHandler);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-full flex overflow-hidden" style={{ background: 'linear-gradient(135deg, #EEF7FD 0%, #F5FAFF 100%)' }}>
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(4px, 1.5vw, 12px)',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: 'clamp(42px, 8vw, 72px)',
            height: 'clamp(42px, 8vw, 72px)',
            borderRadius: 'clamp(12px, 1.8vw, 18px)',
            background: 'linear-gradient(135deg, #0981B5, #27A8E0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 28px rgba(9,129,181,0.3)',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 'clamp(22px, 5vw, 40px)', height: 'clamp(22px, 5vw, 40px)' }}
          >
            <path
              d="M12 2L13.5 8.5L20 9L13.5 10.5L12 17L10.5 10.5L4 9L10.5 8.5L12 2Z"
              fill="white"
              opacity="0.95"
            />
            <path
              d="M19 16L19.8 18.2L22 19L19.8 19.8L19 22L18.2 19.8L16 19L18.2 18.2L19 16Z"
              fill="rgba(255,255,255,0.7)"
            />
          </svg>
        </div>
        <div
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(11px, 2.5vw, 18px)',
            fontWeight: 800,
            color: '#002649',
            letterSpacing: '0.02em',
            textAlign: 'center',
            marginTop: 'clamp(6px, 1.2vw, 12px)',
          }}
        >
          SurveyVista Intelligence
        </div>
      </div>
    </div>
  );
};

export default SurveyVistaIntelligenceVisual;
