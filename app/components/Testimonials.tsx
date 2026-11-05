"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Aarti is Unmatched !! Well , to begin I purchased 3 bhk and was very keen on something very different and unique.. in simple words wanted WOW factor ... I was always apprehensive about get interiors getting done through architects/ interior person .\"Budgetary constraints \" When I saw Aarti's work at different sites, was quite impressed and decided to handover entire project of 3BHK.. I never went through her communications on plan, quotation etc .. it's the trust factor, becoz I had so many other things to attend .. Her taste for colour combination is amazing for kitchen , wardrobes , curtains , furniture , upholstery etc is amazing .. not to forget lighting effect .. she designed it very simple but elegant !! without compromising on storage. A big shout out to the wonderful team she has .. so prompt , professional , time management , humble ... let me tell she hardcore negotiator with vendors... Inshort , she respected my budget , delivered high quality product !! worth every rupee !! Thank you for such a flawless and timely execution Aarthi ! High recommend !!",
    author: "Jitheesh Nair",
    role: "Revenue Head, Finance in a Box",
    avatar: "/testimonials/jitesh-nair-home.jpg",
    avatarAlt: "Foyer with textured wallpaper, a wooden mirror and a carved screen, designed by Urban Crescent",
    avatarPosition: "center",
    project: "3BHK Full Home Interior",
  },
  {
    quote:
      "We had a wonderful experience working with Arti as our interior decorator for our flat at Gopalan Aqua. She understood our preferences and helped transform our house into a beautiful and welcoming home. Her creativity, attention to detail, and commitment to her work made the entire process a great experience. We truly appreciate her efforts in bringing our vision to life and making our home feel special. Thank you, Arti, for your wonderful work and dedication. We would happily recommend her to anyone looking for an interior decorator!",
    author: "Archana",
    role: "Homeowner, Gopalan Aqua, Bangalore",
    avatar: "/testimonials/gopalan-aqua-client-passport.jpg",
    avatarAlt: "Archana",
    avatarPosition: "center top",
    project: "Home Interior",
  },
  {
    quote:
      "When we were still wrapping our heads about the fact that we had a house to call our own, Aarti didi and team had put their vision and energy into our home! She worked on a tight timeline, accommodated our requests — to the extent of helping us choose our curtains over a video call when we were overwhelmed with so many things. She ensured we had the best quality of fittings in our budget. Thank you for your support and for being an integral part of our home making journey!",
    author: "Divya & Jithin",
    role: "Homeowners",
    avatar: "/testimonials/divya-jithin-portrait.jpg",
    avatarAlt: "Divya and Jithin",
    avatarPosition: "center top",
    project: "New Home Interior",
  },
];

// Time on each testimonial scales with its length, within 5–10s.
const slideDuration = (quote: string) => Math.min(10000, Math.max(5000, quote.length * 10));

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReducedMotion(mq.matches);
    const onVisibility = () => setTabHidden(document.hidden);
    onMotion();
    mq.addEventListener("change", onMotion);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      mq.removeEventListener("change", onMotion);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const autoplay = !reducedMotion && !userPaused;
  const running = autoplay && !hovered && !tabHidden;

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
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
            gridTemplateColumns: "260px 1fr",
            gap: 80,
            alignItems: "start",
            maxWidth: 1080,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 0,
          }}
          className="testimonial-grid"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHovered(false);
          }}
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
                width: "100%",
                maxWidth: 260,
                aspectRatio: "4 / 5",
                marginBottom: 28,
                overflow: "hidden",
              }}
              className="img-wrap"
            >
              <Image
                src={t.avatar}
                alt={t.avatarAlt}
                fill
                style={{ objectFit: "cover", objectPosition: t.avatarPosition }}
                sizes="260px"
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

            <h4
              className="font-display"
              style={{
                fontSize: "1.3rem",
                fontWeight: 400,
                color: "var(--charcoal)",
                marginTop: 0,
                marginBottom: 6,
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
                fontSize: "5.5rem",
                lineHeight: 0.5,
                color: "var(--gold-light)",
                opacity: 0.5,
                marginBottom: 0,
                marginTop: 12,
                userSelect: "none",
                fontWeight: 300,
              }}
            >
              &ldquo;
            </div>
            <blockquote
              className="font-display"
              style={{
                fontSize: t.quote.length > 700 ? "clamp(1.1rem, 1.45vw, 1.3rem)" : "clamp(1.2rem, 1.7vw, 1.45rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.6,
                color: "var(--charcoal)",
                margin: 0,
                marginBottom: 40,
                maxWidth: 680,
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

              {!reducedMotion && (
                <button
                  onClick={() => setUserPaused((p) => !p)}
                  aria-label={userPaused ? "Resume autoplay" : "Pause autoplay"}
                  aria-pressed={userPaused}
                  style={{
                    width: 32,
                    height: 32,
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--taupe)",
                    padding: 0,
                  }}
                >
                  {userPaused ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M3 1.5v9l7.5-4.5z" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <rect x="2.5" y="1.5" width="2.2" height="9" />
                      <rect x="7.3" y="1.5" width="2.2" height="9" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Autoplay progress bar */}
        <div
          aria-hidden="true"
          style={{
            maxWidth: 1080,
            margin: "56px auto 0",
            height: 2,
            background: "var(--cream-dark)",
            overflow: "hidden",
          }}
        >
          {autoplay && (
            <div
              key={`progress-${active}`}
              className="testimonial-progress"
              onAnimationEnd={next}
              style={{
                height: "100%",
                background: "var(--gold)",
                transformOrigin: "left center",
                animation: `testimonialProgress ${slideDuration(t.quote)}ms linear forwards`,
                animationPlayState: running ? "running" : "paused",
              }}
            />
          )}
        </div>
      </div>

      <style>{`
        @keyframes testimonialProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @media (max-width: 768px) {
          .testimonial-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
