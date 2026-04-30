import pool from '../config/database.js';
import { v4 as uuidv4 } from 'uuid';

export class StudyGroup {
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS study_groups (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        description TEXT,
        created_by UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        invite_code VARCHAR(20) UNIQUE,
        shared_progress BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS study_group_members (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        group_id UUID NOT NULL REFERENCES study_groups(id) ON DELETE CASCADE,
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(group_id, user_id)
      );

      CREATE INDEX IF NOT EXISTS idx_study_groups_creator ON study_groups(created_by);
      CREATE INDEX IF NOT EXISTS idx_study_group_members_user ON study_group_members(user_id);
      CREATE INDEX IF NOT EXISTS idx_study_group_members_group ON study_group_members(group_id);
    `;
    try {
      await pool.query(query);
      console.log('Study groups tables ready');
    } catch (err) {
      console.error('Error creating study groups tables:', err);
    }
  }

  static async create({ name, description, createdBy }) {
    const inviteCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const query = `
      INSERT INTO study_groups (name, description, created_by, invite_code)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const result = await pool.query(query, [name, description, createdBy, inviteCode]);
    const group = result.rows[0];

    // Add creator as member
    await this.addMember(group.id, createdBy);

    return group;
  }

  static async addMember(groupId, userId) {
    const query = `
      INSERT INTO study_group_members (group_id, user_id)
      VALUES ($1, $2)
      ON CONFLICT DO NOTHING
      RETURNING *
    `;
    const result = await pool.query(query, [groupId, userId]);
    return result.rows[0];
  }

  static async removeMember(groupId, userId) {
    const query = `
      DELETE FROM study_group_members
      WHERE group_id = $1 AND user_id = $2
      RETURNING *
    `;
    const result = await pool.query(query, [groupId, userId]);
    return result.rows[0];
  }

  static async getGroupById(groupId) {
    const query = `
      SELECT id, name, description, created_by, invite_code, shared_progress, created_at
      FROM study_groups
      WHERE id = $1
    `;
    const result = await pool.query(query, [groupId]);
    return result.rows[0];
  }

  static async getGroupByInviteCode(inviteCode) {
    const query = `
      SELECT id, name, description, created_by, invite_code, shared_progress, created_at
      FROM study_groups
      WHERE invite_code = $1
    `;
    const result = await pool.query(query, [inviteCode]);
    return result.rows[0];
  }

  static async getUserGroups(userId) {
    const query = `
      SELECT sg.id, sg.name, sg.description, sg.created_by, sg.shared_progress, sg.created_at,
             COUNT(sgm.user_id) as member_count
      FROM study_groups sg
      INNER JOIN study_group_members sgm ON sg.id = sgm.group_id
      WHERE sgm.user_id = $1
      GROUP BY sg.id
      ORDER BY sg.created_at DESC
    `;
    const result = await pool.query(query, [userId]);
    return result.rows;
  }

  static async getGroupMembers(groupId) {
    const query = `
      SELECT u.id, u.email, u.name, u.avatar_url, sgm.joined_at
      FROM study_group_members sgm
      INNER JOIN users u ON sgm.user_id = u.id
      WHERE sgm.group_id = $1
      ORDER BY sgm.joined_at
    `;
    const result = await pool.query(query, [groupId]);
    return result.rows;
  }

  static async getGroupProgress(groupId) {
    const query = `
      SELECT sgm.user_id, u.name, u.avatar_url,
             COUNT(CASE WHEN p.completed_at IS NOT NULL THEN 1 END) as modules_completed,
             COUNT(p.id) as total_modules
      FROM study_group_members sgm
      INNER JOIN users u ON sgm.user_id = u.id
      LEFT JOIN progress p ON sgm.user_id = p.user_id
      WHERE sgm.group_id = $1
      GROUP BY sgm.user_id, u.name, u.avatar_url
      ORDER BY modules_completed DESC
    `;
    const result = await pool.query(query, [groupId]);
    return result.rows;
  }

  static async isMember(groupId, userId) {
    const query = `
      SELECT id FROM study_group_members
      WHERE group_id = $1 AND user_id = $2
    `;
    const result = await pool.query(query, [groupId, userId]);
    return result.rows.length > 0;
  }
}
