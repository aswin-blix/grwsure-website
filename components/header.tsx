"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brand } from "@/components/brand";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/solution-blueprints", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            );
          })}
          <Link className="button button-small button-dark nav-cta" href="/contact" onClick={() => setOpen(false)}>
            Start a project
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
