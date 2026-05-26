/**
 * Concept B – AI-Generated Insights Dashboard
 * RESPONSIVE: all sizing uses percentages + clamp() so it fills any card size.
 * No fixed px widths/heights on layout containers.
 */

const barHeights = [40, 62, 48, 78, 60, 92, 70];

const AiInsightsVisual = () => (
  <div
    className="w-full h-full flex flex-col overflow-hidden"
    style={{ background: "#F2F8FC", padding: "2.5% 2.5%" , gap: "2.5%" }}
  >
    {/* ── Top row ── */}
    <div className="flex min-h-0 flex-1" style={{ gap: "2.5%" }}>

      {/* Bar chart */}
      <div
        className="flex flex-col min-w-0 bg-white"
        style={{
          flex: "1.4",
          borderRadius: "clamp(8px, 1.5%, 14px)",
          border: "1px solid rgba(0,92,144,0.11)",
          boxShadow: "0 1px 6px rgba(0,38,73,0.04)",
          padding: "4% 5%",
          gap: "6%",
        }}
      >
        <span
          style={{
            fontSize: "clamp(7px, 1.4cqw, 11px)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.13em",
            color: "#0981B5",
            fontFamily: "Poppins, sans-serif",
            flexShrink: 0,
          }}
        >
          Response Trend
        </span>
        <div className="flex items-end flex-1" style={{ gap: "3%" }}>
          {barHeights.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: "3px 3px 0 0",
                background:
                  i === 5
                    ? "linear-gradient(to top,#39B44A,#27A8E0)"
                    : "linear-gradient(to top,#005C90,#27A8E0)",
                animation: `barUp 1.2s ease-out ${0.05 + i * 0.07}s forwards`,
                transformOrigin: "bottom",
                transform: "scaleY(0)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Donut */}
      <div
        className="flex flex-col min-w-0 bg-white"
        style={{
          flex: "1",
          borderRadius: "clamp(8px, 1.5%, 14px)",
          border: "1px solid rgba(0,92,144,0.11)",
          boxShadow: "0 1px 6px rgba(0,38,73,0.04)",
          padding: "4% 5%",
          gap: "6%",
        }}
      >
        <span
          style={{
            fontSize: "clamp(7px, 1.4cqw, 11px)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.13em",
            color: "#0981B5",
            fontFamily: "Poppins, sans-serif",
            flexShrink: 0,
          }}
        >
          Sentiment
        </span>
        {/* SVG scales with container via viewBox + percentage width */}
        <div className="flex items-center flex-1 min-h-0" style={{ gap: "8%" }}>
          <svg
            viewBox="0 0 42 42"
            style={{ width: "40%", maxWidth: 64, flexShrink: 0 }}
            aria-label="Sentiment analysis gauge showing 62% positive, 25% neutral, 13% mixed feedback ratings"
            role="img"
          >
            <circle cx="21" cy="21" r="16" fill="none" stroke="#EBF5FB" strokeWidth="5.5" />
            <circle cx="21" cy="21" r="16" fill="none" stroke="#39B44A" strokeWidth="5.5" strokeDasharray="62 39" strokeDashoffset="-4" strokeLinecap="round" />
            <circle cx="21" cy="21" r="16" fill="none" stroke="#27A8E0" strokeWidth="5.5" strokeDasharray="25 76" strokeDashoffset="-66" strokeLinecap="round" />
            <circle cx="21" cy="21" r="16" fill="none" stroke="#73CFE1" strokeWidth="5.5" strokeDasharray="14 87" strokeDashoffset="-91" strokeLinecap="round" />
            <text x="21" y="24" textAnchor="middle" fill="#002649" fontSize="8" fontFamily="Poppins,sans-serif" fontWeight="800">4.3</text>
          </svg>
          <div className="flex flex-col" style={{ gap: "12%" }}>
            {[
              { color: "#39B44A", label: "Positive 62%" },
              { color: "#27A8E0", label: "Neutral 25%" },
              { color: "#73CFE1", label: "Mixed 13%" },
            ].map((l) => (
              <div key={l.label} className="flex items-center" style={{ gap: "6%" }}>
                <div
                  style={{
                    width: "clamp(5px, 1.2cqw, 9px)",
                    height: "clamp(5px, 1.2cqw, 9px)",
                    borderRadius: "50%",
                    background: l.color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "clamp(6px, 1.2cqw, 10px)",
                    fontWeight: 600,
                    color: "#002649",
                    fontFamily: "Poppins, sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  {l.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* ── Bottom row ── */}
    <div className="flex min-h-0 flex-1" style={{ gap: "2.5%" }}>

      {/* Action areas */}
      <div
        className="flex flex-col min-w-0 bg-white"
        style={{
          flex: "1.4",
          borderRadius: "clamp(8px, 1.5%, 14px)",
          border: "1px solid rgba(0,92,144,0.11)",
          boxShadow: "0 1px 6px rgba(0,38,73,0.04)",
          padding: "4% 5%",
          gap: "6%",
        }}
      >
        <span
          style={{
            fontSize: "clamp(7px, 1.4cqw, 11px)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.13em",
            color: "#0981B5",
            fontFamily: "Poppins, sans-serif",
            flexShrink: 0,
          }}
        >
          Top Action Areas
        </span>
        <div className="flex flex-col flex-1 justify-around">
          {[
            { emoji: "🎯", bg: "rgba(57,180,74,0.1)",    bar1c: "rgba(57,180,74,0.28)",   w1: 85, w2: 55 },
            { emoji: "📊", bg: "rgba(39,168,224,0.1)",   bar1c: "rgba(39,168,224,0.25)",  w1: 68, w2: 42 },
            { emoji: "⚡", bg: "rgba(115,207,225,0.15)", bar1c: "rgba(115,207,225,0.4)",  w1: 52, w2: 35 },
          ].map((a) => (
            <div key={a.emoji} className="flex items-center" style={{ gap: "clamp(8px, 3%, 16px)" }}>
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: "clamp(18px, 4.5cqw, 32px)",
                  height: "clamp(18px, 4.5cqw, 32px)",
                  borderRadius: "clamp(4px, 0.8cqw, 8px)",
                  background: a.bg,
                  fontSize: "clamp(10px, 2.2cqw, 18px)",
                }}
              >
                {a.emoji}
              </div>
              <div className="flex flex-col flex-1" style={{ gap: "clamp(8px, 1.2cqw, 12px)" }}>
                <div style={{ height: "clamp(4px, 1cqw, 8px)", borderRadius: 3, width: `${a.w1}%`, background: a.bar1c }} />
                <div style={{ height: "clamp(4px, 1cqw, 8px)", borderRadius: 3, width: `${a.w2}%`, background: "rgba(0,92,144,0.1)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stat bubble */}
      <div
        className="flex-1 bg-white flex flex-col items-center justify-center"
        style={{
          borderRadius: "clamp(8px, 1.5%, 14px)",
          border: "1px solid rgba(0,92,144,0.11)",
          boxShadow: "0 1px 6px rgba(0,38,73,0.04)",
          gap: "4%",
          padding: "4%",
        }}
      >
        <span
          style={{
            fontSize: "clamp(18px, 5cqw, 36px)",
            fontWeight: 800,
            lineHeight: 1,
            color: "#0981B5",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          247
        </span>
        <span
          style={{
            fontSize: "clamp(6px, 1.2cqw, 10px)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "#005C90",
            opacity: 0.75,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Responses
        </span>
        <div style={{ width: "30%", height: 1, background: "rgba(0,92,144,0.15)" }} />
        <span
          style={{
            fontSize: "clamp(6px, 1.2cqw, 10px)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.09em",
            color: "#39B44A",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Done in 3s
        </span>
      </div>
    </div>

    <style>{`
      @keyframes barUp { to { transform: scaleY(1); } }
    `}</style>
  </div>
);

export default AiInsightsVisual;
