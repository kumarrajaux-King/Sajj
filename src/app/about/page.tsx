import type { Metadata } from "next";
import { Arrow } from "@/components/arrow";
import { InnerHero, PageCta } from "@/components/inner-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "About Sajj | Specialist Technology Recruitment", description: "Twenty-five years of specialist IT and digital recruitment across Australia." };

const values = [
  ["01", "Depth over breadth", "Each consultant owns one market, builds a real network and stays close to the work."],
  ["02", "Honesty over theatre", "Straight advice, useful shortlists and no activity designed only to look busy."],
  ["03", "Fit over volume", "We measure success by people placed and staying, not CVs sent or calls logged."],
];

export default function AboutPage() {
  return <main><SiteHeader /><InnerHero eyebrow="About Sajj" title={<>Twenty-five years.<br />Still <em>specialist.</em></>} copy="Sajj Consulting began with one IT contract desk in Sydney. Today our specialists recruit across the technology markets that keep Australian organisations moving." primary={{label:"Talk to a specialist",href:"/contact"}} secondary={{label:"Explore services",href:"/services"}} metric="25+" metricLabel="years in the Australian technology market" />
    <section className="inner-section"><div className="shell split-story"><div><p className="eyebrow"><span /> Our story</p><h2>One desk became eight. The focus never changed.</h2></div><div className="story-copy"><p>Technology recruitment works best when the person taking the brief understands the work. That belief shaped Sajj in 2001 and still shapes every desk today.</p><p>We have grown by going deeper — adding specialists in cloud, data, cyber security, development, design, architecture, project services and executive IT. Clients get honest market advice. Candidates get conversations with people who understand their craft.</p><a className="text-link" href="/services">See how we work <Arrow /></a></div></div></section>
    <section className="inner-section inner-tint"><div className="shell"><div className="inner-heading"><p className="eyebrow"><span /> What guides us</p><h2>Recruitment with<br />the noise removed.</h2></div><div className="value-list">{values.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="inner-section"><div className="shell about-people"><div className="about-photo" role="img" aria-label="Technology recruitment team collaborating" /><div><p className="eyebrow"><span /> People who know the work</p><h2>A specialist on every brief.</h2><p>There are no generalist hand-offs. The consultant who takes your brief owns the search, speaks with every candidate and stays accountable through onboarding and beyond.</p><div className="about-facts"><div><strong>8</strong><span>specialist desks</span></div><div><strong>12k</strong><span>placements</span></div><div><strong>92%</strong><span>filled from first shortlist</span></div></div></div></div></section>
    <section className="inner-section journey-summary"><div className="shell"><p className="eyebrow light"><span /> Our journey</p><div className="year-grid">{[["2001","Founded in Sydney"],["2008","Permanent practice"],["2014","Digital and data desks"],["2019","National network"],["2023","Integrated services"],["2026","Twenty-five years"]].map(([year,label])=><div key={year}><strong>{year}</strong><span>{label}</span></div>)}</div></div></section>
    <PageCta title="The right person changes the pace of the work." /><SiteFooter /></main>;
}
