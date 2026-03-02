"use client";

import Image from "next/image";

const differentiators = [
  {
    num: "01",
    title: "Modular Is Our DNA",
    body: "We don't dabble in modular — it's the foundation of everything we build. Our factory-precision manufacturing means consistently superior quality, perfect fits, and finishes that last decades, not years.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="2" width="10" height="10" rx="1"/>
        <rect x="16" y="2" width="10" height="10" rx="1"/>
        <rect x="2" y="16" width="10" height="10" rx="1"/>
        <rect x="16" y="16" width="10" height="10" rx="1"/>
      </svg>
    ),
    accentColor: "var(--sage)",
    bgColor: "var(--sage-pale)",
  },
  {
    num: "02",
    title: "End-to-End Ownership",
    body: "One company. One point of contact. Zero chaos. We manage every step — concept design, material sourcing, manufacturing, delivery, and white-glove installation — so you don't have to coordinate a circus.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="14" cy="14" r="11"/>
        <path d="M14 3v11l7 4"/>
      </svg>
    ),
    accentColor: "var(--rose)",
    bgColor: "var(--rose-pale)",
  },
  {
    num: "03",
    title: "Design Before Dollar",
    body: "Our complimentary design consultation and 3D visualisation lets you see your space before a single nail is hammered. What you see is exactly what you get — no surprises, no regrets.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 20L14 6l10 14H4z"/>
        <circle cx="14" cy="14" r="3"/>
      </svg>
    ),
    accentColor: "var(--blue)",
    bgColor: "var(--blue-pale)",
  },
  {
    num: "04",
    title: "10-Year Warranty",
    body: "We stand behind our work with an industry-leading 10-year structural warranty. Our modular systems are built to outlast trends and retain their beauty through years of real living.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M14 3L4 7v8c0 5.5 4.5 10 10 10s10-4.5 10-10V7L14 3z"/>
        <path d="M9 14l3 3 7-7"/>
      </svg>
    ),
    accentColor: "var(--gold)",
    bgColor: "#F5EFE6",
  },
];

const processSteps = [
  { step: "1", label: "Discovery", desc: "We listen deeply to understand your lifestyle and vision." },
  { step: "2", label: "Design", desc: "3D concepts and material boards crafted by our senior designers." },
  { step: "3", label: "Manufacture", desc: "Factory-built modular units with precision quality checks." },
  { step: "4", label: "Install", desc: "Our crew delivers and installs with zero disruption." },
  { step: "5", label: "Handover", desc: "A complete walkthrough ensuring every detail is perfect." },
];

export default function HowWereDifferent() {
  return (
    <section
      id="difference"
      style={{
        background: "var(--charcoal)",
        padding: "120px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.06,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1600&q=60"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Decorative arc */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          border: "1px solid rgba(184,117,32,0.12)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -280,
          right: -280,
          width: 760,
          height: 760,
          borderRadius: "50%",
          border: "1px solid rgba(184,117,32,0.06)",
          zIndex: 0,
        }}
      />

      <div
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <span
            className="section-label anim-fade-right d-0"
            style={{ color: "var(--gold-light)" }}
          >
            Why Urban Crescent
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: 16,
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <h2
              className="font-display anim-fade-up d-100"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--cream)",
                maxWidth: 500,
              }}
            >
              Built Different.{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                Built Better.
              </em>
            </h2>
            <p
              className="anim-fade-left d-200"
              style={{
                maxWidth: 340,
                fontSize: "0.88rem",
                lineHeight: 1.8,
                color: "rgba(248,244,238,0.55)",
                fontWeight: 300,
              }}
            >
              While others hire subcontractors and hope for the best, we control
              every variable — from the factory floor to the finishing touch in
              your home.
            </p>
          </div>
        </div>

        {/* Differentiators grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            marginBottom: 80,
          }}
          className="diff-grid"
        >
          {differentiators.map((d, i) => (
            <div
              key={d.num}
              className={`anim-fade-up d-${i * 100 + 200}`}
              style={{
                background: "rgba(248,244,238,0.04)",
                border: "1px solid rgba(248,244,238,0.07)",
                padding: "40px 36px",
                position: "relative",
                transition: "background 0.3s ease, border-color 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(248,244,238,0.06)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(184,117,32,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(248,244,238,0.04)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(248,244,238,0.07)";
              }}
            >
              {/* Number */}
              <span
                className="font-display"
                style={{
                  position: "absolute",
                  top: 24,
                  right: 28,
                  fontSize: "3rem",
                  fontWeight: 300,
                  color: "rgba(248,244,238,0.07)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {d.num}
              </span>

              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  background: d.bgColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  color: d.accentColor,
                }}
              >
                {d.icon}
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 400,
                  color: "var(--cream)",
                  marginBottom: 14,
                  lineHeight: 1.2,
                }}
              >
                {d.title}
              </h3>
              <p
                style={{
                  fontSize: "0.83rem",
                  lineHeight: 1.8,
                  color: "rgba(248,244,238,0.55)",
                  fontWeight: 300,
                }}
              >
                {d.body}
              </p>

              {/* Accent line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(to right, ${d.accentColor}, transparent)`,
                  opacity: 0.5,
                }}
              />
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div
          style={{
            borderTop: "1px solid rgba(248,244,238,0.1)",
            paddingTop: 64,
          }}
        >
          <span
            className="section-label anim-fade-right d-0"
            style={{ color: "var(--gold-light)", display: "block", marginBottom: 40 }}
          >
            Our Process — From Vision to Reality
          </span>

          <div
            style={{
              display: "flex",
              gap: 0,
              position: "relative",
            }}
            className="process-row"
          >
            {/* Connecting line */}
            <div
              style={{
                position: "absolute",
                top: 24,
                left: "10%",
                right: "10%",
                height: 1,
                background: "linear-gradient(to right, transparent, var(--gold), var(--gold), transparent)",
                opacity: 0.2,
              }}
              className="process-line"
            />

            {processSteps.map((p, i) => (
              <div
                key={p.step}
                className={`anim-fade-up d-${i * 100 + 200}`}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "0 16px",
                  position: "relative",
                }}
              >
                {/* Step circle */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "1px solid rgba(184,117,32,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    background: "rgba(184,117,32,0.08)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <span
                    className="font-display"
                    style={{ fontSize: "1.1rem", fontWeight: 400, color: "var(--gold)" }}
                  >
                    {p.step}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    color: "var(--cream)",
                    marginBottom: 8,
                    textTransform: "uppercase",
                  }}
                >
                  {p.label}
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    lineHeight: 1.6,
                    color: "rgba(248,244,238,0.45)",
                    fontWeight: 300,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .diff-grid { grid-template-columns: 1fr !important; }
          .process-row { flex-direction: column !important; gap: 32px !important; }
          .process-line { display: none; }
        }
      `}</style>
    </section>
  );
}
