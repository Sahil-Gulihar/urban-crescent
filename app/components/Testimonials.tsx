"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Urban Crescent didn't just design our kitchen — they redesigned how our family lives. Every cabinet placement, every finish choice was considered with such precision. It's been two years and it still feels brand new.",
    author: "Priya Sharma",
    role: "Homeowner, Bandra Mumbai",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    project: "Modular Kitchen & Living Room",
  },
  {
    quote:
      "What set them apart was the seamless end-to-end experience. From the first design consultation to the final installation, I never had to chase anyone. One call resolved everything. Our entire 3BHK was transformed in 45 days.",
    author: "Rohan Malhotra",
    role: "Software Engineer, Bangalore",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    project: "Full Home Interior",
  },
  {
    quote:
      "I was skeptical about modular wardrobes — feared they'd look generic. Urban Crescent proved me completely wrong. The custom finishes, the internal fittings, the soft-close drawers — it's luxury at a very sensible price.",
    author: "Ananya Krishnan",
    role: "Architect, Hyderabad",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
    project: "Master Bedroom & Wardrobe",
  },
  {
    quote:
      "As an architect myself, I'm impossibly demanding. Urban Crescent matched that energy. The 3D visualisations were spot-on, the material quality exceeded what I expected, and the installation crew was meticulous. Five stars without hesitation.",
    author: "Vikram Nair",
    role: "Interior Architect, Pune",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
    project: "Home Office & Study",
  },
  {
    quote:
      "Our office renovation was a complex brief — we needed storage, meeting zones, and open collaboration spaces. Urban Crescent navigated the commercial project beautifully. On time, on budget, and it looks incredible.",
    author: "Meera Iyer",
    role: "Founder, Bangalore",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&q=80",
    project: "Commercial Office Interior",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--gold)">
          <path d="M7 1l1.545 3.131 3.455.502-2.5 2.437.59 3.44L7 9l-3.09 1.62.59-3.44-2.5-2.437 3.455-.502L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      style={{
        background: "var(--cream)",
        padding: "120px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative arch background */}
      <div
        style={{
          position: "absolute",
          bottom: -300,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "80vw",
          maxWidth: 900,
          maxHeight: 900,
          borderRadius: "50%",
          border: "1px solid var(--cream-dark)",
          zIndex: 0,
        }}
      />

      <div
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="section-label anim-fade-up d-0" style={{ display: "inline-block" }}>
            Client Stories
          </span>
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
            Homes That Made
            <br />
            <em style={{ fontStyle: "italic", color: "var(--rose)" }}>People Happy</em>
          </h2>
        </div>

        {/* Main testimonial */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 64,
            alignItems: "center",
            marginBottom: 60,
          }}
          className="testimonial-grid"
        >
          {/* Left: Avatar + project info */}
          <div
            key={`avatar-${active}`}
            className="anim-fade-right d-0"
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
          >
            <div
              style={{
                position: "relative",
                width: 200,
                height: 240,
                marginBottom: 28,
                overflow: "hidden",
              }}
              className="img-wrap"
            >
              <Image
                src={t.avatar}
                alt={t.author}
                fill
                style={{ objectFit: "cover" }}
                sizes="200px"
              />
              {/* Gold overlay accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "var(--gold)",
                }}
              />
            </div>

            <StarRating count={t.rating} />

            <h4
              className="font-display"
              style={{
                fontSize: "1.3rem",
                fontWeight: 400,
                color: "var(--charcoal)",
                marginTop: 14,
                marginBottom: 4,
              }}
            >
              {t.author}
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--taupe)", letterSpacing: "0.04em" }}>
              {t.role}
            </p>
            <div
              style={{
                marginTop: 16,
                padding: "8px 14px",
                background: "var(--sage-pale)",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--sage)",
                display: "inline-block",
              }}
            >
              {t.project}
            </div>
          </div>

          {/* Right: Quote */}
          <div key={`quote-${active}`} className="anim-fade-left d-0">
            {/* Large quote mark */}
            <div
              className="font-display"
              style={{
                fontSize: "8rem",
                lineHeight: 0.7,
                color: "var(--cream-dark)",
                marginBottom: 24,
                userSelect: "none",
                fontWeight: 300,
              }}
            >
              &ldquo;
            </div>
            <blockquote
              className="font-display"
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.55,
                color: "var(--charcoal)",
                margin: 0,
                marginBottom: 40,
              }}
            >
              {t.quote}
            </blockquote>

            {/* Navigation */}
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <button
                onClick={prev}
                style={{
                  width: 48,
                  height: 48,
                  border: "1px solid var(--taupe-light)",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s, border-color 0.2s",
                  color: "var(--charcoal)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--charcoal)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--cream)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--charcoal)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--charcoal)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--taupe-light)";
                }}
                aria-label="Previous testimonial"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M10 3L5 8l5 5"/>
                </svg>
              </button>

              {/* Dots */}
              <div style={{ display: "flex", gap: 8 }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    style={{
                      width: i === active ? 24 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: i === active ? "var(--charcoal)" : "var(--taupe-light)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "width 0.3s ease, background 0.3s ease",
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                style={{
                  width: 48,
                  height: 48,
                  border: "1px solid var(--taupe-light)",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s, border-color 0.2s",
                  color: "var(--charcoal)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--charcoal)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--cream)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--charcoal)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--charcoal)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--taupe-light)";
                }}
                aria-label="Next testimonial"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M6 3l5 5-5 5"/>
                </svg>
              </button>

              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "0.7rem",
                  color: "var(--taupe-light)",
                  letterSpacing: "0.1em",
                }}
              >
                {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Mini testimonial strip */}
        <div
          style={{
            display: "flex",
            gap: 2,
            borderTop: "1px solid var(--cream-dark)",
            paddingTop: 48,
          }}
          className="testimonial-strip"
        >
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                flex: 1,
                padding: "16px 20px",
                textAlign: "left",
                background: i === active ? "var(--sage-pale)" : "transparent",
                border: "none",
                borderTop: i === active ? "2px solid var(--sage)" : "2px solid transparent",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  color: i === active ? "var(--charcoal)" : "var(--taupe)",
                  marginBottom: 4,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {t.author.split(" ")[0]}
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "var(--taupe-light)",
                  letterSpacing: "0.06em",
                }}
              >
                {t.project.split(" ").slice(0, 2).join(" ")}
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .testimonial-strip { display: none !important; }
        }
      `}</style>
    </section>
  );
}
