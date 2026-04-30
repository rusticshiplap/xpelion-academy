import { Progress } from '../models/Progress.js';
import { Certificate } from '../models/Certificate.js';
import { getSubjectTitle, getModulesForSubject, getSubjectsForDomain } from '../services/contentService.js';

export const saveProgress = async (req, res) => {
  try {
    const { domain, subjectId, moduleId, quizScore, answers } = req.body;

    if (!domain || !subjectId || !moduleId || quizScore === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Save progress
    const progress = await Progress.saveProgress({
      userId: req.user.id,
      domain,
      subjectId,
      moduleId,
      quizScore,
    });

    // Save quiz history
    await Progress.saveQuizAttempt({
      userId: req.user.id,
      moduleId,
      score: quizScore,
      answers,
    });

    // Check for certificate eligibility
    const certificatesEarned = [];
    if (quizScore >= 70) {
      certificatesEarned.push(await checkAndEarnCertificates(req.user.id, domain, subjectId));
    }

    return res.json({
      progress,
      certificatesEarned: certificatesEarned.filter(Boolean),
    });
  } catch (err) {
    console.error('Save progress error:', err);
    return res.status(500).json({ error: err.message });
  }
};

export const getProgress = async (req, res) => {
  try {
    const progress = await Progress.getProgress(req.user.id);
    return res.json(progress);
  } catch (err) {
    console.error('Get progress error:', err);
    return res.status(500).json({ error: err.message });
  }
};

export const getSubjectProgress = async (req, res) => {
  try {
    const { domain, subjectId } = req.params;
    const progress = await Progress.getSubjectProgress(req.user.id, domain, subjectId);
    return res.json(progress);
  } catch (err) {
    console.error('Get subject progress error:', err);
    return res.status(500).json({ error: err.message });
  }
};

export const getStats = async (req, res) => {
  try {
    const allProgress = await Progress.getProgress(req.user.id);
    const certificates = await Certificate.getUserCertificates(req.user.id);

    // Calculate completion percentages
    const completedModules = allProgress.filter(p => p.completed_at).length;
    const totalModules = allProgress.length;
    const completionPercent = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

    // Calculate domain progress
    const domainProgress = {};
    allProgress.forEach(p => {
      if (!domainProgress[p.domain]) {
        domainProgress[p.domain] = { completed: 0, total: 0 };
      }
      domainProgress[p.domain].total++;
      if (p.completed_at) {
        domainProgress[p.domain].completed++;
      }
    });

    Object.keys(domainProgress).forEach(domain => {
      domainProgress[domain].percent = Math.round(
        (domainProgress[domain].completed / domainProgress[domain].total) * 100
      );
    });

    return res.json({
      completedModules,
      totalModules,
      completionPercent,
      certificatesEarned: certificates.length,
      domainProgress,
      certificates,
    });
  } catch (err) {
    console.error('Get stats error:', err);
    return res.status(500).json({ error: err.message });
  }
};

async function checkAndEarnCertificates(userId, domain, subjectId) {
  // Check if all modules in subject are completed
  const modules = getModulesForSubject(domain, subjectId);
  if (modules.length === 0) return null;

  const subjectProgress = await Progress.getSubjectProgress(userId, domain, subjectId);
  const allModulesCompleted = subjectProgress.length === modules.length &&
    subjectProgress.every(p => p.completed_at);

  if (allModulesCompleted) {
    const certificateId = `${domain}-${subjectId}-certified`;
    const alreadyEarned = await Certificate.hasCertificate(userId, certificateId);

    if (!alreadyEarned) {
      const subjectTitle = getSubjectTitle(domain, subjectId);
      const certificate = await Certificate.earnCertificate({
        userId,
        certificateType: 'subject_complete',
        certificateId,
        certificateData: {
          domain,
          subjectId,
          subjectTitle,
          earnedAt: new Date().toISOString(),
        },
      });
      return certificate;
    }
  }

  return null;
}
