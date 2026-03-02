"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Difference", href: "#difference" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        transition: "background 0.4s ease, box-shadow 0.4s ease, padding 0.3s ease",
        background: scrolled ? "rgba(248,244,238,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(184,117,32,0.2)" : "none",
        padding: scrolled ? "14px 0" : "24px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 0 }}
        >
          <span
            className="font-display"
            style={{
              fontSize: "1.5rem",
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "var(--charcoal)",
              lineHeight: 1.1,
            }}
          >
            Urban Crescent
          </span>
          <span
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            Modular Interiors
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{ display: "flex", gap: 36, alignItems: "center" }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--taupe)",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                transition: "color 0.2s ease",
                padding: "4px 0",
                borderBottom: "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "var(--charcoal)";
                (e.target as HTMLAnchorElement).style.borderBottomColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "var(--taupe)";
                (e.target as HTMLAnchorElement).style.borderBottomColor = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.68rem" }}>
            Get Consultation
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: 5,
            padding: 4,
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 1,
                background: "var(--charcoal)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4px, 4px)"
                      : i === 1
                      ? "scaleX(0)"
                      : "rotate(-45deg) translate(4px, -4px)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--cream)",
            borderTop: "1px solid var(--cream-dark)",
            padding: "24px 40px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--charcoal)",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ alignSelf: "flex-start", marginTop: 8 }}
          >
            Get Consultation
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
