import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { jwtConfig } from '../config/auth.js';

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const user = await User.create({ email, password, name });
    const token = jwt.sign({ id: user.id, email: user.email }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });

    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    return res.status(201).json({ user, token });
  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const user = await User.findByEmail(email);
    if (!user || !user.password_hash) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const passwordMatch = await User.verifyPassword(user.password_hash, password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });

    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    return res.json({ user: { id: user.id, email: user.email, name: user.name, avatar_url: user.avatar_url }, token });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: err.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie('token');
  return res.json({ message: 'Logged out' });
};

export const googleCallback = async (req, res) => {
  try {
    const { id, displayName, emails, photos } = req.user;
    const email = emails?.[0]?.value;
    const avatarUrl = photos?.[0]?.value;

    let user = await User.findByGoogleId(id);
    if (!user) {
      user = await User.findByEmail(email);
      if (user) {
        await User.updateOAuthId(user.id, 'google', id);
      } else {
        user = await User.create({
          email,
          name: displayName,
          googleId: id,
          avatarUrl,
        });
      }
    }

    const token = jwt.sign({ id: user.id, email: user.email }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });

    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5000'}?token=${token}`);
  } catch (err) {
    console.error('Google OAuth error:', err);
    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5000'}?error=auth_failed`);
  }
};

export const githubCallback = async (req, res) => {
  try {
    const { id, displayName, username, emails, photos } = req.user;
    const email = emails?.[0]?.value || `${username}@github.com`;
    const avatarUrl = photos?.[0]?.value;

    let user = await User.findByGithubId(id);
    if (!user) {
      user = await User.findByEmail(email);
      if (user) {
        await User.updateOAuthId(user.id, 'github', id);
      } else {
        user = await User.create({
          email,
          name: displayName || username,
          githubId: id,
          avatarUrl,
        });
      }
    }

    const token = jwt.sign({ id: user.id, email: user.email }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });

    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5000'}?token=${token}`);
  } catch (err) {
    console.error('GitHub OAuth error:', err);
    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5000'}?error=auth_failed`);
  }
};
