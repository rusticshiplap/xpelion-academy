import pool from '../config/database.js';

export class Progress {
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS progress (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        domain VARCHAR(50) NOT NULL,
        subject_id VARCHAR(100) NOT NULL,
        module_id VARCHAR(100) NOT NULL,
        quiz_score INT CHECK (quiz_score >= 0 AND quiz_score <= 100),
        completed_at TIMESTAMP,
        last_accessed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, domain, subject_id, module_id)
      );

      CREATE TABLE IF NOT EXISTS quiz_history (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        module_id VARCHAR(100) NOT NULL,
        score INT NOT NULL CHECK (score >= 0 AND score <= 100),
        answers JSONB,
        attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE INDEX IF NOT EXISTS idx_progress_user ON progress(user_id);
      CREATE INDEX IF NOT EXISTS idx_progress_subject ON progress(user_id, subject_id);
      CREATE INDEX IF NOT EXISTS idx_quiz_history_user ON quiz_history(user_id);
    `;
    try {
      await pool.query(query);
      console.log('Progress tables ready');
    } catch (err) {
      console.error('Error creating progress tables:', err);
    }
  }

  static async saveProgress({ userId, domain, subjectId, moduleId, quizScore }) {
    const completed = quizScore >= 70 ? new Date() : null;

    const query = `
      INSERT INTO progress (user_id, domain, subject_id, module_id, quiz_score, completed_at)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (user_id, domain, subject_id, module_id)
      DO UPDATE SET
        quiz_score = GREATEST(progress.quiz_score, EXCLUDED.quiz_score),
        completed_at = CASE WHEN EXCLUDED.quiz_score >= 70 THEN EXCLUDED.completed_at ELSE progress.completed_at END,
        last_accessed_at = CURRENT_TIMESTAMP,
        updated_at = CURRENT_TIMESTAMP
      RETURNING *
    `;

    const result = await pool.query(query, [userId, domain, subjectId, moduleId, quizScore, completed]);
    return result.rows[0];
  }

  static async getProgress(userId) {
    const query = `
      SELECT domain, subject_id, module_id, quiz_score, completed_at, last_accessed_at
      FROM progress
      WHERE user_id = $1
      ORDER BY updated_at DESC
    `;
    const result = await pool.query(query, [userId]);
    return result.rows;
  }

  static async getSubjectProgress(userId, domain, subjectId) {
    const query = `
      SELECT module_id, quiz_score, completed_at
      FROM progress
      WHERE user_id = $1 AND domain = $2 AND subject_id = $3
      ORDER BY module_id
    `;
    const result = await pool.query(query, [userId, domain, subjectId]);
    return result.rows;
  }

  static async saveQuizAttempt({ userId, moduleId, score, answers }) {
    const query = `
      INSERT INTO quiz_history (user_id, module_id, score, answers)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const result = await pool.query(query, [userId, moduleId, score, JSON.stringify(answers)]);
    return result.rows[0];
  }

  static async getQuizHistory(userId, limit = 50) {
    const query = `
      SELECT module_id, score, attempted_at
      FROM quiz_history
      WHERE user_id = $1
      ORDER BY attempted_at DESC
      LIMIT $2
    `;
    const result = await pool.query(query, [userId, limit]);
    return result.rows;
  }

  static async getLastAccessDate(userId) {
    const query = `
      SELECT MAX(last_accessed_at) as last_access
      FROM progress
      WHERE user_id = $1
    `;
    const result = await pool.query(query, [userId]);
    return result.rows[0]?.last_access;
  }
}
