'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import SiteFooter from './site-footer';

type Product = {
  id: number; name: string; category: string; price: number; oldPrice: number; rating: number; reviews: number; sale: string; color: string; icon: string; tone: string; image: string;
};

const products: Product[] = [
  { id: 1, name: 'Nova X1 Smartphone', category: 'Mobile', price: 699, oldPrice: 879, rating: 4.8, reviews: 320, sale: '-20%', color: 'Midnight blue', icon: '◩', tone: 'from-blue-500/40 via-indigo-500/10 to-cyan-400/10', image: '/products/smartphone.png' },
  { id: 2, name: 'Orbit Pro Laptop 14”', category: 'Computing', price: 899, oldPrice: 1199, rating: 4.7, reviews: 184, sale: '-25%', color: 'Silver', icon: '▱', tone: 'from-fuchsia-500/30 via-blue-500/20 to-cyan-300/10', image: '/products/laptop.png' },
  { id: 3, name: 'Vision 4K QLED TV 55”', category: 'TV & Cinema', price: 699, oldPrice: 999, rating: 4.8, reviews: 412, sale: '-30%', color: 'Graphite', icon: '▰', tone: 'from-violet-500/40 via-blue-500/20 to-cyan-300/10', image: '/products/tv.png' },
  { id: 4, name: 'PureWash 9kg Washer', category: 'Home', price: 449, oldPrice: 549, rating: 4.6, reviews: 87, sale: '-18%', color: 'Pearl white', icon: '◉', tone: 'from-slate-300/35 via-blue-500/20 to-cyan-400/10', image: '/products/washer.png' },
  { id: 5, name: 'PlayBox S Gaming Console', category: 'Gaming', price: 389, oldPrice: 499, rating: 4.8, reviews: 276, sale: '-22%', color: 'White', icon: '⌁', tone: 'from-indigo-400/40 via-blue-500/20 to-purple-400/10', image: '/products/console.png' },
  { id: 6, name: 'TuneBuds Pro', category: 'Audio', price: 99, oldPrice: 139, rating: 4.5, reviews: 121, sale: '-28%', color: 'White', icon: '◖', tone: 'from-white/30 via-slate-300/10 to-cyan-400/10', image: '/products/earbuds.png' },
  { id: 7, name: 'SoundMax Pro Wireless Headphones', category: 'Audio', price: 149, oldPrice: 199, rating: 4.7, reviews: 208, sale: '-25%', color: 'Black', icon: '◖', tone: 'from-slate-500/30 via-blue-500/20 to-cyan-400/10', image: '/products/headphones.png' },
  { id: 8, name: 'BrewMaster Coffee Machine', category: 'Home', price: 99, oldPrice: 129, rating: 4.6, reviews: 156, sale: '-23%', color: 'Black', icon: '◉', tone: 'from-slate-500/30 via-amber-500/15 to-blue-500/10', image: '/products/coffee-machine-transparent-v2.png' },
];

const categories = [
  { label: 'Smartphones', filter: 'Mobile', icon: '▣', image: '/products/smartphone.png' },
  { label: 'Laptops', filter: 'Computing', icon: '▱', image: '/products/laptop.png' },
  { label: 'TV & Home Cinema', filter: 'TV & Cinema', icon: '▰', image: '/products/tv.png' },
  { label: 'Home Appliances', filter: 'Home', icon: '◉', image: '/products/fridge.png' },
  { label: 'Gaming', filter: 'Gaming', icon: '⌁', image: '/products/gaming.png' },
  { label: 'Smart Home', filter: 'Smart Home', icon: '⌂', image: '/products/smart-home.png' },
  { label: 'Accessories', filter: 'Audio', icon: '⌁', image: '/products/headphones.png' },
];

const slides = [
  { image: '/banners/hero-showroom.png', eyebrow: '', note: <>A Smarter<br /><span className="text-cyanvolt">Brighter Home</span></>, title: <>Power your<br /><span className="text-cyanvolt">everyday</span></>, description: <>Smart technology. <span className="font-semibold text-white">Better living.</span></> },
  { image: '/banners/hero-home-v2.png', eyebrow: 'Designed for better living', note: null, title: <>Make home<br /><span className="text-cyanvolt">feel smarter</span></>, description: <>Warm spaces. <span className="font-semibold text-white">Brighter moments.</span></> },
  { image: '/banners/hero-gaming-v2.png', eyebrow: 'Level up your setup', note: null, title: <>Play beyond<br /><span className="text-cyanvolt">the screen</span></>, description: <>Immersive gear. <span className="font-semibold text-white">Unstoppable nights.</span></> },
];

type AppIconName = 'cart' | 'user' | 'heart' | 'pin' | 'search' | 'sparkles' | 'flame' | 'bolt' | 'truck' | 'card' | 'shield' | 'refresh' | 'compare' | 'arrow' | 'chevron' | 'close' | 'minus' | 'plus' | 'home';

function AppIcon({ name, className = '', size = 20 }: { name: AppIconName; className?: string; size?: number }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths: Record<AppIconName, React.ReactNode> = {
    cart: <><path {...common} d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.5a2 2 0 0 0 1.9-1.4L20 7H6" /><circle {...common} cx="9" cy="19" r="1" /><circle {...common} cx="17" cy="19" r="1" /></>,
    user: <><circle {...common} cx="12" cy="8" r="3.2" /><path {...common} d="M5.5 20a6.5 6.5 0 0 1 13 0" /></>,
    heart: <path {...common} d="M20.8 8.8c0 5-8.8 10-8.8 10s-8.8-5-8.8-10A4.6 4.6 0 0 1 12 6.1a4.6 4.6 0 0 1 8.8 2.7Z" />,
    pin: <><path {...common} d="M18 10c0 4.8-6 10-6 10S6 14.8 6 10a6 6 0 1 1 12 0Z" /><circle {...common} cx="12" cy="10" r="2" /></>,
    search: <><circle {...common} cx="10.8" cy="10.8" r="6.2" /><path {...common} d="m16 16 4.2 4.2" /></>,
    sparkles: <><path {...common} d="m12 3 1.1 4.2L17 8.5l-3.9 1.3L12 14l-1.1-4.2L7 8.5l3.9-1.3L12 3Z" /><path {...common} d="m19 14 .6 2.4L22 17l-2.4.6L19 20l-.6-2.4L16 17l2.4-.6L19 14Z" /></>,
    flame: <path {...common} d="M13.6 2.8c.4 3.1-1.2 4.7-2.9 6.2-1.3 1.1-2.6 2.2-2.6 4.5a3.9 3.9 0 0 0 3.9 3.9 4.1 4.1 0 0 0 4-4.1c0-1.4-.7-2.8-1.8-3.9.1 2.1-.6 3-1.3 3.6.3-2.3-1.1-4.1-2.1-5.2 0 2.2-1.5 3.2-1.5 5a2.7 2.7 0 0 0 2.7 2.7 2.8 2.8 0 0 0 2.8-2.8c0-2.5-1.9-4.8-1.2-9.9Z" />,
    bolt: <path fill="currentColor" stroke="currentColor" strokeLinejoin="round" d="m13.5 2.5-9 11.3h6.1L9.5 21.5l10-13h-6.1l.1-6Z" />,
    truck: <><path {...common} d="M3 6h11v10H3z" /><path {...common} d="M14 10h3.5l3 3v3H14z" /><circle {...common} cx="7" cy="18" r="1.8" /><circle {...common} cx="17.5" cy="18" r="1.8" /></>,
    card: <><rect {...common} x="3" y="5" width="18" height="14" rx="2.5" /><path {...common} d="M3 10h18M7 15h4" /><path {...common} d="m16 14 1.3 1.3L20 12.6" /></>,
    shield: <><path {...common} d="M12 3 20 6v5.2c0 4.6-3.2 7.4-8 9.8-4.8-2.4-8-5.2-8-9.8V6l8-3Z" /><path {...common} d="m8.5 12 2.2 2.2 4.8-4.8" /></>,
    refresh: <><path {...common} d="M20 11a8 8 0 0 0-13.7-5.7L4 7.5" /><path {...common} d="M4 4v3.5h3.5M4 13a8 8 0 0 0 13.7 5.7l2.3-2.2" /><path {...common} d="M20 20v-3.5h-3.5" /></>,
    compare: <><rect {...common} x="4" y="4" width="6" height="16" rx="1.5" /><rect {...common} x="14" y="4" width="6" height="16" rx="1.5" /><path {...common} d="M7 8h0M17 8h0" /></>,
    arrow: <><path {...common} d="M4 12h15" /><path {...common} d="m14 7 5 5-5 5" /></>,
    chevron: <path {...common} d="m7 9 5 5 5-5" />,
    close: <><path {...common} d="m6 6 12 12M18 6 6 18" /></>,
    minus: <path {...common} d="M6 12h12" />,
    plus: <><path {...common} d="M12 6v12M6 12h12" /></>,
    home: <><path {...common} d="m3.5 11 8.5-7 8.5 7" /><path {...common} d="M5.5 10.5V20h13v-9.5M9.5 20v-5h5v5" /></>,
  };

  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" className={`shrink-0 ${className}`}>{paths[name]}</svg>;
}

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<number[]>([1, 7, 8]);
  const [quantities, setQuantities] = useState<Record<number, number>>({ 1: 1, 7: 1, 8: 1 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [liked, setLiked] = useState<number[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 5600);
    return () => window.clearInterval(timer);
  }, []);

  const filteredProducts = useMemo(() => products.filter((p) => (activeCategory === 'All' || p.category === activeCategory) && p.name.toLowerCase().includes(query.toLowerCase())), [activeCategory, query]);
  const dealProducts = filteredProducts.filter((p) => p.id <= 6);
  const cartProducts = products.filter((p) => cart.includes(p.id));
  const cartCount = cart.reduce((sum, id) => sum + (quantities[id] ?? 1), 0);
  const subtotal = cartProducts.reduce((sum, p) => sum + p.price * (quantities[p.id] ?? 1), 0);

  const addToCart = (id: number) => { setCart((current) => current.includes(id) ? current : [...current, id]); setQuantities((current) => ({ ...current, [id]: current[id] ?? 1 })); };
  const changeQuantity = (id: number, delta: number) => setQuantities((current) => ({ ...current, [id]: Math.max(1, (current[id] ?? 1) + delta) }));
  const toggleLike = (id: number) => setLiked((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const activeHero = slides[activeSlide];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#041226] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_72%_0%,rgba(0,136,255,.16),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(31,63,173,.18),transparent_34%)]" />
      <header className="relative z-20 border-b border-white/10 bg-[#06172e]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center gap-5 px-5 py-4 lg:px-8">
          <div className="flex shrink-0 items-center gap-2 text-2xl font-black tracking-tight"><span aria-hidden="true" className="text-yellow-300 drop-shadow-[0_0_12px_rgba(255,217,74,.65)]"><AppIcon name="bolt" size={35} /></span><span>Electro<span className="text-cyanvolt">Hub</span></span></div>
          <div className="hidden items-center gap-2 text-sm text-slate-300 xl:flex"><AppIcon name="pin" size={17} className="text-cyanvolt" /> New York, NY <AppIcon name="chevron" size={14} className="text-slate-500" /></div>
          <label className="relative ml-auto hidden max-w-xl flex-1 md:block"><AppIcon name="search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" /><input aria-label="Search products" value={query} onChange={(e) => setQuery(e.target.value)} className="h-11 w-full rounded-full border border-blue-300/30 bg-[#0a2445] pl-11 pr-5 text-sm outline-none placeholder:text-slate-400 focus:border-cyanvolt" placeholder="Search products, brands and categories" /></label>
          <div className="flex items-center gap-4 text-sm text-slate-200"><span className="hidden items-center gap-2 lg:flex"><AppIcon name="user" size={18} className="text-cyanvolt" /> Account</span><span className="hidden items-center gap-2 lg:flex"><AppIcon name="heart" size={18} className="text-cyanvolt" /> Wishlist</span><button aria-label="Open cart" aria-expanded={cartOpen} onClick={() => setCartOpen(!cartOpen)} className="cart-trigger relative rounded-xl border border-cyan-300/50 bg-blue-600/35 px-3 py-2 text-xl shadow-glow transition hover:bg-blue-500/50"><AppIcon name="cart" size={23} className="text-cyanvolt" /><span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-900">{cartCount}</span></button></div>
        </div>
        <div className="px-4 pb-3 md:hidden"><label className="relative block"><AppIcon name="search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" /><input aria-label="Search products" value={query} onChange={(e) => setQuery(e.target.value)} className="h-10 w-full rounded-full border border-blue-300/30 bg-[#0a2445] pl-11 pr-4 text-sm outline-none placeholder:text-slate-400 focus:border-cyanvolt" placeholder="Search products" /></label></div>
      </header>

      <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 gap-4 px-4 py-5 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-4">
        <section className="min-w-0">
          <div className="hero-panel relative min-h-[300px] overflow-hidden rounded-2xl border border-cyan-400/40 px-7 py-7 sm:px-12 lg:min-h-[300px]">
            <div className="hero-slider" aria-live="polite">{slides.map((slide, index) => <img key={slide.image} src={slide.image} alt={`${slide.eyebrow} banner`} className={`hero-banner-image ${index === activeSlide ? 'is-active' : ''}`} />)}</div>
            <div className="hero-gradient" />
            <div className="relative z-10 max-w-md">{activeHero.eyebrow && <span className="hero-eyebrow"><AppIcon name="sparkles" size={15} /> {activeHero.eyebrow}</span>}<h1 className={`${activeHero.eyebrow ? 'mt-3' : ''} text-5xl font-black leading-[.95] tracking-tight sm:text-6xl`}>{activeHero.title}</h1><p className="mt-4 text-lg text-slate-200">{activeHero.description}</p><button type="button" onClick={() => document.getElementById('deals')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 px-7 py-3 font-bold text-slate-950 shadow-[0_0_30px_rgba(255,194,55,.35)] transition hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(255,194,55,.55)]">Shop Now <AppIcon name="arrow" size={17} /></button></div>
            {activeHero.note && <div className="hero-note absolute right-7 top-14 z-10 hidden max-w-[150px] -rotate-6 text-right font-serif text-xl italic text-white sm:block">{activeHero.note}</div>}
            <div className="hero-controls absolute right-6 top-6 z-10 flex items-center gap-2"><button type="button" aria-label="Previous slide" onClick={() => setActiveSlide((current) => (current + slides.length - 1) % slides.length)} className="hero-control"><AppIcon name="arrow" size={17} className="rotate-180" /></button><button type="button" aria-label="Next slide" onClick={() => setActiveSlide((current) => (current + 1) % slides.length)} className="hero-control"><AppIcon name="arrow" size={17} /></button></div>
            <div className="hero-benefits absolute bottom-0 left-0 right-0 flex gap-5 border-t border-white/10 bg-[#07182dcc] px-7 py-2.5 text-xs text-slate-200 backdrop-blur"><span><AppIcon name="sparkles" size={16} /><b>Top Brands</b><em>100% Original</em></span><span><AppIcon name="truck" size={16} /><b>Free Shipping</b><em>On orders over $50</em></span><span><AppIcon name="refresh" size={16} /><b>Easy Returns</b><em>30-day policy</em></span></div><div className="hero-dots absolute bottom-3 right-1/2 z-10 flex translate-x-1/2 gap-2">{slides.map((slide, index) => <button key={slide.image} type="button" aria-label={`Show slide ${index + 1}`} aria-current={activeSlide === index} onClick={() => setActiveSlide(index)} className={`h-2 rounded-full transition-all ${activeSlide === index ? 'w-6 bg-white' : 'w-2 bg-cyan-300/60 hover:bg-white'}`} />)}</div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">{categories.map(({ label, filter, icon, image }) => <button key={label} aria-pressed={activeCategory === filter} onClick={() => setActiveCategory(filter)} className={`category-card rounded-xl border p-2.5 text-center transition hover:-translate-y-1 ${activeCategory === filter ? 'border-cyanvolt bg-blue-600/40 shadow-glow' : 'border-blue-300/20 bg-[#0a2240] hover:border-cyanvolt/70'}`}><div className="category-art"><img src={image} alt={`${label} category`} /><span>{icon}</span></div><span className="flex items-center justify-center gap-1 whitespace-nowrap text-[11px] font-semibold">{label} <b className="text-cyanvolt">→</b></span></button>)}</div>

          <div id="deals" className="mt-5 flex items-end justify-between scroll-mt-6"><h2 className="section-heading"><span className="section-icon section-icon-amber"><AppIcon name="flame" size={19} /></span>Featured Deals</h2><button onClick={() => { setActiveCategory('All'); setQuery(''); }} className="inline-flex items-center gap-1 text-sm font-semibold text-cyanvolt transition hover:gap-2 hover:text-white">View All Deals <AppIcon name="arrow" size={16} /></button></div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{dealProducts.map((product) => <article key={product.id} className="product-card group relative rounded-xl border border-blue-200/15 bg-[#0a213d] p-2 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-glow"><span className="absolute left-2.5 top-2.5 z-10 rounded-md bg-rose-500 px-1.5 py-1 text-[11px] font-bold">{product.sale}</span><button type="button" aria-label={`${liked.includes(product.id) ? 'Remove' : 'Add'} ${product.name} ${liked.includes(product.id) ? 'from' : 'to'} wishlist`} aria-pressed={liked.includes(product.id)} onClick={() => toggleLike(product.id)} className="absolute right-2.5 top-2.5 z-10 text-white/90 transition hover:scale-110"><AppIcon name="heart" size={19} className={liked.includes(product.id) ? 'fill-rose-400 text-rose-400' : ''} /></button><Link href={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}><div className={`product-art bg-gradient-to-br ${product.tone}`}><div className="product-shine" /><img src={product.image} alt={product.name} className="product-image" /></div></Link><div className="px-1 pb-1"><h3 className="truncate text-xs font-bold"><Link href={`/product/${product.id}`} className="transition hover:text-cyan-300">{product.name}</Link></h3><p className="mt-1 text-[11px] text-amber-300">★★★★★ <span className="text-slate-300">{product.rating} ({product.reviews})</span></p><div className="mt-1 flex items-end justify-between"><div><span className="text-base font-bold">${product.price}</span> <del className="text-[10px] text-slate-500">${product.oldPrice}</del></div><span className="text-[10px] font-semibold text-emerald-400">● In Stock</span></div><div className="mt-2 flex gap-1"><span className="inline-flex items-center overflow-hidden rounded-md border border-blue-200/20 text-[11px]"><button type="button" aria-label={`Decrease ${product.name} quantity`} onClick={() => changeQuantity(product.id, -1)} className="px-1.5 py-1 hover:bg-blue-500/30">−</button><span className="px-0.5">{quantities[product.id] ?? 1}</span><button type="button" aria-label={`Increase ${product.name} quantity`} onClick={() => changeQuantity(product.id, 1)} className="px-1.5 py-1 hover:bg-blue-500/30">+</button></span><button type="button" onClick={() => addToCart(product.id)} className="flex-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-1.5 text-[11px] font-bold shadow-lg shadow-blue-600/20 transition hover:brightness-110">{cart.includes(product.id) ? 'Added ✓' : 'Add to Cart'}</button></div><label className="compare-control mt-2 flex items-center gap-2 text-[10px] text-slate-300"><input type="checkbox" className="peer sr-only" /><span className="compare-box"><AppIcon name="compare" size={13} /><i>✓</i></span><span>Compare products</span></label></div></article>)}</div>{dealProducts.length === 0 && <div className="mt-4 rounded-xl border border-dashed border-blue-300/30 bg-[#0a213d] p-8 text-center text-sm text-slate-300">No products match your search. <button type="button" onClick={() => { setActiveCategory('All'); setQuery(''); }} className="font-semibold text-cyanvolt underline">Clear filters</button></div>}

          <div id="rooms" className="mt-7 flex items-end justify-between scroll-mt-6"><h2 className="section-heading"><span className="section-icon section-icon-cyan"><AppIcon name="home" size={19} /></span>Shop by Room</h2><button onClick={() => document.getElementById('room-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="inline-flex items-center gap-1 text-sm font-semibold text-cyanvolt transition hover:gap-2 hover:text-white">View All Rooms <AppIcon name="arrow" size={16} /></button></div>
          <div id="room-grid" className="mt-4 grid gap-3 scroll-mt-6 md:grid-cols-3">{[['Kitchen', 'Appliances for a smarter kitchen', '/banners/kitchen-room.png'], ['Living Room', 'Entertainment for brighter moments', '/banners/living-room.png'], ['Gaming Room', 'Level up your space', '/banners/gaming-room.png']].map(([title, sub, image]) => <div key={title} className="room-card rounded-xl p-4" style={{ backgroundImage: `url(${image})` }}><h3 className="relative z-10 mt-16 text-lg font-bold">{title}</h3><p className="relative z-10 text-xs text-slate-200">{sub} <AppIcon name="arrow" size={14} className="inline text-cyanvolt" /></p></div>)}</div>
        </section>

        <aside aria-label="Shopping cart" className={`${cartOpen ? 'block' : 'hidden'} cart-drawer fixed inset-y-0 right-0 z-30 w-[min(92vw,360px)] border-l border-blue-300/20 p-4 shadow-2xl shadow-black/50 lg:static lg:block lg:w-auto lg:rounded-xl lg:border lg:shadow-none`}><div className="relative z-10 flex items-center justify-between"><h2 className="text-lg font-bold">Your Cart <span className="text-slate-400">({cartCount})</span></h2><button aria-label="Close cart" onClick={() => setCartOpen(false)} className="text-slate-300 transition hover:scale-110 hover:text-white"><AppIcon name="close" size={22} /></button></div><div className="relative z-10 mt-4 space-y-2">{cartProducts.map((product) => <div key={product.id} className="cart-item rounded-xl p-3"><div className="flex gap-3"><div className={`cart-art bg-gradient-to-br ${product.tone}`}><img src={product.image} alt={product.name} className="cart-image" /></div><div className="min-w-0 flex-1"><div className="flex justify-between gap-2"><h3 className="truncate text-xs font-bold">{product.name}</h3><button type="button" aria-label={`Remove ${product.name} from cart`} onClick={() => { setCart((current) => current.filter((id) => id !== product.id)); setQuantities((current) => { const next = { ...current }; delete next[product.id]; return next; }); }} className="text-slate-500 hover:text-rose-300"><AppIcon name="close" size={15} /></button></div><p className="mt-1 text-xs text-slate-400">{product.id === 1 ? '256GB  |  Midnight Blue' : product.id === 7 ? 'Black  |  Over-ear' : 'Black  |  Espresso'}</p><div className="mt-3 flex items-center justify-between"><span className="quantity-control inline-flex items-center overflow-hidden rounded-md text-xs"><button type="button" aria-label={`Decrease ${product.name} quantity`} onClick={() => changeQuantity(product.id, -1)} className="px-2 py-1 hover:bg-blue-500/30"><AppIcon name="minus" size={13} /></button><span className="px-1">{quantities[product.id] ?? 1}</span><button type="button" aria-label={`Increase ${product.name} quantity`} onClick={() => changeQuantity(product.id, 1)} className="px-2 py-1 hover:bg-blue-500/30"><AppIcon name="plus" size={13} /></button></span><strong>${product.price * (quantities[product.id] ?? 1)}</strong></div></div></div></div>)}</div><div className="relative z-10 mt-5 border-t border-white/10 pt-4"><div className="flex justify-between text-sm text-slate-300"><span>Subtotal</span><strong className="text-lg text-white">${subtotal}</strong></div><button type="button" className="checkout-button mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 font-bold text-slate-950 transition">Checkout <AppIcon name="arrow" size={17} /></button><p className="mt-4 flex items-center justify-center gap-1 text-xs text-cyan-200"><AppIcon name="shield" size={17} /> Official warranty included</p></div><div className="robot-stage relative z-10"><div className="robot-bubble"><div className="robot-bubble-title"><AppIcon name="sparkles" size={17} /> Shopping Tip!</div><p>Compare products and check official warranty for the best value.</p></div><div className="robot-floor-glow" /><img src="/banners/robot-mascot-transparent.png" alt="ElectroHub shopping assistant" className="robot-stage-image" /></div></aside>
      </div>
      <SiteFooter store />
    </main>
  );
}
