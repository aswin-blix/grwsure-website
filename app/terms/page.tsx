import { JsonLd, PageHero } from "@/components/ui";
import { site } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Website Terms",
  description: "Terms for using the GRWSURE INFOTECH website and its general informational content.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={[{ "@context": "https://schema.org", "@type": "WebPage", name: "Website Terms", url: `${site.url}/terms` }, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }])]} />
      <PageHero eyebrow="Legal" title="Website Terms" intro="Last updated: 8 October 2026" />
      <section className="section section-white"><div className="narrow legal-copy">
        <div className="legal-notice"><p><strong>Review notice:</strong> This is a website-terms draft and not a substitute for legal advice. GRWSURE should confirm its legal entity details, governing law, service terms, intellectual-property position, and liability language before production publication.</p></div>
        <p>These terms apply to your use of the GRWSURE INFOTECH website. A software project, proposal, confidentiality arrangement, or support service is governed only by the separate written agreement executed for that engagement.</p>
        <h2>General information</h2><p>The website provides general information about capabilities, industries, process, solution blueprints, and technology topics. Content may be updated and does not constitute a binding offer, guarantee, professional advice, or commitment to a specific result.</p>
        <h2>Solution blueprints and illustrative content</h2><p>Pages labelled as solution blueprints are illustrative reference architectures. They are not claims about a named client deployment, measured outcome, certification, regulatory status, or production performance.</p>
        <h2>Acceptable use</h2><p>You may not misuse the website, attempt unauthorized access, interfere with availability, submit unlawful content, impersonate another person, or use website content in a way that violates applicable rights or law.</p>
        <h2>Intellectual property</h2><p>Unless otherwise stated, website content, design, and branding belong to GRWSURE INFOTECH or their respective licensors. Project-specific ownership and licensing must be defined in the applicable agreement.</p>
        <h2>Third-party services</h2><p>The website may link to WhatsApp, email, or other third-party services. Those services are governed by their own terms and policies, and their availability is outside this website’s control.</p>
        <h2>Contact</h2><p>Questions about these website terms can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div></section>
    </>
  );
}
