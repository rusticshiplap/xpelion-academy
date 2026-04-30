import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import GitHubStrategy from 'passport-github2';
import dotenv from 'dotenv';

import pool from './config/database.js';
import { googleConfig, githubConfig } from './config/auth.js';
import { User } from './models/User.js';
import { Progress } from './models/Progress.js';
import { Certificate } from './models/Certificate.js';
import { StudyGroup } from './models/StudyGroup.js';

import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import progressRoutes from './routes/progress.js';
import certificateRoutes from './routes/certificates.js';
import groupRoutes from './routes/groups.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5000',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Passport Strategies
passport.use(new GoogleStrategy.Strategy(
  {
    clientID: googleConfig.clientID,
    clientSecret: googleConfig.clientSecret,
    callbackURL: googleConfig.callbackURL,
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
));

passport.use(new GitHubStrategy.Strategy(
  {
    clientID: githubConfig.clientID,
    clientSecret: githubConfig.clientSecret,
    callbackURL: githubConfig.callbackURL,
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
));

// Initialize database tables
async function initDatabase() {
  try {
    const connection = await pool.connect();
    console.log('Connected to database');
    connection.release();

    await User.createTable();
    await Progress.createTable();
    await Certificate.createTable();
    await StudyGroup.createTable();
  } catch (err) {
    console.error('Database initialization error:', err);
    process.exit(1);
  }
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/groups', groupRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Xpelion server running on http://localhost:${PORT}`);
    console.log(`Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5000'}`);
  });
});
