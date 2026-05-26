/**
 * Sentiment Intelligence — Chat Transcript + Score Ring
 * RESPONSIVE: uses percentages + clamp() for all sizing
 */

const SentimentIntelligenceVisual = () => (
  <div
    className="w-full h-full flex overflow-hidden"
    style={{ background: "#F2F8FC" }}
  >
    {/* ── LEFT SIDE: Chat Transcript ── */}
    <div
      className="flex flex-col min-w-0"
      style={{
        flex: "0 0 52%",
        background: "#EBF5FB",
        borderRight: "1px solid rgba(0,92,144,0.11)",
        justifyContent: "center",
        padding: "clamp(12px, 2.2%, 24px) clamp(4px, 1.2%, 16px)",
        gap: "clamp(7px, 1.2%, 13px)",
      }}
    >
      {/* Label */}
      <div
        className="flex items-center"
        style={{
          gap: "10px",
          fontSize: "clamp(9px, 1.1cqw, 11px)",
          fontWeight: 700,
          color: "#0981B5",
          fontFamily: "Poppins, sans-serif",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "clamp(4px, 0.8%, 8px)",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#27A8E0",
          }}
        />
        Chat Transcript
      </div>

      {/* Chat Bubble Container */}
      <div
        className="bg-white overflow-hidden flex flex-col"
        style={{
          borderRadius: "clamp(8px, 1.3%, 14px)",
          border: "1px solid rgba(0,92,144,0.11)",
          boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
          padding: "clamp(12px, 6%, 18px) clamp(8px, 1.2%, 12px)",
          gap: "clamp(6px, 1%, 10px)",
        }}
      >
        {/* Message 1: User */}
        <div className="flex gap-2 items-start flex-row-reverse">
          <div
            className="flex-shrink-0 flex items-center justify-center text-white font-bold rounded-full"
            style={{
              width: "clamp(18px, 2.8cqw, 26px)",
              height: "clamp(18px, 2.8cqw, 26px)",
              background: "rgba(9,129,181,0.75)",
              fontSize: "clamp(7px, 1cqw, 10px)",
            }}
          >
            U
          </div>
          <div
            className="max-w-[82%] rounded-lg border"
            style={{
              padding: "clamp(5px, 0.85%, 9px) clamp(7px, 1.1%, 12px)",
              fontSize: "clamp(8px, 1.05cqw, 11px)",
              lineHeight: 1.55,
              color: "#002649",
              background: "rgba(9,129,181,0.07)",
              borderColor: "rgba(9,129,181,0.15)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Setup was{" "}
            <span style={{ background: "rgba(46,155,82,.15)", borderRadius: "3px", padding: "0 3px", fontWeight: 600, color: "#2E9B52" }}>
              surprisingly easy
            </span>
            , but the{" "}
            <span style={{ background: "rgba(217,79,61,.12)", borderRadius: "3px", padding: "0 3px", fontWeight: 600, color: "#D94F3D" }}>
              response time was poor
            </span>
            .
          </div>
        </div>

        {/* Message 2: Support */}
        <div className="flex gap-2 items-start">
          <div
            className="flex-shrink-0 flex items-center justify-center text-white font-bold rounded-full"
            style={{
              width: "clamp(18px, 2.8cqw, 26px)",
              height: "clamp(18px, 2.8cqw, 26px)",
              background: "rgba(0,92,144,0.6)",
              fontSize: "clamp(7px, 1cqw, 10px)",
            }}
          >
            S
          </div>
          <div
            className="max-w-[82%] rounded-lg border"
            style={{
              padding: "clamp(5px, 0.85%, 9px) clamp(7px, 1.1%, 12px)",
              fontSize: "clamp(8px, 1.05cqw, 11px)",
              lineHeight: 1.55,
              color: "#002649",
              background: "#F7FBFE",
              borderColor: "rgba(0,92,144,0.11)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Sorry about that. Would you recommend us?
          </div>
        </div>

        {/* Message 3: User */}
        <div className="flex gap-2 items-start flex-row-reverse">
          <div
            className="flex-shrink-0 flex items-center justify-center text-white font-bold rounded-full"
            style={{
              width: "clamp(18px, 2.8cqw, 26px)",
              height: "clamp(18px, 2.8cqw, 26px)",
              background: "rgba(9,129,181,0.75)",
              fontSize: "clamp(7px, 1cqw, 10px)",
            }}
          >
            U
          </div>
          <div
            className="max-w-[82%] rounded-lg border"
            style={{
              padding: "clamp(5px, 0.85%, 9px) clamp(7px, 1.1%, 12px)",
              fontSize: "clamp(8px, 1.05cqw, 11px)",
              lineHeight: 1.55,
              color: "#002649",
              background: "rgba(9,129,181,0.07)",
              borderColor: "rgba(9,129,181,0.15)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <span style={{ background: "rgba(192,123,42,.13)", borderRadius: "3px", padding: "0 3px", fontWeight: 600, color: "#C07B2A" }}>
              Maybe — good product
            </span>
            , but{" "}
            <span style={{ background: "rgba(212,139,26,.15)", borderRadius: "3px", padding: "0 3px", fontWeight: 600, color: "#C07B2A" }}>
              support needs work
            </span>
            .
          </div>
        </div>
      </div>

      {/* Source Tags */}
      <div className="flex items-stretch" style={{ gap: "clamp(6px, 1%, 12px)", flexWrap: "nowrap", marginTop: "clamp(5px, 0.8%, 10px)" }}>
        {[
          { 
            label: "Chat", 
            active: true,
            svg: (
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M1.5 3.5A2 2 0 0 1 3.5 1.5h9A2 2 0 0 1 14.5 3.5v6A2 2 0 0 1 12.5 11.5H9l-2.5 2.5V11.5H3.5A2 2 0 0 1 1.5 9.5V3.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                <circle cx="5.5" cy="6.5" r=".7" fill="currentColor"/>
                <circle cx="8" cy="6.5" r=".7" fill="currentColor"/>
                <circle cx="10.5" cy="6.5" r=".7" fill="currentColor"/>
              </svg>
            )
          },
          { 
            label: "Case", 
            active: false,
            svg: (
              <svg viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M5 6h6M5 9h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            )
          },
          { 
            label: "Survey", 
            active: false,
            svg: (
              <svg viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M5.5 8.5l2 2 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            )
          },
        ].map((src) => (
          <div
            key={src.label}
            className="flex flex-row items-center justify-center cursor-pointer border rounded transition-all"
            style={{
              background: src.active ? "#0981B5" : "#F7FBFE",
              borderColor: src.active ? "#0981B5" : "rgba(0,92,144,0.11)",
              borderRadius: "clamp(4px, 0.7%, 8px)",
              padding: "clamp(5px, 0.9%, 10px) clamp(12px, 1.8%, 20px)",
              gap: "clamp(3px, 0.55%, 5px)",
              display: "inline-flex",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                width: "clamp(10px, 1.6cqw, 14px)",
                height: "clamp(10px, 1.6cqw, 14px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: src.active ? "#fff" : "#0981B5",
              }}
            >
              {src.svg}
            </div>
            <span
              style={{
                fontSize: "clamp(6px, 0.8cqw, 8.5px)",
                fontWeight: 600,
                color: src.active ? "#fff" : "#005C90",
                fontFamily: "Poppins, sans-serif",
                lineHeight: 1,
              }}
            >
              {src.label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* ── RIGHT SIDE: Sentiment Score ── */}
    <div
      className="flex flex-col min-w-0 bg-white"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "clamp(12px, 2.2%, 24px) clamp(4px, 1.2%, 16px)",
        gap: "clamp(12px, 2%, 20px)",
      }}
    >
      {/* Label */}
      <div
        className="flex items-center w-full"
        style={{
          gap: "10px",
          fontSize: "clamp(9px, 1.1cqw, 11px)",
          fontWeight: 700,
          color: "#39B44A",
          fontFamily: "Poppins, sans-serif",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "clamp(4px, 0.8%, 8px)",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#39B44A",
          }}
        />
        Sentiment Score
      </div>

      {/* Score Ring + Meta - Side by Side */}
      <div
        className="flex items-center justify-center"
        style={{
          gap: "clamp(12px, 2%, 20px)",
          marginBottom: "clamp(8px, 1.3%, 14px)",
        }}
      >
        {/* Score Ring (Conic Gradient) */}
        <div
          className="flex items-center justify-center rounded-full relative flex-shrink-0"
          style={{
            width: "clamp(64px, 11cqw, 96px)",
            height: "clamp(64px, 11cqw, 96px)",
            background: "conic-gradient(#D48B1A 0% 58%, #EBF5FB 58% 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "clamp(7px, 1%, 10px)",
              borderRadius: "50%",
              background: "#FFFFFF",
            }}
          />
          <span
            style={{
              position: "relative",
              zIndex: 1,
              fontSize: "clamp(18px, 3cqw, 28px)",
              fontWeight: 800,
              color: "#D48B1A",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            58
          </span>
        </div>

        {/* Score Meta */}
        <div className="flex flex-col items-center" style={{ gap: "clamp(3px, 0.8%, 6px)" }}>
          <div
            className="inline-flex items-center"
            style={{
              gap: "clamp(3px, 0.5%, 5px)",
              fontSize: "clamp(7px, 0.85cqw, 9px)",
              fontWeight: 700,
              borderRadius: "20px",
              padding: "clamp(2px, 0.32%, 3px) clamp(10px, 1.5%, 14px)",
              background: "#FEF3E2",
              color: "#D48B1A",
              fontFamily: "Poppins, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                width: "clamp(5px, 0.7cqw, 7px)",
                height: "clamp(5px, 0.7cqw, 7px)",
                borderRadius: "50%",
                background: "#D48B1A",
                flexShrink: 0,
              }}
            />
            Mixed
          </div>
          <div
            style={{
              fontSize: "clamp(7px, 0.88cqw, 9px)",
              color: "#005C90",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
            }}
          >
            Confidence: 76%
          </div>
        </div>
      </div>

      {/* Sentiment Bars - Compact */}
      <div
        className="w-full flex flex-col"
        style={{
          gap: "clamp(3px, 0.5%, 5px)",
          maxWidth: "clamp(230px, 70%, 360px)",
          margin: "0 auto",
        }}
      >
        {[
          { label: "Positive", pct: 22, color: "#2E9B52" },
          { label: "Mixed", pct: 46, color: "#D48B1A" },
          { label: "Negative", pct: 24, color: "#D94F3D" },
          { label: "Neutral", pct: 10, color: "#0981B5" },
        ].map((item) => (
          <div key={item.label} className="flex items-center" style={{ gap: "clamp(4px, 0.6%, 7px)" }}>
            <span
              style={{
                fontSize: "clamp(7px, 0.9cqw, 10px)",
                fontWeight: 600,
                width: "clamp(32px, 5.5cqw, 48px)",
                color: item.color,
                fontFamily: "Poppins, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </span>
            <div
              className="flex-1"
              style={{
                height: "clamp(6px, 1.2%, 10px)",
                background: "#EBF5FB",
                borderRadius: "3px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${item.pct}%`,
                  borderRadius: "3px",
                  background: item.color,
                }}
              />
            </div>
            <span
              style={{
                fontSize: "clamp(7px, 0.9cqw, 10px)",
                fontWeight: 700,
                width: "clamp(18px, 3cqw, 24px)",
                textAlign: "right",
                color: item.color,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {item.pct}%
            </span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "clamp(4px, 0.65cqw, 6px)",
          fontFamily: "Poppins, sans-serif",
          fontSize: "clamp(6px, 0.88cqw, 9px)",
          fontWeight: 700,
          letterSpacing: "0.09em",
          textTransform: "uppercase",
          color: "#fff",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          padding: "clamp(4px, 0.7cqw, 7px) clamp(10px, 1.7cqw, 16px)",
          whiteSpace: "nowrap",
          lineHeight: 1,
          background: "linear-gradient(90deg, #0981B5, #27A8E0)",
          boxShadow: "0 3px 10px rgba(9,129,181,.28)",
          flexShrink: 0,
          marginTop: "clamp(8px, 1.3%, 14px)",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            width: "clamp(9px, 1.4cqw, 12px)",
            height: "clamp(9px, 1.4cqw, 12px)",
          }}
        >
          <svg viewBox="0 0 14 14" fill="none" style={{ width: "100%", height: "100%" }}>
            <path d="M7 1v8M4 6l3 3 3-3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 10v1.5A1.5 1.5 0 0 0 2.5 13h9A1.5 1.5 0 0 0 13 11.5V10" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </span>
        Store Result
      </button>
    </div>


  </div>
);

export default SentimentIntelligenceVisual;
