import Link from "next/link";
import { ArrowIcon, CtaBand, FaqList, IndustryCard, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { industries, site, type FAQ } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industry Software Solutions",
  description: "Explore tailored software workflows for real estate, healthcare and diagnostics, education, manufacturing, startups and SMEs, and enterprises.",
  path: "/industries",
});

const faqs: FAQ[] = [
  { question: "Does GRWSURE work with industries not listed here?", answer: "Potentially, yes. The industry pages describe current focus areas, not a hard boundary. Fit depends on the workflow, subject-matter access, integration constraints, risk, and the team's ability to validate requirements with domain experts." },
  { question: "How is industry compliance handled?", answer: "Applicable legal, regulatory, clinical, or operational requirements must be identified by the client and qualified advisors. GRWSURE can translate approved requirements into technical controls, workflows, records, and validation evidence." },
  { question: "Can we keep our existing systems and processes?", answer: "Often. Discovery distinguishes trusted systems and necessary controls from accidental workarounds. A new solution can integrate or modernize in phases when a full replacement would add unnecessary risk." },
];

export default function IndustriesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industry Software Solutions",
    url: `${site.url}/industries`,
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: { "@type": "ItemList", itemListElement: industries.map((industry, index) => ({ "@type": "ListItem", position: index + 1, name: industry.title, url: `${site.url}/industries/${industry.slug}` })) },
  };
  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }]), faqSchema(faqs)]} />
      <PageHero eyebrow="Industry software" title="Technology shaped by the work around it." intro="A useful system understands the sector’s roles, records, constraints, handoffs, and definitions—not just the interface a user sees." >
        <Link className="button button-primary" href="/contact">Discuss your workflow <ArrowIcon /></Link>
        <Link className="button button-outline" href="/solution-blueprints">Explore blueprints</Link>
      </PageHero>
      <section className="section section-dark">
        <div className="container">
          <SectionHeading eyebrow="Focus sectors" title="Start with the operating context." description="Each page explains the workflows a tailored platform can connect, the outcomes worth measuring, and the questions to resolve before implementation." />
          <div className="industry-grid">{industries.map((industry, index) => <IndustryCard key={industry.slug} industry={industry} index={index} />)}</div>
        </div>
      </section>
      <section className="section">
        <div className="narrow">
          <SectionHeading eyebrow="Industry questions" title="Domain knowledge and technical delivery must meet." />
          <FaqList items={faqs} />
        </div>
      </section>
      <CtaBand title="Have a sector-specific workflow to untangle?" />
    </>
  );
}
