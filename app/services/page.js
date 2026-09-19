import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata = {
  title: "AI Data Services | DataLoop AI",
  description: "Seven data services covering the full AI data lifecycle.",
};

const SERVICES = [
  { slug: 'collection', name: 'AI Data Collection', tagline: 'Gathering the Right Data for Real-World AI' },
  { slug: 'annotation', name: 'Data Annotation & Labeling', tagline: 'Turning Raw Data Into Meaningful AI Training Data' },
  { slug: 'cleaning', name: 'Data Cleaning & Preparation', tagline: 'Turning Complex Data Into Clean, Usable Data' },
  { slug: 'validation', name: 'Data Validation', tagline: 'Making Every Dataset More Reliable' },
  { slug: 'fine-tuning', name: 'LLM Fine-Tuning', tagline: 'Helping Language Models Work Better for Your Use Case' },
  { slug: 'hitl', name: 'Human-in-the-Loop AI', tagline: 'Bringing Human Expertise Into AI' },
  { slug: 'governance', name: 'AI Data Governance', tagline: 'Keeping AI Data Controlled, Reliable, and Responsible' }
];

export default function ServicesLandingPage() {
  return (
    <>
      <section className="sub-hero">
        <div className="wrap">
          <Breadcrumb items={[{ label: 'Home', link: '/' }, { label: 'Services' }]} />
          <div className="page-heading">
            <h1>Services</h1>
            <p className="lede">Seven data services covering the full AI data lifecycle.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="link-grid">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="link-card">
                <svg className="arrow" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
                <h3>{s.name}</h3>
                <p>{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
