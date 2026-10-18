import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Urban Crescent — Interiors Redefined";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const serif = await readFile(join(process.cwd(), "app/fonts/CormorantGaramond-Medium.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#F8F4EE",
          color: "#18160F",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="96" height="96" viewBox="-12 -12 124 124">
            <g transform="rotate(-15 50 50)">
              <path
                d="M0 0H100V100H0Z M33 0V30H56V13H39V0Z M100 33H64V58H70V39H100Z"
                fill="#5A5A5A"
                fillRule="evenodd"
              />
              <g fill="#E8B84A">
                <rect x="7" y="7" width="20" height="59" />
                <rect x="62" y="7" width="31" height="20" />
                <rect x="33" y="36" width="25" height="24" />
                <rect x="7" y="72" width="20" height="21" />
                <rect x="33" y="66" width="60" height="27" />
              </g>
            </g>
          </svg>
          <div
            style={{
              fontFamily: "Cormorant",
              fontSize: 48,
              letterSpacing: "0.08em",
              color: "#4A4A4A",
            }}
          >
            URBAN CRESCENT
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "Cormorant", fontSize: 92, lineHeight: 1.05 }}>
            Spaces That Speak To You
          </div>
          <div style={{ fontSize: 30, color: "#5C5147", marginTop: 24 }}>
            Kitchens · Wardrobes · Living · Bedrooms · Lighting · Painting
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#B87520" }}>
          <div style={{ width: 48, height: 2, background: "#B87520" }} />
          End-to-end interior design &amp; execution
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Cormorant", data: serif, weight: 500, style: "normal" }] },
  );
}
