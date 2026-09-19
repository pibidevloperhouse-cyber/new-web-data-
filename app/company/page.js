'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { DatasetModal } from '@/components/DatasetModal';

export default function CompanyPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="sub-hero">
        <div className="wrap">
          <Breadcrumb items={[{ label: 'Home', link: '/' }, { label: 'Company' }]} />
          <div className="page-heading">
            <div className="eyebrow">
              <span className="dot"></span>COMPANY
            </div>
            <h1>Building the Data Behind AI</h1>
            <p className="lede">
              We bring technology and human intelligence together to manage every stage of the data lifecycle from enrichment and validation to annotation and continuous management.
            </p>
            <div className="tagline">Better Data. Better AI.</div>
          </div>
          <div className="cta-row">
            <button className="cta-btn" onClick={() => setModalOpen(true)}>
              Build Your Dataset
            </button>
            <Link href="/services" className="cta-btn outline">
              View Services
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap"></div>
      </section>

      <DatasetModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
