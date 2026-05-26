/**
 * Prompt-Based Cloning Concept Visual
 * Shows: Prompt Input → AI Processing → Cloned Output
 * RESPONSIVE: Uses container queries for adaptive sizing
 */

const PromptCloningVisual = () => (
  <div
    className="w-full h-full flex flex-row items-stretch"
    style={{ background: "#F2F8FC" }}
  >
    {/* ── LEFT: Your Command ── */}
    <div
      className="flex flex-col justify-center"
      style={{
        flex: "0 0 48%",
        background: "#EBF5FB",
        borderRight: "1px solid rgba(0,92,144,0.11)",
        padding: "clamp(14px, 3cqw, 32px) clamp(12px, 2.5cqw, 28px)",
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
        Your Command
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
          Clone Q3 Customer Survey, rename it Q4, and update date references.
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

      <div style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 1cqw, 10px)", flexWrap: "wrap" }}>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(8px, 1cqw, 11px)",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#fff",
            background: "linear-gradient(90deg, #0981B5, #27A8E0)",
            border: "none",
            borderRadius: "30px",
            padding: "clamp(5px, 0.9cqw, 8px) clamp(12px, 2cqw, 20px)",
            cursor: "pointer",
            boxShadow: "0 3px 12px rgba(9,129,181,0.30)",
            whiteSpace: "nowrap",
          }}
        >
          Execute Command
        </button>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "clamp(8px, 1cqw, 10px)",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: "rgba(0,38,73,0.07)",
            color: "#005C90",
            borderRadius: "30px",
            padding: "3px 10px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Clone + Edit
        </span>
      </div>
    </div>

    {/* ── RIGHT: Result ── */}
    <div
      className="flex flex-col justify-center overflow-hidden"
      style={{
        flex: 1,
        background: "#fff",
        padding: "clamp(14px, 3cqw, 32px) clamp(12px, 2.5cqw, 28px)",
        gap: "clamp(8px, 1.5cqw, 16px)",
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
        Result
      </div>

      {/* Original Survey */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(8px, 1.2cqw, 12px)",
          background: "#fff",
          border: "1px solid rgba(0,92,144,0.11)",
          borderRadius: "clamp(8px, 1.2cqw, 12px)",
          padding: "clamp(7px, 1.2cqw, 12px)",
          boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
        }}
      >
        <div
          style={{
            width: "clamp(26px, 4cqw, 38px)",
            height: "clamp(26px, 4cqw, 38px)",
            borderRadius: "clamp(6px, 0.9cqw, 10px)",
            background: "rgba(9,129,181,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }} aria-label="Unconfirmed survey template icon" role="img">
            <rect x="2" y="2" width="12" height="12" rx="2.5" stroke="#0981B5" strokeWidth="1.5" />
            <path d="M5 6h6M5 9h4" stroke="#0981B5" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: "clamp(10px, 1.3cqw, 13px)",
              fontWeight: 600,
              color: "#002649",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Q3 Customer Survey
          </div>
          <div style={{ display: "flex", gap: "5px", marginTop: "3px" }}>
            <div style={{ height: "clamp(4px, 0.8cqw, 7px)", borderRadius: "3px", background: "rgba(9,129,181,0.14)", width: "38%" }} />
            <div style={{ height: "clamp(4px, 0.8cqw, 7px)", borderRadius: "3px", background: "rgba(9,129,181,0.14)", width: "24%" }} />
          </div>
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "clamp(8px, 1cqw, 10px)",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: "rgba(9,129,181,0.12)",
            color: "#0981B5",
            borderRadius: "30px",
            padding: "3px 10px",
            fontFamily: "Poppins, sans-serif",
            flexShrink: 0,
          }}
        >
          Origin
        </span>
      </div>

      {/* AI Clone Arrow */}
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 1cqw, 10px)" }}>
        <div style={{ flex: 1, height: "1.5px", background: "linear-gradient(90deg, rgba(9,129,181,0.2), rgba(57,180,74,0.4))", position: "relative" }} />
        <div
          style={{
            background: "linear-gradient(90deg, #0981B5, #27A8E0)",
            color: "#fff",
            fontSize: "clamp(7px, 0.9cqw, 9px)",
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            borderRadius: "20px",
            padding: "clamp(2px, 0.4cqw, 4px) clamp(8px, 1.2cqw, 12px)",
            flexShrink: 0,
            fontFamily: "Poppins, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          AI Clone
        </div>
        <div style={{ flex: 1, height: "1.5px", background: "linear-gradient(90deg, rgba(57,180,74,0.4), rgba(9,129,181,0.2))", position: "relative" }} />
      </div>

      {/* Cloned Survey - Ready */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(8px, 1.2cqw, 12px)",
          background: "#fff",
          border: "1px solid rgba(57,180,74,0.28)",
          borderRadius: "clamp(8px, 1.2cqw, 12px)",
          padding: "clamp(7px, 1.2cqw, 12px)",
          boxShadow: "0 2px 10px rgba(57,180,74,0.10)",
          animation: "pulseGreen 2.5s ease-in-out infinite",
        }}
      >
        <div
          style={{
            width: "clamp(26px, 4cqw, 38px)",
            height: "clamp(26px, 4cqw, 38px)",
            borderRadius: "clamp(6px, 0.9cqw, 10px)",
            background: "rgba(57,180,74,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }} aria-label="Confirmed survey ClonedCopied using prompt cloning" role="img">
            <rect x="2" y="2" width="12" height="12" rx="2.5" stroke="#39B44A" strokeWidth="1.5" />
            <path d="M5 6h6M5 9h4" stroke="#39B44A" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="12" cy="4" r="3" fill="#39B44A" />
            <path d="M11 4l.7.7 1.3-1.3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: "clamp(10px, 1.3cqw, 13px)",
              fontWeight: 600,
              color: "#002649",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Q4 Customer Survey
          </div>
          <div style={{ display: "flex", gap: "5px", marginTop: "3px" }}>
            <div style={{ height: "clamp(4px, 0.8cqw, 7px)", borderRadius: "3px", background: "rgba(57,180,74,0.16)", width: "36%" }} />
            <div style={{ height: "clamp(4px, 0.8cqw, 7px)", borderRadius: "3px", background: "rgba(57,180,74,0.16)", width: "22%" }} />
          </div>
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "clamp(8px, 1cqw, 10px)",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: "rgba(57,180,74,0.12)",
            color: "#39B44A",
            borderRadius: "30px",
            padding: "3px 10px",
            fontFamily: "Poppins, sans-serif",
            flexShrink: 0,
          }}
        >
          Ready
        </span>
      </div>

      <style>{`
        @keyframes pulseGreen {
          0%,100% { box-shadow: 0 2px 10px rgba(57,180,74,0.10); }
          50% { box-shadow: 0 4px 18px rgba(57,180,74,0.25); }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  </div>
);

export default PromptCloningVisual;
