import Link from "next/link";
import { ArrowIcon, CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { services, site } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Business Technology Solutions",
  description: "Choose the right combination of digital experience, AI, workflow automation, and operational software for your business problem.",
  path: "/solutions",
});

const clusters = [
  { number: "01", title: "Digital experiences", body: "Customer-facing websites, portals, web applications, and mobile experiences connected to the business behind them.", slugs: ["web-application-development", "mobile-app-development", "ui-ux-design"] },
  { number: "02", title: "Enterprise AI", body: "Focused assistants and document workflows grounded in approved knowledge, tools, permissions, and human review.", slugs: ["ai-agent-development"] },
  { number: "03", title: "Process automation", body: "Controlled integrations that move information, validate data, route decisions, and make exceptions visible.", slugs: ["business-process-automation"] },
  { number: "04", title: "Operational platforms", body: "Custom software, ERP, and CRM systems designed around roles, rules, records, branches, and reporting.", slugs: ["custom-software-development", "custom-erp-crm-development"] },
];

export default function SolutionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Business Technology Solutions",
    url: `${site.url}/solutions`,
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: { "@type": "ItemList", itemListElement: clusters.map((cluster, index) => ({ "@type": "ListItem", position: index + 1, name: cluster.title })) },
  };
  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }])]} />
      <PageHero eyebrow="Solution finder" title="Choose the outcome. Then assemble the right capabilities." intro="Solution categories help orient the conversation. The final architecture should follow the workflow, responsibilities, data, constraints, and pace of change." />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Four solution groups" title="A clearer route from problem to platform." />
          <div className="solution-grid">
            {clusters.map((cluster) => (
              <article className="solution-cluster" key={cluster.title}>
                <span>{cluster.number}</span>
                <h2>{cluster.title}</h2>
                <p>{cluster.body}</p>
                <div>
                  {cluster.slugs.map((slug) => {
                    const service = services.find((item) => item.slug === slug);
                    return service ? <Link className="text-link" key={slug} href={`/services/${slug}`}>{service.title}<ArrowIcon /></Link> : null;
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand eyebrow="Find the fit" title="Describe the bottleneck. We’ll help shape the solution." />
    </>
  );
}
