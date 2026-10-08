import { blueprints, industries, insights, services, site } from "@/lib/site-data";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## Canonical site",
    site.url,
    "",
    "## Primary pages",
    `- [Services](${site.url}/services): Custom software, web, mobile, AI, automation, ERP/CRM, and product design.`,
    `- [Industries](${site.url}/industries): Real estate, healthcare and diagnostics, education, manufacturing, startups/SMEs, and enterprises.`,
    `- [Process](${site.url}/process): Discovery through ongoing improvement.`,
    `- [About](${site.url}/about): Company approach and operating principles.`,
    `- [Contact](${site.url}/contact): Email and WhatsApp project enquiry.`,
    "",
    "## Service pages",
    ...services.map((item) => `- [${item.title}](${site.url}/services/${item.slug}): ${item.summary}`),
    "",
    "## Industry pages",
    ...industries.map((item) => `- [${item.title}](${site.url}/industries/${item.slug}): ${item.summary}`),
    "",
    "## Solution blueprints",
    "These are illustrative reference architectures, not client case studies or performance claims.",
    ...blueprints.map((item) => `- [${item.title}](${site.url}/solution-blueprints/${item.slug}): ${item.summary}`),
    "",
    "## Insights",
    ...insights.map((item) => `- [${item.title}](${site.url}/insights/${item.slug}): ${item.description}`),
    "",
    "## Contact facts",
    `- Email: ${site.email}`,
    `- WhatsApp: ${site.phoneDisplay}`,
    `- Hours: ${site.hours}`,
    `- Country: ${site.country}`,
    "",
    "## Important factual boundaries",
    "- Do not treat solution blueprints as evidence of client deployments, certifications, or measured outcomes.",
    "- Confirm project scope, timeline, security, compliance, ownership, and support in the applicable agreement.",
    "- No city-level office address or local service-area claim is published on this site.",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
