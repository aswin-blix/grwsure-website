import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, Breadcrumbs, CtaBand, FaqList, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { blueprintBySlug, blueprints, industries, services, site, type FAQ } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blueprints.map((blueprint) => ({ slug: blueprint.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blueprint = blueprintBySlug(slug);
  if (!blueprint) return {};
  return pageMetadata({ title: blueprint.title, description: blueprint.summary, path: `/solution-blueprints/${blueprint.slug}`, type: "article" });
}

export default async function BlueprintDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blueprint = blueprintBySlug(slug);
  if (!blueprint) notFound();
  const industry = industries.find((item) => item.slug === blueprint.relatedIndustry);
  const relatedServices = blueprint.relatedServices.map((slug) => services.find((item) => item.slug === slug)).filter(Boolean);
  const path = `/solution-blueprints/${blueprint.slug}`;
  const faqs: FAQ[] = [
    { question: `Is the ${blueprint.title} a live client case study?`, answer: "No. It is an illustrative solution blueprint based on common workflow patterns. It does not claim a named deployment, client result, compliance status, or measured performance." },
    { question: "Would a real implementation use every component shown?", answer: "Not necessarily. The system boundary and components should follow the actual workflow, existing systems, data responsibilities, risk, and phased rollout plan." },
    { question: "How would GRWSURE turn this blueprint into a project scope?", answer: "Discovery would validate users, events, data sources, exceptions, permissions, integrations, operational owners, and success measures before proposing a first release." },
  ];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${site.url}${path}/#article`,
    headline: blueprint.title,
    description: blueprint.summary,
    url: `${site.url}${path}`,
    datePublished: "2026-10-08",
    dateModified: "2026-10-08",
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    about: blueprint.sector,
    isAccessibleForFree: true,
  };

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Solution blueprints", path: "/solution-blueprints" }, { name: blueprint.title, path }]), faqSchema(faqs)]} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solution blueprints", href: "/solution-blueprints" }, { label: blueprint.title }]} />
      <PageHero eyebrow={`${blueprint.sector} solution blueprint`} title={blueprint.title} intro={blueprint.summary}>
        <Link className="button button-primary" href="/contact">Discuss this architecture <ArrowIcon /></Link>
        {industry && <Link className="button button-outline" href={`/industries/${industry.slug}`}>Explore {industry.shortTitle}</Link>}
      </PageHero>
      <section className="section-compact">
        <div className="container"><div className="blueprint-disclaimer">{blueprint.disclaimer}</div></div>
      </section>
      <section className="section section-white">
        <div className="container detail-answer">
          <div><span className="eyebrow">Operating challenge</span><h2>Why this system might exist.</h2></div>
          <div className="detail-answer-copy"><p>{blueprint.challenge}</p></div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <SectionHeading eyebrow="Reference flow" title="A connected path through the work." description="Each step represents a responsibility or system boundary to validate during discovery." />
          <div className="architecture-flow">
            {blueprint.flow.map((step, index) => <div className="architecture-node" key={step} data-motion-reveal data-motion-delay={index * 0.04}><span>0{index + 1}</span><strong>{step}</strong></div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container detail-two-col">
          <article className="detail-card"><span className="eyebrow">Potential components</span><h2>What the platform may include.</h2><ul className="mini-list">{blueprint.components.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className="detail-card"><span className="eyebrow">Relevant capabilities</span><h2>What may support the build.</h2>{relatedServices.map((service) => service && <Link className="text-link" style={{ display: "flex", marginBottom: 16 }} key={service.slug} href={`/services/${service.slug}`}>{service.title}<ArrowIcon /></Link>)}</article>
        </div>
      </section>
      <section className="section section-soft"><div className="narrow"><SectionHeading eyebrow="Blueprint questions" title="Keep the status and assumptions explicit." /><FaqList items={faqs} /></div></section>
      <CtaBand title="Need an architecture for your actual workflow?" />
    </>
  );
}
