import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "personas.sh - npm for AI identities";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "3px",
            backgroundColor: "#F9BD24",
          }}
        />

        {/* Terminal prompt icon */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
          <svg width="48" height="48" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="6" fill="#0a0a0a" />
            <path
              d="M8 10l8 6-8 6"
              stroke="#F9BD24"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <line
              x1="20"
              y1="22"
              x2="26"
              y2="22"
              stroke="#F9BD24"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <span
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#F9BD24",
              fontFamily: "monospace",
            }}
          >
            personas.sh
          </span>
        </div>

        {/* Tagline */}
        <span
          style={{
            fontSize: "32px",
            color: "#999999",
            fontFamily: "sans-serif",
          }}
        >
          npm for AI identities
        </span>

        {/* Decorative code hint */}
        <span
          style={{
            fontSize: "22px",
            color: "#444444",
            fontFamily: "monospace",
            marginTop: "80px",
          }}
        >
          $ npx persona init
        </span>

        {/* Bottom line */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            right: "80px",
            height: "1px",
            backgroundColor: "#222222",
          }}
        />

        {/* Footer URL */}
        <span
          style={{
            position: "absolute",
            bottom: "48px",
            left: "84px",
            fontSize: "18px",
            color: "#555555",
            fontFamily: "sans-serif",
          }}
        >
          personas.sh
        </span>
      </div>
    ),
    { ...size }
  );
}
