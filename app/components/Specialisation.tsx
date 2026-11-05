"use client";

import Image from "next/image";

const services = [
  {
    id: "01",
    area: "kitchen",
    size: "lg",
    title: "Modular Kitchens",
    short: "Precision-built kitchens, finished to fit how you cook.",
    description:
      "Precision-engineered kitchen systems that marry function and beauty. Every cabinet, countertop, and finish chosen to reflect your culinary life.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    accent: "var(--sage-pale)",
    tag: "Signature Service",
  },
  {
    id: "02",
    area: "wardrobe",
    size: "sm",
    title: "Modular Wardrobes",
    short: "Walk-in and wall-to-wall storage.",
    description:
      "Walk-in wonders and wall-to-wall solutions. Intelligently designed storage that keeps your wardrobe — and your mornings — effortlessly organised.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    accent: "var(--rose-pale)",
    tag: "Signature Service",
  },
  {
    id: "03",
    area: "living",
    size: "sm",
    title: "Living Spaces",
    short: "Living rooms planned piece by piece.",
    description:
      "Curated living rooms and open-plan zones where every furniture piece, material, and accent light is placed with deliberate intention.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    accent: "var(--blue-pale)",
    tag: "Full Room",
  },
  {
    id: "04",
    area: "bedroom",
    size: "wide",
    title: "Bedroom Sanctuaries",
    short: "Calm bedrooms with built-in storage and soft lighting.",
    description:
      "Restful retreats engineered around you — from bespoke headboards to integrated study nooks and ambient lighting that shifts with the day.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    accent: "var(--sage-pale)",
    tag: "Full Room",
  },
  {
    id: "05",
    area: "lighting",
    size: "sm",
    title: "Lighting Design",
    short: "Layered lighting for every room.",
    description:
      "Layered lighting that sets the mood — ambient, task, and accent fixtures planned around how each room is lived in, from morning light to evening glow.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    accent: "var(--rose-pale)",
    tag: "Finishing",
  },
  {
    id: "06",
    area: "painting",
    size: "wide",
    title: "Painting & Finishes",
    short: "Colour advice, textures and premium paints, applied with care.",
    description:
      "Flawless walls and lasting finishes. Expert colour consultation, textures, and premium paints applied with care for a clean, durable result.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    accent: "var(--blue-pale)",
    tag: "Finishing",
  },
];

export default function Specialisation() {
  return (
    <section
      id="services"
      style={{
        background: "var(--cream)",
        padding: "120px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative large letter */}
      <div
        className="font-display"
        style={{
          position: "absolute",
          top: 60,
          right: -20,
          fontSize: "22vw",
          fontWeight: 300,
          color: "var(--cream-dark)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.6,
        }}
      >
        S
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 72,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <span className="section-label anim-fade-right d-0">Our Specialisation</span>
            <h2
              className="font-display anim-fade-up d-100"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--charcoal)",
                marginTop: 16,
                maxWidth: 520,
              }}
            >
              Crafted for Every
              <br />
              <em style={{ fontStyle: "italic", color: "var(--sage)" }}>Corner</em> of Your Home
            </h2>
          </div>
          <p
            className="anim-fade-left d-200"
            style={{
              maxWidth: 320,
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "var(--taupe)",
              fontWeight: 300,
            }}
          >
            From a single modular unit to an entire home — our expertise spans
            every space that makes a house a home.
          </p>
        </div>

        {/* Services bento grid */}
        <div className="services-bento">
          {services.map((service, i) => (
            <article
              key={service.id}
              className={`bento-card bento-${service.size} anim-scale-in d-${Math.min(i * 100 + 200, 700)}`}
              style={{ gridArea: service.area }}
            >
              <Image
                src={service.image}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                sizes={
                  service.size === "lg"
                    ? "(max-width: 1024px) 100vw, 50vw"
                    : service.size === "wide"
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 1024px) 50vw, 25vw"
                }
              />

              {/* Legibility gradient */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(24,22,15,0.85) 0%, rgba(24,22,15,0.55) 40%, rgba(24,22,15,0.1) 70%, rgba(24,22,15,0.45) 100%)",
                }}
              />

              {/* Top row: number + tag */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  padding: "20px 22px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span
                  className="font-display bento-num"
                  style={{ fontSize: "1.8rem", fontWeight: 300, color: "rgba(248,244,238,0.85)", lineHeight: 1 }}
                >
                  {service.id}
                </span>
                <span
                  className="bento-tag"
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--cream)",
                    border: "1px solid rgba(248,244,238,0.45)",
                    background: "rgba(24,22,15,0.25)",
                    backdropFilter: "blur(6px)",
                    padding: "4px 10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {service.tag}
                </span>
              </div>

              {/* Bottom content */}
              <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "22px" }}>
                <h3
                  className="font-display bento-title"
                  style={{ fontWeight: 400, color: "var(--cream)", lineHeight: 1.15, marginBottom: 8 }}
                >
                  {service.title}
                </h3>
                <p
                  className="bento-desc"
                  style={{
                    fontSize: "0.8rem",
                    lineHeight: 1.65,
                    color: "rgba(248,244,238,0.8)",
                    fontWeight: 300,
                    maxWidth: 460,
                  }}
                >
                  {service.description}
                </p>
                <p
                  className="bento-short"
                  style={{ fontSize: "0.78rem", lineHeight: 1.5, color: "rgba(248,244,238,0.85)", fontWeight: 300 }}
                >
                  {service.short}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="anim-fade-up d-700"
          style={{ textAlign: "center", marginTop: 60 }}
        >
          <a href="#contact" className="btn-outline">
            Explore All Services
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .services-bento {
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 290px;
          grid-template-areas:
            "kitchen kitchen wardrobe living"
            "kitchen kitchen bedroom bedroom"
            "lighting painting painting painting";
        }
        .bento-card {
          position: relative;
          overflow: hidden;
          background: var(--cream-dark);
          isolation: isolate;
        }
        .bento-card img {
          transition: transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .bento-card:hover img { transform: scale(1.05); }
        .bento-title { font-size: 1.45rem; }
        .bento-lg .bento-title { font-size: clamp(1.8rem, 2.8vw, 2.6rem); }
        .bento-lg .bento-desc { font-size: 0.92rem !important; }
        .bento-lg > div:last-child { padding: 36px !important; }
        .bento-short { display: none; }

        @media (max-width: 1024px) {
          .services-bento {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 260px;
            grid-template-areas:
              "kitchen kitchen"
              "kitchen kitchen"
              "wardrobe living"
              "bedroom bedroom"
              "lighting painting";
          }
        }
        @media (max-width: 640px) {
          .services-bento { gap: 8px; grid-auto-rows: 210px; }
          .bento-card > div:last-child { padding: 16px !important; }
          .bento-card > div:nth-child(3) { padding: 14px 16px !important; }
          .bento-desc { display: none; }
          .bento-short { display: block; }
          .bento-sm .bento-short { display: none; }
          .bento-sm .bento-tag { display: none; }
          .bento-title { font-size: 1.25rem; margin-bottom: 4px !important; }
          .bento-sm .bento-title { font-size: 1.1rem; }
          .bento-lg .bento-title { font-size: 1.7rem; }
          .bento-num { font-size: 1.2rem !important; }
          .bento-tag { font-size: 0.5rem !important; padding: 3px 8px !important; }
        }
      `}</style>
    </section>
  );
}
