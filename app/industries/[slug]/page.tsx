import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, Breadcrumbs, CheckIcon, CtaBand, FaqList, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { industries, industryBySlug, services, site } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry) return {};
  return pageMetadata({ title: industry.title, description: industry.summary, path: `/industries/${industry.slug}` });
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry) notFound();
  const related = industry.relatedServices.map((item) => services.find((service) => service.slug === item)).filter(Boolean);
  const path = `/industries/${industry.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}${path}/#page`,
    name: industry.title,
    description: industry.answer,
    url: `${site.url}${path}`,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@type": "Thing", name: industry.shortTitle },
    mainEntity: {
      "@type": "Service",
      name: industry.title,
      provider: { "@id": `${site.url}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
    },
  };

  return (
    <>
      <JsonLd data={[
        schema,
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }, { name: industry.shortTitle, path }]),
        faqSchema(industry.faqs),
      ]} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: industry.shortTitle }]} />
      <PageHero
        eyebrow={`${industry.shortTitle} technology`}
        title={industry.title}
        intro={industry.summary}
        aside={<div className="hero-aside-card"><span>Workflow areas</span><ul>{industry.workflows.map((item) => <li key={item}>{item}</li>)}</ul></div>}
      >
        <Link className="button button-primary" href="/contact">Discuss this workflow <ArrowIcon /></Link>
        <Link className="button button-outline" href="/solution-blueprints">See solution blueprints</Link>
      </PageHero>

      <section className="section">
        <div className="container detail-answer">
          <div><span className="eyebrow">Direct answer</span><h2>How tailored software can help.</h2></div>
          <div className="detail-answer-copy"><p>{industry.answer}</p></div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container detail-two-col">
          <article className="detail-card">
            <span className="eyebrow">Connected workflow</span><h2>What the system may coordinate.</h2>
            <ul className="check-list">{industry.workflows.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
          </article>
          <article className="detail-card">
            <span className="eyebrow">Outcome direction</span><h2>What should become clearer.</h2>
            <ul className="check-list">{industry.outcomes.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Relevant capabilities" title="Services that often support this workflow." />
          <div className="related-grid">
            {related.map((service) => service && (
              <article className="related-card" key={service.slug}>
                <span>Service</span><h3>{service.shortTitle}</h3>
                <Link className="text-link" href={`/services/${service.slug}`}>Explore the capability <ArrowIcon /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="narrow">
          <SectionHeading eyebrow="Questions" title={`Common questions about ${industry.shortTitle.toLowerCase()} software.`} />
          <FaqList items={industry.faqs} />
        </div>
      </section>
      <CtaBand title={`Planning a ${industry.shortTitle.toLowerCase()} platform?`} />
    </>
  );
}
