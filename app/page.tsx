import Link from "next/link";
import { StoryIllustration } from "@/components/story-illustration";
import {
  ArrowIcon,
  BlueprintCard,
  CtaBand,
  FaqList,
  IndustryCard,
  JsonLd,
  SectionHeading,
  ServiceCard,
} from "@/components/ui";
import { blueprints, commonFaqs, industries, services, site } from "@/lib/site-data";

const process = [
  { title: "Understand", body: "Map the workflow, users, data, constraints, and business outcome before choosing a solution." },
  { title: "Design", body: "Shape the user journey, system architecture, interfaces, and delivery plan around what we learned." },
  { title: "Build", body: "Develop in focused increments, validate the important behavior, and keep progress visible." },
  { title: "Deploy & grow", body: "Release deliberately, document ownership, observe real use, and improve from evidence." },
];

const principles = [
  { title: "Business first", body: "We start with the operational problem and the measure that should change—not a preferred technology." },
  { title: "Custom where it matters", body: "We use proven foundations and focus custom engineering on the workflows that make your organization distinct." },
  { title: "Automation with control", body: "Every automated step needs an owner, visible state, exception path, and appropriate human decision point." },
  { title: "Built for handover", body: "Architecture, access, documentation, and support responsibilities are treated as part of the product." },
];

const heroStorySteps = ["Understand", "Build", "Improve"];

function HomeHeroStory() {
  return (
    <figure
      aria-label="A team shaping business needs into useful software and continuous improvement"
      className="home-story"
      role="img"
    >
      <div aria-hidden="true" className="home-story-canvas">
        <div className="home-story-art">
          <StoryIllustration name="building-websites" preload variant="hero" />
        </div>
        <div className="home-story-steps">
          {heroStorySteps.map((step, index) => (
            <span
              className="home-story-step"
              data-motion-delay={index * 0.06}
              data-motion-reveal
              key={step}
            >
              <i>0{index + 1}</i>
              <strong>{step}</strong>
            </span>
          ))}
        </div>
      </div>
    </figure>
  );
}

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    telephone: site.phoneInternational,
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.phoneInternational,
      email: site.email,
      availableLanguage: ["English"],
    },
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-IN",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: commonFaqs.slice(0, 4).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema, faqSchema]} />
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div>
            <span className="eyebrow">Software engineering for operational growth</span>
            <h1>We build software. <span>Businesses move.</span></h1>
            <p className="hero-lede">
              Custom websites, enterprise applications, AI systems, and automation designed around the way your organization actually works.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Start a project <ArrowIcon /></Link>
              <Link className="button button-outline" href="/services">Explore services</Link>
            </div>
            <ul className="hero-proof" aria-label="Engineering principles">
              <li>Production-minded delivery</li>
              <li>Custom architecture</li>
              <li>AI with human control</li>
            </ul>
          </div>
          <HomeHeroStory />
        </div>
      </section>

      <div className="capability-strip" aria-label="Industries served">
        <span>Real estate</span>
        <span>Healthcare</span>
        <span>Education</span>
        <span>Manufacturing</span>
        <span>Growing businesses</span>
      </div>

      <section className="section">
        <div className="container answer-panel" data-motion-reveal>
          <div className="answer-intro">
            <span className="eyebrow">A direct answer</span>
            <h2>What does GRWSURE INFOTECH build?</h2>
            <figure
              aria-label="A team organizing shared ideas into a clear delivery plan"
              className="answer-story"
              role="img"
            >
              <div aria-hidden="true" className="answer-story-art">
                <StoryIllustration name="sharing-ideas" variant="section" />
              </div>
              <figcaption aria-hidden="true">One shared picture of the work</figcaption>
            </figure>
          </div>
          <div className="answer-copy">
            <p>
              GRWSURE INFOTECH designs and develops custom software, web and mobile applications, AI assistants, business automation, and ERP/CRM platforms for organizations with specific workflows and integration needs.
            </p>
            <p>
              The work begins with your process: who does what, where information lives, which decisions matter, and what a successful change should make easier.
            </p>
            <div className="answer-points">
              <div className="answer-point"><strong>Clarify</strong><span>Turn a business problem into a buildable scope.</span></div>
              <div className="answer-point"><strong>Connect</strong><span>Integrate the systems that already carry trusted data.</span></div>
              <div className="answer-point"><strong>Automate</strong><span>Remove repeat work without hiding exceptions.</span></div>
              <div className="answer-point"><strong>Improve</strong><span>Use real behavior and feedback to guide what comes next.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="Engineering across the full business journey."
            description="From the first customer interaction to the internal system that routes, records, and reports the work behind it."
          />
          <div className="service-grid">
            {services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link className="button button-outline" href="/services">View all services <ArrowIcon /></Link>
            <Link className="button button-outline" href="/solutions">Find the right solution</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="Industry workflows"
            title="Built around the work, not a generic template."
            description="Each sector page starts with the actual handoffs, systems, decisions, and responsibilities the solution needs to respect."
          />
          <div className="industry-grid">
            {industries.map((industry, index) => <IndustryCard key={industry.slug} industry={industry} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Solution blueprints"
            title="See how the pieces can work together."
            description="These reference architectures make our thinking concrete without presenting illustrative systems as verified client case studies."
          />
          <div className="blueprint-grid">
            {blueprints.map((blueprint) => <BlueprintCard key={blueprint.slug} blueprint={blueprint} />)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery model"
            title="From unclear problem to useful system."
            description="A visible, staged process keeps business decisions and engineering decisions connected."
          />
          <div className="process-grid">
            {process.map((item, index) => (
              <article
                className="process-card"
                key={item.title}
                data-motion-reveal
                data-motion-delay={index * 0.05}
              >
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link className="button button-outline" href="/process">See the full process <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Why GRWSURE" title="Four principles that shape every engagement." />
          <div className="principle-grid">
            {principles.map((principle, index) => (
              <article
                className="principle-card"
                key={principle.title}
                data-motion-reveal
                data-motion-delay={index * 0.05}
              >
                <span>0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="narrow">
          <SectionHeading
            eyebrow="Common questions"
            title="A useful first answer, before the first call."
            description="Clear answers help teams evaluate fit and prepare a more productive project conversation."
          />
          <FaqList items={commonFaqs.slice(0, 4)} />
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link className="button button-outline" href="/faq">Browse all questions <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
