'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon, IconBadge } from '@/components/Icons';
import { DatasetModal } from '@/components/DatasetModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">
              <span className="dot"></span>ENTERPRISE AI DATA INFRASTRUCTURE
            </div>
            <h1 className="display">Building Trusted, High-Performance Data Behind AI</h1>
            <p className="lede">
              We combine cutting-edge data pipelines with domain-expert human intelligence to curate, annotate, validate, and govern data across every stage of the AI lifecycle.
            </p>
            <div className="tagline">Better Data. Better Models. Better AI.</div>
            <p className="body-copy">
              From LLMs and Generative AI agents to Autonomous Vehicles and Physical Robotics, we deliver model-ready datasets built for accuracy, safety, and scale.
            </p>
            <div className="cta-row">
              <button className="cta-btn" onClick={() => setModalOpen(true)}>
                Build Your Dataset
              </button>
              <Link href="/solutions" className="cta-btn outline">
                Explore Solutions
              </Link>
            </div>
          </div>
          <div className="hero-art" style={{ padding: 0, overflow: 'hidden', background: 'transparent', border: 'none' }}>
            <Image
              src="/hero-pipeline.jpg"
              alt="AI Data Pipeline, Text, Images, Video, Audio and Structured Data flowing through Cleaning, Labeling and QA into an AI Model"
              width={780}
              height={440}
              style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* KEY STATS COUNTER BAR */}
      <section style={{ background: 'var(--navy)', color: '#fff', padding: '40px 0' }}>
        <div className="wrap">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, color: '#38BDF8' }}>99.8%</div>
              <div style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '4px' }}>Annotation Accuracy Benchmark</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, color: '#34D399' }}>50M+</div>
              <div style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '4px' }}>Annotated Data Points</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, color: '#FBBF24' }}>100+</div>
              <div style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '4px' }}>Languages &amp; Regional Dialects</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, color: '#A78BFA' }}>SOC 2 &amp; HIPAA</div>
              <div style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '4px' }}>Enterprise Compliant Workflows</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION CARDS */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head">
            <h2>Where AI Projects Run Into Trouble</h2>
            <p>Data quality issues quietly undermine model performance in production. We address every friction point.</p>
          </div>
          <div className="card-grid">
            <div className="card">
              <IconBadge name="alert" />
              <h3>Poor Quality &amp; Noise</h3>
              <p>Incomplete, corrupted, or noisy raw data dilutes model intelligence and causes hallucinations.</p>
            </div>
            <div className="card">
              <IconBadge name="tag" />
              <h3>Incorrect labels</h3>
              <p>Conflicting or vague annotation standards lead to poor accuracy and high false-positive rates.</p>
            </div>
            <div className="card">
              <IconBadge name="layers" />
              <h3>Large amount of datas</h3>
              <p>Managing petabytes of multimodal data requires automated pipelines and secure storage infrastructure.</p>
            </div>
            <div className="card">
              <IconBadge name="users" />
              <h3>Lack of Domain Experts</h3>
              <p>Generic annotators miss crucial context required in medical, legal, financial, and robotics data.</p>
            </div>
            <div className="card">
              <IconBadge name="refresh" />
              <h3>Data changes over time</h3>
              <p>Real-world distributions evolve constantly, requiring active monitoring and continuous RLHF re-tuning.</p>
            </div>
            <div className="card good">
              <IconBadge name="check" />
              <h3>Data Ready for AI</h3>
              <p>Clean, structured, domain-verified, and fully audited datasets that accelerate time-to-production.</p>
            </div>
          </div>
        </div>
      </section>



      {/* CORE SERVICES OVERVIEW */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head">
            <h2>Seven Pillars of AI Data Infrastructure</h2>
            <p>Comprehensive data operations supporting your models from raw ingestion to production evaluation.</p>
          </div>

          <div className="provide-list">
            <Link href="/services/collection" className="provide-item" style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <IconBadge name="file" />
              <div>
                <h3>AI Data Collection</h3>
                <p>Custom sourcing of text, image, audio, and specialized domain datasets matching your precise requirements.</p>
              </div>
            </Link>
            <Link href="/services/annotation" className="provide-item" style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <IconBadge name="box" />
              <div>
                <h3>Data Annotation &amp; Labeling</h3>
                <p>2D/3D visual, textual, audio, and multimodal annotation with multi-pass consensus verification.</p>
              </div>
            </Link>
            <Link href="/services/cleaning" className="provide-item" style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <IconBadge name="check" />
              <div>
                <h3>Data Cleaning &amp; Preparation</h3>
                <p>Deduplication, schema normalization, missing value imputation, and noise reduction pipelines.</p>
              </div>
            </Link>
            <Link href="/services/validation" className="provide-item" style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <IconBadge name="target" />
              <div>
                <h3>Data Validation &amp; QA</h3>
                <p>Automated rules engines combined with human audit panels to ensure 99.8%+ precision benchmarks.</p>
              </div>
            </Link>
            <Link href="/services/fine-tuning" className="provide-item" style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <IconBadge name="sliders" />
              <div>
                <h3>LLM Fine-Tuning Data</h3>
                <p>Curated SFT instruction pairs, preference feedback, and domain-adapted corpus formatting.</p>
              </div>
            </Link>
            <Link href="/services/hitl" className="provide-item" style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <IconBadge name="eye" />
              <div>
                <h3>Human-in-the-Loop AI</h3>
                <p>Domain experts providing continuous oversight, edge-case remediation, and model output scoring.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP WORKFLOW TIMELINE */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Our Enterprise Data Pipeline Workflow</h2>
            <p>A rigorous, transparent process that guarantees accuracy, consistency, and complete data lineage.</p>
          </div>

          <div className="numbered-list">
            <div className="numbered-item">
              <div className="num">01</div>
              <div>
                <h3>Dataset Sourcing &amp; Ingestion</h3>
                <p>We source, ingest, or receive raw multimodal data via secure S3, GCP, Azure, or on-premise connectors with full cryptographic data hashing.</p>
              </div>
            </div>
            <div className="numbered-item">
              <div className="num">02</div>
              <div>
                <h3>Pre-Processing &amp; Automated Labeling</h3>
                <p>Automated AI models perform initial cleaning, deduplication, schema alignment, and pre-bounding to accelerate human review speed.</p>
              </div>
            </div>
            <div className="numbered-item">
              <div className="num">03</div>
              <div>
                <h3>Domain Expert Human Annotation</h3>
                <p>Specialized human annotators (engineers, medical pros, linguists) perform detailed labeling adhering strictly to customized guidelines.</p>
              </div>
            </div>
            <div className="numbered-item">
              <div className="num">04</div>
              <div>
                <h3>Multi-Pass Consensus &amp; QA Audit</h3>
                <p>Every sample undergoes algorithmic consensus scoring and random double-blind audits to maintain guaranteed accuracy metrics.</p>
              </div>
            </div>
            <div className="numbered-item">
              <div className="num">05</div>
              <div>
                <h3>Governance &amp; Continuous Delivery</h3>
                <p>Final versioned datasets are delivered with compliance logs, metadata lineage tracking, and automated feedback loops for retraining.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS LINK GRID */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head">
            <h2>Solutions Built Around Your AI Architecture</h2>
            <p>Specialized programs configured specifically for your model's domain and input modalities.</p>
          </div>
          <div className="link-grid">
            <Link href="/solutions/agi-genai" className="link-card">
              <svg className="arrow" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
              <h3>Data for AGI &amp; GenAI</h3>
              <p>Instruction tuning, RLHF, alignment, and evaluation data for advanced LLMs and agentic AI.</p>
            </Link>
            <Link href="/solutions/automotive" className="link-card">
              <svg className="arrow" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
              <h3>Data for Automotive AI</h3>
              <p>Camera, LiDAR, and radar sensor fusion annotations for driver assistance and autonomous navigation.</p>
            </Link>
            <Link href="/solutions/robotics" className="link-card">
              <svg className="arrow" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
              <h3>Data for Physical AI &amp; Robotics</h3>
              <p>RGB-D depth maps, force-torque logs, and teleoperation data for embodied AI systems.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ENTERPRISE TRUST & SECURITY BANNER */}
      <section style={{ background: '#FAFBFD', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '60px 0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <span className="eyebrow"><span className="dot"></span>ENTERPRISE SECURITY &amp; COMPLIANCE</span>
            <h2 style={{ fontSize: '2rem', color: 'var(--navy)', marginTop: '8px' }}>Trusted by Leading AI Enterprises</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', marginTop: '10px' }}>
              We maintain rigid security standards to protect your proprietary intellectual property and sensitive user data.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <Icon name="shield" className="w-6 h-6 text-blue-600 mb-3" />
              <h4 style={{ fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '6px' }}>SOC 2 Type II Certified</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>Rigorous operational controls ensuring confidentiality, privacy, and system security.</p>
            </div>
            <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <Icon name="lock" className="w-6 h-6 text-blue-600 mb-3" />
              <h4 style={{ fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '6px' }}>HIPAA &amp; GDPR Compliant</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>Strict data anonymization and PII removal for healthcare and European user data.</p>
            </div>
            <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <Icon name="database" className="w-6 h-6 text-blue-600 mb-3" />
              <h4 style={{ fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '6px' }}>On-Premise / VPC Deployment</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>Keep data isolated inside your own AWS, GCP, or Azure VPC environment without external transmission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="section" style={{ background: 'var(--navy)', color: '#fff' }}>
        <div className="wrap" style={{ textAlign: 'center', padding: '40px 20px' }}>
          <h2 style={{ color: '#fff', fontSize: '2.4rem', marginBottom: '16px' }}>Ready to Supercharge Your AI Training Data?</h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 32px' }}>
            Partner with{' '}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', verticalAlign: 'middle' }}>
              <Image src="/pibi-logo.png" alt="DataHub logo" width={28} height={28} style={{ borderRadius: '4px', display: 'inline-block' }} />
              <strong style={{ color: '#fff' }}>DataHub</strong>
            </span>{' '}
            to build accurate, domain-verified, and scalable data pipelines for your AI models.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button className="cta-btn" style={{ background: '#1F8A5F', color: '#fff', padding: '14px 28px', fontSize: '0.98rem' }} onClick={() => setModalOpen(true)}>
              Build Your Dataset Now
            </button>
            <Link href="/company" className="cta-btn outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', padding: '14px 28px', fontSize: '0.98rem' }}>
              Contact Our Engineers
            </Link>
          </div>
        </div>
      </section>

      <DatasetModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
