import React from 'react';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata = {
  title: "AI & Data Engineering Tools | DataLoop AI",
  description: "The platforms and workflows we use across collection, annotation, and human-in-the-loop review.",
};

export default function ToolsPage() {
  return (
    <>
      <section className="sub-hero">
        <div className="wrap">
          <Breadcrumb items={[{ label: 'Home', link: '/' }, { label: 'Tools' }]} />
          <div className="page-heading">
            <h1>Tools</h1>
            <p className="lede">
              The platforms and workflows we use across collection, annotation, and human-in-the-loop review.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="tool-group">
            <h3>Data collection tools</h3>
            <p className="group-note">Frameworks and platforms used to prepare and train AI models.</p>
            <div className="tool-pills">
              <span className="tool-pill">PyTorch</span>
              <span className="tool-pill">TensorFlow</span>
              <span className="tool-pill">Hugging Face</span>
              <span className="tool-pill">Google Vertex AI</span>
              <span className="tool-pill">AWS SageMaker</span>
              <span className="tool-pill">Azure AI</span>
            </div>
          </div>

          <div className="tool-group">
            <h3>Data annotation &amp; data labeling</h3>
            <p className="group-note">Purpose-built tooling for image, video, and object-level labeling.</p>
            <div className="tool-pills">
              <span className="tool-pill">CVAT</span>
              <span className="tool-pill">Roboflow</span>
              <span className="tool-pill">Label Studio</span>
              <span className="tool-pill">V7 Darwin</span>
            </div>
          </div>

          <div className="tool-group">
            <h3>Human in the AI loop</h3>
            <p className="group-note">Review, oversight, and reporting layers that keep people in the loop.</p>
            <div className="tool-pills">
              <span className="tool-pill">Executive Insights</span>
              <span className="tool-pill">Quality Metrics</span>
              <span className="tool-pill">Compliance Reports</span>
              <span className="tool-pill">AI Recommendations</span>
              <span className="tool-pill">Trend Analytics</span>
              <span className="tool-pill">AI Assistant</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
