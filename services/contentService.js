// Map of subjects to their modules
// This data is synced from js/content.js
export const contentMap = {
  math: {
    arithmetic: { title: 'Arithmetic & Number Sense', modules: ['place-value', 'operations'] },
    'number-theory': { title: 'Number Theory', modules: ['primes'] },
    algebra1: { title: 'Algebra I', modules: ['linear-equations'] },
    geometry: { title: 'Geometry', modules: ['angles', 'triangles', 'area-volume'] },
    trigonometry: { title: 'Trigonometry', modules: ['soh-cah-toa', 'unit-circle', 'identities'] },
    calculus: { title: 'Calculus', modules: ['limits', 'derivatives', 'integrals'] },
    statistics: { title: 'Statistics', modules: ['descriptive', 'probability', 'distributions'] },
    'linear-algebra': { title: 'Linear Algebra', modules: ['vectors', 'matrices', 'determinants'] },
    'differential-equations': { title: 'Differential Equations', modules: ['odes', 'separable', 'growth'] },
    'discrete-math': { title: 'Discrete Mathematics', modules: ['logic', 'combinatorics', 'proofs'] },
  },
  science: {
    'physics-mechanics': { title: 'Physics: Mechanics', modules: ['kinematics', 'newtons-laws', 'energy', 'momentum'] },
    chemistry: { title: 'Chemistry', modules: ['atomic-structure', 'bonding', 'stoichiometry'] },
    biology: { title: 'Biology', modules: ['cell-biology', 'genetics', 'evolution', 'ecology'] },
    'earth-science': { title: 'Earth Science', modules: ['plate-tectonics', 'geology', 'weather'] },
    astronomy: { title: 'Astronomy', modules: ['solar-system', 'stars', 'galaxies'] },
    'physics-em': { title: 'Physics: Electricity & Magnetism', modules: ['electric-fields', 'circuits', 'magnetism'] },
    'physics-quantum': { title: 'Quantum Mechanics', modules: ['wave-particle', 'uncertainty', 'schrodinger'] },
    neuroscience: { title: 'Neuroscience', modules: ['neurons', 'synapses', 'brain-structure'] },
    'environmental-science': { title: 'Environmental Science', modules: ['ecosystems', 'biogeochemical-cycles', 'climate'] },
  },
};

export const subjectsInDomain = {
  math: ['arithmetic', 'number-theory', 'algebra1', 'geometry', 'trigonometry', 'calculus', 'statistics', 'linear-algebra', 'differential-equations', 'discrete-math'],
  science: ['physics-mechanics', 'chemistry', 'biology', 'earth-science', 'astronomy', 'physics-em', 'physics-quantum', 'neuroscience', 'environmental-science'],
};

export function getSubjectTitle(domain, subjectId) {
  return contentMap[domain]?.[subjectId]?.title || subjectId;
}

export function getDomainTitle(domain) {
  return domain.charAt(0).toUpperCase() + domain.slice(1);
}

export function getModulesForSubject(domain, subjectId) {
  return contentMap[domain]?.[subjectId]?.modules || [];
}

export function getSubjectsForDomain(domain) {
  return subjectsInDomain[domain] || [];
}
