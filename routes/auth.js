import express from 'express';
import passport from 'passport';
import { register, login, logout, googleCallback, githubCallback } from '../controllers/authController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', authenticate, logout);

// Google OAuth
router.get('/oauth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/oauth/google/callback', passport.authenticate('google', { session: false }), googleCallback);

// GitHub OAuth
router.get('/oauth/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/oauth/github/callback', passport.authenticate('github', { session: false }), githubCallback);

export default router;
