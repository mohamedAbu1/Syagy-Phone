import Link from 'next/link';
import MarketingHeader, { MarketingIcon } from '../marketing-header';
import SiteFooter from '../site-footer';

export const metadata = {
  title: 'About ElectroHub',
  description: 'Learn how ElectroHub makes smarter technology easier to bring home.',
};

const values = [
  { icon: 'sparkles' as const, title: 'Curated with purpose', text: 'Every product is selected for real everyday value, thoughtful design, and reliable performance.' },
  { icon: 'shield' as const, title: 'Confidence built in', text: 'Original products, clear warranties, and support that stays helpful before and after checkout.' },
  { icon: 'heart' as const, title: 'Technology with feeling', text: 'We believe the best technology should feel simple, personal, and genuinely useful.' },
];

export default function AboutPage() {
  return (
    <main className="marketing-page">
      <div className="marketing-page-glow" />
      <MarketingHeader active="about" />
      <section className="marketing-container about-hero">
        <div className="about-hero-copy">
          <span className="marketing-eyebrow"><MarketingIcon name="sparkles" size={15} /> About ElectroHub</span>
          <h1>Smarter technology.<br /><span>Better living.</span></h1>
          <p>ElectroHub is a modern electronics destination built around one simple idea: choosing technology should feel exciting, clear, and effortless.</p>
          <div className="marketing-actions"><Link href="/#deals" className="marketing-button marketing-button-primary">Explore our products <MarketingIcon name="arrow" size={17} /></Link><Link href="/contact" className="marketing-button marketing-button-ghost">Talk to our team</Link></div>
        </div>
        <div className="about-visual">
          <img src="/banners/hero-showroom.png" alt="A bright ElectroHub technology showroom" />
          <div className="about-visual-overlay" />
          <div className="about-visual-caption"><span className="marketing-icon-orb"><MarketingIcon name="bolt" size={19} /></span><div><strong>Designed for everyday life</strong><small>Smart choices for brighter spaces.</small></div></div>
        </div>
      </section>

      <section className="marketing-container about-stats" aria-label="ElectroHub at a glance">
        <div><strong>100%</strong><span>Original products</span></div><div><strong>1–3</strong><span>Day delivery</span></div><div><strong>30</strong><span>Day easy returns</span></div><div><strong>24/7</strong><span>Helpful support</span></div>
      </section>

      <section className="marketing-container about-story">
        <div><span className="marketing-eyebrow">Why ElectroHub</span><h2>Make every upgrade feel like the right one.</h2></div>
        <p>From the first search to the moment your new device becomes part of your routine, we remove the noise around buying technology. Clear details, useful guidance, and a carefully chosen catalog help you shop with confidence.</p>
      </section>

      <section className="marketing-container about-values">
        {values.map((value) => <article key={value.title} className="marketing-card about-value-card"><span className="marketing-card-icon"><MarketingIcon name={value.icon} size={22} /></span><h3>{value.title}</h3><p>{value.text}</p></article>)}
      </section>

      <section className="marketing-container about-cta"><div><span className="marketing-eyebrow">Ready when you are</span><h2>Bring better technology home.</h2></div><Link href="/contact" className="marketing-button marketing-button-primary">Contact ElectroHub <MarketingIcon name="arrow" size={17} /></Link></section>

      <SiteFooter />
    </main>
  );
}
