/**
 * Concept C – AI Survey Generation
 * RESPONSIVE: percentage padding/gap + clamp() font sizes.
 * Fills any card size without overflow or tiny text.
 */

const AiSurveyVisual = () => (
  <div
    className="w-full h-full flex flex-row items-stretch overflow-hidden"
    style={{ background: "#F7FBFE" }}
  >
    {/* ── Left: Prompt ── */}
    <div
      className="flex flex-col justify-center"
      style={{
        flex: 1,
        background: "#EBF5FB",
        borderRight: "1px solid rgba(0,92,144,0.1)",
        padding: "clamp(14px, 3cqw, 32px) clamp(6px, 2.5cqw, 28px)",
        gap: "clamp(8px, 1.5cqw, 16px)",
      }}
    >
      <div
        style={{
          fontSize: "clamp(9px, 1.1cqw, 11px)",
          fontWeight: 700,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: "#0981B5",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <span
          style={{
            width: "clamp(5px, 0.8cqw, 7px)",
            height: "clamp(5px, 0.8cqw, 7px)",
            borderRadius: "50%",
            background: "#27A8E0",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        Your Prompt
      </div>

      {/* Prompt bubble */}
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(0,92,144,0.11)",
          borderRadius: "clamp(8px, 1.5cqw, 14px)",
          padding: "clamp(8px, 1.5cqw, 14px)",
          boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(6px, 1cqw, 10px)",
            marginBottom: "clamp(5px, 0.9cqw, 10px)",
          }}
        >
          <div
            style={{
              width: "clamp(22px, 3.5cqw, 34px)",
              height: "clamp(22px, 3.5cqw, 34px)",
              borderRadius: "clamp(6px, 1cqw, 10px)",
              background: "linear-gradient(135deg, #005C90, #0981B5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" style={{ width: "52%", height: "52%" }} aria-label="Text prompt lines icon" role="img">
              <path d="M2 4h12M2 8h8M2 12h5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <span
            style={{
              fontSize: "clamp(9px, 1.2cqw, 12px)",
              fontWeight: 700,
              color: "#002649",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Prompt
          </span>
        </div>
        <div
          style={{
            fontSize: "clamp(9px, 1.2cqw, 12px)",
            color: "#005C90",
            lineHeight: "1.6",
            background: "rgba(9,129,181,0.07)",
            borderLeft: "2.5px solid #27A8E0",
            borderRadius: "0 7px 7px 0",
            padding: "clamp(5px, 0.9cqw, 9px) clamp(7px, 1.2cqw, 12px)",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Employee engagement survey, 5&nbsp;questions, Likert scale
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "clamp(9px, 1.3cqw, 13px)",
              background: "#0981B5",
              borderRadius: "1px",
              marginLeft: "2px",
              verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
            }}
          />
        </div>
      </div>

      {/* File type chips */}
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 0.8cqw, 10px)", flexWrap: "wrap", justifyContent: "flex-start" }}>
        {["PDF", "Image", "DOCX"].map((t) => (
          <span
            key={t}
            style={{
              fontSize: "clamp(7px, 0.9cqw, 10px)",
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              color: "#005C90",
              background: "#fff",
              border: "1px solid rgba(0,92,144,0.18)",
              borderRadius: 20,
              padding: "clamp(2px, 0.15cqw, 7px) clamp(8px, 1.5cqw, 16px)",
              whiteSpace: "nowrap",
              minWidth: "fit-content",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* ── Right: Generated Fields ── */}
    <div
      className="flex flex-col justify-center"
      style={{
        flex: 1.1,
        background: "#fff",
        padding: "5% 6%",
        gap: "5%",
      }}
    >
      <div
        style={{
          fontSize: "clamp(9px, 1.1cqw, 11px)",
          fontWeight: 700,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: "#39B44A",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <span
          style={{
            width: "clamp(5px, 0.8cqw, 7px)",
            height: "clamp(5px, 0.8cqw, 7px)",
            borderRadius: "50%",
            background: "#39B44A",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        AI Generates
      </div>

      {["Q1 · Satisfaction", "Q2 · Work-Life Balance", "Q3 · Team Collaboration"].map((q) => (
        <div
          key={q}
          style={{
            borderRadius: "clamp(5px, 1cqw, 10px)",
            border: "1px solid rgba(0,92,144,0.15)",
            background: "#F7FBFE",
            padding: "3% 4%",
            display: "flex",
            flexDirection: "column",
            gap: "12%",
          }}
        >
          <span
            style={{
              fontSize: "clamp(6px, 1.3cqw, 11px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#0981B5",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {q}
          </span>
          <div
            style={{
              height: "clamp(5px, 1cqw, 9px)",
              borderRadius: 3,
              background: "rgba(9,129,181,0.12)",
              border: "1px solid rgba(9,129,181,0.15)",
            }}
          />
        </div>
      ))}

      <button
        style={{
          alignSelf: "flex-start",
          fontSize: "clamp(7px, 1.4cqw, 11px)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#fff",
          background: "linear-gradient(90deg,#0981B5,#27A8E0)",
          border: "none",
          borderRadius: 30,
          padding: "3% 8%",
          cursor: "pointer",
          boxShadow: "0 3px 10px rgba(9,129,181,0.28)",
          fontFamily: "Poppins, sans-serif",
          flexShrink: 0,
        }}
      >
        Generate Survey →
      </button>
    </div>

    <style>{`
      @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
    `}</style>
  </div>
);

export default AiSurveyVisual;
