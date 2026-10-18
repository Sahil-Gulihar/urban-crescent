import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Warranty Policy",
  description: "Warranty coverage for plywood and hardware in Urban Crescent interiors.",
  alternates: { canonical: "/warranty" },
};

export default function WarrantyPage() {
  return (
    <LegalPage title="Warranty Policy" updated="19 October 2026">
      <p>
        We build our interiors to endure life&rsquo;s many moments. This policy explains the warranty that comes
        with your Urban Crescent project. The exact coverage for your project is stated in your quotation or
        agreement.
      </p>

      <h2>1. Warranty coverage</h2>
      <ul>
        <li>
          <strong>Plywood: up to 7 years</strong> against manufacturing defects such as delamination, warping or
          borer attack, depending on the grade and brand selected.
        </li>
        <li>
          <strong>Hardware: 1 year</strong> on functional components such as hinges, channels, drawer systems and
          lift-ups, as per the brand&rsquo;s policy.
        </li>
      </ul>
      <p>
        Warranty terms are subject to the selected products, approved specifications and individual project
        conditions. Where you choose a specific brand, that brand&rsquo;s warranty terms apply to its products.
      </p>

      <h2>2. When the warranty starts</h2>
      <p>The warranty period starts on the date of handover of your project.</p>

      <h2>3. What is not covered</h2>
      <ul>
        <li>Normal wear and tear, including fading or scratches on laminates and finishes.</li>
        <li>Damage from water seepage, dampness, leakage or structural issues in the building.</li>
        <li>Damage from misuse, overloading, accidents, fire, pests or natural disasters.</li>
        <li>Products altered, repaired or relocated by anyone other than Urban Crescent.</li>
        <li>Appliances, lighting, glass, stone, upholstery and other third-party products, which carry their own manufacturer warranties.</li>
        <li>Natural variations in grain, texture or colour of wood, veneer and stone.</li>
      </ul>

      <h2>4. How to make a claim</h2>
      <p>
        Email <a href="mailto:hello@urbancrescent.in">hello@urbancrescent.in</a> or call +91 99999 12345 with
        your project name, a description of the issue and photographs. Our team will inspect the issue and, if it is
        covered, repair or replace the affected component at no cost. We may need to coordinate with the brand
        manufacturer, which can affect turnaround time.
      </p>

      <h2>5. Care and maintenance</h2>
      <ul>
        <li>Clean surfaces with a soft, dry or slightly damp cloth; avoid harsh chemicals.</li>
        <li>Wipe away water spills promptly, especially near sinks and edges.</li>
        <li>Avoid placing very hot items directly on laminated or veneered surfaces.</li>
        <li>Do not overload shelves, drawers or shutters beyond their intended capacity.</li>
      </ul>
    </LegalPage>
  );
}
