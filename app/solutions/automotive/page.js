import React from 'react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { IconBadge, Icon } from '@/components/Icons';

export const metadata = {
  title: "Data for Automotive AI | DataHub",
  description: "Annotated visual and sensor data for advanced driver assistance and autonomous vehicle systems.",
};

export default function AutomotivePage() {
  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section className="sub-hero">
        <div className="wrap">
          <Breadcrumb
            items={[
              { label: 'Home', link: '/' },
              { label: 'Solutions', link: '/solutions' },
              { label: 'Data for Automotive AI' }
            ]}
          />

          <div className="agi-hero-card">
            <div className="eyebrow" style={{ color: '#60A5FA' }}>
              <span className="dot" style={{ background: '#60A5FA' }}></span>DATA FOR AUTOMOTIVE AI
            </div>
            <h1>Data Solutions for Automotive AI</h1>
            <p className="lede">
              Annotated visual and sensor data for advanced driver assistance and autonomous vehicle systems.
            </p>
            <p className="body-copy">
              We annotate camera, video, LiDAR and radar data so automotive AI models can be trained and evaluated against real, labeled driving scenes, from lane detection to full autonomous navigation.
            </p>

            <div className="agi-stats-grid">
              <div className="agi-stat-item">
                <div className="val">99.5%</div>
                <div className="lbl">Annotation Accuracy</div>
              </div>
              <div className="agi-stat-item">
                <div className="val">5M+</div>
                <div className="lbl">Labeled Frames</div>
              </div>
              <div className="agi-stat-item">
                <div className="val">3D</div>
                <div className="lbl">LiDAR Point Clouds</div>
              </div>
              <div className="agi-stat-item">
                <div className="val">ADAS</div>
                <div className="lbl">Safety Ready</div>
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
              <span className="dot"></span>CORE CAPABILITIES
            </div>
            <h2>End-to-End Automotive Data Solutions</h2>
            <p className="lede">Three specialized data pillars to power safe and intelligent vehicle systems.</p>
          </div>

          <div className="agi-boxes-container">
            {/* Box 1: Camera & Vision Data */}
            <div className="agi-feature-box">
              <div>
                <IconBadge name="box" />
                <h3 className="agi-box-title">Camera &amp; Vision Data</h3>
                <p className="agi-box-desc">
                  We annotate 2D camera footage with precise bounding boxes, lane markings, traffic signs, pedestrians, and vehicle classifications for ADAS and AV perception models.
                </p>
                <ul className="agi-box-features">
                  <li>
                    <Icon name="check" />
                    <span>2D Bounding Box &amp; Polygon Segmentation</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Lane &amp; Road Marking Detection</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Pedestrian &amp; Vehicle Classification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Box 2: LiDAR & 3D Annotation */}
            <div className="agi-feature-box">
              <div>
                <IconBadge name="layers" />
                <h3 className="agi-box-title">LiDAR &amp; 3D Annotation</h3>
                <p className="agi-box-desc">
                  We label 3D point cloud data from LiDAR sensors with cuboid bounding, object tracking, scene segmentation, and trajectory modeling for autonomous driving systems.
                </p>
                <ul className="agi-box-features">
                  <li>
                    <Icon name="check" />
                    <span>3D Cuboid &amp; Point Cloud Labeling</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Multi-Object Tracking &amp; Trajectories</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Scene Understanding &amp; Segmentation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Box 3: Sensor Fusion & QA */}
            <div className="agi-feature-box">
              <div>
                <IconBadge name="target" />
                <h3 className="agi-box-title">Sensor Fusion &amp; QA</h3>
                <p className="agi-box-desc">
                  We fuse camera, LiDAR, radar, and GPS sensor streams with multi-pass human QA to deliver validated, synchronized datasets ready for production model training.
                </p>
                <ul className="agi-box-features">
                  <li>
                    <Icon name="check" />
                    <span>Camera–LiDAR–Radar Fusion</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Multi-Pass Consensus Verification</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Edge Case &amp; Adverse Condition Coverage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CAPABILITIES CARD GRID ---------- */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <span className="dot"></span>AUTOMOTIVE EXCELLENCE
            </div>
            <h2>Complete Sensor Data Coverage</h2>
            <p className="lede">Comprehensive annotation across every modality your autonomous vehicle stack requires.</p>
          </div>
          <div className="card-grid">
            <div className="card">
              <IconBadge name="eye" />
              <h3>Object Detection &amp; Tracking</h3>
              <p>Annotated vehicles, pedestrians, cyclists, and obstacles with frame-by-frame tracking across diverse driving conditions.</p>
            </div>
            <div className="card">
              <IconBadge name="layers" />
              <h3>3D Point Cloud Labeling</h3>
              <p>Precise LiDAR cuboid annotation with depth, orientation, and velocity attributes for robust spatial perception.</p>
            </div>
            <div className="card">
              <IconBadge name="trend" />
              <h3>Lane &amp; Road Geometry</h3>
              <p>Detailed lane boundary, road surface, and drivable area annotation for navigation and path planning models.</p>
            </div>
            <div className="card">
              <IconBadge name="shield" />
              <h3>Safety &amp; Edge Case Data</h3>
              <p>Curated datasets covering adverse weather, night driving, occlusion scenarios, and rare road events for safety validation.</p>
            </div>
            <div className="card">
              <IconBadge name="database" />
              <h3>Sensor Fusion Datasets</h3>
              <p>Synchronized multi-modal data streams merging camera, LiDAR, radar, and GPS for full-stack AV perception training.</p>
            </div>
            <div className="card">
              <IconBadge name="check" />
              <h3>ADAS Validation &amp; QA</h3>
              <p>Rigorous human audit pipelines ensuring annotation precision meets OEM-grade accuracy for ADAS and autonomous systems.</p>
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
                <span className="dot"></span>AUTOMOTIVE PIPELINE
              </div>
              <h2>End-to-End Automotive Data Lifecycle</h2>
              <p className="lede">How we transform raw sensor recordings into production-ready, model-ready datasets.</p>
            </div>

            <div className="agi-workflow-steps">
              <div className="agi-wf-step">
                <div className="agi-wf-step-num">STEP 01</div>
                <h4>Raw Data Ingestion</h4>
                <p>Secure ingestion of camera, LiDAR, radar, and GPS recordings from test vehicles and simulation environments.</p>
              </div>
              <div className="agi-wf-step">
                <div className="agi-wf-step-num">STEP 02</div>
                <h4>Pre-Labeling &amp; Sync</h4>
                <p>AI-assisted pre-annotation and sensor stream synchronization to accelerate human review speed.</p>
              </div>
              <div className="agi-wf-step">
                <div className="agi-wf-step-num">STEP 03</div>
                <h4>Expert Annotation</h4>
                <p>Domain-trained automotive annotators label 2D, 3D, and sensor fusion data to strict OEM guidelines.</p>
              </div>
              <div className="agi-wf-step">
                <div className="agi-wf-step-num">STEP 04</div>
                <h4>QA &amp; Delivery</h4>
                <p>Multi-pass consensus validation and compliance auditing before structured dataset delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
