// API Client for Xpelion backend
// Handles authentication, requests, and token management

const API_BASE = process.env.API_BASE || 'http://localhost:3000/api';

class ApiClient {
  constructor() {
    this.token = localStorage.getItem('xa_token');
    this.user = JSON.parse(localStorage.getItem('xa_user') || 'null');
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('xa_token', token);
  }

  setUser(user) {
    this.user = user;
    localStorage.setItem('xa_user', JSON.stringify(user));
  }

  getAuthHeader() {
    return this.token ? { 'Authorization': `Bearer ${this.token}` } : {};
  }

  async request(endpoint, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...this.getAuthHeader(),
      ...options.headers,
    };

    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
      credentials: 'include', // For cookies
    });

    if (response.status === 401) {
      this.logout();
      throw new Error('Unauthorized');
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: response.statusText }));
      throw new Error(error.error || 'API Error');
    }

    return response.json();
  }

  // Auth endpoints
  async register(email, password, name) {
    const data = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
    this.setToken(data.token);
    this.setUser(data.user);
    return data.user;
  }

  async login(email, password) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    this.setToken(data.token);
    this.setUser(data.user);
    return data.user;
  }

  async logout() {
    localStorage.removeItem('xa_token');
    localStorage.removeItem('xa_user');
    this.token = null;
    this.user = null;
    try {
      await this.request('/auth/logout', { method: 'POST' });
    } catch (e) {
      // Ignore logout errors
    }
  }

  // User endpoints
  async getProfile() {
    return this.request('/users/me');
  }

  async updateProfile(name, avatarUrl) {
    const user = await this.request('/users/me', {
      method: 'PUT',
      body: JSON.stringify({ name, avatarUrl }),
    });
    this.setUser(user);
    return user;
  }

  // Progress endpoints
  async saveProgress(domain, subjectId, moduleId, quizScore, answers) {
    return this.request('/progress/module', {
      method: 'POST',
      body: JSON.stringify({ domain, subjectId, moduleId, quizScore, answers }),
    });
  }

  async getProgress() {
    return this.request('/progress');
  }

  async getSubjectProgress(domain, subjectId) {
    return this.request(`/progress/${domain}/${subjectId}`);
  }

  async getStats() {
    return this.request('/progress/stats');
  }

  // Certificate endpoints
  async getCertificates() {
    return this.request('/certificates');
  }

  async getBadgeUrl(certificateId) {
    return `${API_BASE}/certificates/${certificateId}/badge.svg`;
  }

  // Study groups endpoints
  async createGroup(name, description) {
    return this.request('/groups', {
      method: 'POST',
      body: JSON.stringify({ name, description }),
    });
  }

  async getMyGroups() {
    return this.request('/groups');
  }

  async getGroupDetails(groupId) {
    return this.request(`/groups/${groupId}`);
  }

  async joinGroup(inviteCode) {
    return this.request('/groups/join', {
      method: 'POST',
      body: JSON.stringify({ inviteCode }),
    });
  }

  async leaveGroup(groupId) {
    return this.request(`/groups/${groupId}/leave`, {
      method: 'DELETE',
    });
  }

  async getGroupProgress(groupId) {
    return this.request(`/groups/${groupId}/progress`);
  }

  // Utility
  isAuthenticated() {
    return !!this.token && !!this.user;
  }

  getUser() {
    return this.user;
  }
}

export default new ApiClient();
