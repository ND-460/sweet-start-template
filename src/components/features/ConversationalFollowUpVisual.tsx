/**
 * AI Conversational Follow-Up Visual
 * CONCEPT A — Response → AI Clarifying Questions (Split)
 * RESPONSIVE: Uses vw units with clamp() for consistent scaling on all screens
 * Desktop: Horizontal split • Mobile: Stacks vertically
 */

const ConversationalFollowUpVisual = () => (
  <div
    className="w-full h-full flex overflow-hidden"
    style={{
      background: "#F2F8FC",
    }}
  >
    {/* ── LEFT: Participant Response ── */}
    <div
      style={{
        flex: "0 0 48%",
        background: "#EBF5FB",
        borderRight: "1px solid rgba(0,92,144,0.11)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(12px,2.2vw,24px) clamp(10px,1.8vw,20px)",
        gap: "clamp(8px,1.3vw,14px)",
      }}
    >
      {/* Label: Participant Response */}
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
          }}
        />
        Participant Response
      </div>

      {/* Response Card */}
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(0,92,144,0.11)",
          borderRadius: "clamp(8px,1.3vw,14px)",
          overflow: "hidden",
          boxShadow: "0 2px 18px rgba(0,38,73,0.09)",
        }}
      >
        {/* Card Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(5px,0.8vw,9px)",
            padding: "clamp(7px,1.1vw,12px) clamp(10px,1.5vw,16px)",
            borderBottom: "1px solid rgba(0,92,144,0.11)",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "clamp(22px,3.5vw,30px)",
              height: "clamp(22px,3.5vw,30px)",
              borderRadius: "50%",
              background: "rgba(9,129,181,0.75)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(9px,1.2vw,12px)",
              fontWeight: 700,
              color: "#fff",
              flexShrink: 0,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            J
          </div>

          {/* Name */}
          <span
            style={{
              fontSize: "clamp(9px,1.15vw,12px)",
              fontWeight: 700,
              color: "#002649",
              flex: 1,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Jamie Lee
          </span>

          {/* Sentiment Chip */}
          <span
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
              background: "#FEF3E2",
              color: "#D48B1A",
              fontFamily: "Poppins, sans-serif",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Mixed
          </span>
        </div>

        {/* Response Body */}
        <div
          style={{
            padding: "clamp(8px,1.3vw,14px)",
            fontSize: "clamp(8px,1.05vw,11px)",
            color: "#002649",
            lineHeight: 1.65,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          "The onboarding was <strong>mostly fine</strong> but I struggled a bit with the{" "}
          <strong>integrations</strong>. Support was helpful but felt it could be{" "}
          <strong>faster</strong>."
        </div>
      </div>

      {/* Insight Strip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(5px,0.8vw,9px)",
          background: "rgba(9,129,181,0.06)",
          border: "1px solid rgba(9,129,181,0.15)",
          borderRadius: "clamp(6px,1vw,10px)",
          padding: "clamp(5px,0.85vw,9px) clamp(8px,1.3vw,14px)",
        }}
      >
        <div
          style={{
            width: "clamp(18px,2.8vw,24px)",
            height: "clamp(18px,2.8vw,24px)",
            borderRadius: "clamp(4px,0.6vw,7px)",
            background: "linear-gradient(90deg,#0981B5,#27A8E0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 16 16" fill="none" style={{ width: "55%", height: "55%" }}>
            <circle cx="8" cy="8" r="6" stroke="#fff" strokeWidth="1.4" />
            <path d="M8 5v4M8 11v.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <span
          style={{
            fontSize: "clamp(7px,0.9vw,9px)",
            color: "#0981B5",
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          3 gaps detected · AI generating follow-ups
        </span>
      </div>
    </div>

    {/* ── RIGHT: Follow-Up Questions ── */}
    <div
      style={{
        flex: 1,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(12px,2.2vw,24px) clamp(10px,1.8vw,20px)",
        gap: "clamp(7px,1.2vw,13px)",
      }}
    >
      {/* Label: Follow-Up Questions */}
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
        Follow-Up Questions
      </div>

      {/* Questions List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(5px,0.85vw,9px)",
        }}
      >
        {[
          "Which specific integrations caused difficulty — CRM, Slack, or another?",
          "What was the average wait time you experienced with support?",
          "Would a self-service guide for integrations have helped you?",
        ].map((question, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "clamp(6px,1vw,10px)",
              background: "#F7FBFE",
              border: "1px solid rgba(0,92,144,0.11)",
              borderRadius: "clamp(7px,1.1vw,12px)",
              padding: "clamp(6px,1vw,11px) clamp(8px,1.3vw,14px)",
            }}
          >
            {/* Question Number */}
            <div
              style={{
                width: "clamp(17px,2.6vw,23px)",
                height: "clamp(17px,2.6vw,23px)",
                borderRadius: "50%",
                background: "linear-gradient(90deg,#0981B5,#27A8E0)",
                color: "#fff",
                fontSize: "clamp(7px,0.9vw,10px)",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: "1px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {idx + 1}
            </div>

            {/* Question Text */}
            <div
              style={{
                flex: 1,
                fontSize: "clamp(8px,1.05vw,11px)",
                color: "#002649",
                lineHeight: 1.45,
                fontStyle: "italic",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {question}
            </div>
          </div>
        ))}
      </div>

      {/* Action Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(5px,0.8vw,9px)",
          flexWrap: "wrap",
        }}
      >
        <span
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
            background: "rgba(9,129,181,0.11)",
            color: "#0981B5",
            fontFamily: "Poppins, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Auto-generated
        </span>
      </div>
    </div>

    <style>{`
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(7px); }
        to { opacity: 1; transform: none; }
      }
    `}</style>
  </div>
);

export default ConversationalFollowUpVisual;
