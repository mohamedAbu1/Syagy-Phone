'use client';

import Link from 'next/link';
import { useState } from 'react';

import { MarketingIcon } from '../../marketing-header';
import type { ProductDetail } from '../../product-data';

export default function ProductDetailView({ product }: { product: ProductDetail }) {
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <section className="product-detail-shell">
      <div className="product-detail-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#deals">Featured deals</Link><span>/</span><strong>{product.name}</strong></div>

      <div className="product-detail-hero">
        <div className={`product-showcase bg-gradient-to-br ${product.tone}`}>
          <span className="product-detail-sale">{product.sale}</span>
          <button type="button" aria-label={liked ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`} aria-pressed={liked} onClick={() => setLiked((current) => !current)} className={`product-detail-wishlist ${liked ? 'is-liked' : ''}`}><MarketingIcon name="heart" size={21} /></button>
          <div className="product-showcase-grid" />
          <img src={product.image} alt={product.name} className="product-detail-image" />
          <span className="product-showcase-badge"><MarketingIcon name="shield" size={15} /> Official warranty</span>
        </div>

        <div className="product-detail-info">
          <span className="product-detail-category">{product.category} <i /> {product.color}</span>
          <div className="product-market-meta"><span className="product-market-icon"><MarketingIcon name="pin" size={17} /></span><span><small>Egypt market type</small><strong>{product.marketType}</strong></span><em>{product.marketCategory}</em></div>
          <h1>{product.name}</h1>
          <div className="product-detail-rating"><span>★★★★★</span><strong>{product.rating}</strong><a href="#reviews">({product.reviews} reviews)</a></div>
          <p className="product-detail-tagline">{product.tagline}</p>
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-price"><strong>${product.price}</strong><del>${product.oldPrice}</del><span>Save ${product.oldPrice - product.price}</span></div>
          <div className="product-detail-availability"><span /><strong>{product.availability}</strong><em>Free delivery over $50</em></div>
          <div className="product-detail-purchase">
            <div className="product-detail-quantity"><button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((current) => Math.max(1, current - 1))}>−</button><strong>{quantity}</strong><button type="button" aria-label="Increase quantity" onClick={() => setQuantity((current) => current + 1)}>+</button></div>
            <button type="button" className={`product-detail-add ${added ? 'is-added' : ''}`} onClick={() => setAdded(true)}>{added ? 'Added to cart ✓' : 'Add to cart'} <MarketingIcon name="arrow" size={17} /></button>
          </div>
          <div className="product-detail-trust"><span><MarketingIcon name="truck" size={17} /><small>Fast delivery<strong>1–3 days</strong></small></span><span><MarketingIcon name="shield" size={17} /><small>Warranty<strong>{product.warranty.replace(' official warranty', '')}</strong></small></span><span><MarketingIcon name="refresh" size={17} /><small>Easy returns<strong>30-day policy</strong></small></span></div>
        </div>
      </div>

      <div className="product-detail-content">
        <section className="product-detail-panel product-highlights-panel">
          <span className="product-detail-eyebrow"><MarketingIcon name="sparkles" size={14} /> At a glance</span>
          <h2>Designed for the way you use it.</h2>
          <div className="product-highlights-grid">{product.highlights.map((highlight) => <div key={highlight}><span className="product-check"><MarketingIcon name="check" size={15} /></span><span>{highlight}</span></div>)}</div>
          <div className="product-detail-copy"><h3>Product description</h3><p>{product.description}</p></div>
        </section>

        <aside className="product-detail-panel product-pros-cons" aria-label="Product pros and cons">
          <span className="product-detail-eyebrow"><MarketingIcon name="heart" size={14} /> Honest look</span>
          <h2>The good and the trade-offs.</h2>
          <div className="pros-cons-list"><div><h3><span className="pros-icon"><MarketingIcon name="check" size={14} /></span>What stands out</h3>{product.pros.map((item) => <p key={item}><MarketingIcon name="check" size={14} />{item}</p>)}</div><div><h3><span className="cons-icon">−</span>Good to know</h3>{product.cons.map((item) => <p key={item}><span className="cons-mark">•</span>{item}</p>)}</div></div>
        </aside>
      </div>

      <section className="product-detail-panel product-specs-panel">
        <div className="product-panel-heading"><div><span className="product-detail-eyebrow"><MarketingIcon name="bolt" size={14} /> Details that matter</span><h2>Specifications</h2></div><span className="product-warranty-chip"><MarketingIcon name="shield" size={15} /> {product.warranty}</span></div>
        <div className="product-specs-grid">{product.specs.map((spec) => <div key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}</div>
      </section>

      <section id="reviews" className="product-detail-panel product-review-panel">
        <div><span className="product-detail-eyebrow"><MarketingIcon name="heart" size={14} /> Customer confidence</span><h2>Loved by everyday users.</h2><p>Real people rate this product <strong>{product.rating}/5</strong> across {product.reviews} verified reviews.</p></div>
        <div className="product-review-score"><strong>{product.rating}</strong><span>★★★★★</span><small>Excellent choice</small></div>
        <Link href="/contact" className="product-review-link">Have a question? Talk to us <MarketingIcon name="arrow" size={15} /></Link>
      </section>
    </section>
  );
}
