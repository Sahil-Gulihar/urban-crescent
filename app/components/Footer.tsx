"use client";

import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--charcoal)",
        padding: "80px 0 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(to right, transparent, var(--gold), transparent)",
          opacity: 0.4,
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {/* Main footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 60,
            marginBottom: 60,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
              <LogoMark size={48} />
              <div
                className="font-display"
                style={{
                  fontSize: "1.7rem",
                  fontWeight: 400,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--cream)",
                  lineHeight: 1,
                }}
              >
                Urban Crescent
              </div>
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                lineHeight: 1.8,
                color: "rgba(248,244,238,0.45)",
                fontWeight: 300,
                maxWidth: 300,
                marginBottom: 32,
              }}
            >
              We transform living spaces through precision-engineered modular
              design and a complete end-to-end service — from the first sketch
              to the final flourish.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                {
                  label: "Instagram",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                  ),
                },
                {
                  label: "Pinterest",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.76 1.22-5.16 1.22-5.16s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .89-.57 2.23-.86 3.47-.25 1.04.51 1.88 1.53 1.88 1.84 0 3.07-2.37 3.07-5.17 0-2.13-1.44-3.62-3.5-3.62-2.38 0-3.78 1.78-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.23l-.23.95c-.04.14-.12.18-.27.11-1-.47-1.62-1.94-1.62-3.12 0-2.54 1.85-4.87 5.34-4.87 2.8 0 4.98 2 4.98 4.66 0 2.78-1.75 5.01-4.19 5.01-.82 0-1.59-.43-1.85-.93l-.5 1.88c-.18.69-.67 1.56-1 2.08.75.23 1.55.36 2.37.36 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: 38,
                    height: 38,
                    border: "1px solid rgba(248,244,238,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(248,244,238,0.45)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(248,244,238,0.12)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(248,244,238,0.45)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 24,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Modular Kitchens",
                "Modular Wardrobes",
                "Living Spaces",
                "Bedroom Design",
                "Lighting",
                "Painting",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/#services"
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(248,244,238,0.45)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--cream)")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(248,244,238,0.45)")}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 24,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {["About Us", "Our Process", "Portfolio", "Careers", "Press", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(248,244,238,0.45)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--cream)")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(248,244,238,0.45)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 24,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Get In Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  ),
                  text: "+91 99999 12345",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  text: "hello@urbancrescent.in",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  text: "Mumbai · Bangalore · Hyderabad · Pune",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                >
                  <span style={{ color: "var(--gold)", marginTop: 2, flexShrink: 0 }}>{c.icon}</span>
                  <span style={{ fontSize: "0.78rem", color: "rgba(248,244,238,0.5)", lineHeight: 1.5 }}>
                    {c.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div
          style={{
            height: 1,
            background: "linear-gradient(to right, transparent, rgba(184,117,32,0.25), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: "0.72rem", color: "rgba(248,244,238,0.3)" }}>
            &copy; {currentYear} Urban Crescent. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Warranty Policy", href: "/warranty" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.68rem",
                  color: "rgba(248,244,238,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(248,244,238,0.6)")}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(248,244,238,0.3)")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
