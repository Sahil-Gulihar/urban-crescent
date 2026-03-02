"use client";

import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Modular Kitchens",
    description:
      "Precision-engineered kitchen systems that marry function and beauty. Every cabinet, countertop, and finish chosen to reflect your culinary life.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    accent: "var(--sage-pale)",
    tag: "Signature Service",
  },
  {
    id: "02",
    title: "Modular Wardrobes",
    description:
      "Walk-in wonders and wall-to-wall solutions. Intelligently designed storage that keeps your wardrobe — and your mornings — effortlessly organised.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    accent: "var(--rose-pale)",
    tag: "Signature Service",
  },
  {
    id: "03",
    title: "Living Spaces",
    description:
      "Curated living rooms and open-plan zones where every furniture piece, material, and accent light is placed with deliberate intention.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    accent: "var(--blue-pale)",
    tag: "Full Room",
  },
  {
    id: "04",
    title: "Bedroom Sanctuaries",
    description:
      "Restful retreats engineered around you — from bespoke headboards to integrated study nooks and ambient lighting that shifts with the day.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    accent: "var(--sage-pale)",
    tag: "Full Room",
  },
  {
    id: "05",
    title: "Home Offices",
    description:
      "Productive, poised workspaces. Modular desking, acoustic panels, and smart storage — design that empowers focus without compromising style.",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    accent: "var(--rose-pale)",
    tag: "Workspace",
  },
  {
    id: "06",
    title: "Commercial Interiors",
    description:
      "Offices, showrooms, and hospitality spaces that communicate your brand story through every surface, fixture, and spatial flow.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    accent: "var(--blue-pale)",
    tag: "Commercial",
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

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
          className="services-grid"
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`card-hover anim-scale-in d-${Math.min(i * 100 + 200, 700)}`}
              style={{
                position: "relative",
                background: service.accent,
                cursor: "default",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              <div
                className="img-wrap"
                style={{ position: "relative", height: 240, flexShrink: 0 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div style={{ padding: "28px 28px 32px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 14,
                  }}
                >
                  <span
                    className="font-display"
                    style={{ fontSize: "2rem", fontWeight: 300, color: "var(--taupe-light)" }}
                  >
                    {service.id}
                  </span>
                  <span
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--taupe)",
                      border: "1px solid var(--taupe-light)",
                      padding: "4px 10px",
                    }}
                  >
                    {service.tag}
                  </span>
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    color: "var(--charcoal)",
                    marginBottom: 12,
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.75,
                    color: "var(--taupe)",
                    fontWeight: 300,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
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
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
