/* ============================================================
   XPELION ACADEMY — APP ENGINE
   Navigation, search, progress tracking, quiz engine
   ============================================================ */

/* ── NAV SCROLL BEHAVIOR ─────────────────────────────────── */
(function() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
})();

/* ── MOBILE MENU ─────────────────────────────────────────── */
(function() {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
})();

/* ── NAV SEARCH ──────────────────────────────────────────── */
(function() {
  const input = document.getElementById('navSearchInput');
  if (!input) return;
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      window.location.href = `search.html?q=${encodeURIComponent(input.value.trim())}`;
    }
  });
})();

/* ── HERO SEARCH ─────────────────────────────────────────── */
(function() {
  const btn  = document.getElementById('heroSearchBtn');
  const inp  = document.getElementById('heroSearchInput');
  if (!btn || !inp) return;
  function go() {
    const q = inp.value.trim();
    if (q) window.location.href = `search.html?q=${encodeURIComponent(q)}`;
  }
  btn.addEventListener('click', go);
  inp.addEventListener('keydown', e => e.key === 'Enter' && go());
})();

/* ── PROGRESS TRACKING ───────────────────────────────────── */
const Progress = {
  key: 'xa_progress',
  get() {
    try { return JSON.parse(localStorage.getItem(this.key)) || {}; }
    catch { return {}; }
  },
  set(data) {
    try { localStorage.setItem(this.key, JSON.stringify(data)); } catch {}
  },
  markDone(domain, subjectId, moduleId) {
    const d = this.get();
    if (!d[domain]) d[domain] = {};
    if (!d[domain][subjectId]) d[domain][subjectId] = {};
    d[domain][subjectId][moduleId] = { done: true, ts: Date.now() };
    this.set(d);
  },
  isDone(domain, subjectId, moduleId) {
    const d = this.get();
    return !!(d[domain]?.[subjectId]?.[moduleId]?.done);
  },
  subjectPercent(domain, subjectId) {
    const subject = XA[domain]?.[subjectId];
    if (!subject?.modules?.length) return 0;
    const done = subject.modules.filter(m => this.isDone(domain, subjectId, m.id)).length;
    return Math.round((done / subject.modules.length) * 100);
  }
};

/* ── TABS ────────────────────────────────────────────────── */
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    tabGroup.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const panels = tabGroup.closest('.tab-container')?.querySelectorAll('.tab-panel')
                     || document.querySelectorAll('.tab-panel');
        panels.forEach(p => p.classList.toggle('active', p.dataset.panel === target));
      });
    });
  });
}

/* ── FILTER CHIPS ────────────────────────────────────────── */
function initChips() {
  document.querySelectorAll('.filter-chips').forEach(group => {
    group.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        group.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const filter = chip.dataset.filter;
        const container = document.querySelector(chip.dataset.target || '.filterable-grid');
        if (!container) return;
        container.querySelectorAll('[data-tags]').forEach(card => {
          const tags = card.dataset.tags?.split(',') || [];
          card.style.display = (filter === 'all' || tags.includes(filter)) ? '' : 'none';
        });
      });
    });
  });
}

/* ── QUIZ ENGINE ─────────────────────────────────────────── */
function initQuizzes() {
  document.querySelectorAll('.quiz-section').forEach(section => {
    const questions = section.querySelectorAll('.quiz-question');
    let score = 0, answered = 0;

    questions.forEach((qEl, qi) => {
      const options   = qEl.querySelectorAll('.quiz-option');
      const expl      = qEl.querySelector('.quiz-explanation');
      const correct   = parseInt(qEl.dataset.correct);

      options.forEach((opt, oi) => {
        opt.addEventListener('click', () => {
          if (opt.classList.contains('correct') || opt.classList.contains('wrong')) return;
          options.forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');

          if (oi === correct) {
            opt.classList.add('correct');
            score++;
          } else {
            opt.classList.add('wrong');
            options[correct].classList.add('correct');
          }
          if (expl) expl.classList.add('show');
          answered++;
          updateScore(section, answered, questions.length, score);
        });
      });
    });

    const submitBtn = section.querySelector('.quiz-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        showResult(section, score, questions.length);
        const domain = submitBtn.dataset.domain;
        const subject = submitBtn.dataset.subject;
        const module  = submitBtn.dataset.module;
        if (domain && subject && module && score / questions.length >= 0.7) {
          Progress.markDone(domain, subject, module);
          const bar = document.querySelector(`[data-module="${module}"] .progress-fill`);
          if (bar) bar.style.width = '100%';
        }
      });
    }
  });
}

function updateScore(section, answered, total, score) {
  let scoreEl = section.querySelector('.live-score');
  if (!scoreEl) {
    scoreEl = document.createElement('div');
    scoreEl.className = 'live-score';
    scoreEl.style.cssText = 'margin-top:12px;font-size:.8rem;color:var(--color-faint);text-align:right;';
    section.querySelector('.quiz-body').appendChild(scoreEl);
  }
  scoreEl.textContent = `${answered}/${total} answered — ${score} correct`;
}

function showResult(section, score, total) {
  let result = section.querySelector('.quiz-result');
  if (!result) {
    result = document.createElement('div');
    result.className = 'quiz-result';
    section.querySelector('.quiz-body').appendChild(result);
  }
  const pct  = Math.round((score / total) * 100);
  const msg  = pct >= 80 ? '🎉 Excellent work!' : pct >= 60 ? '📚 Good effort — review the explanations above.' : '🔄 Keep practicing — try reading the lesson again.';
  result.innerHTML = `<div class="quiz-score">${pct}%</div><p style="margin:8px 0 0;font-weight:600;">${score}/${total} Correct</p><p style="margin:6px 0 0;">${msg}</p>`;
  result.classList.add('show');
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ── SEARCH PAGE ─────────────────────────────────────────── */
function initSearch() {
  const container = document.getElementById('searchResults');
  const input     = document.getElementById('searchPageInput');
  const countEl   = document.getElementById('searchCount');
  if (!container || !input) return;

  const params = new URLSearchParams(window.location.search);
  const q = params.get('q') || '';
  input.value = q;
  if (document.getElementById('searchTitleQ')) document.getElementById('searchTitleQ').textContent = q ? `"${q}"` : '';

  function doSearch(query) {
    if (!query.trim()) {
      container.innerHTML = '<p style="color:var(--color-faint);text-align:center;padding:40px 0;">Start typing to search all topics…</p>';
      if (countEl) countEl.textContent = '';
      return;
    }
    const terms = query.toLowerCase().split(/\s+/);
    const results = XA.searchIndex.filter(item => {
      const text = (item.title + ' ' + item.description + ' ' + (item.tags||[]).join(' ')).toLowerCase();
      return terms.every(t => text.includes(t));
    });
    if (countEl) countEl.textContent = `${results.length} result${results.length !== 1 ? 's' : ''}`;
    if (!results.length) {
      container.innerHTML = '<p style="color:var(--color-faint);text-align:center;padding:40px 0;">No results found. Try different keywords.</p>';
      return;
    }
    container.innerHTML = results.map(r => {
      const hl = s => s.replace(new RegExp(`(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')})`, 'gi'), '<mark>$1</mark>');
      return `<a href="${r.url}" class="search-result">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
          <span class="badge ${r.domain === 'math' ? 'badge-math' : 'badge-sci'}">${r.domain.toUpperCase()}</span>
          <span class="badge badge-k12">${r.type}</span>
        </div>
        <h4>${hl(r.title)}</h4>
        <p>${hl(r.description)}</p>
        <div class="path">${r.url.split('?')[0]} › ${r.url.split('?')[1]}</div>
      </a>`;
    }).join('');
  }

  doSearch(q);
  input.addEventListener('input', () => {
    history.replaceState(null,'',`?q=${encodeURIComponent(input.value)}`);
    doSearch(input.value);
  });
}

/* ── TOPIC PAGE ──────────────────────────────────────────── */
function initTopicPage() {
  const params  = new URLSearchParams(window.location.search);
  const domain  = params.get('domain');
  const sid     = params.get('subject');
  const mid     = params.get('module');
  const subject = XA[domain]?.[sid];
  if (!subject) return;

  // Set page title
  document.title = `${subject.title} | Xpelion Academy`;

  // Breadcrumb
  const bc = document.getElementById('breadcrumb');
  if (bc) bc.innerHTML = `
    <a href="index.html">Home</a><span>›</span>
    <a href="${domain}.html">${domain === 'math' ? 'Mathematics' : 'Science'}</a><span>›</span>
    ${subject.title}`;

  // Sidebar
  const sidebar = document.getElementById('lessonSidebar');
  if (sidebar) {
    sidebar.innerHTML = `<div class="sidebar-header">${subject.title}</div>
    <div class="sidebar-nav">
      ${subject.modules.map(m => `
        <div class="sidebar-item ${Progress.isDone(domain, sid, m.id) ? 'done' : ''} ${mid === m.id ? 'active' : ''}"
             onclick="loadModule('${domain}','${sid}','${m.id}')">
          <div class="check">${Progress.isDone(domain, sid, m.id) ? '✓' : ''}</div>
          ${m.title}
        </div>`).join('')}
    </div>`;
  }

  // Load first or specified module
  const firstMod = mid || subject.modules[0]?.id;
  if (firstMod) loadModule(domain, sid, firstMod);
}

function loadModule(domain, sid, mid) {
  const subject = XA[domain]?.[sid];
  const mod = subject?.modules.find(m => m.id === mid);
  if (!mod) return;

  // Update URL
  history.replaceState(null, '', `?domain=${domain}&subject=${sid}&module=${mid}`);

  // Update sidebar active state
  document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
  const sideEl = [...document.querySelectorAll('.sidebar-item')].find(el => el.textContent.trim().includes(mod.title));
  if (sideEl) sideEl.classList.add('active');

  const content = document.getElementById('lessonContent');
  if (!content) return;

  content.innerHTML = `
    <div class="lesson-header">
      <div class="breadcrumb">
        <a href="index.html">Home</a><span>›</span>
        <a href="${domain}.html">${domain === 'math' ? 'Mathematics' : 'Science'}</a><span>›</span>
        <a href="topic.html?domain=${domain}&subject=${sid}">${subject.title}</a><span>›</span>
        ${mod.title}
      </div>
      <h2>${mod.title}</h2>
      <div style="display:flex;align-items:center;gap:12px;margin-top:12px;">
        <span class="badge ${domain === 'math' ? 'badge-math' : 'badge-sci'}">${domain.toUpperCase()}</span>
        <span class="badge badge-k12">${subject.level}</span>
        <span style="font-size:.8rem;color:var(--color-faint);">${mod.quiz?.length || 0} quiz questions</span>
      </div>
    </div>
    <div class="lesson-body">
      ${mod.content}
      ${mod.quiz ? buildQuiz(mod.quiz, domain, sid, mid) : ''}
    </div>`;

  initQuizzes();
  content.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function buildQuiz(questions, domain, sid, mid) {
  return `<div class="quiz-section">
    <div class="quiz-header">
      <div class="quiz-icon">📝</div>
      <div>
        <h3>Module Quiz</h3>
        <p>${questions.length} questions — Score 70%+ to mark as complete</p>
      </div>
    </div>
    <div class="quiz-body">
      ${questions.map((q, i) => `
        <div class="quiz-question" data-correct="${q.answer}">
          <div class="question-text">${i+1}. ${q.q}</div>
          <div class="quiz-options">
            ${q.options.map((opt, j) => `
              <div class="quiz-option">
                <div class="option-circle">${'ABCD'[j]}</div>
                ${opt}
              </div>`).join('')}
          </div>
          <div class="quiz-explanation">${q.explanation}</div>
        </div>`).join('')}
      <button class="quiz-btn" data-domain="${domain}" data-subject="${sid}" data-module="${mid}">
        Check Results & Mark Complete
      </button>
      <div class="quiz-result"></div>
    </div>
  </div>`;
}

/* ── SUBJECT PAGE ─────────────────────────────────────────── */
function initSubjectPage(domain) {
  const grid = document.getElementById('subjectGrid');
  if (!grid || !XA[domain]) return;

  grid.innerHTML = Object.values(XA[domain]).map(subj => {
    const pct = Progress.subjectPercent(domain, subj.id);
    const tags = (subj.tags || []).join(',');
    return `<a href="topic.html?domain=${domain}&subject=${subj.id}"
        class="subject-card"
        data-tags="${tags}"
        style="--card-accent: linear-gradient(135deg,${subj.color}, ${shiftColor(subj.color)});">
      <div class="card-icon" style="background:${subj.color}22;">${subj.icon}</div>
      <h3>${subj.title}</h3>
      <p>${subj.description}</p>
      <div class="card-meta">
        <span class="badge ${domain === 'math' ? 'badge-math' : 'badge-sci'}">${domain.toUpperCase()}</span>
        <span>${subj.level}</span>
        <span>${subj.modules?.length || 0} modules</span>
      </div>
      ${pct > 0 ? `<div class="progress-bar" style="margin-top:14px;"><div class="progress-fill" style="width:${pct}%"></div></div>` : ''}
    </a>`;
  }).join('');
}

function shiftColor(hex) {
  try {
    let n = parseInt(hex.slice(1), 16);
    return '#' + Math.min(n + 0x202040, 0xffffff).toString(16).padStart(6,'0');
  } catch { return hex; }
}

/* ── HANDOUTS PAGE ───────────────────────────────────────── */
function initHandoutsPage() {
  const grid = document.getElementById('handoutsGrid');
  if (!grid) return;
  grid.innerHTML = XA.handouts.map(h => `
    <div class="handout-card">
      <div class="handout-icon">${h.icon}</div>
      <div class="handout-info">
        <h4>${h.title}</h4>
        <p>${h.desc}</p>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
          <span class="badge badge-k12">${h.subject}</span>
          <span style="font-size:.75rem;color:var(--color-faint);">Grade ${h.grade}</span>
        </div>
        <button class="download-btn" onclick="downloadHandout('${h.title}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF
        </button>
      </div>
    </div>`).join('');
}

function downloadHandout(title) {
  alert(`"${title}" would download as a PDF. Connect your PDF hosting service (e.g., Amazon S3 or Cloudflare) to serve real files.`);
}

/* ── RESOURCES PAGE ──────────────────────────────────────── */
function initResourcesPage() {
  const grid = document.getElementById('resourcesGrid');
  if (!grid) return;
  grid.innerHTML = XA.resources.map(r => `
    <div class="resource-card" data-tags="${r.category},${r.grade}">
      <div class="resource-img">${r.icon}</div>
      <div class="resource-body">
        <span class="badge badge-k12" style="margin-bottom:8px;display:inline-flex;">${r.category}</span>
        <h4>${r.title}</h4>
        <p>${r.desc}</p>
        <div class="resource-meta">
          <span class="price">${r.price}</span>
          <span class="stars">${r.stars}</span>
        </div>
        <a href="https://www.amazon.com/dp/${r.asin}?tag=toppicksmar03-20"
           target="_blank" rel="noopener sponsored" class="amazon-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" opacity="0"/><path d="M7 10l5 5 5-5z"/></svg>
          View on Amazon
        </a>
      </div>
    </div>`).join('');
}

/* ── HOMEPAGE SUBJECT PREVIEWS ───────────────────────────── */
function initHomepage() {
  const mathGrid = document.getElementById('mathPreview');
  const sciGrid  = document.getElementById('sciPreview');

  if (mathGrid) {
    const subjects = Object.values(XA.math).slice(0, 6);
    mathGrid.innerHTML = subjects.map(subj => `
      <a href="topic.html?domain=math&subject=${subj.id}" class="topic-card">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <span style="font-size:1.4rem;">${subj.icon}</span>
          <h4>${subj.title}</h4>
        </div>
        <p>${subj.description.slice(0,80)}…</p>
        <div class="card-meta" style="margin-top:10px;">
          <span class="badge badge-math">MATH</span>
          <span>${subj.level}</span>
        </div>
      </a>`).join('');
  }

  if (sciGrid) {
    const subjects = Object.values(XA.science).slice(0, 6);
    sciGrid.innerHTML = subjects.map(subj => `
      <a href="topic.html?domain=science&subject=${subj.id}" class="topic-card">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <span style="font-size:1.4rem;">${subj.icon}</span>
          <h4>${subj.title}</h4>
        </div>
        <p>${subj.description.slice(0,80)}…</p>
        <div class="card-meta" style="margin-top:10px;">
          <span class="badge badge-sci">SCIENCE</span>
          <span>${subj.level}</span>
        </div>
      </a>`).join('');
  }
}

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initChips();
  initQuizzes();
  initSearch();
  initTopicPage();
  initHomepage();

  const domain = document.body.dataset.page;
  if (domain === 'math' || domain === 'science') initSubjectPage(domain);
  if (domain === 'handouts') initHandoutsPage();
  if (domain === 'resources') initResourcesPage();
});
