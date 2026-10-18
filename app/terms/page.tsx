import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the Urban Crescent website and interior design services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="19 October 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Urban Crescent website and the interior
        design, manufacturing and installation services we provide. By using our website or engaging our services,
        you agree to these Terms. Project-specific terms in your quotation or agreement take precedence over these
        Terms where they differ.
      </p>

      <h2>1. Use of the website</h2>
      <p>
        Content on this website is for general information. Images, designs and descriptions are illustrative and
        may differ from the final product. You agree not to misuse the website, attempt to gain unauthorised access
        to it, or copy its content for commercial purposes without our permission.
      </p>

      <h2>2. Consultations and quotations</h2>
      <ul>
        <li>Initial consultations are free and carry no obligation.</li>
        <li>
          Quotations are based on the measurements, specifications and product brands agreed at the time and are
          valid for the period stated on them.
        </li>
        <li>
          Prices may change if the scope, materials, brands or site conditions change after the quotation is
          issued.
        </li>
      </ul>

      <h2>3. Orders and payments</h2>
      <ul>
        <li>A project is confirmed once you sign the quotation or agreement and pay the booking amount.</li>
        <li>Remaining payments are due at the milestones set out in your agreement.</li>
        <li>We may pause work if a milestone payment is overdue; timelines will be extended accordingly.</li>
        <li>All prices are subject to applicable taxes, including GST.</li>
      </ul>

      <h2>4. Design approvals and changes</h2>
      <p>
        Production begins only after you approve the final design and specifications in writing. Changes requested
        after approval may affect cost and timelines and will be confirmed with you before they are carried out.
      </p>

      <h2>5. Product brands and materials</h2>
      <p>
        We can customise product brands, such as plywood, laminates, hardware and fittings, according to your
        choice. Natural materials like wood and stone vary in grain and colour, and finishes may differ slightly
        from samples or on-screen images. Such variations are not defects.
      </p>

      <h2>6. Timelines and site readiness</h2>
      <p>
        Delivery and installation timelines are estimates. We are not responsible for delays caused by site
        unavailability, pending civil or electrical work, approvals from building societies, changes you request,
        delayed payments, or events beyond our reasonable control such as natural disasters, strikes or supply
        disruptions.
      </p>
      <p>
        You are responsible for providing timely site access, electricity, water and any permissions required from
        your building or society.
      </p>

      <h2>7. Cancellations and refunds</h2>
      <ul>
        <li>The booking amount covers design work already performed and is non-refundable once design work begins.</li>
        <li>
          Orders cannot be cancelled once production has started, as items are made to measure. Payments for
          materials procured or work completed up to cancellation are non-refundable.
        </li>
        <li>Any approved refund will be processed to the original payment method within a reasonable time.</li>
      </ul>

      <h2>8. Handover and warranty</h2>
      <p>
        On completion, we will walk you through the installation and record any snags, which we will resolve within
        a reasonable time. Warranties are provided as described in our{" "}
        <Link href="/warranty">Warranty Policy</Link> and in your project agreement.
      </p>

      <h2>9. Intellectual property</h2>
      <p>
        All designs, drawings, 3D renders and website content created by Urban Crescent remain our intellectual
        property. You may use them for your own project but may not share them with other vendors for execution
        without our written consent. We may photograph completed projects for our portfolio, as described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the extent permitted by law, our total liability for any claim relating to a project is limited to the
        amount you paid for that project. We are not liable for indirect or consequential losses, or for damage
        caused by misuse, alterations by third parties, water seepage, pest infestation or structural issues in the
        building.
      </p>

      <h2>11. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of India. We will first try to resolve any dispute amicably. If that
        is not possible, the courts at Mumbai, Maharashtra will have exclusive jurisdiction.
      </p>

      <h2>12. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Changes apply from the date they are published on this page
        and do not affect projects already under a signed agreement.
      </p>

      <h2>13. Contact</h2>
      <p>
        For questions about these Terms, write to{" "}
        <a href="mailto:hello@urbancrescent.in">hello@urbancrescent.in</a> or call +91 99999 12345.
      </p>
    </LegalPage>
  );
}
