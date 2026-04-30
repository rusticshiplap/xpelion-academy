import express from 'express';
import {
  createGroup,
  getMyGroups,
  getGroupDetails,
  joinGroup,
  leaveGroup,
  getGroupProgress,
} from '../controllers/groupController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.post('/', authenticate, createGroup);
router.get('/', authenticate, getMyGroups);
router.post('/join', authenticate, joinGroup);
router.get('/:groupId', authenticate, getGroupDetails);
router.delete('/:groupId/leave', authenticate, leaveGroup);
router.get('/:groupId/progress', authenticate, getGroupProgress);

export default router;
