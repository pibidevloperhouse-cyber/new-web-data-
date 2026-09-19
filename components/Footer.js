import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">DataLoop AI</div>
            <p style={{ color: '#8aa0bd', fontSize: '0.88rem', maxWidth: '32ch' }}>
              Building the data behind AI, from enrichment and validation to annotation and continuous management.
            </p>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <Link href="/solutions/agi-genai">Data for AGI &amp; GenAI</Link>
            <Link href="/solutions/automotive">Data for Automotive AI</Link>
            <Link href="/solutions/robotics">Data for Physical AI &amp; Robotics</Link>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <Link href="/services/collection">AI Data Collection</Link>
            <Link href="/services/annotation">Data Annotation &amp; Labeling</Link>
            <Link href="/services/cleaning">Data Cleaning &amp; Preparation</Link>
            <Link href="/services/validation">Data Validation</Link>
            <Link href="/services/fine-tuning">LLM Fine-Tuning</Link>
            <Link href="/services/hitl">Human-in-the-Loop AI</Link>
            <Link href="/services/governance">AI Data Governance</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/industries">Industries</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/company">Company</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 DataLoop AI. All rights reserved.</span>
          <span>Better Data. Better AI.</span>
        </div>
      </div>
    </footer>
  );
}
