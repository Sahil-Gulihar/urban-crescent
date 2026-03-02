"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        background: "var(--cream)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background large image — right portion */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "58%",
          height: "100%",
          zIndex: 1,
        }}
        className="img-wrap hero-img-right"
      >
        <Image
          src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1400&q=80"
          alt="Elegant modular living room interior"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          sizes="58vw"
        />
        {/* Gradient blend */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, var(--cream) 0%, transparent 30%, transparent 100%)",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(248,244,238,0.12)",
            zIndex: 2,
          }}
        />
      </div>

      {/* Decorative floating card — bottom right */}
      <div
        className="hero-float-card anim-scale-in d-800"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "6%",
          zIndex: 4,
          background: "rgba(248,244,238,0.92)",
          backdropFilter: "blur(10px)",
          padding: "20px 24px",
          borderLeft: "2px solid var(--gold)",
          maxWidth: 220,
          boxShadow: "0 8px 40px rgba(24,22,15,0.1)",
        }}
      >
        <div
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 8,
          }}
        >
          Since 2012
        </div>
        <div
          className="font-display"
          style={{ fontSize: "1.9rem", fontWeight: 300, lineHeight: 1, color: "var(--charcoal)" }}
        >
          500+
        </div>
        <div style={{ fontSize: "0.72rem", color: "var(--taupe)", marginTop: 4, letterSpacing: "0.04em" }}>
          Spaces Transformed
        </div>
      </div>

      {/* Small floating accent image */}
      <div
        className="hero-accent-img anim-fade-in d-1000"
        style={{
          position: "absolute",
          top: "15%",
          right: "7%",
          width: 140,
          height: 180,
          zIndex: 4,
          overflow: "hidden",
          boxShadow: "0 12px 40px rgba(24,22,15,0.15)",
          border: "3px solid var(--cream)",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
          alt="Modular kitchen detail"
          fill
          style={{ objectFit: "cover" }}
          sizes="140px"
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 40px 80px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 560 }}>
          {/* Label */}
          <div className="anim-fade-right d-100" style={{ marginBottom: 28 }}>
            <span className="section-label">Interiors Redefined</span>
            <span
              style={{
                display: "inline-block",
                width: 40,
                height: 1,
                background: "var(--gold)",
                verticalAlign: "middle",
                marginLeft: 12,
              }}
            />
          </div>

          {/* Headline */}
          <h1
            className="font-display anim-fade-up d-200"
            style={{
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "var(--charcoal)",
              marginBottom: 12,
            }}
          >
            Spaces That
            <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--rose)",
                fontWeight: 300,
              }}
            >
              Speak
            </em>{" "}
            To You
          </h1>

          {/* Sub-headline */}
          <p
            className="anim-fade-up d-300"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
              lineHeight: 1.7,
              color: "var(--taupe)",
              marginBottom: 44,
              fontWeight: 300,
              maxWidth: 440,
            }}
          >
            Modular design crafted to your life. From concept sketches to the
            final flourish — we deliver complete interiors that are beautifully
            functional.
          </p>

          {/* CTAs */}
          <div
            className="anim-fade-up d-400"
            style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}
          >
            <a href="#contact" className="btn-primary">
              Start Your Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#portfolio" className="btn-outline">
              See Our Work
            </a>
          </div>

          {/* Stats row */}
          <div
            className="anim-fade-up d-600"
            style={{
              marginTop: 64,
              paddingTop: 32,
              borderTop: "1px solid var(--cream-dark)",
              display: "flex",
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "12+", label: "Years of craft" },
              { num: "98%", label: "Client satisfaction" },
              { num: "50+", label: "Design awards" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-display"
                  style={{ fontSize: "2rem", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1 }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--taupe-light)",
                    marginTop: 6,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="anim-fade-in d-1000"
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span className="section-label" style={{ fontSize: "0.58rem" }}>Scroll</span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, var(--gold), transparent)",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-img-right { width: 100% !important; opacity: 0.25; }
          .hero-float-card { display: none; }
          .hero-accent-img { display: none; }
        }
      `}</style>
    </section>
  );
}
