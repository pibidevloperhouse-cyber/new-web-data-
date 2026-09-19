import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata = {
  title: "Data Training Solutions for AI | DataHub",
  description: "Explore purpose-built data programs for AGI, Generative AI, Automotive AI, and Physical AI & Robotics.",
};

export default function SolutionsLandingPage() {
  return (
    <>
      {/* ── CINEMATIC HERO BANNER ── */}
      <section className="solutions-hero">
        <div className="solutions-hero-overlay" />
        <div className="wrap solutions-hero-content">
          <Breadcrumb
            items={[{ label: 'Home', link: '/' }, { label: 'Solutions' }]}
            dark
          />
          <h1 className="solutions-hero-title">Data Training for AI</h1>
          <p className="solutions-hero-sub">
            Purpose-built data programs that power the world&apos;s most advanced AI models.
          </p>
          <Link href="/company" className="solutions-hero-cta">
            Talk to an AI Data Expert
          </Link>
        </div>
      </section>

      {/* ── SOLUTION CARDS ── */}
      <section className="section">
        <div className="wrap">
          <div className="link-grid">
            <Link href="/solutions/agi-genai" className="link-card">
              <svg className="arrow" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
              <h3>Data for AGI &amp; GenAI</h3>
              <p>Building the data foundation for smarter, more capable AI systems.</p>
            </Link>
            <Link href="/solutions/automotive" className="link-card">
              <svg className="arrow" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
              <h3>Data for Automotive AI</h3>
              <p>Annotated visual and sensor data for advanced driver systems.</p>
            </Link>
            <Link href="/solutions/robotics" className="link-card">
              <svg className="arrow" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
              <h3>Data for Physical AI &amp; Robotics</h3>
              <p>Real-world data for AI systems that act in physical space.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
