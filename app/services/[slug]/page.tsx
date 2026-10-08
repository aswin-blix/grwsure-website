import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, Breadcrumbs, CheckIcon, CtaBand, FaqList, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { industries, serviceBySlug, services, site } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return pageMetadata({ title: service.title, description: service.summary, path: `/services/${service.slug}` });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const related = service.relatedIndustries.map((item) => industries.find((industry) => industry.slug === item)).filter(Boolean);
  const path = `/services/${service.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${path}/#service`,
    name: service.title,
    description: service.answer,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: service.title,
  };

  return (
    <>
      <JsonLd data={[
        schema,
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.title, path }]),
        faqSchema(service.faqs),
      ]} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} />
      <PageHero
        eyebrow={service.kicker}
        title={service.title}
        intro={service.summary}
        aside={
          <div className="hero-aside-card">
            <span>Typical foundation</span>
            <ul>{service.architecture.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        }
      >
        <Link className="button button-primary" href="/contact">Discuss this service <ArrowIcon /></Link>
        <Link className="button button-outline" href="/process">How delivery works</Link>
      </PageHero>

      <section className="section">
        <div className="container detail-answer">
          <div><span className="eyebrow">Direct answer</span><h2>What this service is for.</h2></div>
          <div className="detail-answer-copy">
            <p>{service.answer}</p>
            <div className="stack-row">{service.architecture.map((item) => <span className="stack-tag" key={item}>{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container detail-two-col">
          <article className="detail-card">
            <span className="eyebrow">Business outcomes</span>
            <h2>What should become easier.</h2>
            <ul className="check-list">{service.outcomes.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
          </article>
          <article className="detail-card">
            <span className="eyebrow">Typical deliverables</span>
            <h2>What the work can include.</h2>
            <ul className="check-list">{service.deliverables.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Where it fits" title="Related industry workflows." description="The same capability is shaped differently by sector, roles, data, and operating constraints." />
          <div className="related-grid">
            {related.map((industry) => industry && (
              <article className="related-card" key={industry.slug}>
                <span>Industry</span>
                <h3>{industry.shortTitle}</h3>
                <Link className="text-link" href={`/industries/${industry.slug}`}>Explore the workflow <ArrowIcon /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="narrow">
          <SectionHeading eyebrow="Questions" title={`Common questions about ${service.shortTitle.toLowerCase()}.`} />
          <FaqList items={service.faqs} />
        </div>
      </section>
      <CtaBand title={`Planning a ${service.shortTitle.toLowerCase()} project?`} />
    </>
  );
}
