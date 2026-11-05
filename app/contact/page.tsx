import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Call, WhatsApp or visit Urban Crescent in Kasturi Nagar, Bangalore.",
  alternates: { canonical: "/contact" },
};

const address = "OMBR Layout, Kasturi Nagar, Bangalore 560043";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function ContactPage() {
  return (
    <LegalPage title="Contact Us" label="Get in touch">
      <p>
        We&rsquo;d love to hear about your space. Reach us any of the ways below, or{" "}
        <Link href="/#contact">book a free consultation</Link> and we&rsquo;ll get back to you.
      </p>

      <h2>Phone &amp; WhatsApp</h2>
      <p>
        <a href="tel:+919620181911">+91 96201 81911</a> &middot;{" "}
        <a href="https://wa.me/919620181911" target="_blank" rel="noopener noreferrer">
          Chat on WhatsApp
        </a>
      </p>

      <h2>Address</h2>
      <p>
        Urban Crescent
        <br />
        OMBR Layout, Kasturi Nagar
        <br />
        Bangalore 560043, Karnataka, India
        <br />
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
          Open in Google Maps
        </a>
      </p>

      <h2>Complaints &amp; grievances</h2>
      <p>
        If something isn&rsquo;t right with your project, or you have a concern about how we handle your personal
        data, call or WhatsApp us on the number above.
        See our <Link href="/privacy">Privacy Policy</Link>, <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/warranty">Warranty Policy</Link> for details.
      </p>
    </LegalPage>
  );
}
