import React from 'react';

export const ICONS = {
  alert: '<path d="M12 3L2 20H22L12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 9V14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="17.2" r="0.9" fill="currentColor"/>',
  tag: '<path d="M3 11.5L11.5 3H19V10.5L10.5 19L3 11.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="15" cy="7" r="1.4" stroke="currentColor" stroke-width="1.4"/>',
  layers: '<path d="M12 3L21 8L12 13L3 8L12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M3 13L12 18L21 13" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  users: '<circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M2.5 19C3.3 15.6 6 14 9 14C12 14 14.7 15.6 15.5 19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M15.5 8.5C16.9 8.5 18 7.4 18 6C18 4.6 16.9 3.5 15.5 3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M16.5 14.2C18.9 14.8 20.3 16.3 21 19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  refresh: '<path d="M20 11C19.4 7.1 16 4 12 4C8.7 4 5.8 6 4.5 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M4 4V9H9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 13C4.6 16.9 8 20 12 20C15.3 20 18.2 18 19.5 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M20 20V15H15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  check: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M8 12.3L10.8 15L16 9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  file: '<path d="M6 2H14L19 7V22H6V2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 2V7H19" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12H15M9 16H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.6"/><circle cx="8.5" cy="9.5" r="1.6" stroke="currentColor" stroke-width="1.5"/><path d="M21 16L15.5 11L4 20" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M5 11C5 15 8.1 18 12 18C15.9 18 19 15 19 11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M12 18V22" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  globe: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M3 12H21M12 3C14.5 5.7 15.8 8.7 15.8 12C15.8 15.3 14.5 18.3 12 21C9.5 18.3 8.2 15.3 8.2 12C8.2 8.7 9.5 5.7 12 3Z" stroke="currentColor" stroke-width="1.4"/>',
  target: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/>',
  box: '<path d="M3 8L12 3L21 8V16L12 21L3 16V8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M3 8L12 13L21 8M12 13V21" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  shield: '<path d="M12 2L20 5.5V11C20 16 16.6 19.7 12 21C7.4 19.7 4 16 4 11V5.5L12 2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12L11 14L15.5 9.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  eye: '<path d="M2 12C4 7 7.8 4.5 12 4.5C16.2 4.5 20 7 22 12C20 17 16.2 19.5 12 19.5C7.8 19.5 4 17 2 12Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/>',
  trend: '<path d="M3 17L9.5 10.5L14 15L21 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7H21V13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  database: '<ellipse cx="12" cy="5.5" rx="8" ry="3" stroke="currentColor" stroke-width="1.6"/><path d="M4 5.5V18.5C4 20.2 7.6 21.5 12 21.5C16.4 21.5 20 20.2 20 18.5V5.5" stroke="currentColor" stroke-width="1.6"/><path d="M4 12C4 13.7 7.6 15 12 15C16.4 15 20 13.7 20 12" stroke="currentColor" stroke-width="1.6"/>',
  branch: '<circle cx="6" cy="5" r="2.2" stroke="currentColor" stroke-width="1.6"/><circle cx="6" cy="19" r="2.2" stroke="currentColor" stroke-width="1.6"/><circle cx="18" cy="12" r="2.2" stroke="currentColor" stroke-width="1.6"/><path d="M6 7.2V16.8" stroke="currentColor" stroke-width="1.6"/><path d="M6 7.2C6 11 9 12 15.9 12" stroke="currentColor" stroke-width="1.6"/>',
  sliders: '<path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="9" cy="6" r="1.8" fill="#fff" stroke="currentColor" stroke-width="1.6"/><circle cx="16" cy="12" r="1.8" fill="#fff" stroke="currentColor" stroke-width="1.6"/><circle cx="7" cy="18" r="1.8" fill="#fff" stroke="currentColor" stroke-width="1.6"/>',
  thumb: '<path d="M7 11V21H4V11H7Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7 11L11 3C12.7 3 14 4.3 14 6V9H19C20.1 9 21 10.1 20.8 11.2L19.4 19.2C19.2 20.3 18.3 21 17.2 21H7" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  clip: '<rect x="5" y="4" width="14" height="17" rx="2" stroke="currentColor" stroke-width="1.6"/><rect x="9" y="2" width="6" height="4" rx="1.2" stroke="currentColor" stroke-width="1.6"/><path d="M9 13L11 15L15.5 10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  lock: '<rect x="4" y="10.5" width="16" height="10.5" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M7.5 10.5V7.5C7.5 5 9.5 3 12 3C14.5 3 16.5 5 16.5 7.5V10.5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="15.5" r="1.6" fill="currentColor"/>',
  activity: '<path d="M3 12H7L9.5 5L14.5 19L17 12H21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  settings: '<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M19.5 12C19.5 12.5 19.4 13.1 19.3 13.6L21.3 15.1L19.8 17.7L17.5 16.9C16.7 17.6 15.7 18.1 14.6 18.4L14.2 20.8H11.3L10.9 18.4C9.8 18.1 8.8 17.6 8 16.9L5.7 17.7L4.2 15.1L6.2 13.6C6.1 13.1 6 12.5 6 12C6 11.5 6.1 10.9 6.2 10.4L4.2 8.9L5.7 6.3L8 7.1C8.8 6.4 9.8 5.9 10.9 5.6L11.3 3.2H14.2L14.6 5.6C15.7 5.9 16.7 6.4 17.5 7.1L19.8 6.3L21.3 8.9L19.3 10.4C19.4 10.9 19.5 11.5 19.5 12Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>'
};

export function Icon({ name, className }) {
  const content = ICONS[name] || '';
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
}

export function IconBadge({ name }) {
  return (
    <div class="icon-badge">
      <Icon name={name} />
    </div>
  );
}
