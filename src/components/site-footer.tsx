import { Brand } from "./brand";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand"><Brand /><h2>Specialist hiring for<br />teams that build.</h2><div className="socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="X">X</a><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="Facebook">f</a></div></div>
        <div className="footer-contact"><h3>Contact info</h3><a href="tel:0401904401">0401 904 401</a><a href="mailto:info@sajj.com.au">info@sajj.com.au</a><span>10:00 – 18:00</span></div>
        <div><h3>Employers</h3><Link href="/contact">Submit a role</Link><Link href="/services">Services</Link><Link href="/about">Why Sajj</Link></div>
        <div><h3>Candidates</h3><Link href="/jobs">Browse jobs</Link><Link href="/job-seekers/#alerts">Job alerts</Link><Link href="/job-seekers">For job seekers</Link></div>
        <div><h3>Company</h3><Link href="/about">About</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Sajj Consulting Pty Ltd</span><span><a href="#">Privacy</a> · <a href="#">Terms</a></span></div>
    </footer>
  );
}
