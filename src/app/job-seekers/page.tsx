"use client";

import { FormEvent, useState } from "react";
import { Arrow } from "@/components/arrow";
import { InnerHero, PageCta } from "@/components/inner-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const steps = [
  ["01","Tell us what matters","The work you want, the environment you thrive in and what you are ready for next."],
  ["02","Meet your specialist","You speak with the consultant who owns your technical market — not a general inbox."],
  ["03","Get a clear brief","Before we put you forward, you know the role, the team, the process and the rate."],
  ["04","Stay supported","From interview preparation to your first week and beyond, we stay close."],
];

export default function JobSeekersPage() {
  const [created, setCreated] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setCreated(true); }
  return <main><SiteHeader /><InnerHero eyebrow="For job seekers" title={<>Work worth doing.<br />People worth <em>knowing.</em></>} copy="Find contract and permanent technology roles with a recruiter who understands your craft, your market and what a genuinely good next move looks like." primary={{label:"Browse live jobs",href:"/jobs"}} secondary={{label:"Create a job alert",href:"#alerts"}} metric="400+" metricLabel="technology roles across Australia" />
    <section className="inner-section"><div className="shell candidate-intro"><div><p className="eyebrow"><span /> Your career, properly represented</p><h2>More context.<br />Fewer surprises.</h2></div><div><p>We will never send your CV without a conversation. You will know who the client is, why the role exists and what the process looks like before you decide to move forward.</p><p>Our consultants stay in one technical market for years. That means useful salary advice, honest feedback and introductions that make sense.</p></div></div></section>
    <section className="inner-section inner-tint"><div className="shell"><div className="inner-heading"><p className="eyebrow"><span /> How it works</p><h2>One specialist.<br />Start to finish.</h2></div><div className="candidate-steps">{steps.map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>
    <section className="inner-section candidate-markets"><div className="shell"><div><p className="eyebrow light"><span /> Specialist desks</p><h2>Talk to someone who speaks your market.</h2></div><div>{["Cloud & Infrastructure","Data & AI","Cyber Security","Development & Testing","Digital & Design","Architecture","Project Services","Executive IT"].map(item=><a href="/jobs" key={item}>{item}<Arrow /></a>)}</div></div></section>
    <section id="alerts" className="inner-section"><div className="shell seeker-alert"><div><p className="eyebrow"><span /> Job alerts</p><h2>Roles in your inbox, first.</h2><p>One email when a role matches — usually before it is advertised anywhere else.</p></div>{created?<div className="seeker-success"><strong>Alert created.</strong><p>We will send suitable roles to your inbox.</p><button type="button" onClick={()=>setCreated(false)}>Create another alert</button></div>:<form onSubmit={submit}><label>Email address<input type="email" required placeholder="you@example.com" /></label><label>Your specialist market<select required defaultValue=""><option value="" disabled>Select a market</option><option>Cloud & Infrastructure</option><option>Data & AI</option><option>Cyber Security</option><option>Development & Testing</option><option>Digital & Design</option><option>Architecture</option><option>Project Services</option><option>Executive IT</option></select></label><button className="button button-blue" type="submit">Create alert <Arrow /></button></form>}</div></section>
    <PageCta title="Your next role should be a real step forward." copy="Tell us what you do well and what you want next." label="Start a conversation" /><SiteFooter /></main>;
}
