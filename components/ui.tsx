import Link from "next/link";
import type { ReactNode } from "react";
import type { FAQ, Industry, Service } from "@/lib/site-data";

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
      <path d="m4 10 4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function Breadcrumbs({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className={`page-hero ${aside ? "page-hero-split" : ""}`}>
      <div className="container page-hero-grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="page-hero-intro">{intro}</p>
          {children && <div className="hero-actions">{children}</div>}
        </div>
        {aside && <div className="page-hero-aside">{aside}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function FaqList({ items }: { items: readonly FAQ[] | FAQ[] }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details key={item.question} open={index === 0}>
          <summary>
            <span>{item.question}</span>
            <span className="faq-plus" aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="card-topline">
        <span>{service.index}</span>
        <span>{service.kicker}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <ul className="mini-list">
        {service.deliverables.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
      </ul>
      <Link className="text-link" href={`/services/${service.slug}`}>
        Explore {service.shortTitle.toLowerCase()} <ArrowIcon />
      </Link>
    </article>
  );
}

export function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  return (
    <article className="industry-card">
      <span className="industry-number">0{index + 1}</span>
      <div>
        <h3>{industry.shortTitle}</h3>
        <p>{industry.summary}</p>
        <Link className="text-link" href={`/industries/${industry.slug}`}>
          See the workflow <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

export function CtaBand({
  eyebrow = "Start with the problem",
  title = "Have a workflow worth improving?",
  body = "Tell us how the work happens today. We’ll help you define a practical first release and the systems it needs to connect.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-band">
          <div>
            <span className="eyebrow eyebrow-light">{eyebrow}</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <div className="cta-actions">
            <Link className="button button-light" href="/contact">Start a project <ArrowIcon /></Link>
            <Link className="button button-ghost-light" href="/process">See our process</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlueprintCard({ blueprint }: { blueprint: (typeof import("@/lib/site-data").blueprints)[number] }) {
  return (
    <article className="blueprint-card">
      <div className="blueprint-card-head">
        <span>{blueprint.sector}</span>
        <span>Solution blueprint</span>
      </div>
      <div className="blueprint-map" aria-hidden="true">
        <span />
        <span />
        <span />
        <i />
      </div>
      <h3>{blueprint.title}</h3>
      <p>{blueprint.summary}</p>
      <Link className="text-link" href={`/solution-blueprints/${blueprint.slug}`}>
        Explore the architecture <ArrowIcon />
      </Link>
    </article>
  );
}
