import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, Breadcrumbs, CtaBand, JsonLd, PageHero } from "@/components/ui";
import { insightBySlug, insights, site } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = insightBySlug(slug);
  if (!insight) return {};
  return pageMetadata({ title: insight.title, description: insight.description, path: `/insights/${insight.slug}`, type: "article" });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insightBySlug(slug);
  if (!insight) notFound();
  const path = `/insights/${insight.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: insight.title,
    description: insight.description,
    url: `${site.url}${path}`,
    datePublished: insight.published,
    dateModified: insight.published,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    isAccessibleForFree: true,
    inLanguage: "en-IN",
  };
  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: insight.title, path }])]} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: insight.title }]} />
      <PageHero eyebrow={`${insight.category} · ${insight.readTime}`} title={insight.title} intro={insight.description} />
      <article className="section section-white">
        <div className="container article-shell">
          <div className="article-body">
            <p>{insight.lead}</p>
            {insight.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
            <p><em>This guide provides general product and engineering information. It is not legal, compliance, security, or financial advice.</em></p>
          </div>
          <aside className="article-aside"><h2>Key takeaways</h2><ul>{insight.takeaways.map((item) => <li key={item}>{item}</li>)}</ul><Link className="text-link" style={{ marginTop: 24 }} href="/contact">Discuss your use case <ArrowIcon /></Link></aside>
        </div>
      </article>
      <CtaBand title="Need to apply this decision to a real system?" />
    </>
  );
}
