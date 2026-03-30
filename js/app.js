/* ═══════════════════════════════════════════════════
   AQBOBEK UNIFIED PORTAL — Core Application Logic
   ═══════════════════════════════════════════════════ */

// ─── AUTH ─────────────────────────────────────────────
const Auth = {
  current() {
    try { return JSON.parse(sessionStorage.getItem('aqbobek_user')); } catch { return null; }
  },
  login(login, password) {
    const user = LYCEUM_DATA.allUsers.find(u => u.login === login && u.password === password);
    if (user) {
      sessionStorage.setItem('aqbobek_user', JSON.stringify(user));
      return user;
    }
    return null;
  },
  logout() {
    sessionStorage.removeItem('aqbobek_user');
    window.location.href = 'login.html';
  },
  require(roles) {
    const user = this.current();
    if (!user) { window.location.href = 'login.html'; return null; }
    if (roles && !roles.includes(user.role)) { window.location.href = 'login.html'; return null; }
    return user;
  }
};

// ─── TOAST ────────────────────────────────────────────
function toast(msg, type = 'info', duration = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => {
    el.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => el.remove(), 300);
  }, duration);
}

// ─── MODAL ────────────────────────────────────────────
function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }
function closeAllModals() {
  document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) closeAllModals();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAllModals(); });

// ─── HELPERS ──────────────────────────────────────────
function gradeColor(score) {
  if (score >= 90) return 'grade-a';
  if (score >= 75) return 'grade-b';
  if (score >= 60) return 'grade-c';
  return 'grade-d';
}

function gradeLabel(score) {
  if (score >= 90) return '5';
  if (score >= 75) return '4';
  if (score >= 60) return '3';
  return '2';
}

function avg(arr) {
  if (!arr || arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function subjectAvg(grades) {
  return Object.fromEntries(
    Object.entries(grades).map(([s, g]) => [s, Math.round(avg(g))])
  );
}

function overallAvg(grades) {
  const avgs = Object.values(grades).map(g => avg(g));
  return avg(avgs).toFixed(1);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('kk-KZ', { year: 'numeric', month: 'long', day: 'numeric' });
}

function formatDateRu(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
}

function initials(name) {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
}

function riskBadge(level) {
  const map = { low: ['badge-green', '✓ Норма'], medium: ['badge-gold', '⚠ Орта'], high: ['badge-red', '🔴 Тәуекел'] };
  const [cls, label] = map[level] || ['badge-gray', '—'];
  return `<span class="badge ${cls}">${label}</span>`;
}

function riskLabel(level) {
  const map = { low: 'Норма', medium: 'Орта', high: 'Тәуекел' };
  return map[level] || '—';
}

function trendArrow(arr) {
  if (arr.length < 2) return '';
  const diff = arr[arr.length - 1] - arr[arr.length - 2];
  if (diff > 0) return '<span style="color:var(--green)">↑</span>';
  if (diff < 0) return '<span style="color:var(--red)">↓</span>';
  return '<span style="color:var(--gray)">→</span>';
}

// ─── SIDEBAR ──────────────────────────────────────────
function buildSidebar(activeId, role) {
  const user = Auth.current();
  if (!user) return;

  const menus = {
    student: [
      { id: 'dashboard',     icon: '🏠', label: 'Негізгі бет',     href: 'dashboard.html' },
      { id: 'grades',        icon: '📊', label: 'Бағалар',          href: 'grades.html' },
      { id: 'achievements',  icon: '🏆', label: 'Жетістіктер',      href: 'achievements.html' },
      { id: 'events',        icon: '📅', label: 'Іс-шаралар',       href: 'events.html' },
      { id: 'ai',            icon: '🤖', label: 'AI Ментор',        href: 'ai-mentor.html' },
      { id: 'ranking',       icon: '🥇', label: 'Рейтинг',          href: 'ranking.html' },
      { id: 'profile',       icon: '👤', label: 'Профиль',           href: 'profile.html' },
      { id: 'kiosk',         icon: '📺', label: 'Кiosk режимі',     href: 'kiosk.html' },
    ],
    teacher: [
      { id: 'dashboard',     icon: '🏠', label: 'Негізгі бет',     href: 'dashboard.html' },
      { id: 'grades',        icon: '📊', label: 'Бағалар (сынып)', href: 'teacher-grades.html' },
      { id: 'schedule',      icon: '🗓️', label: 'Расписание',       href: 'schedule.html' },
      { id: 'achievements',  icon: '🏆', label: 'Жетістіктер',      href: 'achievements.html' },
      { id: 'events',        icon: '📅', label: 'Іс-шаралар',       href: 'events.html' },
      { id: 'risk',          icon: '⚠️',  label: 'Тәуекел аймағы',  href: 'risk-zone.html' },
      { id: 'ranking',       icon: '🥇', label: 'Рейтинг',          href: 'ranking.html' },
      { id: 'kiosk',         icon: '📺', label: 'Кiosk режимі',     href: 'kiosk.html' },
    ],
    parent: [
      { id: 'dashboard',     icon: '🏠', label: 'Негізгі бет',     href: 'dashboard.html' },
      { id: 'grades',        icon: '📊', label: 'Баланың бағалары', href: 'grades.html' },
      { id: 'achievements',  icon: '🏆', label: 'Жетістіктер',      href: 'achievements.html' },
      { id: 'events',        icon: '📅', label: 'Іс-шаралар',       href: 'events.html' },
      { id: 'ranking',       icon: '🥇', label: 'Рейтинг',          href: 'ranking.html' },
    ],
    admin: [
      { id: 'dashboard',     icon: '🏠', label: 'Негізгі бет',     href: 'dashboard.html' },
      { id: 'schedule',      icon: '🗓️', label: 'Расписание',       href: 'schedule.html' },
      { id: 'events',        icon: '📅', label: 'Іс-шаралар',       href: 'events.html' },
      { id: 'ranking',       icon: '🥇', label: 'Жалпы рейтинг',   href: 'ranking.html' },
      { id: 'risk',          icon: '⚠️',  label: 'Тәуекел аймағы',  href: 'risk-zone.html' },
      { id: 'kiosk',         icon: '📺', label: 'Кiosk режимі',     href: 'kiosk.html' },
    ],
  };

  const items = menus[role] || menus.student;
  const itemsHTML = items.map(item => `
    <a class="nav-item ${activeId === item.id ? 'active' : ''}" href="${item.href}">
      <span class="nav-icon">${item.icon}</span>
      <span>${item.label}</span>
    </a>
  `).join('');

  const sidebarHTML = `
    <div class="sidebar" id="appSidebar">
      <div class="sidebar-logo">
        <img src="https://a1s.kz/Logo_Lyc.png" alt="logo" style="width:36px;height:36px;border-radius:8px;object-fit:cover;" onerror="this.style.display='none'">
        <div class="sidebar-logo-text">
          <strong>Ақбөбек</strong>
          <span>Unified Portal</span>
        </div>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-section-label">Мәзір</div>
        ${itemsHTML}
        <div class="nav-section-label" style="margin-top:auto">Сілтемелер</div>
        <a class="nav-item" href="../index.html">
          <span class="nav-icon">🌐</span>
          <span>Лицей сайты</span>
        </a>
      </nav>
      <div class="sidebar-footer">
        <div class="sidebar-user">
          <div class="avatar" style="width:36px;height:36px;font-size:13px;">${initials(user.fullname || user.login)}</div>
          <div class="sidebar-user-info">
            <strong>${(user.fullname || user.login).split(' ')[0]}</strong>
            <span>${roleLabel(user.role)}</span>
          </div>
          <button onclick="Auth.logout()" class="btn btn-ghost btn-sm" style="margin-left:auto" title="Шығу">✕</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('sidebar-placeholder').innerHTML = sidebarHTML;
}

function roleLabel(role) {
  const map = { student: 'Оқушы', teacher: 'Мұғалім', parent: 'Ата-ана', admin: 'Администратор' };
  return map[role] || role;
}

// ─── MINI SIDEBAR TOGGLE (mobile) ────────────────────
function toggleSidebar() {
  document.getElementById('appSidebar')?.classList.toggle('open');
}

// ─── CHART HELPERS ────────────────────────────────────
function miniSparkline(container, data, color = '#7c3aed') {
  if (!window.Chart) return;
  const ctx = container.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map((_, i) => i + 1),
      datasets: [{ data, borderColor: color, borderWidth: 2, fill: true,
        backgroundColor: color + '22', tension: 0.4, pointRadius: 0 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: { x: { display: false }, y: { display: false, min: 50, max: 100 } },
      animation: { duration: 800 }
    }
  });
}

function radarChart(container, labels, data, color = '#7c3aed') {
  if (!window.Chart) return;
  const ctx = container.getContext('2d');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        data,
        borderColor: color, borderWidth: 2,
        backgroundColor: color + '33',
        pointBackgroundColor: color, pointRadius: 4,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        r: {
          min: 50, max: 100, ticks: { display: false },
          grid: { color: '#e8dff0' },
          pointLabels: { font: { size: 11, family: "'Sora', sans-serif" } }
        }
      }
    }
  });
}

function lineChart(container, labels, datasets) {
  if (!window.Chart) return;
  const ctx = container.getContext('2d');
  const colors = ['#59007A','#c084fc','#3b82f6','#10b981','#f59e0b','#ef4444','#8b5cf6','#ec4899'];
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: datasets.map((d, i) => ({
        label: d.label, data: d.data,
        borderColor: colors[i % colors.length],
        backgroundColor: colors[i % colors.length] + '18',
        borderWidth: 2, tension: 0.4,
        pointRadius: 4, pointHoverRadius: 6,
        fill: false,
      }))
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { font: { size: 11 }, boxWidth: 12 } } },
      scales: {
        y: { min: 50, max: 100, grid: { color: '#f0ebf7' },
          ticks: { font: { size: 11 } } },
        x: { grid: { color: '#f0ebf7' }, ticks: { font: { size: 11 } } }
      }
    }
  });
}

function barChart(container, labels, data, color = '#59007A') {
  if (!window.Chart) return;
  const ctx = container.getContext('2d');
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{ data, backgroundColor: color + 'cc', borderRadius: 6, borderSkipped: false }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { min: 50, max: 100, grid: { color: '#f0ebf7' }, ticks: { font: { size: 11 } } },
        x: { grid: { display: false }, ticks: { font: { size: 10 }, maxRotation: 30 } }
      }
    }
  });
}

// ─── AI MENTOR ────────────────────────────────────────
const AIMentor = {
  apiKey: null, // handled by proxy

  greetings: [
    "Сәлем! Мен AI Ментор — Ақбөбек лицейінің ақылды көмекшісімін. Оқу үлгерімің, мансап бағдарың немесе дайындық туралы сұрауларыңа дайынмын! 🎓",
  ],

  async getAdvice(prompt, studentContext) {
    const systemPrompt = `You are an AI mentor for Aqbobek Lyceum, an IT-focused boarding school in Aktobe, Kazakhstan. 
You help students improve academically and guide their career paths.
Student context: ${JSON.stringify(studentContext)}
Respond in Kazakh language (mix with some Russian if needed). Be encouraging, specific, and practical.
Keep responses concise (2-4 sentences). Use emojis occasionally.`;

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'anthropic-dangerous-direct-browser-access': 'true' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 400,
          system: systemPrompt,
          messages: [{ role: 'user', content: prompt }]
        })
      });
      const data = await res.json();
      return data.content?.[0]?.text || 'Кешіріңіз, қате орын алды. Қайта сұраңыз.';
    } catch {
      return this.fallbackAdvice(prompt, studentContext);
    }
  },

  fallbackAdvice(prompt, ctx) {
    const p = prompt.toLowerCase();
    if (p.includes('математик') || p.includes('math')) {
      return `Математика бойынша үлгеріміңді ${ctx.grades?.Математика ? 'талдадым' : 'бақылаудамын'}. Күнделікті 30 минут есеп шыға отырып тыңдаймын — бұл ең тиімді әдіс! 📐`;
    }
    if (p.includes('кәсіп') || p.includes('мансап') || p.includes('career') || p.includes('болашақ')) {
      return `Сенің қабілеттеріңе қарай IT немесе ғылым бағыты өте сай. Университетке дейін бір бағдарламалау тілін жақсы меңгер — ол сені ерекше етеді! 💻`;
    }
    if (p.includes('ент') || p.includes('ūbt') || p.includes('экзамен') || p.includes('емтихан')) {
      return `ЕНТ-ге дайындалу үшін: күнделікті 2 сағат + апта сайын тест тапсыру. Нәтижелерің жақсаруда — сен оны жасай аласың! 🎯`;
    }
    return `Сенің сұрағыңды ескердім! Ең маңыздысы — тұрақтылық пен мотивация. Белгілі бір пән немесе мақсатың туралы нақтырақ айт, мен жеке кеңес беремін. 🌟`;
  }
};

// ─── EVENTS RENDERER ─────────────────────────────────
function renderEventCard(ev) {
  const typeLabels = { academic: 'Академиялық', science: 'Ғылым', it: 'IT', sport: 'Спорт', general: 'Жалпы' };
  return `
    <div class="event-card">
      <div class="event-color-bar" style="background:${ev.color}"></div>
      <div class="event-body">
        <div class="event-type">${typeLabels[ev.type] || ev.type}</div>
        <div class="event-title">${ev.title}</div>
        <div class="event-desc">${ev.description}</div>
        <div class="event-meta">
          <div class="event-date">📅 ${formatDateRu(ev.date)}</div>
          <span class="badge badge-purple">👥 ${ev.participants}</span>
        </div>
      </div>
    </div>
  `;
}

// ─── NEWS RENDERER ────────────────────────────────────
function renderNewsCard(news) {
  const catColors = { achievement: '#7c3aed', campus: '#059669', academic: '#2563eb', general: '#d97706' };
  return `
    <div class="card card-hover" style="padding:20px;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:10px;">
        <div class="badge" style="background:${catColors[news.category]}22;color:${catColors[news.category]}">${news.category}</div>
        ${news.hot ? '<span class="badge badge-red">🔥 Жаңа</span>' : ''}
      </div>
      <div style="font-weight:700;font-size:15px;margin-bottom:6px;">${news.title}</div>
      <div style="font-size:13px;color:var(--gray);line-height:1.6;margin-bottom:12px;">${news.body}</div>
      <div style="font-size:12px;color:var(--gray)">${formatDateRu(news.date)}</div>
    </div>
  `;
}

// ─── LEADERBOARD RENDERER ────────────────────────────
function renderLeaderboardRow(entry, isCompact = false) {
  const rankColors = { 1: '#f59e0b', 2: '#9ca3af', 3: '#cd7f32' };
  const color = rankColors[entry.rank] || 'var(--gray)';
  if (isCompact) {
    return `
      <div class="kiosk-leaderboard-row">
        <div class="kiosk-rank" style="color:${color}">${entry.rank}</div>
        <div class="kiosk-name">${entry.name}</div>
        <div class="kiosk-gpa">${entry.gpa}</div>
      </div>
    `;
  }
  return `
    <tr>
      <td><span style="font-weight:700;color:${color};font-size:18px;">${entry.badge}</span></td>
      <td><span style="font-weight:700">#${entry.rank}</span></td>
      <td>
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="avatar" style="width:32px;height:32px;font-size:11px;">${initials(entry.name)}</div>
          <span style="font-weight:600">${entry.name}</span>
        </div>
      </td>
      <td><span class="badge badge-purple">${entry.grade}</span></td>
      <td><strong style="color:var(--p1)">${entry.gpa}</strong></td>
      <td>${entry.achievements}</td>
    </tr>
  `;
}
