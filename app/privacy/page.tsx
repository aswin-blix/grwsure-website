import { JsonLd, PageHero } from "@/components/ui";
import { site } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy information for the GRWSURE INFOTECH website and project enquiries.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={[{ "@context": "https://schema.org", "@type": "WebPage", name: "Privacy Policy", url: `${site.url}/privacy` }, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }])]} />
      <PageHero eyebrow="Legal" title="Privacy Policy" intro="Last updated: 8 October 2026" />
      <section className="section section-white"><div className="narrow legal-copy">
        <div className="legal-notice"><p><strong>Review notice:</strong> This is a practical website-policy draft based on the current contact flow. GRWSURE should have it reviewed against its actual analytics, hosting, messaging, retention, and legal obligations before production publication.</p></div>
        <p>This policy explains how GRWSURE INFOTECH may handle information submitted through this website or shared during a project enquiry.</p>
        <h2>Information you choose to provide</h2><p>When you contact GRWSURE, you may provide your name, company, phone number, email address, project details, and other information included in your message. Do not submit sensitive personal, health, financial, authentication, or confidential business data through the public enquiry form.</p>
        <h2>How the enquiry form works</h2><p>The website prepares a WhatsApp message from the details you enter. The information is not sent by the website when you press the form button; WhatsApp opens so you can review and send the message. WhatsApp’s own terms and privacy practices apply to that communication.</p>
        <h2>How information may be used</h2><ul><li>To review and respond to your enquiry.</li><li>To understand the project, arrange a conversation, and prepare a proposal.</li><li>To maintain records of business communication.</li><li>To protect the website and prevent misuse.</li></ul>
        <h2>Sharing and service providers</h2><p>Information may be processed by communication, hosting, analytics, or business service providers used to operate the website and respond to enquiries. GRWSURE should document the actual providers and data locations before this policy is finalized.</p>
        <h2>Retention and choices</h2><p>Enquiry information should be retained only as long as needed for the business purpose, contractual record, or applicable legal obligation. To ask about information you have shared, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        <h2>Changes</h2><p>This policy may be updated when the website, service providers, or operating practices change. The date at the top should reflect the latest revision.</p>
      </div></section>
    </>
  );
}
