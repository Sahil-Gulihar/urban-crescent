"use client";

import type { FormEvent } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "919620181911";

function sendToWhatsApp(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const get = (key: string) => String(data.get(key) ?? "").trim();

  const details = [
    `Name: ${get("name")}`,
    `Phone: ${get("phone")}`,
    get("email") && `Email: ${get("email")}`,
    get("location") && `Property location: ${get("location")}`,
    get("service") && `Interested in: ${get("service")}`,
  ].filter(Boolean);

  const message = `Hi Urban Crescent, I'd like to book a free consultation.\n\n${details.join("\n")}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  // Note: passing "noopener" makes window.open always return null, so detach the opener manually.
  const opened = window.open(url, "_blank");
  if (opened) opened.opener = null;
  else window.location.href = url; // popup blocked: open WhatsApp in this tab instead
}

export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "120px 0",
        overflow: "hidden",
        background: "var(--cream-dark)",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1600&q=70"
          alt="Beautiful interior background"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(24,22,15,0.88) 0%, rgba(24,22,15,0.72) 50%, rgba(140,130,121,0.6) 100%)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="cta-grid"
      >
        {/* Left: Text */}
        <div>
          <span
            className="section-label anim-fade-right d-0"
            style={{ color: "var(--gold-light)", display: "block", marginBottom: 20 }}
          >
            Let&rsquo;s Begin
          </span>
          <h2
            className="font-display anim-fade-up d-100"
            style={{
              fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--cream)",
              marginBottom: 24,
            }}
          >
            Your Dream Space
            <br />
            is One Call Away
          </h2>
          <p
            className="anim-fade-up d-200"
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "rgba(248,244,238,0.6)",
              fontWeight: 300,
              marginBottom: 40,
              maxWidth: 400,
            }}
          >
            Book a free 30-minute consultation with our senior designer. No
            commitment, no pressure — just a conversation about your space and
            what&rsquo;s possible.
          </p>

          <div
            className="anim-fade-up d-300"
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            {[
              { icon: "🔧", text: "End-to-End Execution" },
              { icon: "🛡️", text: "Up to 7-Year Warranty" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 16px",
                  background: "rgba(248,244,238,0.08)",
                  border: "1px solid rgba(248,244,238,0.12)",
                  fontSize: "0.75rem",
                  color: "rgba(248,244,238,0.75)",
                  letterSpacing: "0.04em",
                }}
              >
                <span style={{ fontSize: "0.85rem" }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact form */}
        <div
          className="anim-scale-in d-300"
          style={{
            background: "rgba(248,244,238,0.95)",
            backdropFilter: "blur(20px)",
            padding: "48px 40px",
          }}
        >
          <h3
            className="font-display"
            style={{
              fontSize: "1.6rem",
              fontWeight: 400,
              color: "var(--charcoal)",
              marginBottom: 8,
            }}
          >
            Book a Consultation
          </h3>
          <p style={{ fontSize: "0.78rem", color: "var(--taupe)", marginBottom: 32 }}>
            Free &bull; No obligation &bull; Within 24 hours
          </p>

          <form
            onSubmit={sendToWhatsApp}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {[
              { id: "name", label: "Full Name", type: "text", placeholder: "Priya Sharma", required: true, autoComplete: "name" },
              { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210", required: true, autoComplete: "tel" },
              { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com", required: false, autoComplete: "email" },
              { id: "location", label: "Property Location", type: "text", placeholder: "Area, City", required: false, autoComplete: "address-level2" },
            ].map((field) => (
              <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label
                  htmlFor={field.id}
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--taupe)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  required={field.required}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  style={{
                    border: "none",
                    borderBottom: "1px solid var(--cream-dark)",
                    background: "transparent",
                    padding: "10px 0",
                    fontSize: "0.88rem",
                    color: "var(--charcoal)",
                    fontFamily: "'DM Sans', sans-serif",
                    outline: "none",
                    transition: "border-color 0.2s",
                    width: "100%",
                  }}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.borderBottomColor = "var(--charcoal)")}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.borderBottomColor = "var(--cream-dark)")}
                />
              </div>
            ))}

            {/* Service interest */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                htmlFor="service"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--taupe)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                I&rsquo;m interested in
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                style={{
                  border: "none",
                  borderBottom: "1px solid var(--cream-dark)",
                  background: "transparent",
                  padding: "10px 0",
                  fontSize: "0.88rem",
                  color: "var(--charcoal)",
                  fontFamily: "'DM Sans', sans-serif",
                  outline: "none",
                  appearance: "none",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                <option value="">Select a service...</option>
                <option>Modular Kitchen</option>
                <option>Modular Wardrobe</option>
                <option>Full Home Interior</option>
                <option>Living Room</option>
                <option>Bedroom</option>
                <option>Lighting</option>
                <option>Painting</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                marginTop: 8,
                padding: "16px 32px",
              }}
            >
              Request on WhatsApp
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <p
              style={{
                fontSize: "0.68rem",
                color: "var(--taupe-light)",
                textAlign: "center",
                lineHeight: 1.5,
              }}
            >
              Opens WhatsApp with your details filled in &mdash; just tap send.
              <br />
              We respect your privacy and will never share your information.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
