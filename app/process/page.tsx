import Link from "next/link";
import { ArrowIcon, CtaBand, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Development Process",
  description: "See how GRWSURE moves from workflow discovery and architecture through design, development, deployment, and ongoing improvement.",
  path: "/process",
});

const stages = [
  { title: "Discover", summary: "Understand the business problem, users, present workflow, data, constraints, and success measures.", outputs: "Workflow map · stakeholder context · risks · first-release hypothesis" },
  { title: "Plan", summary: "Define the system boundary, architecture, integrations, delivery stages, responsibilities, and validation approach.", outputs: "Architecture direction · data model · scope · delivery plan" },
  { title: "Design", summary: "Turn the workflow into clear user journeys, interface states, prototypes, and reusable interaction patterns.", outputs: "User flows · responsive prototypes · design system · content plan" },
  { title: "Build", summary: "Develop in focused increments, review important behavior early, and keep decisions traceable as the system evolves.", outputs: "Working software · tests · review notes · deployment configuration" },
  { title: "Deploy", summary: "Validate production readiness, migration, permissions, monitoring, ownership, and recovery before release.", outputs: "Launch checklist · runbook · training · handover" },
  { title: "Grow", summary: "Observe real use, resolve friction, and prioritize improvements using operational evidence rather than assumptions.", outputs: "Support plan · usage insights · improvement backlog · release rhythm" },
];

export default function ProcessPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How GRWSURE INFOTECH delivers a custom software project",
    description: "A six-stage software delivery process from discovery to ongoing improvement.",
    step: stages.map((stage, index) => ({ "@type": "HowToStep", position: index + 1, name: stage.title, text: stage.summary, url: `${site.url}/process#${stage.title.toLowerCase()}` })),
  };
  return (
    <>
      <JsonLd data={[howToSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Process", path: "/process" }])]} />
      <PageHero eyebrow="Delivery process" title="Make the important decisions visible." intro="A disciplined project rhythm reduces uncertainty without pretending every detail can be known on day one. Each stage creates evidence for the next." >
        <Link className="button button-primary" href="/contact">Plan a discovery call <ArrowIcon /></Link>
        <Link className="button button-outline" href="/services">Explore services</Link>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Six stages" title="From operational reality to a dependable release." description="The timing and depth vary by project. The responsibility to understand, test, document, and hand over does not." />
          <div className="timeline">
            {stages.map((stage, index) => (
              <article
                className="timeline-step"
                id={stage.title.toLowerCase()}
                key={stage.title}
                data-motion-reveal
                data-motion-delay={index * 0.04}
              >
                <span className="timeline-number">0{index + 1}</span>
                <h2>{stage.title}</h2>
                <div><p>{stage.summary}</p><div className="stack-row"><span className="stack-tag">{stage.outputs}</span></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container detail-two-col">
          <article className="detail-card"><span className="eyebrow">Visibility</span><h2>What clients should see.</h2><ul className="mini-list"><li>Scope and decision changes</li><li>Working software at useful checkpoints</li><li>Risks, blockers, and ownership</li><li>Test and release readiness</li></ul></article>
          <article className="detail-card"><span className="eyebrow">Validation</span><h2>What the team should prove.</h2><ul className="mini-list"><li>Critical user journeys behave correctly</li><li>Failure and permission paths are handled</li><li>Integrations are observable and recoverable</li><li>Operations can support the released system</li></ul></article>
        </div>
      </section>
      <CtaBand title="Ready to turn the current workflow into a buildable plan?" />
    </>
  );
}
