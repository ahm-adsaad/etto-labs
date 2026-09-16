import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"
export const dynamic = "force-static"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0D1216",
          borderRadius: 38,
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 160 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            transform="translate(-62.9 20.3) scale(0.812)"
            fill="none"
            stroke="#A9D6EB"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M145,14 L145,133" />
            <path d="M205,14 L205,111 A22,22 0 0,0 227,133" />
            <path d="M125,47 L225,47" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  )
}
