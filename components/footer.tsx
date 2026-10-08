import Link from "next/link";
import { Brand } from "@/components/brand";
import { industries, services, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Brand />
          <p>
            Custom software, AI workflows, and business automation built around real operational needs.
          </p>
          <div className="footer-status">
            <span className="status-dot" />
            Project conversations open
          </div>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Industries</h2>
          <ul>
            {industries.slice(0, 5).map((industry) => (
              <li key={industry.slug}>
                <Link href={`/industries/${industry.slug}`}>{industry.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/process">Process</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`https://wa.me/${site.phoneInternational.replace("+", "")}`}>{site.phoneDisplay}</a>
          <p>{site.hours}</p>
          <p>{site.country}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
