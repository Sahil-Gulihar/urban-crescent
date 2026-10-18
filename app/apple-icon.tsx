import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#F8F4EE",
        }}
      >
        <svg width="150" height="150" viewBox="-12 -12 124 124">
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
      </div>
    ),
    size,
  );
}
