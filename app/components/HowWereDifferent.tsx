"use client";

import Image from "next/image";

const differentiators = [
  {
    num: "01",
    title: "Modular Is Our DNA",
    short: "Factory-precision builds that fit perfectly and last.",
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
    short: "One team from design to installation.",
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
    short: "See your space in 3D before work begins.",
    body: "Our free design consultation and detailed 3D visualisation let you see your space before a single nail is hammered. What you see is exactly what you get — no surprises, no regrets.",
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
    title: "Warranty & Assurance",
    short: "Up to 7 years on plywood, 1 year on hardware.",
    body: "Up to 7 years of plywood warranty and 1 year on hardware — built to endure life's many moments. Warranty terms depend on the selected products and specifications, with hardware covered as per brand policy. We even customise product brands — plywood, hardware and fittings — as per your choice.",
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
  { step: "2", label: "Site Visit", desc: "We measure your space and note every site condition." },
  { step: "3", label: "Design", desc: "3D concepts and material boards crafted by our senior designers." },
  { step: "4", label: "Manufacture", desc: "Factory-built modular units with precision quality checks." },
  { step: "5", label: "Install", desc: "Our crew delivers and installs with zero disruption." },
  { step: "6", label: "Handover", desc: "A complete walkthrough ensuring every detail is perfect." },
];

// One glow travels 1→2→…→6, rests on 6 for one beat, then restarts at 1.
const GLOW_STEP_S = 1.8;
const GLOW_CYCLE_S = GLOW_STEP_S * 6;

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
              className={`diff-card anim-fade-up d-${i * 100 + 200}`}
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
                className="font-display diff-num"
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
                className="diff-icon"
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
                className="font-display diff-title"
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
                className="diff-body"
                style={{
                  fontSize: "0.83rem",
                  lineHeight: 1.8,
                  color: "rgba(248,244,238,0.55)",
                  fontWeight: 300,
                }}
              >
                {d.body}
              </p>
              <p
                className="diff-short"
                style={{ fontSize: "0.75rem", lineHeight: 1.5, color: "rgba(248,244,238,0.6)", fontWeight: 300 }}
              >
                {d.short}
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

          <div className="process-grid">
            {processSteps.map((p, i) => {
              // Snake layout: 1 2 3 on top, then 6 5 4 underneath so 3 drops straight down into 4.
              const topRow = i < 3;
              const gridColumn = topRow ? i + 1 : 6 - i;
              // Glow order: 1→2 (0), 2→3 (1), 3→4 down (2), 4→5 (3), 5→6 (4).
              return (
                <div
                  key={p.step}
                  className={`process-item anim-fade-up d-${Math.min(i * 100 + 200, 700)}`}
                  style={{ gridRow: topRow ? 1 : 2, gridColumn }}
                >
                  {/* 3 → 4: straight down */}
                  {i === 3 && (
                    <div className="proc-down" aria-hidden="true">
                      <span className="proc-chevron proc-chevron-down" />
                      <span className="proc-track"><span className="proc-glow proc-glow-v" style={{ animationDelay: `${2 * GLOW_STEP_S}s` }} /></span>
                    </div>
                  )}

                  {/* 1 → 2, 2 → 3: to the right */}
                  {(i === 0 || i === 1) && (
                    <div className="proc-arrow proc-arrow-right" aria-hidden="true">
                      <span className="proc-chevron proc-chevron-right" />
                      <span className="proc-track"><span className="proc-glow proc-glow-r" style={{ animationDelay: `${i * GLOW_STEP_S}s` }} /></span>
                    </div>
                  )}

                  {/* 4 → 5, 5 → 6: to the left */}
                  {(i === 3 || i === 4) && (
                    <div className="proc-arrow proc-arrow-left" aria-hidden="true">
                      <span className="proc-chevron proc-chevron-left" />
                      <span className="proc-track"><span className="proc-glow proc-glow-l" style={{ animationDelay: `${i * GLOW_STEP_S}s` }} /></span>
                    </div>
                  )}

                  <div className="proc-circle" style={{ animationDelay: `${i * GLOW_STEP_S}s` }}>
                    <span className="font-display proc-num">{p.step}</span>
                  </div>
                  <div className="proc-label">{p.label}</div>
                  <p className="proc-desc">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .diff-short { display: none; }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          row-gap: 72px;
          max-width: 960px;
          margin: 0 auto;
        }
        .process-item { position: relative; text-align: center; padding: 0 16px; }
        .proc-circle {
          width: 48px; height: 48px; border-radius: 50%;
          border: 1px solid rgba(184,117,32,0.4);
          background: rgba(184,117,32,0.08);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 18px; position: relative; z-index: 1;
          animation: procCircle ${GLOW_CYCLE_S}s linear infinite; /* no backwards fill: circles stay dim until their turn */
        }
        .proc-num { font-size: 1.1rem; font-weight: 400; color: var(--gold); }
        .proc-label {
          font-size: 0.78rem; font-weight: 500; letter-spacing: 0.08em;
          color: var(--cream); margin-bottom: 8px; text-transform: uppercase;
        }
        .proc-desc { font-size: 0.75rem; line-height: 1.6; color: rgba(248,244,238,0.45); font-weight: 300; }

        /* Horizontal arrows: from this circle's edge to the neighbouring circle's edge */
        .proc-arrow {
          position: absolute; top: 24px; height: 0;
          width: calc(100% - 68px);
          border-top: 1px solid rgba(184,117,32,0.35);
        }
        .proc-arrow-right { left: calc(50% + 34px); }
        .proc-arrow-left { right: calc(50% + 34px); }
        .proc-chevron {
          position: absolute; width: 7px; height: 7px;
          border-top: 1px solid rgba(184,117,32,0.6);
          border-right: 1px solid rgba(184,117,32,0.6);
        }
        .proc-chevron-right { right: 0; top: -4px; transform: rotate(45deg); }
        .proc-chevron-left { left: 0; top: -4px; transform: rotate(-135deg); }

        /* 3 → 4: vertical arrow in the row gap, straight down into circle 4 */
        .proc-down {
          position: absolute; left: 50%;
          bottom: calc(100% + 6px); height: 56px; width: 0;
          border-left: 1px solid rgba(184,117,32,0.35);
        }
        .proc-chevron-down { left: -4px; bottom: 0; transform: rotate(135deg); }

        /* The single travelling streak: a neon segment 1/3 of the arrow, clipped inside the line */
        .proc-track { position: absolute; overflow: hidden; pointer-events: none; }
        .proc-arrow .proc-track { left: 0; right: 0; top: -3px; height: 5px; }
        .proc-down .proc-track { top: 0; bottom: 0; left: -3px; width: 5px; }
        .proc-glow {
          position: absolute; display: block;
          animation-duration: ${GLOW_CYCLE_S}s;
          animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
          animation-iteration-count: infinite;
          animation-fill-mode: both;
          will-change: transform;
        }
        .proc-glow-r, .proc-glow-l {
          top: 2px; left: 0; height: 1px; width: 33.333%;
          background: linear-gradient(90deg, rgba(255,200,90,0), #FFD27A 50%, rgba(255,200,90,0));
          box-shadow: 0 0 4px 1px rgba(255,186,60,0.75);
        }
        .proc-glow-v {
          left: 2px; top: 0; width: 1px; height: 33.333%;
          background: linear-gradient(180deg, rgba(255,200,90,0), #FFD27A 50%, rgba(255,200,90,0));
          box-shadow: 0 0 4px 1px rgba(255,186,60,0.75);
        }
        .proc-glow-r { animation-name: procStreakR; }
        .proc-glow-l { animation-name: procStreakL; }
        .proc-glow-v { animation-name: procStreakV; }

        /* Each arrow owns 1/6 of the cycle; the streak sits clipped off the ends the rest of the time. */
        @keyframes procStreakR {
          0%      { transform: translateX(-100%); opacity: 0; }
          0.5%    { opacity: 1; }
          16.2%   { opacity: 1; }
          16.667% { transform: translateX(300%); opacity: 0; }
          100%    { transform: translateX(300%); opacity: 0; }
        }
        @keyframes procStreakL {
          0%      { transform: translateX(300%); opacity: 0; }
          0.5%    { opacity: 1; }
          16.2%   { opacity: 1; }
          16.667% { transform: translateX(-100%); opacity: 0; }
          100%    { transform: translateX(-100%); opacity: 0; }
        }
        @keyframes procStreakV {
          0%      { transform: translateY(-100%); opacity: 0; }
          0.5%    { opacity: 1; }
          16.2%   { opacity: 1; }
          16.667% { transform: translateY(300%); opacity: 0; }
          100%    { transform: translateY(300%); opacity: 0; }
        }
        @keyframes procCircle {
          0%   { border-color: rgba(255,210,122,0.9); }
          12%  { border-color: rgba(255,210,122,0.9); }
          22%  { border-color: rgba(184,117,32,0.4); }
          100% { border-color: rgba(184,117,32,0.4); }
        }

        @media (prefers-reduced-motion: reduce) {
          .proc-glow { display: none; }
          .proc-circle { animation: none; }
        }

        @media (max-width: 768px) {
          /* Differentiators: 2x2 with short text */
          .diff-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; margin-bottom: 56px !important; }
          .diff-card { padding: 18px 14px !important; }
          .diff-num { font-size: 1.6rem !important; top: 12px !important; right: 12px !important; }
          .diff-icon { width: 38px !important; height: 38px !important; margin-bottom: 14px !important; }
          .diff-icon svg { width: 20px; height: 20px; }
          .diff-title { font-size: 1.05rem !important; margin-bottom: 6px !important; }
          .diff-body { display: none; }
          .diff-short { display: block; }

          /* Process: still 3 + 3, labels only */
          .process-grid { row-gap: 48px; }
          .process-item { padding: 0 4px; }
          .proc-circle { width: 40px; height: 40px; margin-bottom: 10px; }
          .proc-num { font-size: 0.95rem; }
          .proc-label { font-size: 0.62rem; letter-spacing: 0.06em; }
          .proc-desc { display: none; }
          .proc-arrow { top: 20px; width: calc(100% - 52px); }
          .proc-arrow-right { left: calc(50% + 26px); }
          .proc-arrow-left { right: calc(50% + 26px); }
          .proc-down { height: 36px; }
        }
      `}</style>
    </section>
  );
}
