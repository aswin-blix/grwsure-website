import Link from "next/link";
import { ArrowIcon, CtaBand, FaqList, JsonLd, PageHero, SectionHeading, ServiceCard } from "@/components/ui";
import { services, site, type FAQ } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Development Services",
  description: "Explore custom software, web and mobile application, AI agent, business automation, ERP/CRM, and UI/UX design services from GRWSURE INFOTECH.",
  path: "/services",
});

const faqs: FAQ[] = [
  { question: "How do we know which service we need?", answer: "Start with the business outcome and current workflow, not a service label. Discovery can determine whether the need is primarily a customer experience, operational platform, integration, automation, AI workflow, or a phased combination." },
  { question: "Can GRWSURE work with our existing development team?", answer: "Yes. Responsibilities, repositories, environments, architecture decisions, review standards, and handover expectations should be made explicit so both teams can work without duplicated ownership." },
  { question: "Can a project begin with discovery or design only?", answer: "Yes. A bounded discovery or product-design engagement can clarify requirements, risks, architecture, and release priorities before committing to a full build." },
];

export default function ServicesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/services/#page`,
    name: "Software Development Services",
    description: "Custom software, web and mobile apps, AI, automation, ERP/CRM, and product design services.",
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${site.url}/services/${service.slug}`,
        name: service.title,
      })),
    },
  };

  return (
    <>
      <JsonLd data={[collectionSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]), faqSchema(faqs)]} />
      <PageHero
        eyebrow="Software development services"
        title={<>One team, from problem framing to <span style={{ color: "var(--violet)" }}>production.</span></>}
        intro="Choose a focused capability or combine product design, engineering, AI, automation, and integration into one accountable delivery plan."
      >
        <Link className="button button-primary" href="/contact">Discuss your project <ArrowIcon /></Link>
        <Link className="button button-outline" href="/process">See our process</Link>
      </PageHero>

      <section className="section">
        <div className="container index-intro">
          <div><span className="eyebrow">How to choose</span><h2>Start with the job that needs to work better.</h2></div>
          <div>
            <p>A service page is a useful way to understand deliverables, but the right scope follows the workflow: users, decisions, data, integrations, constraints, and the outcome you need to measure.</p>
            <p>That keeps technology choices connected to the business problem and avoids forcing a project into the wrong category.</p>
          </div>
        </div>
        <div className="container service-grid">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </section>

      <section className="section section-soft">
        <div className="narrow">
          <SectionHeading eyebrow="Service questions" title="Plan the engagement with fewer unknowns." />
          <FaqList items={faqs} />
        </div>
      </section>
      <CtaBand eyebrow="Not sure where to begin?" title="Bring us the workflow, not a finished specification." body="We can help translate the current process, constraints, and desired outcome into a practical first scope." />
    </>
  );
}
