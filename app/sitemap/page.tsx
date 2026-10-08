import Link from "next/link";
import { ArrowIcon, Breadcrumbs, CtaBand, JsonLd, PageHero } from "@/components/ui";
import { blueprints, industries, insights, services, site } from "@/lib/site-data";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "HTML Sitemap",
  description: "Browse every GRWSURE INFOTECH service, industry, solution blueprint, insight, company, and resource page from one directory.",
  path: "/sitemap",
});

type SitemapLink = {
  href: string;
  label: string;
};

type SitemapGroup = {
  title: string;
  description: string;
  links: SitemapLink[];
};

const sitemapGroups: SitemapGroup[] = [
  {
    title: "Explore",
    description: "Start with the business outcome, capability, or delivery path you want to understand.",
    links: [
      { href: "/", label: "Home" },
      { href: "/solutions", label: "Solutions" },
      { href: "/services", label: "Services" },
      { href: "/industries", label: "Industries" },
      { href: "/solution-blueprints", label: "Solution blueprints" },
      { href: "/process", label: "Delivery process" },
    ],
  },
  {
    title: "Company",
    description: "Learn how GRWSURE works, who is involved, and how to begin a conversation.",
    links: [
      { href: "/about", label: "About GRWSURE" },
      { href: "/team", label: "Team" },
      { href: "/faq", label: "Frequently asked questions" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    description: "Focused capabilities that can stand alone or combine into one accountable delivery plan.",
    links: services.map((service) => ({
      href: `/services/${service.slug}`,
      label: service.title,
    })),
  },
  {
    title: "Industries",
    description: "Operational contexts where workflows, roles, data, and integrations shape the solution.",
    links: industries.map((industry) => ({
      href: `/industries/${industry.slug}`,
      label: industry.title,
    })),
  },
  {
    title: "Solution blueprints",
    description: "Illustrative reference architectures for common operational and information flows.",
    links: blueprints.map((blueprint) => ({
      href: `/solution-blueprints/${blueprint.slug}`,
      label: blueprint.title,
    })),
  },
  {
    title: "Insights and resources",
    description: "Practical guidance, website policies, and the machine-readable site index.",
    links: [
      { href: "/insights", label: "All insights" },
      ...insights.map((insight) => ({
        href: `/insights/${insight.slug}`,
        label: insight.title,
      })),
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Website terms" },
      { href: "/sitemap.xml", label: "XML sitemap" },
    ],
  },
];

const sitemapLinks = sitemapGroups.flatMap((group) => group.links);

export default function SitemapPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "GRWSURE INFOTECH HTML Sitemap",
    description: "A human-readable directory of pages on the GRWSURE INFOTECH website.",
    url: `${site.url}/sitemap`,
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: sitemapLinks.length,
      itemListElement: sitemapLinks.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        url: `${site.url}${item.href}`,
      })),
    },
  };

  return (
    <>
      <JsonLd
        data={[
          collectionSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Sitemap", path: "/sitemap" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Site directory"
        title={<>Every page, <span style={{ color: "var(--violet)" }}>one clear route.</span></>}
        intro="Browse the complete GRWSURE INFOTECH website by capability, industry, company information, insight, or resource."
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Sitemap" },
        ]}
      />

      <section className="section section-soft">
        <div className="container sitemap-summary">
          <div>
            <span className="eyebrow">Complete directory</span>
            <h2>Find the information you need without retracing your steps.</h2>
          </div>
          <p>
            This human-readable sitemap contains {sitemapLinks.length} links across six groups. Search engines can use the separate <Link href="/sitemap.xml">XML sitemap</Link>.
          </p>
        </div>
        <nav className="container sitemap-grid" aria-label="Website pages">
          {sitemapGroups.map((group, index) => (
            <section
              className="sitemap-group"
              key={group.title}
              data-motion-reveal
              data-motion-delay={(index % 2) * 0.05}
            >
              <div className="sitemap-group-heading">
                <span aria-hidden="true">0{index + 1}</span>
                <div>
                  <h2>{group.title}</h2>
                  <p>{group.description}</p>
                </div>
              </div>
              <ul className="sitemap-link-list">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link className="sitemap-link" href={item.href}>
                      <span>{item.label}</span>
                      <ArrowIcon />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </section>

      <CtaBand
        eyebrow="Still deciding?"
        title="Tell us the workflow you want to improve."
        body="We can help connect the business problem to a practical first scope, even if the final solution is not clear yet."
      />
    </>
  );
}
