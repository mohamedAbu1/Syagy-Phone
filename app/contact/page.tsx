'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import MarketingHeader, { MarketingIcon } from '../marketing-header';
import SiteFooter from '../site-footer';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="marketing-page">
      <div className="marketing-page-glow" />
      <MarketingHeader active="contact" />
      <section className="marketing-container contact-hero"><span className="marketing-eyebrow"><MarketingIcon name="headset" size={16} /> Contact ElectroHub</span><h1>Let’s make your setup <span>smarter.</span></h1><p>Have a product question, need help choosing, or want an update on an order? Our team is ready to help.</p></section>

      <section className="marketing-container contact-layout">
        <div className="contact-details">
          <div className="contact-detail-intro"><h2>We’re here to help.</h2><p>Reach us through the channel that works best for you. We aim to answer every message with a clear, useful next step.</p></div>
          <div className="contact-detail-list">
            <a href="mailto:support@electrohub.example" className="contact-detail-card"><span className="marketing-card-icon"><MarketingIcon name="mail" size={21} /></span><span><small>Email support</small><strong>support@electrohub.example</strong></span><MarketingIcon name="arrow" size={17} /></a>
            <a href="tel:+18005550148" className="contact-detail-card"><span className="marketing-card-icon"><MarketingIcon name="phone" size={21} /></span><span><small>Call our specialists</small><strong>+1 (800) 555-0148</strong></span><MarketingIcon name="arrow" size={17} /></a>
            <div className="contact-detail-card"><span className="marketing-card-icon"><MarketingIcon name="pin" size={21} /></span><span><small>Visit our showroom</small><strong>New York, NY</strong></span><MarketingIcon name="arrow" size={17} /></div>
          </div>
          <div className="contact-hours"><MarketingIcon name="clock" size={19} /><span><strong>Support hours</strong><small>Monday–Saturday · 9:00 AM–8:00 PM</small></span></div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading"><div><span className="marketing-eyebrow">Send a message</span><h2>Tell us what you need.</h2></div><span className="contact-form-orb"><MarketingIcon name="sparkles" size={23} /></span></div>
          {sent ? <div className="contact-success"><span className="marketing-card-icon"><MarketingIcon name="check" size={24} /></span><h3>Message received.</h3><p>Thanks for reaching out. Our team will get back to you shortly.</p><button type="button" onClick={() => setSent(false)} className="marketing-text-button">Send another message</button></div> : <><div className="contact-form-grid"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label></div><label>How can we help?<select name="topic" defaultValue="general"><option value="general">General question</option><option value="order">Order support</option><option value="product">Product advice</option><option value="returns">Returns & warranty</option></select></label><label>Message<textarea required name="message" rows={5} placeholder="Write your message here..." /></label><button type="submit" className="marketing-button marketing-button-primary contact-submit">Send message <MarketingIcon name="arrow" size={17} /></button></>}
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
