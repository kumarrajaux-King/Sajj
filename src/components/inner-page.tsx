import { Arrow } from "./arrow";

type InnerHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  metric?: string;
  metricLabel?: string;
};

export function InnerHero({ eyebrow, title, copy, primary, secondary, metric, metricLabel }: InnerHeroProps) {
  return (
    <section className="inner-hero">
      <div className="inner-orbit" aria-hidden="true"><i /><i /><i /><b /></div>
      <div className="shell inner-hero-grid">
        <div><p className="eyebrow light"><span />{eyebrow}</p><h1>{title}</h1><p className="inner-hero-copy">{copy}</p><div className="inner-actions">{primary && <a className="button button-white" href={primary.href}>{primary.label}<Arrow /></a>}{secondary && <a className="button button-outline" href={secondary.href}>{secondary.label}<Arrow /></a>}</div></div>
        {metric && <div className="inner-metric"><strong>{metric}</strong><span>{metricLabel}</span></div>}
      </div>
    </section>
  );
}

export function PageCta({ title, copy = "Talk to the specialist desk that already knows your market.", label = "Start a conversation" }: { title: string; copy?: string; label?: string }) {
  return <section className="page-cta"><div className="shell"><div><p>{copy}</p><h2>{title}</h2></div><a className="button button-white" href="/contact">{label}<Arrow /></a></div></section>;
}
