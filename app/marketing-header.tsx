import Link from 'next/link';

export type MarketingIconName = 'bolt' | 'arrow' | 'sparkles' | 'shield' | 'truck' | 'refresh' | 'heart' | 'mail' | 'phone' | 'pin' | 'clock' | 'headset' | 'check';

export function MarketingIcon({ name, size = 20, className = '' }: { name: MarketingIconName; size?: number; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths: Record<MarketingIconName, React.ReactNode> = {
    bolt: <path fill="currentColor" stroke="currentColor" strokeLinejoin="round" d="m13.5 2.5-9 11.3h6.1L9.5 21.5l10-13h-6.1l.1-6Z" />,
    arrow: <><path {...common} d="M4 12h15" /><path {...common} d="m14 7 5 5-5 5" /></>,
    sparkles: <><path {...common} d="m12 3 1.1 4.2L17 8.5l-3.9 1.3L12 14l-1.1-4.2L7 8.5l3.9-1.3L12 3Z" /><path {...common} d="m19 14 .6 2.4L22 17l-2.4.6L19 20l-.6-2.4L16 17l2.4-.6L19 14Z" /></>,
    shield: <><path {...common} d="M12 3 20 6v5.2c0 4.6-3.2 7.4-8 9.8-4.8-2.4-8-5.2-8-9.8V6l8-3Z" /><path {...common} d="m8.5 12 2.2 2.2 4.8-4.8" /></>,
    truck: <><path {...common} d="M3 6h11v10H3z" /><path {...common} d="M14 10h3.5l3 3v3H14z" /><circle {...common} cx="7" cy="18" r="1.8" /><circle {...common} cx="17.5" cy="18" r="1.8" /></>,
    refresh: <><path {...common} d="M20 11a8 8 0 0 0-13.7-5.7L4 7.5" /><path {...common} d="M4 4v3.5h3.5M4 13a8 8 0 0 0 13.7 5.7l2.3-2.2" /><path {...common} d="M20 20v-3.5h-3.5" /></>,
    heart: <path {...common} d="M20.8 8.8c0 5-8.8 10-8.8 10s-8.8-5-8.8-10A4.6 4.6 0 0 1 12 6.1a4.6 4.6 0 0 1 8.8 2.7Z" />,
    mail: <><rect {...common} x="3" y="5" width="18" height="14" rx="2" /><path {...common} d="m4 7 8 6 8-6" /></>,
    phone: <path {...common} d="M6.2 3.8 9 3l2 4.6-2 1.6a14.4 14.4 0 0 0 5.8 5.8l1.6-2 4.6 2-.8 2.8a2 2 0 0 1-2.3 1.4C10.8 18 6 13.2 4.8 6.1a2 2 0 0 1 1.4-2.3Z" />,
    pin: <><path {...common} d="M18 10c0 4.8-6 10-6 10S6 14.8 6 10a6 6 0 1 1 12 0Z" /><circle {...common} cx="12" cy="10" r="2" /></>,
    clock: <><circle {...common} cx="12" cy="12" r="8.5" /><path {...common} d="M12 7v5l3.2 2" /></>,
    headset: <><path {...common} d="M4 14v-2a8 8 0 0 1 16 0v2" /><path {...common} d="M4 14h3v5H5.5A1.5 1.5 0 0 1 4 17.5V14ZM20 14h-3v5h1.5a1.5 1.5 0 0 0 1.5-1.5V14Z" /><path {...common} d="M17 19c-.6 1.3-1.8 2-3.8 2" /></>,
    check: <path {...common} d="m5 12 4.2 4.2L19 6.5" />,
  };

  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" className={`shrink-0 ${className}`}>{paths[name]}</svg>;
}

export default function MarketingHeader({ active }: { active?: 'about' | 'contact' }) {
  return (
    <header className="marketing-header">
      <div className="marketing-header-inner">
        <Link href="/" className="marketing-logo" aria-label="ElectroHub home"><span className="marketing-logo-mark"><MarketingIcon name="bolt" size={27} /></span><span>Electro<span>Hub</span></span></Link>
        <nav className="marketing-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about" className={active === 'about' ? 'active' : ''}>About</Link>
          <Link href="/contact" className={active === 'contact' ? 'active' : ''}>Contact</Link>
        </nav>
        <Link href="/#deals" className="marketing-header-cta">Explore products <MarketingIcon name="arrow" size={16} /></Link>
      </div>
    </header>
  );
}
