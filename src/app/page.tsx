"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { Arrow } from "@/components/arrow";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  {
    number: "01",
    title: "Contract",
    copy: "Specialist contractors for project peaks and critical gaps — productive from day one.",
    href: "/services/#contract",
  },
  {
    number: "02",
    title: "Permanent",
    copy: "Long-term hires matched on capability and culture, not just the CV.",
    href: "/services/#permanent",
  },
  {
    number: "03",
    title: "Executive search",
    copy: "Discreet search for CTOs, heads of engineering and digital leaders.",
    href: "/services/#executive",
  },
  {
    number: "04",
    title: "Payroll",
    copy: "Compliant contractor payroll, onboarding and care — handled end to end.",
    href: "/services/#payroll",
  },
];

const specialties = [
  "Cloud & Infrastructure",
  "Data & AI",
  "Cyber Security",
  "Development & Testing",
  "Digital & Design",
  "Architecture",
  "Project Services",
  "Executive IT",
];

const jobs = [
  { title: "Senior Platform Engineer", desk: "Cloud & Infrastructure", place: "Sydney · Hybrid", type: "Contract", pay: "$950–1,050/day" },
  { title: "Product Designer", desk: "Digital & Design", place: "Melbourne · Hybrid", type: "Permanent", pay: "$145–165k" },
  { title: "Data Engineer", desk: "Data & AI", place: "Brisbane · Remote", type: "Contract", pay: "$900/day" },
  { title: "Cyber Security Analyst", desk: "Cyber Security", place: "Canberra · On-site", type: "Permanent", pay: "$130–150k" },
];

const cases = [
  { place: "Sydney fintech · Platform", title: "Two senior engineers hired from a single shortlist", tags: ["Contract", "Cloud & Infrastructure"] },
  { place: "Melbourne · DevOps", title: "A production gap covered inside 48 hours", tags: ["Contract", "Infrastructure"] },
  { place: "National · Design & Product", title: "94% of permanent hires still in seat a year on", tags: ["Permanent", "Digital & Design"] },
  { place: "Canberra · Security", title: "A cleared cyber team, built in six weeks", tags: ["Permanent", "Cyber Security"] },
];

const milestones = [
  { year: "2001", copy: "Sajj Consulting is founded in Sydney — one desk, one specialist market: IT contract." },
  { year: "2008", copy: "Permanent recruitment becomes a dedicated practice alongside the original contract desk." },
  { year: "2014", copy: "Specialist desks expand across cloud, data, security, development and digital design." },
  { year: "2019", copy: "A national network brings specialist technology recruitment to teams across Australia." },
  { year: "2023", copy: "Contractor care, compliant payroll and executive search become fully integrated services." },
  { year: "2026", copy: "Twenty-five years on, the focus remains unchanged: the right person, properly matched." },
];

const insights = [
  { type: "Report", title: "2026 Tech Salary Guide — what specialist skills pay now", meta: "June 2026 · 8 min read", className: "insight-one" },
  { type: "Hiring", title: "Counter-offers are back. How to keep your seniors.", meta: "May 2026 · 6 min read", className: "insight-two" },
  { type: "Hiring", title: "Hiring for AI teams without an AI-sized budget", meta: "April 2026 · 7 min read", className: "insight-three" },
];

const clientNames = ["NORTHGATE", "FedMutual", "STATEGRID", "BlueHarbour", "TELCORE", "CivWorks", "AEROLOGIC", "Southport Group", "MERIDIAN", "RetailWorks"];

export default function Home() {
  const [caseIndex, setCaseIndex] = useState(0);
  const [milestoneIndex, setMilestoneIndex] = useState(0);
  const [alertCreated, setAlertCreated] = useState(false);

  function submitAlert(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAlertCreated(true);
  }

  const activeCase = cases[caseIndex];
  const activeMilestone = milestones[milestoneIndex];

  return (
    <main>
      <SiteHeader />

      <section id="top" className="hero">
        <div className="hero-video" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/video/sajj-hero.mp4" type="video/mp4" />
          </video>
          <span className="hero-video-shade" />
        </div>
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="shell hero-inner">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow light"><span /> IT &amp; Digital Recruitment</p>
            <h1>
              <span className="hero-line"><span>Specialist hiring for</span></span>
              <span className="hero-line"><span>teams that <em>build.</em></span></span>
            </h1>
            <p className="hero-lede">Engineers, designers and data specialists — placed contract or permanent, matched by recruiters who know the work.</p>
            <div className="hero-actions">
              <a className="button button-white" href="/contact">Submit a role <Arrow /></a>
              <a className="button button-outline" href="/jobs">Browse jobs <Arrow /></a>
            </div>
          </div>
          <div className="stats" data-reveal>
            <div><strong>25+</strong><span>years in the Australian market</span></div>
            <div><strong>12k</strong><span>placements across tech &amp; digital</span></div>
            <div><strong>92%</strong><span>of roles filled from first shortlist</span></div>
          </div>
          <a className="scroll-cue" href="#services" aria-label="Scroll to explore services"><span>Scroll to explore</span><i /></a>
        </div>
      </section>

      <section className="logo-band" aria-label="Trusted clients">
        <p><span /> Trusted by hiring teams across Australia</p>
        <div className="marquee"><div className="marquee-track">{[...clientNames, ...clientNames].map((name, index) => <span key={`${name}-${index}`}>{name}</span>)}</div></div>
      </section>

      <section id="services" className="section section-tint">
        <div className="shell" data-reveal>
          <div className="section-heading-row">
            <h2>Four ways we work</h2>
            <a className="text-link" href="/services">All services <Arrow /></a>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <a className="service-card" href={service.href} key={service.number}>
                <span className="card-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <span className="circle-arrow"><Arrow /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section noise-section">
        <div className="shell">
          <div className="section-heading-row align-end" data-reveal>
            <h2>Recruitment with the<br />noise removed</h2>
            <a className="text-link" href="/job-seekers">How we place people <Arrow /></a>
          </div>
          <div className="principle-row" data-reveal>
            <div className="principle-visual">
              <Image
                src="/images/cooperation-technology-clean.png"
                alt="Digital cooperation interface with a handshake and technology icons"
                width={1536}
                height={1024}
                sizes="(max-width: 760px) calc(100vw - 36px), 44vw"
              />
            </div>
            <div className="principle-copy">
              <p className="eyebrow">01 · Depth</p>
              <h3>We know the work, not just the words</h3>
              <p>Every consultant owns one technical market and stays in it for years. So when you describe the role, we already understand the stack, the seniority and the people who can actually do it.</p>
              <a className="button button-border" href="/about">Why Sajj <Arrow /></a>
            </div>
          </div>
          <div className="principle-row reverse" data-reveal>
            <div className="principle-copy">
              <p className="eyebrow">02 · Speed</p>
              <h3>Briefed once, shortlisted fast</h3>
              <p>Network first, database second, advertising last. A brief on Monday is three to five people worth your time by Friday — never a CV dump, and never people we haven&apos;t spoken to.</p>
              <a className="button button-border" href="/services">See how we work <Arrow /></a>
            </div>
            <div className="principle-visual principle-visual-talent">
              <Image
                src="/images/global-talent-sajj-blue.png"
                alt="Technology professional beside a global puzzle representing fast access to specialist talent"
                width={1024}
                height={1536}
                sizes="(max-width: 760px) calc(100vw - 36px), 44vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section specialty-section">
        <div className="shell specialty-grid" data-reveal>
          <div className="specialty-intro">
            <p className="eyebrow light"><span /> Where we specialise</p>
            <h2>Eight desks. One obsession with fit.</h2>
            <p>Each consultant owns a single technical market — so your brief lands with someone who already speaks it.</p>
            <a className="button button-outline" href="/jobs">Browse all roles <Arrow /></a>
          </div>
          <div className="specialty-list" aria-label="Specialist markets">
            {[...specialties, ...specialties].map((specialty, index) => <span className={index % 4 === 1 ? "active" : ""} key={`${specialty}-${index}`}>{specialty}</span>)}
          </div>
        </div>
      </section>

      <section className="section jobs-section">
        <div className="shell" data-reveal>
          <div className="section-heading-row">
            <h2>Live roles</h2>
            <a className="text-link" href="/jobs">Browse all 400+ jobs <Arrow /></a>
          </div>
          <div className="job-list">
            {jobs.map((job) => (
              <a className="job-card" href="/jobs" key={job.title}>
                <div><h3>{job.title}</h3><span>{job.desk}</span></div>
                <span>{job.place}</span><span>{job.type}</span><strong>{job.pay}</strong><span className="circle-arrow"><Arrow /></span>
              </a>
            ))}
          </div>
        </div>
        <div className="signal-bars" aria-hidden="true">{Array.from({ length: 42 }).map((_, index) => <i key={index} />)}</div>
      </section>

      <section className="section section-tint case-section">
        <div className="shell" data-reveal>
          <div className="case-top">
            <div><h2><span>Clients</span><br />Success</h2><p>No matter the role you&apos;re filling, the outcome is the same — the right person, placed and staying.</p></div>
            <div className="slider-controls"><strong>0{caseIndex + 1}<span>/04</span></strong><button type="button" aria-label="Previous case" onClick={() => setCaseIndex((caseIndex + cases.length - 1) % cases.length)}>←</button><button type="button" aria-label="Next case" onClick={() => setCaseIndex((caseIndex + 1) % cases.length)}>→</button></div>
          </div>
          <div className="case-stage" aria-live="polite">
            <article className="case-card featured"><p>{activeCase.place}</p><h3>{activeCase.title}</h3><div>{activeCase.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="button button-white" href="/contact">Explore case <Arrow /></a></article>
            {cases.filter((_, index) => index !== caseIndex).slice(0, 2).map((item) => <article className="case-card" key={item.title}><p>{item.place}</p><h3>{item.title}</h3><div>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}
          </div>
        </div>
      </section>

      <section className="section journey-section">
        <div className="shell" data-reveal>
          <div className="journey-head"><div><p className="eyebrow light"><span /> Our journey</p><h2>Twenty-five years,<br />one focus.</h2></div><div className="slider-controls light-controls"><button type="button" aria-label="Previous milestone" onClick={() => setMilestoneIndex((milestoneIndex + milestones.length - 1) % milestones.length)}>←</button><button type="button" aria-label="Next milestone" onClick={() => setMilestoneIndex((milestoneIndex + 1) % milestones.length)}>→</button></div></div>
          <div className="milestone-content" aria-live="polite"><strong>{activeMilestone.year}</strong><p>{activeMilestone.copy}</p></div>
          <div className="timeline">{milestones.map((milestone, index) => <button className={index === milestoneIndex ? "active" : ""} type="button" key={milestone.year} onClick={() => setMilestoneIndex(index)}><i /><span>{milestone.year}</span></button>)}</div>
        </div>
      </section>

      <section className="section people-section">
        <div className="shell people-grid" data-reveal>
          <div className="people-collage" aria-label="Sajj recruitment specialists">
            <div className="people-photo photo-one" role="img" aria-label="Technology professionals collaborating" />
            <div className="people-photo photo-two" role="img" aria-label="Recruitment consultant at work" />
          <div className="people-accent" data-parallax="0.045">SAJJ<br /><strong>People first.</strong></div>
          </div>
          <div className="people-copy"><p className="eyebrow"><span /> Talk to a specialist</p><h2>Recruiters who know the work. Talk to the desk that owns your market.</h2><p>No call centre, no generalists reading a spec back to you. You get one specialist consultant, start to finish — and honest advice even when it costs us the fee.</p><a className="button button-blue" href="/contact">Start a conversation <Arrow /></a></div>
        </div>
      </section>

      <section className="section statement-section">
        <div className="shell" data-reveal><h2>Explore how the right people can move your roadmap forward — faster than you&apos;d expect.</h2><div className="statement-cta"><span>Ready when you are.</span><a className="button button-blue" href="/contact">Start a conversation <Arrow /></a></div></div>
      </section>

      <section className="section insights-section">
        <div className="shell" data-reveal>
          <div className="section-heading-row"><h2>Insights that move<br />hiring forward</h2><a className="text-link" href="/insights">All insights <Arrow /></a></div>
          <a className="salary-feature" href="/insights"><div><p className="eyebrow">Featured report</p><h3>The 2026 Tech<br />Salary Guide is out.</h3><p>Day rates and salaries for 120 IT &amp; digital roles across six cities — built from every placement we made in the last 12 months.</p><span className="button button-blue">Get the guide <Arrow /></span></div><div className="guide-cover"><span>SAJJ</span><strong>2026<br />Salary<br /><em>Guide</em></strong><small>24 pages · Free download</small></div></a>
          <div className="insight-grid">{insights.map((insight) => <a className="insight-card" href="/insights" key={insight.title}><div className={`insight-image ${insight.className}`}><span>{insight.type}</span></div><h3>{insight.title}</h3><p>{insight.meta}</p></a>)}</div>
          <form className="alert-box" onSubmit={submitAlert}>{alertCreated ? <div className="alert-success"><strong>Alert created.</strong><span>We&apos;ll email you when a matching role goes live.</span><button type="button" onClick={() => setAlertCreated(false)}>Use another email</button></div> : <><div><h3>Roles in your inbox, first.</h3><p>One email when a role matches — usually before it&apos;s advertised anywhere else.</p></div><div className="alert-form"><label className="sr-only" htmlFor="job-alert-email">Email address</label><input id="job-alert-email" type="email" required placeholder="you@example.com" /><button className="button button-white" type="submit">Create alert <Arrow /></button></div></>}</form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
