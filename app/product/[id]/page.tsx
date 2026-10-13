import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import MarketingHeader from '../../marketing-header';
import SiteFooter from '../../site-footer';
import { productCatalog } from '../../product-data';
import ProductDetailView from './product-detail';

export function generateStaticParams() {
  return Object.keys(productCatalog).map((id) => ({ id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = productCatalog[params.id];
  return product ? { title: `${product.name} | ElectroHub`, description: product.description } : { title: 'Product | ElectroHub' };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = productCatalog[params.id];
  if (!product) notFound();

  return (
    <main className="marketing-page product-page">
      <div className="marketing-page-glow" />
      <MarketingHeader />
      <ProductDetailView product={product} />
      <SiteFooter />
    </main>
  );
}
