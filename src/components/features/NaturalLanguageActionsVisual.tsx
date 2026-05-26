/**
 * Natural Language Actions Visual
 * CONCEPT J — Execution Steps + Live Survey Preview (Split)
 * RESPONSIVE: Uses vw units with clamp() for consistent scaling on all screens
 * Desktop: Horizontal split • Mobile: Stacks vertically
 */

const NaturalLanguageActionsVisual = () => (
  <div
    className="w-full h-full flex overflow-hidden"
    style={{
      background: "#F2F8FC",
    }}
  >
    {/* ── LEFT: Your Command ── */}
    <div
      style={{
        flex: "0 0 45%",
        background: "#EBF5FB",
        borderRight: "1px solid rgba(0,92,144,0.11)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(12px,2.2vw,24px) clamp(10px,1.8vw,20px)",
        gap: "clamp(8px,1.3vw,14px)",
        overflow: "hidden",
        minWidth: 0,
      }}
    >
      {/* Label: Your Command */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "clamp(7px,0.95vw,10px)",
          fontWeight: 700,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: "#0981B5",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          style={{
            width: "clamp(5px,0.7vw,7px)",
            height: "clamp(5px,0.7vw,7px)",
            borderRadius: "50%",
            background: "#27A8E0",
            flexShrink: 0,
          }}
        />
        Your Command
      </div>

      {/* Prompt Bubble */}
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(0,92,144,0.11)",
          borderRadius: "clamp(8px,1.3vw,14px)",
          padding: "clamp(8px,1.3vw,14px)",
          boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
        }}
      >
        {/* Icon and Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(6px,0.9vw,10px)",
            marginBottom: "clamp(5px,0.8vw,10px)",
          }}
        >
          <div
            style={{
              width: "clamp(22px,3.5vw,34px)",
              height: "clamp(22px,3.5vw,34px)",
              borderRadius: "clamp(6px,0.9vw,10px)",
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
              fontSize: "clamp(9px,1.2vw,12px)",
              fontWeight: 700,
              color: "#002649",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Prompt
          </span>
        </div>

        {/* Prompt Text Box */}
        <div
          style={{
            fontSize: "clamp(9px,1.1vw,12px)",
            color: "#005C90",
            lineHeight: "1.6",
            background: "rgba(9,129,181,0.07)",
            borderLeft: "2.5px solid #27A8E0",
            borderRadius: "0 7px 7px 0",
            padding: "clamp(5px,0.8vw,9px) clamp(7px,1.1vw,12px)",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Create and Send the Q4 survey to all enterprise accounts, summarise and flag anyone with a score below 6.
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "clamp(9px,1.2vw,13px)",
              background: "#0981B5",
              borderRadius: "1px",
              marginLeft: "2px",
              verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
            }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(6px,0.9vw,10px)", flexWrap: "wrap" }}>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(8px,0.95vw,11px)",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#fff",
            background: "linear-gradient(90deg, #0981B5, #27A8E0)",
            border: "none",
            borderRadius: "30px",
            padding: "clamp(5px,0.8vw,8px) clamp(12px,1.8vw,20px)",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
         Execute Command
        </button>
        
      </div>
    </div>

    {/* ── RIGHT: Execution Steps ── */}
    <div
      style={{
        flex: "0 0 55%",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(12px,2.2vw,24px) clamp(10px,1.8vw,20px)",
        gap: "clamp(8px,1.3vw,14px)",
        overflow: "hidden",
        minWidth: 0,
      }}
    >
      {/* Label: Executing */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "clamp(7px,0.95vw,10px)",
          fontWeight: 700,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: "#39B44A",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          style={{
            width: "clamp(5px,0.7vw,7px)",
            height: "clamp(5px,0.7vw,7px)",
            borderRadius: "50%",
            background: "#39B44A",
          }}
        />
        Executing Commands
      </div>

      {/* Steps List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(5px,0.9vw,10px)",
        }}
      >
        {/* Step 1: Done */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(7px,1.1vw,12px)",
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.11)",
            borderRadius: "clamp(7px,1.1vw,12px)",
            padding: "clamp(6px,1vw,11px) clamp(8px,1.3vw,14px)",
            animationDelay: "0.08s",
          }}
        >
          {/* Step Number (Done: Check Mark) */}
          <div
            style={{
              width: "clamp(18px,2.8vw,24px)",
              height: "clamp(18px,2.8vw,24px)",
              borderRadius: "50%",
              background: "linear-gradient(90deg,#0981B5,#27A8E0)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(7px,1vw,10px)",
              fontWeight: 800,
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            1
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: "clamp(8px,1.05vw,11px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Create NPS survey for Q4 clients
            </div>
            <div
              style={{
                fontSize: "clamp(7px,0.82vw,9px)",
                color: "#005C90",
                marginTop: "1px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              12 questions · logic on
            </div>
          </div>
          {/* <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "clamp(6px,0.82vw,9px)",
              fontWeight: 700,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              borderRadius: 20,
              padding: "2px 8px",
              background: "rgba(42,154,79,0.12)",
              color: "#2A9A4F",
              fontFamily: "Poppins, sans-serif",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Done
          </span> */}
        </div>

        {/* Step 2: Done */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(7px,1.1vw,12px)",
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.11)",
            borderRadius: "clamp(7px,1.1vw,12px)",
            padding: "clamp(6px,1vw,11px) clamp(8px,1.3vw,14px)",
            animationDelay: "0.18s",
          }}
        >
          <div
            style={{
              width: "clamp(18px,2.8vw,24px)",
              height: "clamp(18px,2.8vw,24px)",
              borderRadius: "50%",
              background: "linear-gradient(90deg,#0981B5,#27A8E0)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(7px,1vw,10px)",
              fontWeight: 800,
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            2
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: "clamp(8px,1.05vw,11px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Send reminders to non-responders
            </div>
            <div
              style={{
                fontSize: "clamp(7px,0.82vw,9px)",
                color: "#005C90",
                marginTop: "1px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              348 enterprise · Mon 9am
            </div>
          </div>

        </div>

        {/* Step 3: Done */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(7px,1.1vw,12px)",
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.11)",
            borderRadius: "clamp(7px,1.1vw,12px)",
            padding: "clamp(6px,1vw,11px) clamp(8px,1.3vw,14px)",
            animationDelay: "0.28s",
          }}
        >
          <div
            style={{
              width: "clamp(18px,2.8vw,24px)",
              height: "clamp(18px,2.8vw,24px)",
              borderRadius: "50%",
              background: "linear-gradient(90deg,#0981B5,#27A8E0)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(7px,1vw,10px)",
              fontWeight: 800,
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            3
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: "clamp(8px,1.05vw,11px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Summaries Ready
            </div>
            <div
              style={{
                fontSize: "clamp(7px,0.82vw,9px)",
                color: "#005C90",
                marginTop: "1px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              68% positive · top theme: onboarding
            </div>
          </div>
        </div>

        {/* Step 4: In Progress */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(7px,1.1vw,12px)",
            background: "#F7FBFE",
            border: "1px solid rgba(0,92,144,0.11)",
            borderRadius: "clamp(7px,1.1vw,12px)",
            padding: "clamp(6px,1vw,11px) clamp(8px,1.3vw,14px)",
            animationDelay: "0.28s",
          }}
        >
          <div
            style={{
              width: "clamp(18px,2.8vw,24px)",
              height: "clamp(18px,2.8vw,24px)",
              borderRadius: "50%",
              background: "linear-gradient(90deg,#0981B5,#27A8E0)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(7px,1vw,10px)",
              fontWeight: 800,
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            4
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: "clamp(8px,1.05vw,11px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Flag all negative sentiment cases
            </div>
            <div
              style={{
                fontSize: "clamp(7px,0.82vw,9px)",
                color: "#005C90",
                marginTop: "1px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              38 flagged · 14 high priority
            </div>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(7px); }
        to { opacity: 1; transform: none; }
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    `}</style>
  </div>
);

export default NaturalLanguageActionsVisual;
