export type ProductDetail = {
  id: number;
  name: string;
  category: string;
  marketType: string;
  marketCategory: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  sale: string;
  color: string;
  tone: string;
  image: string;
  tagline: string;
  description: string;
  warranty: string;
  availability: string;
  highlights: string[];
  pros: string[];
  cons: string[];
  specs: Array<{ label: string; value: string }>;
};

export const productCatalog: Record<string, ProductDetail> = {
  '1': {
    id: 1, name: 'Nova X1 Smartphone', category: 'Smartphones', marketType: 'Mobile phone / Smartphone', marketCategory: 'Mobile & tablets', price: 699, oldPrice: 879, rating: 4.8, reviews: 320, sale: '-20%', color: 'Midnight Blue', tone: 'from-blue-500/40 via-indigo-500/10 to-cyan-400/10', image: '/products/smartphone.png',
    tagline: 'Powerful enough for your busiest days, refined enough for every moment.',
    description: 'Nova X1 brings a bright 120Hz OLED display, dependable 5G performance, and a versatile camera system together in a comfortable, premium frame. It is designed to keep work, entertainment, and everyday memories moving without friction.',
    warranty: '1 year official warranty', availability: 'In stock · Ships today',
    highlights: ['6.7-inch 120Hz OLED display', 'Nova Neural Core with 5G', 'Pro-grade triple camera system', 'All-day battery with fast charging'],
    pros: ['Cinematic OLED display', 'Fast and reliable daily performance', 'Excellent camera versatility'], cons: ['No expandable storage', 'Premium price bracket'],
    specs: [{ label: 'Display', value: '6.7” OLED · 120Hz' }, { label: 'Processor', value: 'Nova X1 Neural Core' }, { label: 'Storage', value: '256GB' }, { label: 'Camera', value: '50MP triple camera' }, { label: 'Battery', value: 'Up to 28 hours' }, { label: 'Color', value: 'Midnight Blue' }],
  },
  '2': {
    id: 2, name: 'Orbit Pro Laptop 14”', category: 'Laptops', marketType: 'Laptop / Notebook', marketCategory: 'Computers & accessories', price: 899, oldPrice: 1199, rating: 4.7, reviews: 184, sale: '-25%', color: 'Silver', tone: 'from-fuchsia-500/30 via-blue-500/20 to-cyan-300/10', image: '/products/laptop.png',
    tagline: 'A focused, feather-light workstation for work that moves with you.',
    description: 'Orbit Pro pairs a crisp 14-inch display with a quiet performance profile and a battery that keeps pace with long work sessions. Its slim aluminum body is made for cafés, meeting rooms, and creative corners alike.',
    warranty: '1 year official warranty', availability: 'In stock · Ships today',
    highlights: ['14-inch anti-glare display', 'Ultra-quiet performance cooling', 'Backlit precision keyboard', 'All-day battery life'],
    pros: ['Lightweight premium design', 'Comfortable keyboard', 'Strong multitasking performance'], cons: ['Limited port selection', 'RAM is not user-upgradable'],
    specs: [{ label: 'Display', value: '14” 2.8K IPS' }, { label: 'Processor', value: 'Orbit Core i7' }, { label: 'Memory', value: '16GB LPDDR5' }, { label: 'Storage', value: '512GB SSD' }, { label: 'Battery', value: 'Up to 16 hours' }, { label: 'Color', value: 'Silver' }],
  },
  '3': {
    id: 3, name: 'Vision 4K QLED TV 55”', category: 'TV & Home Cinema', marketType: 'Smart TV / QLED screen', marketCategory: 'TVs & home cinema', price: 699, oldPrice: 999, rating: 4.8, reviews: 412, sale: '-30%', color: 'Graphite', tone: 'from-violet-500/40 via-blue-500/20 to-cyan-300/10', image: '/products/tv.png',
    tagline: 'Bring cinematic color and clarity into the center of your home.',
    description: 'Vision 4K turns movie nights and game sessions into a richer experience with vivid QLED color, deep contrast, and a fluid 120Hz picture. The slim frame keeps the focus on the scene, not the screen.',
    warranty: '2 year official warranty', availability: 'In stock · Delivery in 1–3 days',
    highlights: ['4K QLED color engine', '120Hz motion clarity', 'Immersive spatial audio', 'Smart home voice control'],
    pros: ['Rich, accurate colors', 'Excellent motion for gaming', 'Clean minimalist frame'], cons: ['Built-in speakers can be improved', 'Requires a wide stand or wall mount'],
    specs: [{ label: 'Panel', value: '55” 4K QLED' }, { label: 'Refresh rate', value: '120Hz' }, { label: 'HDR', value: 'HDR10+ · Dolby Vision' }, { label: 'Audio', value: '40W spatial audio' }, { label: 'Ports', value: '4× HDMI · 2× USB' }, { label: 'Color', value: 'Graphite' }],
  },
  '4': {
    id: 4, name: 'PureWash 9kg Washer', category: 'Home Appliances', marketType: 'Automatic washing machine', marketCategory: 'Major home appliances', price: 449, oldPrice: 549, rating: 4.6, reviews: 87, sale: '-18%', color: 'Pearl White', tone: 'from-slate-300/35 via-blue-500/20 to-cyan-400/10', image: '/products/washer.png',
    tagline: 'Quiet, efficient care for the clothes you live in.',
    description: 'PureWash makes laundry feel lighter with a generous 9kg drum, quiet cycles, and smart fabric care that adapts each wash. Its efficient design gives busy homes more control with less noise.',
    warranty: '2 year official warranty', availability: 'In stock · Delivery in 1–3 days',
    highlights: ['9kg family-size capacity', 'Quiet inverter motor', 'Steam refresh cycle', 'Smart load sensing'],
    pros: ['Very quiet operation', 'Useful quick-wash cycles', 'Excellent capacity for families'], cons: ['Large footprint', 'Setup requires a water connection'],
    specs: [{ label: 'Capacity', value: '9kg' }, { label: 'Motor', value: 'Quiet inverter' }, { label: 'Spin speed', value: '1400 RPM' }, { label: 'Programs', value: '14 fabric-care cycles' }, { label: 'Energy', value: 'A+++ rated' }, { label: 'Color', value: 'Pearl White' }],
  },
  '5': {
    id: 5, name: 'PlayBox S Gaming Console', category: 'Gaming', marketType: 'Gaming console', marketCategory: 'Gaming & entertainment', price: 389, oldPrice: 499, rating: 4.8, reviews: 276, sale: '-22%', color: 'White', tone: 'from-indigo-400/40 via-blue-500/20 to-purple-400/10', image: '/products/console.png',
    tagline: 'Fast loading, fluid worlds, and more room for play.',
    description: 'PlayBox S is built for players who want quick resume, responsive controls, and a clean entertainment setup. Its compact design fits naturally beside your TV while delivering smooth next-generation gameplay.',
    warranty: '1 year official warranty', availability: 'In stock · Ships today',
    highlights: ['Ultra-fast game loading', '4K-ready visual output', 'Quiet compact chassis', 'Wireless controller included'],
    pros: ['Smooth and responsive gameplay', 'Compact living-room footprint', 'Excellent value for the performance'], cons: ['Storage fills quickly with large games', 'Some accessories sold separately'],
    specs: [{ label: 'Output', value: 'Up to 4K HDR' }, { label: 'Storage', value: '1TB SSD' }, { label: 'Wireless', value: 'Wi‑Fi 6 · Bluetooth 5.2' }, { label: 'Controller', value: 'PlayBox S Wireless' }, { label: 'Audio', value: '3D spatial audio' }, { label: 'Color', value: 'White' }],
  },
  '6': {
    id: 6, name: 'TuneBuds Pro', category: 'Accessories', marketType: 'True wireless earbuds', marketCategory: 'Audio & accessories', price: 99, oldPrice: 139, rating: 4.5, reviews: 121, sale: '-28%', color: 'White', tone: 'from-white/30 via-slate-300/10 to-cyan-400/10', image: '/products/earbuds.png',
    tagline: 'Small earbuds with a surprisingly big, balanced sound.',
    description: 'TuneBuds Pro combines adaptive noise control, a comfortable fit, and a charging case made for everyday carry. The sound is tuned to stay clear on calls and energetic during commutes.',
    warranty: '1 year official warranty', availability: 'In stock · Ships today',
    highlights: ['Adaptive noise cancellation', 'Clear voice calls', '30-hour case battery', 'IPX5 splash resistance'],
    pros: ['Comfortable for long listening', 'Strong battery endurance', 'Clear microphone quality'], cons: ['Bass is less pronounced for some genres', 'Case has no wireless charging'],
    specs: [{ label: 'Audio', value: 'Adaptive ANC' }, { label: 'Battery', value: '8h + 22h case' }, { label: 'Connection', value: 'Bluetooth 5.3' }, { label: 'Protection', value: 'IPX5' }, { label: 'Microphones', value: 'Dual beamforming' }, { label: 'Color', value: 'White' }],
  },
  '7': {
    id: 7, name: 'SoundMax Pro Wireless Headphones', category: 'Accessories', marketType: 'Wireless over-ear headphones', marketCategory: 'Audio & accessories', price: 149, oldPrice: 199, rating: 4.7, reviews: 208, sale: '-25%', color: 'Black', tone: 'from-slate-500/30 via-blue-500/20 to-cyan-400/10', image: '/products/headphones.png',
    tagline: 'Your quiet zone for deep focus, travel, and everything between.',
    description: 'SoundMax Pro surrounds your day with detailed audio and comfortable active noise cancellation. Soft memory-foam cushions, multipoint pairing, and a long battery make it a dependable daily companion.',
    warranty: '1 year official warranty', availability: 'In stock · Ships today',
    highlights: ['Hybrid active noise cancellation', 'Multipoint device pairing', '40-hour battery life', 'Memory-foam comfort fit'],
    pros: ['Excellent comfort', 'Long battery life', 'Strong noise isolation'], cons: ['Larger than compact travel models', 'Touch controls take a little practice'],
    specs: [{ label: 'Audio', value: 'Hi‑Res wireless' }, { label: 'Battery', value: 'Up to 40 hours' }, { label: 'Connection', value: 'Bluetooth 5.3 · Multipoint' }, { label: 'Charging', value: 'USB‑C fast charge' }, { label: 'Weight', value: '248g' }, { label: 'Color', value: 'Black' }],
  },
  '8': {
    id: 8, name: 'BrewMaster Coffee Machine', category: 'Home Appliances', marketType: 'Espresso coffee machine', marketCategory: 'Small kitchen appliances', price: 99, oldPrice: 129, rating: 4.6, reviews: 156, sale: '-23%', color: 'Black', tone: 'from-slate-500/30 via-amber-500/15 to-blue-500/10', image: '/products/coffee-machine-transparent-v2.png',
    tagline: 'Barista-style comfort for the first cup and every cup after.',
    description: 'BrewMaster brings a rich, consistent espresso routine to your countertop with simple controls, a generous water tank, and a steam wand for silky milk. It is compact enough for smaller kitchens and capable enough for daily rituals.',
    warranty: '2 year official warranty', availability: 'In stock · Delivery in 1–3 days',
    highlights: ['15-bar espresso extraction', 'Built-in milk steam wand', 'Removable water tank', 'Compact countertop footprint'],
    pros: ['Great value for home espresso', 'Simple controls', 'Easy-to-clean removable parts'], cons: ['Learning curve for milk texturing', 'No built-in grinder'],
    specs: [{ label: 'Pressure', value: '15-bar pump' }, { label: 'Tank', value: '1.5L removable' }, { label: 'Milk', value: 'Manual steam wand' }, { label: 'Controls', value: 'One-touch espresso' }, { label: 'Power', value: '1350W' }, { label: 'Color', value: 'Black' }],
  },
};
