import pool from '../config/database.js';

export class Certificate {
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS certificates (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        certificate_type VARCHAR(50) NOT NULL,
        certificate_id VARCHAR(255) NOT NULL,
        earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        certificate_data JSONB,
        UNIQUE(user_id, certificate_id)
      );

      CREATE INDEX IF NOT EXISTS idx_certificates_user ON certificates(user_id);
      CREATE INDEX IF NOT EXISTS idx_certificates_type ON certificates(certificate_type);
    `;
    try {
      await pool.query(query);
      console.log('Certificates table ready');
    } catch (err) {
      console.error('Error creating certificates table:', err);
    }
  }

  static async earnCertificate({ userId, certificateType, certificateId, certificateData }) {
    const query = `
      INSERT INTO certificates (user_id, certificate_type, certificate_id, certificate_data)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (user_id, certificate_id) DO NOTHING
      RETURNING *
    `;

    const result = await pool.query(query, [userId, certificateType, certificateId, JSON.stringify(certificateData)]);
    return result.rows[0];
  }

  static async getUserCertificates(userId) {
    const query = `
      SELECT id, certificate_type, certificate_id, earned_at, certificate_data
      FROM certificates
      WHERE user_id = $1
      ORDER BY earned_at DESC
    `;
    const result = await pool.query(query, [userId]);
    return result.rows;
  }

  static async hasCertificate(userId, certificateId) {
    const query = `
      SELECT id FROM certificates
      WHERE user_id = $1 AND certificate_id = $2
      LIMIT 1
    `;
    const result = await pool.query(query, [userId, certificateId]);
    return result.rows.length > 0;
  }

  static async getCertificateCount(userId) {
    const query = `
      SELECT COUNT(*) as count FROM certificates WHERE user_id = $1
    `;
    const result = await pool.query(query, [userId]);
    return parseInt(result.rows[0].count);
  }
}
