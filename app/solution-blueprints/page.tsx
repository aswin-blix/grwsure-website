import Link from "next/link";
import { ArrowIcon, BlueprintCard, CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { blueprints, site } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solution Blueprints",
  description: "Explore illustrative software architecture blueprints for education, diagnostics, and manufacturing workflows.",
  path: "/solution-blueprints",
});

export default function BlueprintsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Solution Blueprints",
    description: "Illustrative software architecture blueprints from GRWSURE INFOTECH.",
    url: `${site.url}/solution-blueprints`,
    mainEntity: { "@type": "ItemList", itemListElement: blueprints.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `${site.url}/solution-blueprints/${item.slug}` })) },
  };
  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Solution blueprints", path: "/solution-blueprints" }])]} />
      <PageHero eyebrow="Architecture in context" title="Solution blueprints, not anonymous success claims." intro="These illustrative architectures show how we reason about workflows, data, integration, permissions, and operational visibility. They are not presented as client case studies or measured outcomes." >
        <Link className="button button-primary" href="/contact">Discuss a similar system <ArrowIcon /></Link>
        <Link className="button button-outline" href="/industries">Explore industries</Link>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Reference systems" title="Make a complex workflow easier to see." description="Each blueprint breaks an operating challenge into a connected flow and a practical set of system components." />
          <div className="blueprint-grid">{blueprints.map((blueprint) => <BlueprintCard blueprint={blueprint} key={blueprint.slug} />)}</div>
        </div>
      </section>
      <CtaBand eyebrow="Your workflow will differ" title="Use the blueprint as a starting point, not a prescription." body="A real architecture follows your users, systems, data, risk, and rollout constraints. Discovery makes those differences explicit." />
    </>
  );
}
