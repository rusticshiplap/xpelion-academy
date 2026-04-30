import express from 'express';
import {
  saveProgress,
  getProgress,
  getSubjectProgress,
  getStats,
} from '../controllers/progressController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.post('/module', authenticate, saveProgress);
router.get('/', authenticate, getProgress);
router.get('/stats', authenticate, getStats);
router.get('/:domain/:subjectId', authenticate, getSubjectProgress);

export default router;
