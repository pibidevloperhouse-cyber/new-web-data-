import React from 'react';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { IconBadge } from '@/components/Icons';
import { ArtGeneric } from '@/components/Illustrations';

const SERVICES_DATA = {
  'collection': {
    name: 'AI Data Collection',
    tagline: 'Gathering the Right Data for Real-World AI',
    intro: 'AI systems need relevant and reliable data to learn effectively. We collect data from suitable sources and environments based on your business requirements, AI use case, industry, and target audience.',
    art: 'collect',
    items: [
      { icon: 'file', h: 'Text Data Collection', p: 'Collect relevant text from approved sources for AI training, language models, search, and other applications.' },
      { icon: 'image', h: 'Image & Video Collection', p: 'Capture and source visual data for computer vision, automotive AI, robotics, and other visual intelligence applications.' },
      { icon: 'mic', h: 'Audio & Speech Data', p: 'Collect voice and audio data across different languages, accents, environments, and use cases.' },
      { icon: 'globe', h: 'Multilingual Data Collection', p: 'Build datasets across languages and regions to help AI systems work effectively with diverse users.' },
      { icon: 'target', h: 'Domain-Specific Data', p: 'Collect specialized data based on industry requirements, business processes, and specific AI applications.' }
    ],
    why: 'The right data gives AI models the information they need to learn from real-world situations and deliver useful results.'
  },
  'annotation': {
    name: 'Data Annotation & Labeling',
    tagline: 'Turning Raw Data Into Meaningful AI Training Data',
    intro: 'Raw data alone is difficult for AI models to understand. We add meaningful labels and information to images, videos, text, audio, and other data so AI systems can learn from them.',
    art: 'annotation',
    items: [
      { icon: 'box', h: 'Image Annotation', p: 'Bounding boxes, polygons, key points, segmentation, and other labels for computer vision applications.' },
      { icon: 'image', h: 'Video Annotation', p: 'Object tracking, activity recognition, event labeling, and frame-by-frame annotation.' },
      { icon: 'file', h: 'Text Annotation', p: 'Entity identification, sentiment, intent, classification, and other language-based labeling.' },
      { icon: 'mic', h: 'Audio Annotation', p: 'Speech transcription, speaker identification, sound classification, and audio event labeling.' },
      { icon: 'sliders', h: 'Specialized Annotation', p: 'Custom annotation workflows designed around your AI model, industry, and project requirements.' }
    ],
    why: 'Accurate labeling helps AI models understand patterns, recognize objects, interpret language, and make better predictions.'
  },
  'cleaning': {
    name: 'Data Cleaning & Preparation',
    tagline: 'Turning Complex Data Into Clean, Usable Data',
    intro: 'Data often contains errors, duplicates, missing information, and inconsistent formats. We clean and organize your data so it is ready for analytics, AI training, and business applications.',
    art: 'clean',
    items: [
      { icon: 'check', h: 'Data Cleaning', p: 'Identify and correct errors, duplicates, missing values, and inconsistencies.' },
      { icon: 'file', h: 'Data Formatting', p: 'Convert data into consistent formats that are easier to process and use.' },
      { icon: 'branch', h: 'Data Transformation', p: 'Restructure and transform data according to specific business or AI requirements.' },
      { icon: 'layers', h: 'Data Organization', p: 'Structure large datasets so they can be easily accessed, processed, and managed.' },
      { icon: 'database', h: 'Data Preparation', p: 'Prepare clean and organized datasets for AI models, analytics, and other applications.' }
    ],
    why: 'Clean and properly prepared data reduces errors and creates a stronger foundation for accurate analysis and AI development.'
  },
  'validation': {
    name: 'Data Validation',
    tagline: 'Making Every Dataset More Reliable',
    intro: 'Good data needs to be checked before it is used. Our validation processes identify errors, inconsistencies, and quality issues to ensure your datasets meet defined requirements.',
    art: 'validate',
    items: [
      { icon: 'target', h: 'Accuracy Checks', p: 'Review data and labels to identify incorrect information.' },
      { icon: 'shield', h: 'Quality Reviews', p: 'Check datasets against predefined quality standards and project guidelines.' },
      { icon: 'branch', h: 'Consistency Checks', p: 'Identify differences in formatting, labeling, and data structure.' },
      { icon: 'eye', h: 'Human Review', p: 'Use trained reviewers to verify complex or sensitive data where automated checks may not be enough.' },
      { icon: 'activity', h: 'Continuous Quality Monitoring', p: 'Monitor data quality throughout the project and identify issues early.' }
    ],
    why: 'Reliable data helps reduce errors in AI models and supports better outcomes across training, testing, and production.'
  },
  'fine-tuning': {
    name: 'LLM Fine-Tuning',
    tagline: 'Helping Language Models Work Better for Your Use Case',
    intro: 'General-purpose language models may not understand every business requirement. We support organizations in preparing high-quality data for fine-tuning and adapting language models to specific tasks and domains.',
    art: 'finetune',
    items: [
      { icon: 'sliders', h: 'Instruction Data Creation', p: 'Create structured examples that teach models how to respond to specific instructions.' },
      { icon: 'target', h: 'Domain-Specific Data', p: 'Prepare datasets around specialized business and industry knowledge.' },
      { icon: 'clip', h: 'Response Evaluation', p: 'Review model responses for accuracy, relevance, clarity, and consistency.' },
      { icon: 'thumb', h: 'Preference Data', p: 'Create human-reviewed examples that help identify which responses better meet defined requirements.' },
      { icon: 'database', h: 'Fine-Tuning Data Preparation', p: 'Clean, structure, validate, and format datasets for fine-tuning workflows.' }
    ],
    why: 'Well-prepared fine-tuning data can help language models perform more effectively on specific tasks and business requirements.'
  },
  'hitl': {
    name: 'Human-in-the-Loop AI',
    tagline: 'Bringing Human Expertise Into AI',
    intro: 'AI can automate many tasks, but human expertise remains important for complex decisions, quality checks, and situations that require context. We combine AI-driven workflows with human review where it matters most.',
    art: 'hitl',
    items: [
      { icon: 'eye', h: 'Human Review', p: 'Experts review AI-generated results and identify errors or inconsistencies.' },
      { icon: 'clip', h: 'AI Output Evaluation', p: 'Assess AI responses based on defined quality, accuracy, and relevance criteria.' },
      { icon: 'thumb', h: 'Human Feedback', p: 'Provide structured feedback that can help improve AI system performance.' },
      { icon: 'shield', h: 'Expert Validation', p: 'Use domain knowledge to review complex data and AI outputs.' },
      { icon: 'refresh', h: 'Continuous Improvement', p: 'Feed human insights back into the workflow to support ongoing AI improvement.' }
    ],
    why: 'Human expertise adds context, judgment, and quality control where automated systems may not be enough.'
  },
  'governance': {
    name: 'AI Data Governance',
    tagline: 'Keeping AI Data Controlled, Reliable, and Responsible',
    intro: 'As businesses use more data for AI, they need clear processes for managing, protecting, and monitoring that data. We help establish structured data governance practices across the AI data lifecycle.',
    art: 'governance',
    items: [
      { icon: 'target', h: 'Data Quality Management', p: 'Define and monitor standards to maintain reliable data.' },
      { icon: 'lock', h: 'Data Access & Control', p: 'Support appropriate access to data based on roles and business requirements.' },
      { icon: 'branch', h: 'Data Tracking', p: 'Maintain visibility into where data comes from, how it is processed, and where it is used.' },
      { icon: 'clip', h: 'Data Standards', p: 'Create consistent rules for managing and handling AI data.' },
      { icon: 'activity', h: 'Ongoing Monitoring', p: 'Monitor data quality and processes as datasets and AI requirements evolve.' }
    ],
    why: 'Strong data governance helps organizations maintain better control, quality, consistency, and accountability across their AI data.'
  }
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA[resolvedParams.slug];
  if (!service) return { title: 'Service Not Found | DataLoop AI' };
  return {
    title: `${service.name} | DataLoop AI`,
    description: service.tagline,
  };
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="sub-hero">
        <div className="wrap">
          <Breadcrumb 
            items={[
              { label: 'Home', link: '/' },
              { label: 'Services', link: '/services' },
              { label: service.name }
            ]} 
          />
          <div className="split" style={{ marginTop: '32px' }}>
            <div>
              <div className="eyebrow">
                <span className="dot"></span>{service.name.toUpperCase()}
              </div>
              <h1 className="display" style={{ fontSize: 'clamp(2rem, 3.4vw, 2.6rem)' }}>
                {service.tagline}
              </h1>
              <p className="body-copy" style={{ marginTop: '18px' }}>
                {service.intro}
              </p>
            </div>
            <div className="split-art">
              <ArtGeneric seed={service.art} />
            </div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="section-head">
            <h2>What We Provide</h2>
          </div>
          <div className="provide-list">
            {service.items.map((item, idx) => (
              <div key={idx} className="provide-item">
                <IconBadge name={item.icon} />
                <div>
                  <h3>{item.h}</h3>
                  <p>{item.p}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="why-band">
            <IconBadge name="check" />
            <div>
              <h4>Why It Matters</h4>
              <p>{service.why}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
