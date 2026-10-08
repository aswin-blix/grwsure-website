import Link from "next/link";
import { ArrowIcon, CtaBand, FaqList, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { commonFaqs, site, type FAQ } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Project FAQ",
  description: "Answers to common questions about custom software, AI, automation, project planning, ownership, security, and support at GRWSURE INFOTECH.",
  path: "/faq",
});

const planning: FAQ[] = [
  ...commonFaqs,
  { question: "How much does a custom software project cost?", answer: "Cost depends on the workflow, users, roles, integrations, data migration, platforms, risk, and release scope. A useful estimate follows enough discovery to define the first outcome and the uncertainty that remains." },
  { question: "How long does development take?", answer: "Timing depends on scope, decision speed, integration access, data quality, testing needs, and rollout constraints. GRWSURE proposes stages and milestones after discovery rather than publishing a generic timeline for unlike projects." },
];
const ownership: FAQ[] = [
  { question: "Will our company own the project accounts and repositories?", answer: "Ownership and access should be agreed before work starts. A durable engagement gives the client appropriate access to code repositories, domains, hosting, analytics, stores, and third-party services while protecting operational credentials." },
  { question: "How are security and privacy requirements handled?", answer: "The project identifies data classes, users, permissions, providers, retention, logging, threats, and applicable obligations. Technical controls are designed and tested against those approved requirements; legal and regulatory decisions remain with the responsible organization and its advisors." },
  { question: "Can GRWSURE sign an NDA?", answer: "Confidentiality requirements can be discussed during the commercial process. The final protection, permitted disclosures, term, and jurisdiction should be documented in an executed agreement before confidential material is shared." },
  { question: "What happens if a third-party integration fails?", answer: "Important integrations should have validation, visible failure states, retry or recovery rules, alerts, and an operational owner. The exact design follows the consequence of delay or incorrect action." },
  { question: "Can we begin with a prototype?", answer: "Yes. A prototype can validate navigation, workflow, desirability, technical feasibility, or stakeholder alignment. It should be clear whether the output is disposable exploration or the foundation of a production build." },
];
const allFaqs = [...planning, ...ownership];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[faqSchema(allFaqs), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]), { "@context": "https://schema.org", "@type": "WebPage", name: "Software Project FAQ", url: `${site.url}/faq`, isPartOf: { "@id": `${site.url}/#website` } }]} />
      <PageHero eyebrow="Questions, answered" title="Plan a software project with fewer hidden assumptions." intro="These answers explain our general approach. The exact scope, responsibilities, security controls, commercial terms, and support commitments belong in your project agreement." >
        <Link className="button button-primary" href="/contact">Ask about your project <ArrowIcon /></Link>
        <Link className="button button-outline" href="/process">See our process</Link>
      </PageHero>
      <section className="section">
        <div className="narrow"><SectionHeading eyebrow="Planning & delivery" title="From first conversation to launch." /><FaqList items={planning} /></div>
      </section>
      <section className="section section-soft">
        <div className="narrow"><SectionHeading eyebrow="Ownership & risk" title="Access, security, and long-term responsibility." /><FaqList items={ownership} /></div>
      </section>
      <CtaBand title="Have a question specific to your workflow?" />
    </>
  );
}
