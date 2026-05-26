/**
 * AI Summary of Individual Responses Visual - Concept F
 * Floating Word Cloud with Random Placement & Sentiment-Based Styling
 * RESPONSIVE: Uses container queries (cqw), clamp() for all sizing
 * OPTIMIZED: Single RAF loop, IntersectionObserver for pause/resume, proper cleanup
 */

import { useEffect, useRef, useState } from 'react';

const AiSummaryOfResponsesVisual = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animatingRef = useRef(true);

  useEffect(() => {
    if (!stageRef.current) return;

    const stage = stageRef.current;
    const W = stage.offsetWidth;
    const H = stage.offsetHeight;

    if (W < 20 || H < 20) return;

    // Clear previous words
    stage.innerHTML = '';

    const COLORS = { pos: '#2A9A4F', neg: '#D44332', neu: '#0981B5', mix: '#C47A1A' };

    // Word data from reference HTML - comprehensive sentiment analysis
    const WORDS_DATA = [
      // Positive (expanded)
      ['excellent service', 50, 'pos'],
      ['highly recommend', 44, 'pos'],
      ['great support', 36, 'pos'],
      ['easy to use', 32, 'pos'],
      ['fast response', 26, 'pos'],
      ['reliable', 24, 'pos'],
      ['impressed', 20, 'pos'],
      ['love it', 28, 'pos'],
      ['fantastic', 22, 'pos'],
      
      // Negative (dominant)
      ['terrible experience', 52, 'neg'],
      ['waste of money', 46, 'neg'],
      ['never again', 42, 'neg'],
      ['keeps crashing', 40, 'neg'],
      ['very frustrating', 38, 'neg'],
      ['poor support', 36, 'neg'],
      ['complete disaster', 34, 'neg'],
      ['absolutely useless', 32, 'neg'],
      ['worst app ever', 30, 'neg'],
      ['total scam', 28, 'neg'],
      ['broken features', 26, 'neg'],
      ['data was lost', 24, 'neg'],
      ['no response', 22, 'neg'],
      ['misleading pricing', 20, 'neg'],
      ['buggy mess', 18, 'neg'],
      ['cancelled immediately', 17, 'neg'],
      ['deeply disappointed', 16, 'neg'],
      
      // Neutral (expanded)
      ['average', 20, 'neu'],
      ['nothing special', 17, 'neu'],
      ['just okay', 15, 'neu'],
      ['works as described', 13, 'neu'],
      ['does the job', 14, 'neu'],
      ['no complaints', 13, 'neu'],
      ['decent', 16, 'neu'],
      ['acceptable', 14, 'neu'],
      ['mediocre', 12, 'neu'],
      ['standard', 11, 'neu'],
      ['reasonable performance', 28, 'neu'],
      ['satisfactory', 26, 'neu'],
      
      // Mixed (expanded)
      ['mixed feelings', 22, 'mix'],
      ['hit or miss', 20, 'mix'],
      ['could be better', 18, 'mix'],
      ['fair', 16, 'mix'],
      ['acceptable', 14, 'mix'],
      ['pretty good', 19, 'mix'],
      ['somewhat helpful', 17, 'mix'],
      ['occasionally good', 15, 'mix'],
      ['mostly works', 13, 'mix'],
      ['decent enough', 29, 'mix'],
      ['somewhat positive', 27, 'mix'],
    ] as [string, number, 'pos' | 'neg' | 'neu' | 'mix'][];

    const placed: Array<{ x: number; y: number; w: number; h: number }> = [];

    function measureText(text: string, fs: number, fw: number | string): { w: number; h: number } {
      const el = document.createElement('span');
      el.style.cssText = `
        position: absolute;
        visibility: hidden;
        white-space: nowrap;
        font-family: 'Poppins', sans-serif;
        font-size: ${fs}px;
        font-weight: ${fw};
        line-height: 1.15;
      `;
      el.textContent = text;
      document.body.appendChild(el);
      const r = { w: el.offsetWidth + 10, h: el.offsetHeight + 5 };
      document.body.removeChild(el);
      return r;
    }

    function overlaps(x: number, y: number, w: number, h: number, margin: number): boolean {
      for (const p of placed) {
        if (x < p.x + p.w + margin && x + w + margin > p.x &&
            y < p.y + p.h + margin && y + h + margin > p.y) {
          return true;
        }
      }
      return false;
    }

    // Detect mobile/phone screens for increased density
    const isMobile = W < 600 || (W < H && W < 800);
    
    const scale = Math.min(W, H) / 260;
    const PAD = isMobile 
      ? Math.max(0, Math.round(0.8 * scale))
      : Math.max(1, Math.round(1.5 * scale));
    const MIN_GAP = isMobile
      ? Math.round(3 * scale)
      : Math.round(5 * scale);
    const maxTries = 1200;

    // Animation state - shared across all words
    interface WordState {
      div: HTMLDivElement;
      t0: number;
      dur: number;
      delay: number;
      amp: number;
      phase: number;
      axis: 'X' | 'Y';
      opacity: number;
      color: string;
      isHovered: boolean;
    }

    const words: WordState[] = [];

    // Shuffle words slightly to vary placement
    const sortedWords = [...WORDS_DATA]
      .sort((a, b) => (b[1] - a[1]) + (Math.random() - 0.5) * 5)

    sortedWords.forEach(([text, weight, sentiment]) => {
      const fsRaw = 7 + ((weight - 12) / (52 - 12)) * 20;
      const fs = Math.round(Math.min(28, Math.max(10, fsRaw * scale)));
      const fw = weight >= 40 ? 700 : weight >= 22 ? 600 : 500;

      const { w: tw, h: th } = measureText(text, fs, fw);

      if (tw > W - PAD * 2 || th > H - PAD * 2) return;

      let x = -1, y = -1;
      let placed_successfully = false;

      for (let i = 0; i < maxTries; i++) {
        x = PAD + Math.random() * Math.max(0, W - tw - PAD * 2);
        y = PAD + Math.random() * Math.max(0, H - th - PAD * 2);
        if (!overlaps(x, y, tw, th, MIN_GAP)) {
          placed_successfully = true;
          break;
        }
      }

      if (!placed_successfully) {
        const gridSize = Math.ceil(Math.sqrt(placed.length + 1) * 1.5);
        const stepX = (W - PAD * 2) / gridSize;
        const stepY = (H - PAD * 2) / gridSize;
        const jitterRange = Math.min(stepX, stepY) * 0.25;

        for (let gx = 0; gx < gridSize && !placed_successfully; gx++) {
          for (let gy = 0; gy < gridSize && !placed_successfully; gy++) {
            x = PAD + gx * stepX + (Math.random() - 0.5) * jitterRange;
            y = PAD + gy * stepY + (Math.random() - 0.5) * jitterRange;

            if (x + tw <= W - PAD && y + th <= H - PAD && !overlaps(x, y, tw, th, MIN_GAP)) {
              placed_successfully = true;
            }
          }
        }
      }

      if (!placed_successfully || x < 0 || y < 0) return;

      placed.push({ x, y, w: tw, h: th });

      const div = document.createElement('div');
      div.textContent = text;
      const color = COLORS[sentiment];
      const opacity = 0.6 + (weight / 52) * 0.4;
      const dur = 3800 + Math.random() * 2800;
      const delay = Math.random() * -dur;
      const amp = Math.min(2.5, (1.2 + Math.random() * 2) * scale);
      const phase = Math.random() * Math.PI * 2;
      const axis = Math.random() > 0.5 ? 'Y' : 'X';

      div.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        font-family: 'Poppins', sans-serif;
        font-size: ${fs}px;
        font-weight: ${fw};
        color: ${color};
        opacity: ${opacity.toFixed(2)};
        white-space: nowrap;
        cursor: default;
        user-select: none;
        will-change: transform;
        transition: opacity 0.3s;
      `;

      const wordState: WordState = {
        div,
        t0: 0,
        dur,
        delay,
        amp,
        phase,
        axis,
        opacity,
        color,
        isHovered: false,
      };

      const onMouseEnter = () => {
        wordState.isHovered = true;
        div.style.opacity = '1';
        div.style.transform = 'scale(1.1)';
      };

      const onMouseLeave = () => {
        wordState.isHovered = false;
        div.style.opacity = opacity.toFixed(2);
        div.style.transform = '';
      };

      div.addEventListener('mouseenter', onMouseEnter);
      div.addEventListener('mouseleave', onMouseLeave);

      words.push(wordState);
      stage.appendChild(div);
    });

    // Single RAF loop for all animations
    let rafId: number;
    let lastTime = 0;

    const animate = (ts: number) => {
      if (!animatingRef.current) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      if (lastTime === 0) lastTime = ts;

      words.forEach((word) => {
        if (word.t0 === 0) word.t0 = ts + Math.abs(word.delay);
        const elapsed = (ts - word.t0) / word.dur;
        const offset = Math.sin(elapsed * Math.PI * 2 + word.phase) * word.amp;
        
        if (!word.isHovered) {
          word.div.style.transform = word.axis === 'Y'
            ? `translateY(${offset.toFixed(2)}px)`
            : `translateX(${offset.toFixed(2)}px)`;
        }
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    // IntersectionObserver to pause/resume animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        animatingRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup function
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
      lastTime = 0;
    };

  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col overflow-hidden"
      style={{ background: "#F2F8FC", position: "relative" }}
    >
      {/* Title outside box */}
      <div
        style={{
          padding: "clamp(10px, 1.5cqw, 14px) clamp(12px, 1.8cqw, 18px)",
          fontSize: "clamp(8px, 1.1cqw, 10px)",
          fontWeight: 700,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: "#0981B5",
          fontFamily: "Poppins, sans-serif",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexShrink: 0,
          marginBottom: "0px",
        }}
      >
        <span
          style={{
            width: "clamp(6px, 0.9cqw, 8px)",
            height: "clamp(6px, 0.9cqw, 8px)",
            borderRadius: "50%",
            background: "#27A8E0",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        Response Word Cloud
      </div>

      {/* Floating Cloud Container - Box */}
      <div
        className="flex-1 flex flex-col overflow-hidden"
        style={{
          background: "#F7FBFE",
          position: "relative",
          margin: "0 clamp(6px, 1.2cqw, 12px) clamp(6px, 1.2cqw, 12px) clamp(6px, 1.2cqw, 12px)",
          borderRadius: "clamp(6px, 1cqw, 10px)",
          border: "1px solid rgba(0,92,144,0.15)",
          boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
        }}
      >
        {/* Floating Cloud Stage */}
        <div
          ref={stageRef}
          className="flex-1 flex items-center justify-center overflow-hidden relative"
          style={{
            padding: "clamp(1px, 0.3cqw, 4px)", // Even tighter on mobile for max density
            background: "#fcfeff",
            position: "relative",
          }}
        />

        {/* Legend inside box */}
        <div
          style={{
            padding: "clamp(8px, 1.2cqw, 12px) clamp(10px, 1.5cqw, 14px)",
            background: "#EBF5FB",
            borderTop: "1px solid rgba(0,92,144,0.11)",
            display: "flex",
            gap: "clamp(12px, 2cqw, 24px)",
            justifyContent: "center",
            flexWrap: "wrap",
            flexShrink: 0,
          }}
        >
          {[
            { label: "Positive", pct: "18%", color: "#2A9A4F" },
            { label: "Negative", pct: "35%", color: "#D44332" },
            { label: "Neutral", pct: "25%", color: "#0981B5" },
            { label: "Mixed", pct: "22%", color: "#C47A1A" },
          ].map((leg) => (
            <div key={leg.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "clamp(8px, 1.2cqw, 12px)",
                  height: "clamp(8px, 1.2cqw, 12px)",
                  borderRadius: "50%",
                  background: leg.color,
                }}
              />
              <span
                style={{
                  fontSize: "clamp(7px, 0.95cqw, 9px)",
                  fontWeight: 600,
                  color: "#005C90",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {leg.label} {leg.pct}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiSummaryOfResponsesVisual;
