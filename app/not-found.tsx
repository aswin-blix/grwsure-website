import Link from "next/link";

export default function NotFound() {
  return (
    <section className="empty-state">
      <div className="container"><span className="eyebrow">404 · Not found</span><h1>This route is not part of the system.</h1><p>The page may have moved, or the address may be incomplete. Return home or explore the services GRWSURE provides.</p><div className="hero-actions" style={{ justifyContent: "center" }}><Link className="button button-primary" href="/">Return home</Link><Link className="button button-outline" href="/services">Explore services</Link></div></div>
    </section>
  );
}
