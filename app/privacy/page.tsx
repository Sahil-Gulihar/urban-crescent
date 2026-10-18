import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Urban Crescent collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="19 October 2026">
      <p>
        Urban Crescent (&ldquo;Urban Crescent&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;)
        respects your privacy. This Privacy Policy explains what personal information we collect when you visit
        our website or engage our interior design and execution services, how we use it, and the choices you have.
        It is published in accordance with the Information Technology Act, 2000, the rules made under it, and the
        Digital Personal Data Protection Act, 2023.
      </p>

      <h2>1. Information we collect</h2>
      <p>We collect only the information we need to respond to you and deliver your project:</p>
      <ul>
        <li>
          <strong>Contact details</strong> you provide through our consultation form, phone, email or messaging
          apps, such as your name, phone number, email address and property location.
        </li>
        <li>
          <strong>Project information</strong> such as floor plans, site measurements, photographs of your space,
          budget, preferences and product or brand choices.
        </li>
        <li>
          <strong>Billing information</strong> such as billing address and GST details. Payments are processed by
          banks or payment providers; we do not store your card or bank credentials.
        </li>
        <li>
          <strong>Technical information</strong> collected automatically when you browse our website, such as
          your device and browser type, pages visited and approximate location derived from your IP address.
        </li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To respond to consultation requests and schedule site visits.</li>
        <li>To prepare designs, quotations, agreements and invoices.</li>
        <li>To manufacture, deliver, install and service your interiors, including warranty claims.</li>
        <li>To communicate project updates by phone, email, SMS or WhatsApp.</li>
        <li>To improve our website, services and customer experience.</li>
        <li>To comply with legal, tax and accounting obligations.</li>
      </ul>
      <p>
        With your consent, we may also send you occasional updates about our work. You can opt out at any time
        by replying &ldquo;STOP&rdquo; or writing to us.
      </p>

      <h2>3. Sharing your information</h2>
      <p>We do not sell your personal information. We share it only when needed to deliver your project:</p>
      <ul>
        <li>With our designers, factory, installation teams and logistics partners.</li>
        <li>With product brands and suppliers for orders and warranty registration.</li>
        <li>With service providers who host our website or handle communications, under confidentiality obligations.</li>
        <li>With government or law enforcement authorities when required by law.</li>
      </ul>

      <h2>4. Project photographs</h2>
      <p>
        We may photograph completed projects for our portfolio. We will not publish images that identify you,
        your family or your exact address without your permission.
      </p>

      <h2>5. Cookies and analytics</h2>
      <p>
        Our website may use cookies and similar technologies to keep it working properly and to understand how
        visitors use it. You can block or delete cookies through your browser settings; some parts of the site may
        not work as intended if you do.
      </p>

      <h2>6. Data retention and security</h2>
      <p>
        We keep your information for as long as needed to complete your project, honour warranties and meet legal
        requirements, after which it is deleted or anonymised. We use reasonable technical and organisational
        safeguards to protect it, though no method of transmission or storage is completely secure.
      </p>

      <h2>7. Your rights</h2>
      <p>Subject to applicable law, you may:</p>
      <ul>
        <li>Request access to the personal information we hold about you.</li>
        <li>Ask us to correct or update inaccurate information.</li>
        <li>Ask us to erase your information or withdraw consent, where we are not required to retain it.</li>
        <li>Nominate another person to exercise your rights in the event of death or incapacity.</li>
        <li>Raise a grievance with us about how your data is handled.</li>
      </ul>

      <h2>8. Third-party links</h2>
      <p>
        Our website may link to third-party websites, such as brand or social media pages. We are not responsible
        for their privacy practices and encourage you to read their policies.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date above shows when it was
        last revised.
      </p>

      <h2>10. Contact and grievances</h2>
      <p>
        For questions, requests or complaints about this policy, contact our Grievance Officer at{" "}
        <a href="mailto:hello@urbancrescent.in">hello@urbancrescent.in</a> or call +91 99999 12345. We will
        acknowledge your request promptly and respond within the time required by law.
      </p>
    </LegalPage>
  );
}
