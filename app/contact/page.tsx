import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { JsonLd, PageHero } from "@/components/ui";
import { site } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Our Software Engineering Team",
  description: "Share your software, AI, automation, web, mobile, ERP, or CRM project with GRWSURE INFOTECH by WhatsApp or email.",
  path: "/contact",
});

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact GRWSURE INFOTECH",
    url: `${site.url}/contact`,
    mainEntity: { "@id": `${site.url}/#organization` },
  };
  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]} />
      <PageHero eyebrow="Start a project" title="Tell us what needs to work better." intro="A useful first message does not need a finished specification. Describe the current workflow, who uses it, where it breaks, and what a better outcome would change." />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-details">
            <span className="eyebrow">Contact</span>
            <h2>Speak with the GRWSURE team.</h2>
            <p>Use the form to prepare a WhatsApp message, or contact us directly.</p>
            <a className="contact-link" href={`mailto:${site.email}`}>{site.email}</a>
            <a className="contact-link" href={`https://wa.me/${site.phoneInternational.replace("+", "")}`}>WhatsApp {site.phoneDisplay}</a>
            <div className="contact-meta"><p><strong>Hours:</strong> {site.hours}</p><p><strong>Location:</strong> {site.country}</p></div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
