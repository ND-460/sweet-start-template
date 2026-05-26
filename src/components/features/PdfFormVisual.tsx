/**
 * Concept D – PDF / Drag-and-Drop Form Visual
 * RESPONSIVE: all layout via flex percentages + clamp() font/size values.
 * Drop zone and output panel both flex to fill the card.
 */

const floatBadges = [
  { emoji: "📄", label: "PDF",   color: "#0981B5", border: "rgba(9,129,181,0.22)",  style: { top: "-12%",  left: "4%"  }, delay: "0s"   },
  { emoji: "🖼",  label: "Image", color: "#27A8E0", border: "rgba(39,168,224,0.22)", style: { top: "-12%",  right: "4%" }, delay: "0.8s" },
  { emoji: "📋", label: "DOCX",  color: "#005C90", border: "rgba(0,92,144,0.2)",    style: { bottom: "-11%", left: "50%", transform: "translateX(-50%)" }, delay: "1.6s" },
];

const PdfFormVisual = () => (
  <div
    className="w-full h-full flex items-center justify-center overflow-hidden"
    style={{
      background: "linear-gradient(145deg,#EBF5FB 0%,#F5FBFF 100%)",
      padding: "4% 5%",
      gap: "5%",
    }}
  >
    {/* ── Drop Zone ── */}
    <div
      className="relative flex flex-col items-center justify-center"
      style={{
        flex: "0 0 42%",
        aspectRatio: "1 / 0.72",
        borderRadius: "clamp(10px, 2cqw, 20px)",
        border: "2.5px dashed rgba(9,129,181,0.35)",
        background: "rgba(255,255,255,0.85)",
        boxShadow: "0 4px 20px rgba(0,38,73,0.07)",
        gap: "6%",
        padding: "5% 6%",
      }}
    >
      {/* Floating file badges */}
      {floatBadges.map((b) => (
        <div
          key={b.label}
          className="absolute flex items-center"
          style={{
            ...b.style,
            background: "#fff",
            border: `1.5px solid ${b.border}`,
            borderRadius: "clamp(5px, 1cqw, 10px)",
            padding: "1.5% 4%",
            fontSize: "clamp(7px, 1.5cqw, 12px)",
            fontWeight: 700,
            color: b.color,
            fontFamily: "Poppins, sans-serif",
            gap: "6%",
            boxShadow: "0 2px 10px rgba(0,38,73,0.09)",
            whiteSpace: "nowrap",
            animation: `floatBadge 3s ease-in-out ${b.delay} infinite`,
            zIndex: 2,
          } as React.CSSProperties}
        >
          <span>{b.emoji}</span> {b.label}
        </div>
      ))}

      {/* Upload icon */}
      <div
        className="flex items-center justify-center"
        style={{
          width: "clamp(28px, 7cqw, 56px)",
          height: "clamp(28px, 7cqw, 56px)",
          borderRadius: "clamp(8px, 1.5cqw, 16px)",
          background: "linear-gradient(135deg,#0981B5,#27A8E0)",
          boxShadow: "0 4px 16px rgba(9,129,181,0.32)",
          flexShrink: 0,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          style={{ width: "50%", height: "50%" }}
          aria-label="Upload icon representing file drag-and-drop functionality"
          role="img"
        >
          <path d="M12 15V4M12 4L8 8M12 4L16 8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>

      <span
        style={{
          fontSize: "clamp(8px, 1.7cqw, 14px)",
          fontWeight: 600,
          color: "#005C90",
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
        }}
      >
        Drop your file here
      </span>
      <span
        style={{
          fontSize: "clamp(6px, 1.3cqw, 11px)",
          fontWeight: 500,
          color: "#0981B5",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
        }}
      >
        PDF · Image · DOCX
      </span>
    </div>

    {/* ── Form Output ── */}
    <div
      className="flex flex-col"
      style={{ flex: 1, gap: "6%", minWidth: 0, maxWidth: "90%", paddingLeft: "5%" }}
    >
      <div
        style={{
          fontSize: "clamp(7px, 1.5cqw, 12px)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#39B44A",
          fontFamily: "Poppins, sans-serif",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginBottom: "clamp(8px, 1.5cqw, 16px)",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#39B44A",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        Form Generated
      </div>

      {[{ w: 50 }, { w: 65 }, { w: 40, tall: true }].map((f, i) => (
        <div
          key={i}
          style={{
            background: "#fff",
            border: "1px solid rgba(0,92,144,0.11)",
            borderRadius: "clamp(6px, 1.2cqw, 12px)",
            padding: "3% 5%",
            margin: "0",
            marginBottom: i < 2 ? "clamp(8px, 1.5cqw, 14px)" : "0",
            maxWidth: "90%",
            display: "flex",
            flexDirection: "column",
            gap: "15%",
            boxShadow: "0 1px 6px rgba(0,38,73,0.04)",
          }}
        >
          <div
            style={{
              height: "clamp(4px, 0.9cqw, 7px)",
              borderRadius: 3,
              width: `${f.w}%`,
              background: "rgba(9,129,181,0.2)",
            }}
          />
          <div
            style={{
              height: f.tall ? "clamp(14px, 3.5cqw, 28px)" : "clamp(9px, 2cqw, 16px)",
              borderRadius: "clamp(4px, 0.8cqw, 8px)",
              background: "#F2F8FC",
              border: "1px solid rgba(9,129,181,0.12)",
            }}
          />
        </div>
      ))}

      {/* CTA button */}
      <div
        style={{
          height: "clamp(22px, 5cqw, 40px)",
          margin: "clamp(8px, 1.5cqw, 14px) 0 0 0",
          borderRadius: "clamp(6px, 1.2cqw, 12px)",
          background: "linear-gradient(90deg,#39B44A,#4DC95E)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "clamp(7px, 1.4cqw, 12px)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#fff",
          boxShadow: "0 3px 12px rgba(57,180,74,0.3)",
          fontFamily: "Poppins, sans-serif",
          flexShrink: 0,
          cursor: "pointer",
          maxWidth: "90%",
        }}
      >
        Use This Form →
      </div>
    </div>

    <style>{`
      @keyframes floatBadge {
        0%,100% { transform: translateY(0); opacity: 0.85; }
        50%      { transform: translateY(-5px); opacity: 1; }
      }
      @keyframes floatBadgeCenter {
        0%,100% { transform: translateX(-50%) translateY(0); opacity: 0.85; }
        50%      { transform: translateX(-50%) translateY(-5px); opacity: 1; }
      }
    `}</style>
  </div>
);

export default PdfFormVisual;
