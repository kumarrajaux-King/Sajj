"use client";

import { useMemo, useState } from "react";
import { Arrow } from "@/components/arrow";
import { InnerHero } from "@/components/inner-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const roles = [
  {title:"Senior Platform Engineer",desk:"Cloud & Infrastructure",place:"Sydney · Hybrid",type:"Contract",pay:"$950–1,050/day"},
  {title:"Product Designer",desk:"Digital & Design",place:"Melbourne · Hybrid",type:"Permanent",pay:"$145–165k"},
  {title:"Data Engineer",desk:"Data & AI",place:"Brisbane · Remote",type:"Contract",pay:"$900/day"},
  {title:"Cyber Security Analyst",desk:"Cyber Security",place:"Canberra · On-site",type:"Permanent",pay:"$130–150k"},
  {title:"Solutions Architect",desk:"Architecture",place:"Sydney · Hybrid",type:"Permanent",pay:"$180–205k"},
  {title:"Senior Test Automation Engineer",desk:"Development & Testing",place:"Melbourne · Remote",type:"Contract",pay:"$850–920/day"},
  {title:"Technical Program Manager",desk:"Project Services",place:"Brisbane · Hybrid",type:"Contract",pay:"$1,050/day"},
  {title:"Head of Engineering",desk:"Executive IT",place:"Sydney · On-site",type:"Permanent",pay:"$240–270k"},
];

export default function JobsPage() {
  const [query,setQuery]=useState(""); const [desk,setDesk]=useState("All desks"); const [type,setType]=useState("All types");
  const filtered=useMemo(()=>roles.filter(role=>(!query||`${role.title} ${role.desk} ${role.place}`.toLowerCase().includes(query.toLowerCase()))&&(desk==="All desks"||role.desk===desk)&&(type==="All types"||role.type===type)),[query,desk,type]);
  return <main><SiteHeader /><InnerHero eyebrow="Live roles" title={<>Find work that<br />moves you <em>forward.</em></>} copy="Contract and permanent technology opportunities across Australia, represented by consultants who know the work and the market." primary={{label:"Create a job alert",href:"/job-seekers/#alerts"}} metric="400+" metricLabel="live and upcoming specialist roles" />
    <section className="inner-section jobs-page"><div className="shell"><div className="job-search"><label><span>Search roles</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Job title, skill or location" /></label><label><span>Specialist desk</span><select value={desk} onChange={e=>setDesk(e.target.value)}><option>All desks</option>{Array.from(new Set(roles.map(role=>role.desk))).map(item=><option key={item}>{item}</option>)}</select></label><label><span>Employment</span><select value={type} onChange={e=>setType(e.target.value)}><option>All types</option><option>Contract</option><option>Permanent</option></select></label></div><div className="results-heading"><h2>{filtered.length} roles</h2><button type="button" onClick={()=>{setQuery("");setDesk("All desks");setType("All types")}}>Clear filters</button></div><div className="jobs-page-list">{filtered.map(role=><article key={role.title}><div><span>{role.desk}</span><h3>{role.title}</h3></div><p>{role.place}</p><p>{role.type}</p><strong>{role.pay}</strong><a href="/contact" aria-label={`Enquire about ${role.title}`}><Arrow /></a></article>)}{filtered.length===0&&<div className="empty-results"><h3>No exact matches yet.</h3><p>Clear your filters or create an alert and we will contact you when the right role appears.</p><a className="button button-blue" href="/job-seekers/#alerts">Create an alert <Arrow /></a></div>}</div></div></section>
    <section className="jobs-note"><div className="shell"><h2>Not seeing the right one?</h2><p>Most strong conversations start before the job advert. Tell your specialist desk what you want next.</p><a className="button button-white" href="/contact">Introduce yourself <Arrow /></a></div></section><SiteFooter /></main>;
}
