/**
 * Survey & Response Translation Visual
 * CONCEPT A — Source Survey → Translated Outputs (Split)
 * RESPONSIVE: Uses vw units with clamp() for consistent scaling on all screens
 * Desktop: Horizontal split • Mobile: Stacks vertically
 */

const SurveyResponseTranslationVisual = () => (
  <div
    className="w-full h-full flex overflow-hidden"
    style={{
      background: "#F2F8FC",
    }}
  >
    {/* ── LEFT: Source Survey (EN) ── */}
    <div
      style={{
        flex: "0 0 46%",
        background: "#EBF5FB",
        borderRight: "1px solid rgba(0,92,144,0.11)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(12px,2.2vw,24px) clamp(10px,1.8vw,20px)",
        gap: "clamp(8px,1.3vw,14px)",
      }}
    >
      {/* Label: Source Survey */}
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
        Source Survey
      </div>

      {/* Source Survey Card */}
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
            background: "linear-gradient(90deg,#0981B5,#27A8E0)",
          }}
        >
          {/* Logo Box */}
          <div
            style={{
              width: "clamp(20px,3.2vw,28px)",
              height: "clamp(20px,3.2vw,28px)",
              borderRadius: "clamp(5px,0.8vw,8px)",
              background: "rgba(255,255,255,0.22)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(12px,2vw,16px)",
              fontWeight: 800,
              color: "#fff",
              flexShrink: 0,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Q
          </div>
          <span
            style={{
              fontSize: "clamp(9px,1.2vw,12px)",
              fontWeight: 700,
              color: "#fff",
              flex: 1,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Q4 Satisfaction Survey
          </span>
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
              background: "rgba(255,255,255,0.18)",
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            EN
          </span>
        </div>

        {/* Survey Questions (Skeleton) */}
        <div
          style={{
            padding: "clamp(7px,1.2vw,12px) clamp(10px,1.5vw,16px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(5px,0.85vw,9px)",
          }}
        >
          {[100, 80, 90, 72].map((width, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(5px,0.8vw,9px)",
              }}
            >
              <div
                style={{
                  width: "clamp(5px,0.7vw,7px)",
                  height: "clamp(5px,0.7vw,7px)",
                  borderRadius: "50%",
                  background: [
                    "#0981B5",
                    "#27A8E0",
                    "#0981B5",
                    "#73CFE1",
                  ][i],
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: "clamp(4px,0.65vw,6px)",
                  borderRadius: 3,
                  background: "rgba(9,129,181,0.13)",
                  width: `${width}%`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* AI Translation Engine */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(6px,1vw,10px)",
          padding: "clamp(6px,1vw,12px) clamp(12px,2vw,22px)",
          background: "linear-gradient(90deg,#0981B5,#27A8E0)",
          borderRadius: "clamp(8px,1.3vw,14px)",
          boxShadow: "0 4px 18px rgba(9,129,181,0.25)",
          alignSelf: "flex-start",
        }}
      >
        <div
          style={{
            width: "clamp(18px,2.8vw,26px)",
            height: "clamp(18px,2.8vw,26px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 20 20" fill="none" style={{ width: "100%", height: "100%" }}>
            <circle cx="10" cy="10" r="8" stroke="#fff" strokeWidth="1.4" />
            <path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <span
          style={{
            fontSize: "clamp(9px,1.2vw,12px)",
            fontWeight: 700,
            color: "#fff",
            whiteSpace: "nowrap",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          AI Translation
        </span>
      </div>
    </div>

    {/* ── RIGHT: Translated Versions ── */}
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
      {/* Label: Translated Versions */}
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
        Translated Versions
      </div>

      {/* Language Output Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(8px,1.2vw,12px)",
        }}
      >
        {[
          { flag: "🇪🇸", code: "ES", name: "Español", bgColor: "rgba(196,122,26,0.10)", delay: "0.1s" },
          { flag: "🇫🇷", code: "FR", name: "Français", bgColor: "rgba(42,154,79,0.09)", delay: "0.2s", isActive: true },
          { flag: "🇩🇪", code: "DE", name: "Deutsch", bgColor: "rgba(123,63,196,0.08)", delay: "0.3s" },
        ].map((lang, idx) => (
          <div
            key={lang.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(8px,1.2vw,12px)",
              background: "#fff",
              border: lang.isActive 
                ? "1px solid rgba(42,154,79,0.28)" 
                : "1px solid rgba(0,92,144,0.11)",
              borderRadius: "clamp(8px,1.2vw,12px)",
              padding: "clamp(7px,1.2vw,12px)",
              boxShadow: lang.isActive
                ? "0 2px 10px rgba(42,154,79,0.10)"
                : "0 1px 6px rgba(0,38,73,0.05)",
            }}
          >
            {/* Flag */}
            <div
              style={{
                width: "clamp(26px,4vw,38px)",
                height: "clamp(26px,4vw,38px)",
                borderRadius: "clamp(6px,0.9vw,10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "clamp(10px,1.6vw,14px)",
                fontWeight: 500,
                color: "#002649",
                background: lang.bgColor,
                flexShrink: 0,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {lang.code}
            </div>

            {/* Language Info */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: "clamp(3px,0.5vw,5px)",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(10px,1.3vw,13px)",
                  fontWeight: 600,
                  color: "#002649",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {lang.name}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    height: "clamp(4px,0.8vw,7px)",
                    borderRadius: 3,
                    background: "rgba(9,129,181,0.13)",
                    width: "90%",
                  }}
                />
                <div
                  style={{
                    height: "clamp(4px,0.8vw,7px)",
                    borderRadius: 3,
                    background: "rgba(9,129,181,0.13)",
                    width: "70%",
                  }}
                />
              </div>
            </div>

            {/* Ready Badge */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "clamp(8px,1vw,10px)",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                borderRadius: 20,
                padding: "3px 10px",
                background: "rgba(57,180,74,0.12)",
                color: "#39B44A",
                fontFamily: "Poppins, sans-serif",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Ready
            </span>
          </div>
        ))}
      </div>

      {/* Export Button & More Languages Chip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(5px,0.8vw,9px)",
          flexWrap: "wrap",
          marginTop: "clamp(2px,0.3vw,4px)",
        }}
      >
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "clamp(8px,1vw,10px)",
            fontWeight: 700,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            color: "#fff",
            background: "linear-gradient(90deg,#0981B5,#27A8E0)",
            border: "none",
            borderRadius: 30,
            cursor: "pointer",
            padding: "clamp(5px,0.85vw,8px) clamp(12px,2vw,20px)",
            whiteSpace: "nowrap",
            boxShadow: "0 3px 12px rgba(9,129,181,0.28)",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Ready to Send
        </button>

      </div>
    </div>

    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(7px); }
        to { opacity: 1; transform: none; }
      }
      @keyframes pulsG {
        0%, 100% { 
          box-shadow: 0 2px 8px rgba(42, 154, 79, 0.10);
        }
        50% {
          box-shadow: 0 4px 20px rgba(42, 154, 79, 0.28);
        }
      }
    `}</style>
  </div>
);

export default SurveyResponseTranslationVisual;
