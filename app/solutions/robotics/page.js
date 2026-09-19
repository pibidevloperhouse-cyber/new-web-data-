import React from 'react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { IconBadge, Icon } from '@/components/Icons';

export const metadata = {
  title: "Data for Physical AI & Robotics | DataHub",
  description: "Multi-sensor, physics-aware training data that gets your robotic AI systems from controlled environments to real-world deployment.",
};

export default function RoboticsPage() {
  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section className="sub-hero">
        <div className="wrap">
          <Breadcrumb
            items={[
              { label: 'Home', link: '/' },
              { label: 'Solutions', link: '/solutions' },
              { label: 'Data for Physical AI & Robotics' }
            ]}
          />

          <div className="agi-hero-card">
            <div className="eyebrow" style={{ color: '#60A5FA' }}>
              <span className="dot" style={{ background: '#60A5FA' }}></span>DATA FOR PHYSICAL AI &amp; ROBOTICS
            </div>
            <h1>The Data Foundation for Robots That Operate in the Real World</h1>
            <p className="lede">
              Physical AI is a fundamentally different challenge, multi-sensor, physics-constrained, and unforgiving at deployment. We deliver the training data that bridges the gap between the lab and the real world.
            </p>
            <p className="body-copy">
              From manipulation arms and mobile robots to humanoid systems, we label RGB-D, LiDAR, IMU, force-torque and tactile sensor data with the precision and physical context that makes the difference between a model that works in demo and one that works in production.
            </p>

            <div className="agi-stats-grid">
              <div className="agi-stat-item">
                <div className="val">99.6%</div>
                <div className="lbl">Annotation Accuracy</div>
              </div>
              <div className="agi-stat-item">
                <div className="val">6+</div>
                <div className="lbl">Sensor Modalities Supported</div>
              </div>
              <div className="agi-stat-item">
                <div className="val">Multi</div>
                <div className="lbl">Cross-Embodiment Coverage</div>
              </div>
              <div className="agi-stat-item">
                <div className="val">HITL</div>
                <div className="lbl">Human-in-the-Loop QA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- THREE VALUE PILLARS ---------- */}
      <section className="section" style={{ paddingTop: '0px' }}>
        <div className="wrap">
          <div className="section-head" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 12px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="dot"></span>CORE CAPABILITIES
            </div>
            <h2>What Sets Physical AI Data Apart</h2>
            <p className="lede">Three foundational pillars that make robotic training data accurate, diverse, and deployment-ready.</p>
          </div>

          <div className="agi-boxes-container">
            {/* Box 1 */}
            <div className="agi-feature-box">
              <div>
                <IconBadge name="globe" />
                <h3 className="agi-box-title">Data for Every Environment</h3>
                <p className="agi-box-desc">
                  Capability grows with diversity. We power robotic systems with egocentric video, teleoperation recordings, and sensor logs captured across lab setups, factory floors, outdoor environments, and remote digital simulations, spanning hundreds of tasks, object types, and lighting conditions.
                </p>
                <ul className="agi-box-features">
                  <li>
                    <Icon name="check" />
                    <span>Lab, Field &amp; Factory Floor Collection</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Egocentric &amp; Wrist-Mounted Video</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Multi-Task &amp; Multi-Object Diversity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Box 2 */}
            <div className="agi-feature-box">
              <div>
                <IconBadge name="layers" />
                <h3 className="agi-box-title">Unified Multimodal Sensor Data</h3>
                <p className="agi-box-desc">
                  Robotic perception requires more than a single camera. We deliver physics-aware labels, contact points, force interactions, keypoint tracking, spatial reasoning, and action preference annotations, synchronized across LiDAR, RGB-D, IMU, force-torque, and tactile sensors in one integrated pipeline.
                </p>
                <ul className="agi-box-features">
                  <li>
                    <Icon name="check" />
                    <span>Physics-Aware &amp; Contact-Point Labels</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Multi-Sensor Temporal Synchronization</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Keypoint Tracking &amp; Spatial Reasoning</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Box 3 */}
            <div className="agi-feature-box">
              <div>
                <IconBadge name="target" />
                <h3 className="agi-box-title">From Prototype to Production</h3>
                <p className="agi-box-desc">
                  Whether you are running a quick experiment or scaling to long-term batches, our data pipelines adapt to your R&amp;D cycle. We handle hardware setup, secure data management, compliance, and delivery under a single SLA, so your team stays focused on building, not logistics.
                </p>
                <ul className="agi-box-features">
                  <li>
                    <Icon name="check" />
                    <span>Scalable Batch &amp; Continuous Pipelines</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Compliance &amp; Secure Data Management</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>Single SLA from Collection to Delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- R&D LIFECYCLE SECTION ---------- */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">
              <span className="dot"></span>END-TO-END SUPPORT
            </div>
            <h2>Your Data Partner Across the AI Lifecycle</h2>
            <p className="lede">From first data capture to real-world validation, we cover every phase of physical AI development.</p>
          </div>
          <div className="card-grid">
            <div className="card">
              <IconBadge name="database" />
              <h3>Multimodal Pre-Training Coverage</h3>
              <p>We collect and annotate data across sensor types, collection modes, and embodiment configurations, single arm, dual arm, dexterous hands, mobile platforms, and humanoid systems, to build robust pre-training corpora.</p>
            </div>
            <div className="card">
              <IconBadge name="box" />
              <h3>Digital Environment Simulation</h3>
              <p>High-fidelity spatial reconstructions, digital twin data, long-horizon activity sequences, and expert-led teleoperation demonstrations to support sim-to-real transfer and world model grounding.</p>
            </div>
            <div className="card">
              <IconBadge name="sliders" />
              <h3>Physical Context Annotation</h3>
              <p>Our annotation approach links high-level task intent to fine-grained timestep labels, including kinematics, contact dynamics, force interactions, and spatial reasoning, equipping models with the context needed to generalize in real environments.</p>
            </div>
            <div className="card">
              <IconBadge name="refresh" />
              <h3>Advanced Post-Training Data Support</h3>
              <p>We improve decision robustness through explainability narratives, chain-of-thought labels, and human-in-the-loop VLA training with action justifications, all designed to help models handle the complexity of the real world.</p>
            </div>
            <div className="card">
              <IconBadge name="shield" />
              <h3>Rare Scenario Data Coverage</h3>
              <p>Deployment exposes what training conditions didn't prepare for. We design deliberate edge-case collection, rare interactions, adverse conditions, occlusion scenarios, to reduce the gap between training and deployment.</p>
            </div>
            <div className="card">
              <IconBadge name="eye" />
              <h3>Human-AI Quality Validation</h3>
              <p>From recruitment to automated checks to expert human review, every annotation passes through independent verification stages aligned to safety-critical accuracy requirements, not applied as an afterthought.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WORKFLOW PIPELINE ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="agi-workflow-box">
            <div className="section-head" style={{ marginBottom: '0px' }}>
              <div className="eyebrow">
                <span className="dot"></span>ROBOTICS DATA PIPELINE
              </div>
              <h2>How We Deliver Production-Ready Physical AI Data</h2>
              <p className="lede">A structured, end-to-end process from raw sensor capture to model-ready, quality-verified datasets.</p>
            </div>

            <div className="agi-workflow-steps">
              <div className="agi-wf-step">
                <div className="agi-wf-step-num">STEP 01</div>
                <h4>Sensor Setup &amp; Data Capture</h4>
                <p>We configure and manage hardware across lab, field, and factory environments, collecting synchronized RGB-D, LiDAR, IMU, force-torque, and teleoperation data streams.</p>
              </div>
              <div className="agi-wf-step">
                <div className="agi-wf-step-num">STEP 02</div>
                <h4>Pre-Processing &amp; Sync</h4>
                <p>Temporal alignment of multi-modal sensor streams, automated pre-labeling, and noise filtering to prepare data for expert human annotation at speed.</p>
              </div>
              <div className="agi-wf-step">
                <div className="agi-wf-step-num">STEP 03</div>
                <h4>Physics-Aware Expert Annotation</h4>
                <p>Specialized robotics annotators label motion sequences, contact points, spatial context, and action intents, linked from task-level goals to fine-grained timestep precision.</p>
              </div>
              <div className="agi-wf-step">
                <div className="agi-wf-step-num">STEP 04</div>
                <h4>QA, Compliance &amp; Delivery</h4>
                <p>Independent multi-pass quality review, compliance verification, and structured dataset delivery, timed to your R&amp;D milestones with full data lineage documentation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
