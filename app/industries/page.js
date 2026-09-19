import React from 'react';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata = {
  title: "Intelligence Across Industries | DataLoop AI",
  description: "Data solutions shaped around the unique challenges, workflows, and AI needs of every industry.",
};

const INDUSTRIES = [
  { n: '01', h: 'Generative AI', p: 'Training, evaluation, and human feedback data for Generative AI and language-based applications.' },
  { n: '02', h: 'Computer Vision', p: 'Image and video data for AI systems that need to identify, understand, and analyze visual information.' },
  { n: '03', h: 'Automotive', p: 'Visual and sensor data for vehicle intelligence, driver-assistance systems, and automotive AI applications.' },
  { n: '04', h: 'Robotics', p: 'Multimodal data that helps robots understand their surroundings and interact with the physical world.' },
  { n: '05', h: 'Healthcare', p: 'Carefully managed data for AI applications supporting healthcare, medical imaging, documentation, and related workflows.' },
  { n: '06', h: 'Retail', p: 'Product, customer, catalog, and visual data for search, recommendations, personalization, and retail applications.' },
  { n: '07', h: 'Manufacturing', p: 'Visual, sensor, and operational data for quality inspection, defect detection, automation, and intelligent manufacturing.' },
  { n: '08', h: 'Search & Recommendation', p: 'Relevant data and user interaction insights for improving search, ranking, discovery, and recommendation systems.' }
];

export default function IndustriesPage() {
  return (
    <>
      <section className="sub-hero">
        <div className="wrap">
          <Breadcrumb items={[{ label: 'Home', link: '/' }, { label: 'Industries' }]} />
          <div className="page-heading">
            <h1>Intelligence Across Industries</h1>
            <p className="lede">
              Data solutions shaped around the unique challenges, workflows, and AI needs of every industry.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {INDUSTRIES.map((ind) => (
            <div key={ind.n} className="industry-row">
              <div className="inum">{ind.n}</div>
              <div>
                <h3>{ind.h}</h3>
                <p>{ind.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
