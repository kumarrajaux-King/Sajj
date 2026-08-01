"use client";

import { useState } from "react";
import Link from "next/link";
import { Arrow } from "./arrow";
import { Brand } from "./brand";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link href="/" className="header-brand" onClick={closeMenu}><Brand /></Link>
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
        <i aria-hidden="true" />
      </button>
      <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/services" onClick={closeMenu}>Services</Link>
        <Link href="/job-seekers" onClick={closeMenu}>Job seekers</Link>
        <Link href="/jobs" onClick={closeMenu}>Jobs</Link>
        <Link href="/insights" onClick={closeMenu}>Insights</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <Link className="header-cta" href="/contact" onClick={closeMenu}>Submit a role <Arrow /></Link>
      </nav>
    </header>
  );
}
