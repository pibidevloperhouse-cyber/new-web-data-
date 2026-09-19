import React from 'react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { IconBadge, Icon } from '@/components/Icons';

export const metadata = {
  title: "Data Solutions for AGI & GenAI | DataLoop AI",
  description: "Building the data foundation for smarter, more capable AI systems.",
};

export default function AgiGenAiPage() {
  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section className="sub-hero">
        <div className="wrap">
          <Breadcrumb 
            items={[
              { label: 'Home', link: '/' },
              { label: 'Solutions', link: '/solutions' },
              { label: 'Data for AGI & GenAI' }
            ]} 
          />

          <div className="agi-hero-card">
            <div className="eyebrow" style={{ color: '#60A5FA' }}>
              <span className="dot" style={{ background: '#60A5FA' }}></span>DATA FOR AGI &amp; GENAI
            </div>
            <h1>Data Solutions for AGI &amp; GenAI</h1>
            <p className="lede">
              Building the data foundation for smarter, more capable AI systems.
            </p>
            <p className="body-copy">
              We create high-quality data for Generative AI, AI agents, and intelligent applications. From data creation and annotation to validation and evaluation, we help businesses build reliable AI systems ready for real-world applications.
            </p>

            <div className="agi-stats-grid">
              <div className="agi-stat-item">
                <div className="val">99.8%</div>
                <div className="lbl">Annotation Accuracy</div>
              </div>
              <div className="agi-stat-item">
                <div className="val">10M+</div>
                <div className="lbl">Tokens &amp; Prompts</div>
              </div>
              <div className="agi-stat-item">
                <div className="val">50+</div>
                <div className="lbl">Supported Modalities</div>
              </div>
              <div className="agi-stat-item">
                <div className="val">RLHF</div>
                <div className="lbl">Human Feedback Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CORE PILLARS IN UNIQUE BOX LAYOUT ---------- */}
      <section className="section" style={{ paddingTop: '0px' }}>
        <div className="wrap">
          <div className="section-head" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 12px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="dot"></span>CORE ARCHITECTURE
            </div>
            <h2>End-to-End AGI Data Capabilities</h2>
            <p className="lede">Structured into 3 powerful boxes designed to deliver high-performance models.</p>
          </div>

          <div className="agi-boxes-container">
            {/* Box 1: AI Training Data */}
            <div className="agi-feature-box">
              <div>
                <IconBadge name="database" />
                <h3 className="agi-box-title">AI Training Data</h3>
                <p className="agi-box-desc">
                  We create, prepare, and improve high-quality data to help Generative AI and advanced AI models learn, understand, and perform complex tasks.
                </p>
                <ul className="agi-box-features">
                  <li>
                    <Icon name="check" />
                    <span>SFT &amp; RLHF Instruction Datasets</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Multimodal Prompt-Response Pairs</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Synthetic &amp; Domain-Specific Data</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Box 2: AI Evaluation & Validation */}
            <div className="agi-feature-box">
              <div>
                <IconBadge name="shield" />
                <h3 className="agi-box-title">AI Evaluation &amp; Validation</h3>
                <p className="agi-box-desc">
                  We test AI outputs for accuracy, relevance, consistency, and safety, helping businesses understand model performance and improve results.
                </p>
                <ul className="agi-box-features">
                  <li>
                    <Icon name="check" />
                    <span>Red-Teaming &amp; Bias Mitigation</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Hallucination Detection Benchmarks</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Human Preference &amp; Expert Rating</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Box 3: AI Data Management */}
            <div className="agi-feature-box">
              <div>
                <IconBadge name="sliders" />
                <h3 className="agi-box-title">AI Data Management</h3>
                <p className="agi-box-desc">
                  We organize, enrich, validate, and continuously manage data throughout the AI lifecycle, keeping it reliable and ready for evolving AI needs.
                </p>
                <ul className="agi-box-features">
                  <li>
                    <Icon name="check" />
                    <span>Continuous Metadata Enrichment</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Automated Data Deduplication</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Governance, Compliance &amp; Audit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MULTIMODAL GRID SECTION ---------- */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <span className="dot"></span>MULTIMODAL EXCELLENCE
            </div>
            <h2>Multimodal Data for Advanced AI</h2>
            <p className="lede">Comprehensive data solutions across text, vision, speech, and structured reasoning.</p>
          </div>
          <div className="card-grid">
            <div className="card">
              <IconBadge name="target" />
              <h3>Training Intelligence</h3>
              <p>High-quality training data designed to help AI models understand instructions, context, and complex real-world tasks.</p>
            </div>
            <div className="card">
              <IconBadge name="trend" />
              <h3>Evaluating AI Performance</h3>
              <p>Structured evaluation of AI outputs to measure accuracy, relevance, consistency, and overall model performance.</p>
            </div>
            <div className="card">
              <IconBadge name="shield" />
              <h3>Testing AI Under Pressure</h3>
              <p>Expert-led testing that identifies unexpected, biased, unsafe, or unreliable AI behavior before deployment.</p>
            </div>
            <div className="card">
              <IconBadge name="globe" />
              <h3>Understanding the World in Every Format</h3>
              <p>Multimodal and multilingual data across text, image, audio, and video to help AI understand diverse content and interactions.</p>
            </div>
            <div className="card">
              <IconBadge name="users" />
              <h3>Human Insight at Scale</h3>
              <p>Human feedback and structured benchmarking to compare AI responses, measure progress, and identify opportunities for improvement.</p>
            </div>
            <div className="card">
              <IconBadge name="box" />
              <h3>Intelligence for Every Industry</h3>
              <p>Domain-specific data designed around industry knowledge, business requirements, and specialized AI applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WORKFLOW PIPELINE BOX ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="agi-workflow-box">
            <div className="section-head" style={{ marginBottom: '0px' }}>
              <div className="eyebrow">
                <span className="dot"></span>AGI PIPELINE
              </div>
              <h2>End-to-End AGI Data Lifecycle</h2>
              <p className="lede">How we turn raw unstructured inputs into enterprise-ready frontier model performance.</p>
            </div>

            <div className="agi-workflow-steps">
              <div className="agi-wf-step">
                <div className="agi-wf-step-num">STEP 01</div>
                <h4>Data Ingestion</h4>
                <p>Gathering &amp; filtering multi-source data with privacy protection.</p>
              </div>
              <div className="agi-wf-step">
                <div className="agi-wf-step-num">STEP 02</div>
                <h4>Expert Annotation</h4>
                <p>Domain expert RLHF, SFT, and complex reasoning labeling.</p>
              </div>
              <div className="agi-wf-step">
                <div className="agi-wf-step-num">STEP 03</div>
                <h4>Red-Teaming &amp; Eval</h4>
                <p>Rigorous safety benchmarks and automated quality control.</p>
              </div>
              <div className="agi-wf-step">
                <div className="agi-wf-step-num">STEP 04</div>
                <h4>Continuous Tuning</h4>
                <p>Active learning loops that continuously upgrade model performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
