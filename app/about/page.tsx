import Link from "next/link";
import { ArrowIcon, CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About GRWSURE INFOTECH",
  description: "Learn how GRWSURE INFOTECH approaches custom software, AI workflows, automation, and long-term technical partnership.",
  path: "/about",
});

const principles = [
  { title: "Understand before building", body: "Requirements are tested against the real workflow, users, records, exceptions, and measures of success." },
  { title: "Use the simplest responsible architecture", body: "Complexity is added only when the use case, risk, scale, or integration genuinely requires it." },
  { title: "Design for the people operating it", body: "Useful interfaces make ownership, state, next action, and recovery clear to the person doing the work." },
  { title: "Leave the system understandable", body: "Code, environments, data responsibilities, access, decisions, and support expectations must survive handover." },
];

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About GRWSURE INFOTECH",
    url: `${site.url}/about`,
    mainEntity: { "@id": `${site.url}/#organization` },
  };
  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]} />
      <PageHero eyebrow="About GRWSURE" title="Technology should make the business easier to run." intro="GRWSURE INFOTECH brings product thinking, software engineering, AI, automation, and operational context together around one goal: a system people can use and the organization can own." >
        <Link className="button button-primary" href="/team">Meet the team <ArrowIcon /></Link>
        <Link className="button button-outline" href="/process">See how we work</Link>
      </PageHero>
      <section className="section">
        <div className="container answer-panel">
          <div><span className="eyebrow">Our role</span><h2>An engineering partner, not a feature factory.</h2></div>
          <div className="answer-copy"><p>We help organizations clarify what needs to change, design the system around that responsibility, and deliver it with enough visibility that business and technical teams can make decisions together.</p><p>That may be a customer-facing website, an internal platform, an AI-assisted workflow, an integration layer, or a phased combination. The form follows the problem.</p></div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container"><SectionHeading eyebrow="Operating principles" title="How we make decisions when tradeoffs appear." /><div className="principle-grid">{principles.map((item, index) => <article className="principle-card" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div>
      </section>
      <section className="section section-white">
        <div className="container detail-two-col">
          <article className="detail-card"><span className="eyebrow">What we bring</span><h2>Cross-functional delivery.</h2><ul className="mini-list"><li>Business and workflow analysis</li><li>Product and interface design</li><li>Full-stack software engineering</li><li>AI and automation integration</li><li>Deployment and operational handover</li></ul></article>
          <article className="detail-card"><span className="eyebrow">What we need</span><h2>Active client context.</h2><ul className="mini-list"><li>Access to the people doing the work</li><li>Honest constraints and priorities</li><li>Owners for policy and compliance decisions</li><li>Timely review of working increments</li><li>Clear control of accounts and data</li></ul></article>
        </div>
      </section>
      <CtaBand title="Looking for a technical partner who starts with the workflow?" />
    </>
  );
}
