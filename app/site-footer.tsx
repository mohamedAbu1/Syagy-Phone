import Link from 'next/link';

import { MarketingIcon } from './marketing-header';

type SiteFooterProps = {
  store?: boolean;
};

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'Featured deals', href: '/#deals' },
  { label: 'Shop by room', href: '/#rooms' },
  { label: 'About ElectroHub', href: '/about' },
];

const supportLinks = [
  { label: 'Contact us', href: '/contact' },
  { label: 'Delivery information', href: '/contact' },
  { label: 'Returns & warranty', href: '/contact' },
  { label: 'Product advice', href: '/contact' },
];

export default function SiteFooter({ store = false }: SiteFooterProps) {
  return (
    <footer className={`site-footer ${store ? 'site-footer-store' : ''}`}>
      <div className="site-footer-backdrop" />
      <div className="site-footer-inner">
        {store && (
          <div className="site-footer-benefits" aria-label="ElectroHub promises">
            <div className="site-footer-benefit">
              <span className="site-footer-benefit-icon"><MarketingIcon name="truck" size={21} /></span>
              <span><strong>Fast delivery</strong><small>Get your order in 1–3 days</small></span>
            </div>
            <div className="site-footer-benefit">
              <span className="site-footer-benefit-icon"><MarketingIcon name="shield" size={21} /></span>
              <span><strong>Secure payment</strong><small>Protected checkout every time</small></span>
            </div>
            <div className="site-footer-benefit">
              <span className="site-footer-benefit-icon"><MarketingIcon name="check" size={21} /></span>
              <span><strong>Official warranty</strong><small>Confidence after every purchase</small></span>
            </div>
            <div className="site-footer-benefit">
              <span className="site-footer-benefit-icon"><MarketingIcon name="refresh" size={21} /></span>
              <span><strong>Easy returns</strong><small>Hassle-free 30-day policy</small></span>
            </div>
          </div>
        )}

        <div className="site-footer-head">
          <div>
            <span className="site-footer-kicker"><MarketingIcon name="sparkles" size={14} /> Smarter technology. Better living.</span>
            <h2>Make your next upgrade feel effortless.</h2>
            <p>Thoughtful products, clear guidance, and support that stays helpful from first click to everyday use.</p>
          </div>
          <Link href="/contact" className="site-footer-cta">Talk to our team <MarketingIcon name="arrow" size={17} /></Link>
        </div>

        <div className="site-footer-grid">
          <div className="site-footer-brand-block">
            <Link href="/" className="site-footer-logo" aria-label="ElectroHub home">
              <span className="site-footer-logo-mark"><MarketingIcon name="bolt" size={20} /></span>
              <span>Electro<span>Hub</span></span>
            </Link>
            <p>Modern electronics for brighter spaces, sharper work, and better everyday moments.</p>
            <div className="site-footer-contact-pill"><MarketingIcon name="mail" size={15} /><a href="mailto:support@electrohub.example">support@electrohub.example</a></div>
          </div>

          <nav className="site-footer-column" aria-label="Explore ElectroHub">
            <h3>Explore</h3>
            {exploreLinks.map((link) => <Link key={link.label} href={link.href}>{link.label}<MarketingIcon name="arrow" size={13} /></Link>)}
          </nav>

          <nav className="site-footer-column" aria-label="Customer support">
            <h3>Customer care</h3>
            {supportLinks.map((link) => <Link key={link.label} href={link.href}>{link.label}<MarketingIcon name="arrow" size={13} /></Link>)}
          </nav>

          <div className="site-footer-column site-footer-hours">
            <h3>Need a hand?</h3>
            <a href="tel:+18005550148" className="site-footer-phone"><MarketingIcon name="phone" size={17} /><span><small>Call our specialists</small><strong>+1 (800) 555-0148</strong></span></a>
            <div className="site-footer-open"><span className="site-footer-status-dot" /><span><strong>Support is online</strong><small>Mon–Sat · 9:00 AM–8:00 PM</small></span></div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>© 2026 ElectroHub. Built for better living.</span>
          <div><Link href="/about">Our story</Link><Link href="/contact">Support</Link><span className="site-footer-location"><MarketingIcon name="pin" size={13} /> New York, NY</span></div>
        </div>
      </div>
    </footer>
  );
}
