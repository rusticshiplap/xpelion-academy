import express from 'express';
import { getCertificates, getBadgeSVG } from '../controllers/certificateController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', authenticate, getCertificates);
router.get('/:certificateId/badge.svg', authenticate, getBadgeSVG);

export default router;
