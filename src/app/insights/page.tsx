import type { Metadata } from "next";
import { Arrow } from "@/components/arrow";
import { InnerHero } from "@/components/inner-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Technology Hiring Insights | Sajj Consulting", description: "Australian technology hiring insights, salary guidance and practical market advice." };

const articles = [
  ["Report","2026 Tech Salary Guide — what specialist skills pay now","June 2026 · 8 min read","article-blue"],
  ["Hiring","Counter-offers are back. How to keep your seniors.","May 2026 · 6 min read","article-team"],
  ["Hiring","Hiring for AI teams without an AI-sized budget","April 2026 · 7 min read","article-ai"],
  ["Market","Why cloud platform roles are changing again","March 2026 · 5 min read","article-cloud"],
  ["Leadership","The CTO brief: clarity before capability","February 2026 · 9 min read","article-leader"],
  ["Candidates","How to make a technical interview worth the time","January 2026 · 6 min read","article-interview"],
];

export default function InsightsPage() {
  return <main><SiteHeader /><InnerHero eyebrow="Insights" title={<>Hiring intelligence<br />without the <em>noise.</em></>} copy="Salary data, market movement and practical advice from specialists who spend every day inside Australian technology hiring." primary={{label:"Get the salary guide",href:"#salary-guide"}} metric="120" metricLabel="technology roles benchmarked in our 2026 guide" />
    <section id="salary-guide" className="inner-section"><div className="shell insight-feature"><div><p className="eyebrow"><span /> Featured report</p><h2>The 2026 Tech<br />Salary Guide.</h2><p>Day rates and salaries for 120 IT and digital roles across six Australian cities, built from placements made in the last twelve months.</p><a className="button button-blue" href="/contact">Get the guide <Arrow /></a></div><div className="guide-cover large-guide"><span>SAJJ</span><strong>2026<br />Salary<br /><em>Guide</em></strong><small>24 pages · Free download</small></div></div></section>
    <section className="inner-section inner-tint"><div className="shell"><div className="inner-heading"><p className="eyebrow"><span /> Latest thinking</p><h2>Useful before<br />the next brief.</h2></div><div className="article-grid">{articles.map(([type,title,meta,klass])=><article key={title}><div className={`article-image ${klass}`}><span>{type}</span></div><h3>{title}</h3><p>{meta}</p><a href="/contact">Read insight <Arrow /></a></article>)}</div></div></section>
    <section className="newsletter-strip"><div className="shell"><div><h2>Hiring insight, occasionally.</h2><p>One useful email when the market moves. No weekly noise.</p></div><form><label className="sr-only" htmlFor="insight-email">Email address</label><input id="insight-email" type="email" required placeholder="you@company.com" /><button className="button button-white" type="submit">Subscribe <Arrow /></button></form></div></section><SiteFooter /></main>;
}
