import Link from "next/link";
import { ArrowIcon, CtaBand, JsonLd, PageHero } from "@/components/ui";
import { insights, site } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software, AI & Automation Insights",
  description: "Practical guidance from GRWSURE INFOTECH on custom software decisions, AI agents, and business process automation.",
  path: "/insights",
});

export default function InsightsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "GRWSURE INFOTECH Insights",
    url: `${site.url}/insights`,
    publisher: { "@id": `${site.url}/#organization` },
    blogPost: insights.map((item) => ({ "@type": "BlogPosting", headline: item.title, url: `${site.url}/insights/${item.slug}`, datePublished: item.published })),
  };
  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])]} />
      <PageHero eyebrow="Insights" title="Practical thinking for better software decisions." intro="Clear guides for leaders and teams evaluating custom software, AI-assisted workflows, automation, and the operating change around them." >
        <Link className="button button-primary" href="/contact">Discuss your decision <ArrowIcon /></Link>
      </PageHero>
      <section className="section">
        <div className="container insight-grid">
          {insights.map((item) => (
            <article className="insight-card" key={item.slug}>
              <div className="insight-meta"><span>{item.category}</span><span>{item.readTime}</span></div>
              <h2>{item.title}</h2><p>{item.description}</p>
              <Link className="text-link" href={`/insights/${item.slug}`}>Read the guide <ArrowIcon /></Link>
            </article>
          ))}
        </div>
      </section>
      <CtaBand eyebrow="Apply the thinking" title="Turn the guide into a decision for your workflow." />
    </>
  );
}
