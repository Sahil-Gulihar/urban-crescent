"use client";

import Image from "next/image";

const projects = [
  {
    title: "The Sharma Residence",
    location: "Bandra, Mumbai",
    category: "Full Home",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80",
    span: "wide",
  },
  {
    title: "Meridian Penthouse",
    location: "Koramangala, Bangalore",
    category: "Modular Kitchen + Living",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
    span: "normal",
  },
  {
    title: "Studio Verde",
    location: "Jubilee Hills, Hyderabad",
    category: "Home Office + Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80",
    span: "normal",
  },
  {
    title: "Avalon Towers",
    location: "Powai, Mumbai",
    category: "Full Home End-to-End",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
    span: "wide",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        background: "var(--cream-dark)",
        padding: "120px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 60,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <span className="section-label anim-fade-right d-0">Selected Work</span>
            <h2
              className="font-display anim-fade-up d-100"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--charcoal)",
                marginTop: 16,
              }}
            >
              Spaces We&rsquo;re
              <br />
              <em style={{ fontStyle: "italic", color: "var(--rose)" }}>Proud Of</em>
            </h2>
          </div>
          <a
            href="#contact"
            className="btn-outline anim-fade-in d-300"
            style={{ alignSelf: "flex-end" }}
          >
            View All Projects
          </a>
        </div>

        {/* Masonry-style grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "auto",
            gap: 4,
          }}
          className="portfolio-grid"
        >
          {/* Project 1 — wide (spans 8 cols) */}
          <div
            className="anim-scale-in d-200 img-wrap"
            style={{
              gridColumn: "1 / 9",
              gridRow: "1 / 2",
              position: "relative",
              height: 420,
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(24,22,15,0.65) 0%, transparent 60%)",
                transition: "opacity 0.4s",
              }}
            />
            <div style={{ position: "absolute", bottom: 24, left: 28, zIndex: 2 }}>
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--gold-light)",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                {projects[0].category}
              </span>
              <h3
                className="font-display"
                style={{ fontSize: "1.5rem", fontWeight: 400, color: "var(--cream)", lineHeight: 1.2 }}
              >
                {projects[0].title}
              </h3>
              <span style={{ fontSize: "0.72rem", color: "rgba(248,244,238,0.65)" }}>
                {projects[0].location}
              </span>
            </div>
          </div>

          {/* Project 2 — narrow (spans 4 cols) */}
          <div
            className="anim-scale-in d-300 img-wrap"
            style={{
              gridColumn: "9 / 13",
              gridRow: "1 / 2",
              position: "relative",
              height: 420,
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <Image
              src={projects[1].image}
              alt={projects[1].title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(24,22,15,0.65) 0%, transparent 60%)",
              }}
            />
            <div style={{ position: "absolute", bottom: 24, left: 24, zIndex: 2 }}>
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--gold-light)",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                {projects[1].category}
              </span>
              <h3
                className="font-display"
                style={{ fontSize: "1.2rem", fontWeight: 400, color: "var(--cream)", lineHeight: 1.2 }}
              >
                {projects[1].title}
              </h3>
              <span style={{ fontSize: "0.7rem", color: "rgba(248,244,238,0.65)" }}>
                {projects[1].location}
              </span>
            </div>
          </div>

          {/* Project 3 — narrow (spans 4 cols) */}
          <div
            className="anim-scale-in d-400 img-wrap"
            style={{
              gridColumn: "1 / 5",
              gridRow: "2 / 3",
              position: "relative",
              height: 360,
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <Image
              src={projects[2].image}
              alt={projects[2].title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(24,22,15,0.65) 0%, transparent 60%)",
              }}
            />
            <div style={{ position: "absolute", bottom: 24, left: 24, zIndex: 2 }}>
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--gold-light)",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                {projects[2].category}
              </span>
              <h3
                className="font-display"
                style={{ fontSize: "1.2rem", fontWeight: 400, color: "var(--cream)", lineHeight: 1.2 }}
              >
                {projects[2].title}
              </h3>
              <span style={{ fontSize: "0.7rem", color: "rgba(248,244,238,0.65)" }}>
                {projects[2].location}
              </span>
            </div>
          </div>

          {/* Project 4 — wide (spans 8 cols) */}
          <div
            className="anim-scale-in d-500 img-wrap"
            style={{
              gridColumn: "5 / 13",
              gridRow: "2 / 3",
              position: "relative",
              height: 360,
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <Image
              src={projects[3].image}
              alt={projects[3].title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(24,22,15,0.65) 0%, transparent 60%)",
              }}
            />
            <div style={{ position: "absolute", bottom: 24, left: 28, zIndex: 2 }}>
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--gold-light)",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                {projects[3].category}
              </span>
              <h3
                className="font-display"
                style={{ fontSize: "1.5rem", fontWeight: 400, color: "var(--cream)", lineHeight: 1.2 }}
              >
                {projects[3].title}
              </h3>
              <span style={{ fontSize: "0.72rem", color: "rgba(248,244,238,0.65)" }}>
                {projects[3].location}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-grid > div {
            grid-column: 1 / -1 !important;
            grid-row: auto !important;
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
