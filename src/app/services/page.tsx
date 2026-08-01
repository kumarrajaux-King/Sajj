import type { Metadata } from "next";
import { Arrow } from "@/components/arrow";
import { InnerHero, PageCta } from "@/components/inner-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Recruitment Services | Sajj Consulting", description: "Contract, permanent, executive search and contractor payroll for IT and digital teams." };

const offerings = [
  { id:"contract",number:"01",title:"Contract",intro:"Specialist contractors for project peaks and critical gaps — productive from day one.",points:["Pre-qualified specialist network","Fast, focused shortlists","Contractor care from start to finish"] },
  { id:"permanent",number:"02",title:"Permanent",intro:"Long-term hires matched on capability and culture, not just the CV.",points:["Market mapping and salary advice","Structured qualification","Onboarding and retention follow-up"] },
  { id:"executive",number:"03",title:"Executive search",intro:"Discreet search for CTOs, heads of engineering and digital leaders.",points:["Confidential market approach","Leadership and capability assessment","A tightly managed candidate experience"] },
  { id:"payroll",number:"04",title:"Payroll",intro:"Compliant contractor payroll, onboarding and care — handled end to end.",points:["Contracts and compliant onboarding","Timesheets and reliable payroll","Dedicated contractor support"] },
];

export default function ServicesPage() {
  return <main><SiteHeader /><InnerHero eyebrow="Services" title={<>Four ways to find<br />the <em>right fit.</em></>} copy="From an urgent contractor to a long-term technology leader, every search is owned by a consultant who already knows the market." primary={{label:"Submit a role",href:"/contact"}} secondary={{label:"Browse jobs",href:"/jobs"}} metric="4" metricLabel="specialist ways to build your team" />
    <section className="inner-section"><div className="shell"><div className="inner-heading"><p className="eyebrow"><span /> What we do</p><h2>Choose the model.<br />Keep the standard.</h2><p>The delivery changes. The discipline does not: a clear brief, a focused search and a shortlist worth your time.</p></div><div className="offering-list">{offerings.map((item)=><article id={item.id} key={item.id}><div className="offering-number">{item.number}</div><div><h2>{item.title}</h2><p>{item.intro}</p></div><ul>{item.points.map(point=><li key={point}>{point}</li>)}</ul><a href="/contact" aria-label={`Discuss ${item.title}`}><Arrow /></a></article>)}</div></div></section>
    <section className="inner-section inner-tint"><div className="shell process-section"><div><p className="eyebrow"><span /> The process</p><h2>Briefed once.<br />Shortlisted fast.</h2></div><div className="process-steps">{[["01","Listen","We define the work, the outcome and what good looks like."],["02","Search","Network first, database second, advertising last."],["03","Qualify","Every candidate is spoken to before they reach your inbox."],["04","Stay close","We manage the process through start date and beyond."]].map(([n,t,c])=><div key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></div>)}</div></div></section>
    <section className="inner-section specialty-strip"><div className="shell"><p>Cloud &amp; Infrastructure</p><p>Data &amp; AI</p><p>Cyber Security</p><p>Development &amp; Testing</p><p>Digital &amp; Design</p><p>Architecture</p><p>Project Services</p><p>Executive IT</p></div></section>
    <PageCta title="One brief. Three to five people worth meeting." copy="Ready to build your shortlist?" label="Submit a role" /><SiteFooter /></main>;
}
