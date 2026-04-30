import { Certificate } from '../models/Certificate.js';

export const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.getUserCertificates(req.user.id);
    return res.json(certificates);
  } catch (err) {
    console.error('Get certificates error:', err);
    return res.status(500).json({ error: err.message });
  }
};

export const getBadgeSVG = async (req, res) => {
  try {
    const { certificateId } = req.params;
    const certificates = await Certificate.getUserCertificates(req.user.id);
    const cert = certificates.find(c => c.certificate_id === certificateId);

    if (!cert) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    const badgeTitle = cert.certificate_data?.subjectTitle || certificateId;
    const svg = generateBadgeSVG(badgeTitle, certificateId);

    res.setHeader('Content-Type', 'image/svg+xml');
    return res.send(svg);
  } catch (err) {
    console.error('Get badge SVG error:', err);
    return res.status(500).json({ error: err.message });
  }
};

function generateBadgeSVG(title, certificateId) {
  const colors = {
    subject_complete: '#4f46e5',
    domain_complete: '#7c3aed',
    streak_10: '#f59e0b',
    streak_30: '#ec4899',
    study_group: '#10b981',
  };

  const type = certificateId.includes('streak-30') ? 'streak_30'
    : certificateId.includes('streak-10') ? 'streak_10'
    : certificateId.includes('study-group') ? 'study_group'
    : certificateId.includes('mastered') ? 'domain_complete'
    : 'subject_complete';

  const color = colors[type] || '#4f46e5';
  const emoji = type === 'streak_10' ? '🔥'
    : type === 'streak_30' ? '⭐'
    : type === 'study_group' ? '👥'
    : type === 'domain_complete' ? '🏆'
    : '✓';

  return `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color}dd;stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#grad)" stroke="white" stroke-width="3"/>
      <text x="100" y="85" font-size="48" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
      <text x="100" y="130" font-size="14" text-anchor="middle" font-weight="bold" fill="white">${title}</text>
    </svg>
  `;
}
