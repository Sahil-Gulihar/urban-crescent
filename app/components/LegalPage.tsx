import Link from "next/link";
import LogoMark from "./LogoMark";
import Footer from "./Footer";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header style={{ borderBottom: "1px solid var(--cream-dark)", background: "var(--cream)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "20px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
          className="legal-header"
        >
          <Link
            href="/"
            aria-label="Urban Crescent home"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}
          >
            <LogoMark size={36} />
            <span
              className="font-display"
              style={{
                fontSize: "1.4rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#4A4A4A",
                lineHeight: 1,
              }}
            >
              Urban Crescent
            </span>
          </Link>
          <Link
            href="/"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--charcoal)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            &larr; Back to home
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "80px 40px 120px" }} className="legal">
        <span className="section-label" style={{ color: "var(--gold)", display: "block", marginBottom: 16 }}>
          Legal
        </span>
        <h1
          className="font-display"
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.4rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: 12 }}
        >
          {title}
        </h1>
        <p style={{ fontSize: "0.8rem", color: "var(--taupe-light)", marginBottom: 48 }}>
          Last updated: {updated}
        </p>
        {children}
      </main>

      <Footer />

      <style>{`
        .legal h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 500;
          margin: 48px 0 16px;
          color: var(--charcoal);
        }
        .legal p, .legal li {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--taupe);
        }
        .legal p { margin: 0 0 16px; }
        .legal ul { margin: 0 0 16px; padding-left: 20px; list-style: disc; }
        .legal li { margin-bottom: 6px; }
        .legal a { color: var(--gold); }
        .legal strong { color: var(--charcoal); font-weight: 500; }
        @media (max-width: 640px) {
          .legal-header { padding: 16px !important; }
          .legal { padding: 48px 16px 80px !important; }
        }
      `}</style>
    </>
  );
}
