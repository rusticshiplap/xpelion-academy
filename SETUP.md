# Xpelion Academy — Full-Stack Setup Guide

## Overview

You now have a complete full-stack learning platform with:
- ✅ User authentication (email/password + Google + GitHub OAuth)
- ✅ Cloud-based progress tracking (syncs across devices)
- ✅ Certificate & badge system (subject completion, domain mastery, streaks)
- ✅ Study groups for collaborative learning
- ✅ Dashboard with analytics

---

## Part 1: Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up PostgreSQL Database

**Option A: Local PostgreSQL (Mac with Homebrew)**
```bash
brew install postgresql
brew services start postgresql
createdb xpelion
```

**Option B: PostgreSQL Docker**
```bash
docker run --name xpelion-db \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=xpelion \
  -p 5432:5432 \
  -d postgres:15
```

**Option C: Free Cloud Database**
- Sign up at [Railway.app](https://railway.app), [Render.com](https://render.com), or [ElephantSQL](https://www.elephantsql.com) (free tier)
- Get connection string: `postgresql://user:password@host/dbname`

### 3. Set Up OAuth Credentials

**Google OAuth:**
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable the "Google+ API"
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/oauth/google/callback` (local)
   - `https://yourdomain.com/api/auth/oauth/google/callback` (production)
6. Copy Client ID and Client Secret

**GitHub OAuth:**
1. Go to [GitHub Settings → Developer settings → OAuth Apps](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set:
   - Application name: "Xpelion Academy"
   - Homepage URL: `http://localhost:3000` (or production URL)
   - Authorization callback URL: `http://localhost:3000/api/auth/oauth/github/callback`
4. Copy Client ID and Client Secret

### 4. Create `.env` File

Copy `.env.example` to `.env` and fill in:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/xpelion

# JWT
JWT_SECRET=your-super-secret-key-at-least-32-characters-long
JWT_EXPIRATION=7d

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/oauth/google/callback

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GITHUB_CALLBACK_URL=http://localhost:3000/api/auth/oauth/github/callback

# App
NODE_ENV=development
PORT=3000
FRONTEND_URL=http://localhost:5000
```

### 5. Start the Backend

```bash
npm dev
```

You should see:
```
Xpelion server running on http://localhost:3000
Frontend URL: http://localhost:5000
Connected to database
Users table ready
Progress tables ready
Certificates table ready
Study groups tables ready
```

### 6. Start the Frontend

In a separate terminal, serve the static files:

```bash
# Using Python 3
python3 -m http.server 5000

# Or using Node (install http-server first)
npx http-server -p 5000
```

Visit `http://localhost:5000` in your browser.

---

## Part 2: Features Overview

### User Authentication
- Sign up with email/password
- Login with email/password
- One-click Google sign-in
- One-click GitHub sign-in
- Persistent sessions with JWT tokens

### Progress Tracking
- Auto-sync quiz scores to cloud
- Works offline (syncs when online)
- Viewable on any device
- Quiz history tracking

### Certificates & Badges
Earn certificates for:
- **Subject Completion**: Complete all modules in a subject (e.g., "Algebra I Certified")
- **Domain Completion**: Complete all subjects in a domain (e.g., "Mathematics Mastery")
- **Streak 10**: Learn 10 consecutive days
- **Streak 30**: Learn 30 consecutive days
- **Study Group**: Complete modules with study group friends

### Study Groups
- Create private study groups
- Invite friends with unique codes
- Share progress with group members
- See who's learning what
- Earn group badges together

### Dashboard
- View overall learning progress
- See progress by subject and domain
- View all earned certificates
- Track learning streaks
- Join or create study groups

---

## Part 3: API Endpoints Reference

### Authentication
- `POST /api/auth/register` — Create account
- `POST /api/auth/login` — Login with email/password
- `POST /api/auth/logout` — Logout
- `GET /api/auth/oauth/google` — Start Google login
- `GET /api/auth/oauth/github` — Start GitHub login

### User Profile
- `GET /api/users/me` — Get current user profile
- `PUT /api/users/me` — Update profile

### Progress
- `POST /api/progress/module` — Save quiz attempt
- `GET /api/progress` — Get all progress
- `GET /api/progress/:domain/:subject` — Get subject progress
- `GET /api/progress/stats` — Get stats and certificates

### Certificates
- `GET /api/certificates` — List earned certificates
- `GET /api/certificates/:certificateId/badge.svg` — Get badge image

### Study Groups
- `POST /api/groups` — Create group
- `GET /api/groups` — List your groups
- `POST /api/groups/join` — Join with invite code
- `GET /api/groups/:groupId` — Get group details
- `DELETE /api/groups/:groupId/leave` — Leave group
- `GET /api/groups/:groupId/progress` — View group progress

---

## Part 4: Deployment

### Deploy Backend to Free Tier

**Option 1: Railway.app (Recommended)**
```bash
npm install -g railway
railway login
railway init
railway link <project-id>
railway up
```

**Option 2: Render.com**
1. Push code to GitHub
2. Connect repository on Render.com
3. Set environment variables in dashboard
4. Deploy

**Option 3: Heroku (Legacy free tier deprecated, but still available with paid tiers)**

### Update Production URLs

After deploying:
1. Update `FRONTEND_URL` in backend `.env`
2. Update OAuth callback URLs in Google/GitHub to match production domain
3. Update `API_BASE` in `js/api-client.js` if needed (or detect from domain)

---

## Part 5: Database Schema

### Users
```sql
id (UUID) — Primary key
email (unique) — User email
password_hash — Bcrypt hash of password
name — User's display name
google_id — Google OAuth ID
github_id — GitHub OAuth ID
avatar_url — Profile picture URL
created_at, updated_at — Timestamps
```

### Progress
```sql
id (UUID) — Primary key
user_id (FK) — User ID
domain — 'math' or 'science'
subject_id — Subject identifier (algebra1, chemistry, etc.)
module_id — Module identifier
quiz_score — Score 0-100
completed_at — Timestamp when completed (>= 70%)
last_accessed_at — Last time accessed
created_at, updated_at — Timestamps
```

### Certificates
```sql
id (UUID) — Primary key
user_id (FK) — User ID
certificate_type — Type: subject_complete, domain_complete, streak_10, streak_30, study_group
certificate_id — Unique ID (algebra-1-certified, etc.)
earned_at — When earned
certificate_data (JSON) — Additional data
```

### StudyGroups & StudyGroupMembers
```sql
StudyGroups:
  id (UUID) — Primary key
  name — Group name
  description — Group description
  created_by (FK) — Creator user ID
  invite_code — Unique code for joining
  shared_progress — Boolean for sharing member progress
  created_at, updated_at

StudyGroupMembers:
  id (UUID) — Primary key
  group_id (FK) — Group ID
  user_id (FK) — User ID
  joined_at — When joined
```

---

## Part 6: Troubleshooting

### "Cannot find module 'pg'"
```bash
npm install
```

### "Connection refused" (PostgreSQL)
Make sure PostgreSQL is running:
```bash
brew services start postgresql  # macOS
# or check Docker container is running
```

### "JWT verification failed"
- Ensure JWT_SECRET in `.env` matches what's in the code
- Check token hasn't expired (default 7 days)
- Clear localStorage: `localStorage.removeItem('xa_token')`

### OAuth not working
- Verify callback URLs match exactly in Google/GitHub settings
- Check environment variables are set correctly
- Make sure frontend is on the same domain as callback URL (for dev use localhost)

### Progress not syncing
- Check browser console for errors (F12)
- Verify backend is running on port 3000
- Check Network tab in Dev Tools for failed requests
- Ensure user is authenticated before saving

---

## Part 7: Future Enhancements

✨ **Possible additions:**
- Email verification for registration
- Password reset functionality
- User profiles with public portfolios
- Real-time notifications for new messages
- Live multiplayer quiz sessions
- Leaderboards and competitions
- AI-powered personalized learning paths
- Video tutorials
- Interactive code sandboxes
- Course enrollment with prerequisites
- Certificates as downloadable PDFs
- Certificate sharing on LinkedIn

---

## Questions?

Check the [GitHub issues](https://github.com/rusticshiplap/xpelion-academy) or reach out!
