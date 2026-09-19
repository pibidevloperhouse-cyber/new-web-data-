'use client';

import React, { useState } from 'react';

export function DatasetModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    dataType: 'Vision & Computer Vision',
    dataVolume: '10k - 100k items',
    servicesNeeded: ['Annotation & Labeling', 'Data Validation'],
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const toggleService = (service) => {
    setFormData(prev => {
      const exists = prev.servicesNeeded.includes(service);
      return {
        ...prev,
        servicesNeeded: exists 
          ? prev.servicesNeeded.filter(s => s !== service)
          : [...prev.servicesNeeded, service]
      };
    });
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(11, 37, 64, 0.6)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }} onClick={onClose}>
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        maxWidth: '620px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 24px 48px rgba(11, 37, 64, 0.2)',
        padding: '32px',
        position: 'relative'
      }} onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            fontSize: '1.4rem',
            color: '#5B6472',
            cursor: 'pointer',
            padding: '4px 10px'
          }}
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#EAF7F1',
              color: '#1F8A5F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '1.8rem'
            }}>
              ✓
            </div>
            <h2 style={{ fontFamily: 'var(--font-head)', color: 'var(--navy)', marginBottom: '10px' }}>Dataset Request Received!</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.98rem' }}>
              Thank you, {formData.name || 'there'}! Our AI Data Engineers will review your requirements and reach out within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '24px' }}>
              <div className="eyebrow" style={{ marginBottom: '10px' }}>
                <span className="dot"></span>DATA PIPELINE BUILDER
              </div>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--navy)' }}>Build Your AI Dataset</h2>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', marginTop: '6px' }}>
                Tell us about your project requirements and our team will customize a tailored dataset pipeline.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>Your Name *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="Jane Doe"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>Work Email *</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  placeholder="jane@company.com"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>Primary Data Modality</label>
              <select 
                value={formData.dataType}
                onChange={e => setFormData({...formData, dataType: e.target.value})}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  backgroundColor: '#fff'
                }}
              >
                <option>Vision & Computer Vision (Images/Videos)</option>
                <option>AGI & GenAI Multimodal Data</option>
                <option>Automotive AI (LiDAR, Point Clouds, Sensor)</option>
                <option>Physical AI & Robotics (RGB-D, IMU, Force)</option>
                <option>LLM Fine-Tuning & Text Data</option>
                <option>Speech & Audio Data</option>
              </select>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>Services Required</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  'Data Collection', 
                  'Annotation & Labeling', 
                  'Cleaning & Preparation', 
                  'Validation & QA', 
                  'LLM Fine-Tuning', 
                  'Human-in-the-Loop'
                ].map(s => {
                  const selected = formData.servicesNeeded.includes(s);
                  return (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggleService(s)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '0.82rem',
                        border: selected ? '1px solid var(--blue)' : '1px solid var(--border)',
                        background: selected ? 'var(--blue-tint)' : '#fff',
                        color: selected ? 'var(--blue-deep)' : 'var(--muted)',
                        cursor: 'pointer',
                        fontWeight: selected ? 600 : 400
                      }}
                    >
                      {selected ? '✓ ' : '+ '}{s}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>Project Summary or Specifics</label>
              <textarea 
                rows="3"
                value={formData.details}
                onChange={e => setFormData({...formData, details: e.target.value})}
                placeholder="Describe your dataset requirements, target accuracy, volume, or timeline..."
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button 
                type="button" 
                onClick={onClose} 
                className="cta-btn outline"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="cta-btn"
              >
                Submit Dataset Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
