import Link from "next/link";
import { ArrowIcon, CtaBand, JsonLd, PageHero } from "@/components/ui";
import { site, team } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Leadership Team",
  description: "Meet the GRWSURE INFOTECH leaders across business operations, technology, marketing and content, and business development.",
  path: "/team",
});

export default function TeamPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "GRWSURE INFOTECH Leadership Team",
    url: `${site.url}/team`,
    about: { "@id": `${site.url}/#organization` },
    mainEntity: team.map((person) => ({ "@type": "Person", name: person.name, jobTitle: person.role, worksFor: { "@id": `${site.url}/#organization` } })),
  };
  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Team", path: "/team" }])]} />
      <PageHero eyebrow="Leadership" title="Strategy, technology, communication, and growth—at one table." intro="GRWSURE’s leadership team connects the business problem, system architecture, market context, and client relationship throughout the engagement." >
        <Link className="button button-primary" href="/contact">Talk to the team <ArrowIcon /></Link>
        <Link className="button button-outline" href="/about">About GRWSURE</Link>
      </PageHero>
      <section className="section">
        <div className="container team-grid">
          {team.map((person) => (
            <article className="team-card" key={person.name}>
              <div className="team-avatar" aria-hidden="true">{person.initials}</div>
              <div><h2>{person.name}</h2><div className="team-role">{person.role}</div><p>{person.bio}</p><ul className="focus-list">{person.focus.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Bring the problem. Meet the people responsible for the solution." />
    </>
  );
}
