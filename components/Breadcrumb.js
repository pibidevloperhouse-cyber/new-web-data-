import React from 'react';
import Link from 'next/link';

export function Breadcrumb({ items, dark = false }) {
  const linkColor = dark ? 'rgba(255,255,255,0.65)' : undefined;
  const arrowColor = dark ? 'rgba(255,255,255,0.4)' : '#5B6472';
  const activeColor = dark ? 'rgba(255,255,255,0.92)' : undefined;

  return (
    <div className="crumb" style={dark ? { color: 'rgba(255,255,255,0.65)' } : {}}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <svg viewBox="0 0 12 12" fill="none">
                <path d="M4 2L8 6L4 10" stroke={arrowColor} strokeWidth="1.4"/>
              </svg>
            )}
            {!isLast && item.link ? (
              <Link href={item.link} style={{ color: linkColor }}>{item.label}</Link>
            ) : (
              <span style={{ color: isLast ? activeColor : undefined }}>{item.label}</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
