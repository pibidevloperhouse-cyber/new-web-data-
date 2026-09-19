'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navbar({ onOpenModal }) {
  const pathname = usePathname();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const [mobileServOpen, setMobileServOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="site-nav">
        <div className="nav-row">
          <Link href="/" className="brand" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Image
              src="/pibi-logo.png"
              alt="DataHub logo"
              width={36}
              height={36}
              style={{ borderRadius: '6px', display: 'block' }}
            />
            DataHub
          </Link>

          <nav className="nav-links">
            <div className="nav-item">
              <Link href="/" className={`nav-link ${isActive('/') && pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </div>

            <div 
              className={`nav-item ${solutionsOpen ? 'open' : ''}`}
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <Link href="/solutions" className={`nav-link ${isActive('/solutions') ? 'active' : ''}`}>
                Solutions 
                <svg viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
              </Link>
              <div className="dropdown">
                <Link href="/solutions/agi-genai">
                  <span>Data for AGI &amp; GenAI</span>
                  <span className="sub-desc">Data for Generative AI, agents &amp; intelligent apps</span>
                </Link>
                <Link href="/solutions/automotive">
                  <span>Data for Automotive AI</span>
                  <span className="sub-desc">Visual &amp; sensor data for vehicle intelligence</span>
                </Link>
                <Link href="/solutions/robotics">
                  <span>Data for Physical AI &amp; Robotics</span>
                  <span className="sub-desc">Multimodal data for real-world AI systems</span>
                </Link>
              </div>
            </div>

            <div 
              className={`nav-item ${servicesOpen ? 'open' : ''}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link href="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
                Services 
                <svg viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
              </Link>
              <div className="dropdown">
                <Link href="/services/collection">AI Data Collection</Link>
                <Link href="/services/annotation">Data Annotation &amp; Labeling</Link>
                <Link href="/services/cleaning">Data Cleaning &amp; Preparation</Link>
                <Link href="/services/validation">Data Validation</Link>
                <Link href="/services/fine-tuning">LLM Fine-Tuning</Link>
                <Link href="/services/hitl">Human-in-the-Loop AI</Link>
                <Link href="/services/governance">AI Data Governance</Link>
              </div>
            </div>

            <div className="nav-item">
              <Link href="/industries" className={`nav-link ${isActive('/industries') ? 'active' : ''}`}>
                Industries
              </Link>
            </div>

            <div className="nav-item">
              <Link href="/tools" className={`nav-link ${isActive('/tools') ? 'active' : ''}`}>
                Tools
              </Link>
            </div>

            <div className="nav-item">
              <Link href="/company" className={`nav-link ${isActive('/company') ? 'active' : ''}`}>
                Company
              </Link>
            </div>
          </nav>

          <div className="nav-cta-wrap">
            <button className="cta-btn" onClick={onOpenModal}>
              Build Your Dataset
            </button>
          </div>

          <button 
            className="burger" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="#0B2540" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Panel */}
      <div className={`mobile-panel ${mobileMenuOpen ? 'show' : ''}`}>
        <div className="mobile-group">
          <Link href="/" className="mobile-top" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        </div>

        <div className="mobile-group">
          <div 
            className="mobile-top" 
            onClick={() => setMobileSolOpen(!mobileSolOpen)}
          >
            Solutions
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="#5B6472" strokeWidth="1.6"/>
            </svg>
          </div>
          <div className={`mobile-sub ${mobileSolOpen ? 'show' : ''}`}>
            <Link href="/solutions" onClick={() => setMobileMenuOpen(false)}>All Solutions</Link>
            <Link href="/solutions/agi-genai" onClick={() => setMobileMenuOpen(false)}>Data for AGI &amp; GenAI</Link>
            <Link href="/solutions/automotive" onClick={() => setMobileMenuOpen(false)}>Data for Automotive AI</Link>
            <Link href="/solutions/robotics" onClick={() => setMobileMenuOpen(false)}>Data for Physical AI &amp; Robotics</Link>
          </div>
        </div>

        <div className="mobile-group">
          <div 
            className="mobile-top" 
            onClick={() => setMobileServOpen(!mobileServOpen)}
          >
            Services
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="#5B6472" strokeWidth="1.6"/>
            </svg>
          </div>
          <div className={`mobile-sub ${mobileServOpen ? 'show' : ''}`}>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
            <Link href="/services/collection" onClick={() => setMobileMenuOpen(false)}>AI Data Collection</Link>
            <Link href="/services/annotation" onClick={() => setMobileMenuOpen(false)}>Data Annotation &amp; Labeling</Link>
            <Link href="/services/cleaning" onClick={() => setMobileMenuOpen(false)}>Data Cleaning &amp; Preparation</Link>
            <Link href="/services/validation" onClick={() => setMobileMenuOpen(false)}>Data Validation</Link>
            <Link href="/services/fine-tuning" onClick={() => setMobileMenuOpen(false)}>LLM Fine-Tuning</Link>
            <Link href="/services/hitl" onClick={() => setMobileMenuOpen(false)}>Human-in-the-Loop AI</Link>
            <Link href="/services/governance" onClick={() => setMobileMenuOpen(false)}>AI Data Governance</Link>
          </div>
        </div>

        <div className="mobile-group">
          <Link href="/industries" className="mobile-top" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
        </div>
        <div className="mobile-group">
          <Link href="/tools" className="mobile-top" onClick={() => setMobileMenuOpen(false)}>Tools</Link>
        </div>
        <div className="mobile-group">
          <Link href="/company" className="mobile-top" onClick={() => setMobileMenuOpen(false)}>Company</Link>
        </div>

        <button 
          className="cta-btn" 
          style={{ width: '100%', marginTop: '20px' }} 
          onClick={() => {
            setMobileMenuOpen(false);
            onOpenModal();
          }}
        >
          Build Your Dataset
        </button>
      </div>
    </>
  );
}
