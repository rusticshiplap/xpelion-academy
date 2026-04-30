import pool from '../config/database.js';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export class User {
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255),
        name VARCHAR(255),
        google_id VARCHAR(255) UNIQUE,
        github_id VARCHAR(255) UNIQUE,
        avatar_url VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
      CREATE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);
      CREATE INDEX IF NOT EXISTS idx_users_github_id ON users(github_id);
    `;
    try {
      await pool.query(query);
      console.log('Users table ready');
    } catch (err) {
      console.error('Error creating users table:', err);
    }
  }

  static async create({ email, password, name, googleId, githubId, avatarUrl }) {
    const id = uuidv4();
    let passwordHash = null;

    if (password) {
      passwordHash = await bcrypt.hash(password, 10);
    }

    const query = `
      INSERT INTO users (id, email, password_hash, name, google_id, github_id, avatar_url)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, email, name, avatar_url, created_at
    `;

    try {
      const result = await pool.query(query, [
        id,
        email,
        passwordHash,
        name || null,
        googleId || null,
        githubId || null,
        avatarUrl || null,
      ]);
      return result.rows[0];
    } catch (err) {
      if (err.code === '23505') {
        throw new Error('Email already registered');
      }
      throw err;
    }
  }

  static async findById(id) {
    const query = 'SELECT id, email, name, avatar_url, created_at FROM users WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await pool.query(query, [email]);
    return result.rows[0];
  }

  static async findByGoogleId(googleId) {
    const query = 'SELECT * FROM users WHERE google_id = $1';
    const result = await pool.query(query, [googleId]);
    return result.rows[0];
  }

  static async findByGithubId(githubId) {
    const query = 'SELECT * FROM users WHERE github_id = $1';
    const result = await pool.query(query, [githubId]);
    return result.rows[0];
  }

  static async updateOAuthId(userId, provider, providerId) {
    const column = provider === 'google' ? 'google_id' : 'github_id';
    const query = `
      UPDATE users
      SET ${column} = $1, updated_at = CURRENT_TIMESTAMP
      WHERE id = $2
      RETURNING id, email, name, avatar_url
    `;
    const result = await pool.query(query, [providerId, userId]);
    return result.rows[0];
  }

  static async updateProfile(userId, { name, avatarUrl }) {
    const query = `
      UPDATE users
      SET name = COALESCE($1, name), avatar_url = COALESCE($2, avatar_url), updated_at = CURRENT_TIMESTAMP
      WHERE id = $3
      RETURNING id, email, name, avatar_url, created_at
    `;
    const result = await pool.query(query, [name, avatarUrl, userId]);
    return result.rows[0];
  }

  static async verifyPassword(passwordHash, plainPassword) {
    return await bcrypt.compare(plainPassword, passwordHash);
  }
}
