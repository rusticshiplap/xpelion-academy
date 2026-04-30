// Authentication UI and modal handling
import apiClient from './api-client.js';

export function initAuthUI() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  const error = urlParams.get('error');

  // Handle OAuth callback
  if (token) {
    apiClient.setToken(token);
    // Fetch user profile
    apiClient.getProfile().then(user => {
      apiClient.setUser(user);
      window.location.replace(window.location.pathname);
    }).catch(e => {
      console.error('Failed to fetch profile:', e);
      window.location.replace(window.location.pathname);
    });
    return;
  }

  if (error) {
    showError(`Authentication failed: ${error}`);
    return;
  }

  // Show login modal if not authenticated
  if (!apiClient.isAuthenticated()) {
    showAuthModal();
  } else {
    updateUserMenu();
  }
}

function showAuthModal() {
  const modal = document.getElementById('authModal') || createAuthModal();
  modal.style.display = 'flex';
}

function createAuthModal() {
  const modal = document.createElement('div');
  modal.id = 'authModal';
  modal.className = 'auth-modal';
  modal.innerHTML = `
    <div class="auth-modal-content">
      <div class="auth-close" onclick="document.getElementById('authModal').style.display = 'none'">×</div>

      <div class="auth-tabs">
        <button class="auth-tab active" data-tab="login">Login</button>
        <button class="auth-tab" data-tab="register">Sign Up</button>
      </div>

      <!-- Login Form -->
      <form id="loginForm" class="auth-form active" onsubmit="handleLogin(event)">
        <h3>Welcome Back</h3>
        <input type="email" placeholder="Email" required class="auth-input">
        <input type="password" placeholder="Password" required class="auth-input">
        <button type="submit" class="auth-button">Login</button>
        <div class="auth-divider">or</div>
        <a href="http://localhost:3000/api/auth/oauth/google" class="auth-oauth">
          <span>🔍</span> Continue with Google
        </a>
        <a href="http://localhost:3000/api/auth/oauth/github" class="auth-oauth">
          <span>🐙</span> Continue with GitHub
        </a>
      </form>

      <!-- Register Form -->
      <form id="registerForm" class="auth-form" onsubmit="handleRegister(event)">
        <h3>Create Account</h3>
        <input type="text" placeholder="Name" class="auth-input">
        <input type="email" placeholder="Email" required class="auth-input">
        <input type="password" placeholder="Password (min 8 chars)" required class="auth-input">
        <button type="submit" class="auth-button">Create Account</button>
        <div class="auth-divider">or</div>
        <a href="http://localhost:3000/api/auth/oauth/google" class="auth-oauth">
          <span>🔍</span> Sign up with Google
        </a>
        <a href="http://localhost:3000/api/auth/oauth/github" class="auth-oauth">
          <span>🐙</span> Sign up with GitHub
        </a>
      </form>
    </div>
  `;

  document.body.appendChild(modal);

  // Tab switching
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
      e.target.classList.add('active');
      document.getElementById(e.target.dataset.tab + 'Form').classList.add('active');
    });
  });

  return modal;
}

window.handleLogin = async (e) => {
  e.preventDefault();
  const form = e.target;
  const [emailInput, passwordInput] = form.querySelectorAll('input');
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    await apiClient.login(email, password);
    document.getElementById('authModal').style.display = 'none';
    updateUserMenu();
    location.reload();
  } catch (err) {
    showError(err.message);
  }
};

window.handleRegister = async (e) => {
  e.preventDefault();
  const form = e.target;
  const [nameInput, emailInput, passwordInput] = form.querySelectorAll('input');
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (password.length < 8) {
    showError('Password must be at least 8 characters');
    return;
  }

  try {
    await apiClient.register(email, password, name);
    document.getElementById('authModal').style.display = 'none';
    updateUserMenu();
    location.reload();
  } catch (err) {
    showError(err.message);
  }
};

function updateUserMenu() {
  const user = apiClient.getUser();
  const navRight = document.querySelector('.nav-links');

  if (apiClient.isAuthenticated()) {
    // Remove search and explore button, add user menu
    let userMenu = document.getElementById('userMenu');
    if (!userMenu) {
      userMenu = document.createElement('div');
      userMenu.id = 'userMenu';
      userMenu.className = 'user-menu';
      userMenu.innerHTML = `
        <button class="user-menu-btn">
          <img src="${user?.avatar_url || 'https://via.placeholder.com/32'}" alt="Profile" class="user-avatar">
          <span>${user?.name || user?.email}</span>
        </button>
        <div class="user-menu-dropdown">
          <a href="dashboard.html">📊 Dashboard</a>
          <a href="study-groups.html">👥 Study Groups</a>
          <hr>
          <button onclick="logout()">Logout</button>
        </div>
      `;
      navRight.parentElement.appendChild(userMenu);

      userMenu.querySelector('.user-menu-btn').addEventListener('click', (e) => {
        const dropdown = userMenu.querySelector('.user-menu-dropdown');
        dropdown.classList.toggle('active');
        e.stopPropagation();
      });

      document.addEventListener('click', () => {
        const dropdown = userMenu.querySelector('.user-menu-dropdown');
        if (dropdown) dropdown.classList.remove('active');
      });
    }
  }
}

window.logout = async () => {
  await apiClient.logout();
  location.reload();
};

function showError(message) {
  const errorEl = document.querySelector('.auth-error') || document.createElement('div');
  errorEl.className = 'auth-error';
  errorEl.textContent = message;
  if (!errorEl.parentElement) {
    document.body.appendChild(errorEl);
  }
  setTimeout(() => errorEl.remove(), 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initAuthUI);
