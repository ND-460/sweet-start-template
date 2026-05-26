/**
 * Theme & Branding Automation Visual
 * RESPONSIVE: Uses percentages, clamp() for fonts/sizes, and flex proportions
 * Works seamlessly on small screens to large screens
 */

import React, { useState } from "react";

const BrandingVisual = () => {
  const [showPreview, setShowPreview] = useState(false);

  React.useEffect(() => {
    setShowPreview(true);
  }, []);

  return (
    <div
      className="w-full h-full flex flex-row items-stretch overflow-hidden"
      style={{ background: "#F7FBFE" }}
    >
      {/* LEFT PANEL: Brand Source & Tokens */}
      <div
        className="flex flex-col justify-center"
        style={{
          flex: "0 0 44%",
          background: "#EBF5FB",
          borderColor: "rgba(0,92,144,0.11)",
          borderRight: "1px solid rgba(0,92,144,0.11)",
          padding: "clamp(12px, 3cqw, 28px)",
          gap: "clamp(8px, 2cqw, 16px)",
          overflowY: "auto",
        }}
      >
        {/* Brand Source Label */}
        <div className="flex items-center gap-2">
          <div
            className="flex-shrink-0"
            style={{
              width: "clamp(4px, 0.8cqw, 6px)",
              height: "clamp(4px, 0.8cqw, 6px)",
              borderRadius: "50%",
              background: "#27A8E0",
            }}
          ></div>
          <span
            style={{
              fontSize: "clamp(7px, 1.3cqw, 11px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#0981B5",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Brand Source
          </span>
        </div>

        {/* Logo Source Widget */}
        <div
          className="flex items-center gap-2 border rounded-lg"
          style={{
            background: "#FFFFFF",
            borderColor: "rgba(0,92,144,0.11)",
            boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
            padding: "clamp(8px, 1.5cqw, 12px)",
          }}
        >
          <div
            className="flex items-center justify-center text-white font-bold flex-shrink-0"
            style={{
              width: "clamp(24px, 4cqw, 36px)",
              height: "clamp(24px, 4cqw, 36px)",
              borderRadius: "clamp(4px, 0.8cqw, 7px)",
              background: "linear-gradient(135deg, #1A1A2E, #16213E)",
              fontSize: "clamp(8px, 1.2cqw, 12px)",
            }}
          >
            V
          </div>
          <div>
            <div
              style={{
                fontSize: "clamp(7px, 1.2cqw, 10px)",
                fontWeight: 700,
                color: "#002649",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              VortexCo
            </div>
            <div
              style={{
                fontSize: "clamp(6px, 1cqw, 9px)",
                color: "#005C90",
                marginTop: "2px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              logo.svg uploaded
            </div>
          </div>
        </div>

        {/* Tokens Label */}
        <div className="flex items-center gap-2" style={{ marginTop: "clamp(4px, 1cqw, 8px)" }}>
          <div
            className="flex-shrink-0"
            style={{
              width: "clamp(4px, 0.8cqw, 6px)",
              height: "clamp(4px, 0.8cqw, 6px)",
              borderRadius: "50%",
              background: "#27A8E0",
            }}
          ></div>
          <span
            style={{
              fontSize: "clamp(7px, 1.3cqw, 11px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#0981B5",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Extracted Palette
          </span>
        </div>

        {/* Token Rows */}
        <div className="flex flex-col" style={{ gap: "clamp(4px, 0.8cqw, 8px)" }}>
          {[
            { name: "Primary", value: "#1A1A2E", color: "#1A1A2E" },
            { name: "Accent", value: "#E94560", color: "#E94560" },
            { name: "Background", value: "#F5F5F5", color: "#F5F5F5", border: true },
            { name: "Secondary", value: "#0F3460", color: "#0F3460" },
          ].map((token, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 rounded-lg border"
              style={{
                background: "#F7FBFE",
                borderColor: "rgba(0,92,144,0.11)",
                padding: "clamp(5px, 1cqw, 8px) clamp(8px, 1.5cqw, 12px)",
              }}
            >
              <div
                className="flex-shrink-0 rounded"
                style={{
                  width: "clamp(7px, 1.2cqw, 12px)",
                  height: "clamp(7px, 1.2cqw, 12px)",
                  background: token.color,
                  border: token.border ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}
              ></div>
              <span
                className="flex-1"
                style={{
                  fontSize: "clamp(6px, 1.1cqw, 10px)",
                  fontWeight: 600,
                  color: "#002649",
                  fontFamily: "Poppins, sans-serif",
                  minWidth: 0,
                }}
              >
                {token.name}
              </span>
              <span
                className="flex-shrink-0 font-mono"
                style={{
                  fontSize: "clamp(5px, 0.9cqw, 9px)",
                  color: "#005C90",
                  fontFamily: "Poppins, monospace",
                }}
              >
                {token.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CENTER ARROW */}
      <div
        className="absolute top-1/2 z-10 flex flex-col items-center"
        style={{
          left: "44%",
          transform: "translate(-50%, -50%)",
          gap: "clamp(3px, 0.6cqw, 5px)",
        }}
      >
        <div
          className="w-px"
          style={{
            height: "clamp(16px, 3cqw, 28px)",
            background: "linear-gradient(to bottom, transparent, #0981B5)",
          }}
        ></div>
        <div
          className="rounded-full text-white font-black uppercase tracking-tight text-center"
          style={{
            background: "linear-gradient(90deg, #0981B5, #27A8E0)",
            boxShadow: "0 2px 8px rgba(9, 129, 181, 0.3)",
            padding: "clamp(4px, 0.8cqw, 6px) clamp(8px, 1.5cqw, 12px)",
            fontSize: "clamp(6px, 1cqw, 9px)",
            whiteSpace: "nowrap",
          }}
        >
          Apply
        </div>
        <div
          className="w-px"
          style={{
            height: "clamp(16px, 3cqw, 28px)",
            background: "linear-gradient(to bottom, #0981B5, transparent)",
          }}
        ></div>
      </div>

      {/* RIGHT PANEL: Preview with Tokens Applied */}
      <div
        className="flex flex-col justify-center"
        style={{
          flex: 1,
          background: "#FFFFFF",
          padding: "clamp(12px, 3cqw, 28px)",
          gap: "clamp(8px, 2cqw, 16px)",
          overflowY: "auto",
        }}
      >
        {/* Survey Label */}
        <div className="flex items-center gap-2" style={{ color: "#39B44A" }}>
          <div
            className="flex-shrink-0"
            style={{
              width: "clamp(4px, 0.8cqw, 6px)",
              height: "clamp(4px, 0.8cqw, 6px)",
              borderRadius: "50%",
              background: "#39B44A",
            }}
          ></div>
          <span
            style={{
              fontSize: "clamp(7px, 1.3cqw, 11px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#39B44A",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Survey Preview
          </span>
        </div>

        {/* Preview Block */}
        <div
          className="rounded-lg overflow-hidden border"
          style={{
            background: "#F7FBFE",
            borderColor: "rgba(0,92,144,0.11)",
            boxShadow: "0 1px 6px rgba(0,38,73,0.05)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-2"
            style={{
              background: "#1A1A2E",
              padding: "clamp(8px, 1.5cqw, 12px) clamp(10px, 2cqw, 16px)",
            }}
          >
            <div
              className="flex items-center justify-center font-bold text-white flex-shrink-0"
              style={{
                width: "clamp(18px, 3cqw, 28px)",
                height: "clamp(18px, 3cqw, 28px)",
                borderRadius: "clamp(3px, 0.6cqw, 5px)",
                background: "rgba(233, 69, 96, 0.8)",
                fontSize: "clamp(6px, 1cqw, 10px)",
              }}
            >
              V
            </div>
            <span
              className="flex-1 font-bold text-white"
              style={{
                fontSize: "clamp(7px, 1.2cqw, 11px)",
                fontFamily: "Poppins, sans-serif",
                minWidth: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              VortexCo Survey
            </span>
            <span
              className="font-bold uppercase tracking-wide flex-shrink-0 rounded-full"
              style={{
                background: "rgba(233, 69, 96, 0.25)",
                color: "#E94560",
                fontSize: "clamp(5px, 0.9cqw, 8px)",
                padding: "clamp(2px, 0.4cqw, 4px) clamp(6px, 1.2cqw, 10px)",
              }}
            >
              Live
            </span>
          </div>

          {/* Body */}
          <div
            className="flex flex-col"
            style={{
              padding: "clamp(8px, 1.5cqw, 12px) clamp(10px, 2cqw, 16px)",
              gap: "clamp(6px, 1.2cqw, 10px)",
            }}
          >
            {[
              { dot: "#E94560", width: "100%" },
              { dot: "#0F3460", width: "75%" },
              { dot: "#E94560", width: "85%" },
            ].map((row, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div
                  className="flex-shrink-0 rounded-full"
                  style={{
                    width: "clamp(4px, 0.8cqw, 7px)",
                    height: "clamp(4px, 0.8cqw, 7px)",
                    background: row.dot,
                  }}
                ></div>
                <div
                  className="h-1 rounded-full flex-1"
                  style={{
                    background:
                      row.dot === "#E94560"
                        ? "rgba(26, 26, 46, 0.10)"
                        : "rgba(15, 52, 96, 0.10)",
                    width: row.width,
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div
            className="flex items-center justify-between border-t"
            style={{
              borderColor: "rgba(26, 26, 46, 0.1)",
              padding: "clamp(8px, 1.5cqw, 12px) clamp(10px, 2cqw, 16px)",
            }}
          >
            <button
              className="rounded-full text-white font-bold uppercase tracking-wide flex-shrink-0"
              style={{
                background: "linear-gradient(90deg, #E94560, #FF6B8A)",
                fontSize: "clamp(6px, 1cqw, 9px)",
                padding: "clamp(4px, 0.8cqw, 6px) clamp(8px, 1.5cqw, 12px)",
              }}
            >
              Submit →
            </button>
            <span
              className="font-bold uppercase tracking-wide rounded-full flex-shrink-0"
              style={{
                background: "rgba(57, 180, 74, 0.12)",
                color: "#39B44A",
                fontSize: "clamp(6px, 1cqw, 9px)",
                padding: "clamp(2px, 0.4cqw, 4px) clamp(6px, 1.2cqw, 10px)",
              }}
            >
              ✓ Themed
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className="flex items-center gap-2 flex-wrap"
          style={{ marginTop: "clamp(4px, 1cqw, 8px)" }}
        >
          <button
            className="rounded-full text-white font-bold uppercase tracking-wide flex-shrink-0"
            style={{
              background: "linear-gradient(90deg, #0981B5, #27A8E0)",
              boxShadow: "0 3px 12px rgba(9, 129, 181, 0.28)",
              fontSize: "clamp(6px, 1cqw, 9px)",
              padding: "clamp(4px, 0.8cqw, 6px) clamp(8px, 1.5cqw, 12px)",
              whiteSpace: "nowrap",
              border: "none",
              cursor: "pointer",
            }}
          >
            Save Theme
          </button>
          <span
            className="font-bold uppercase tracking-wide rounded-full flex-shrink-0"
            style={{
              background: "rgba(115, 207, 225, 0.18)",
              color: "#005C90",
              fontSize: "clamp(6px, 1cqw, 9px)",
              padding: "clamp(2px, 0.4cqw, 4px) clamp(6px, 1.2cqw, 10px)",
              whiteSpace: "nowrap",
            }}
          >
            4 tokens mapped
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrandingVisual;
