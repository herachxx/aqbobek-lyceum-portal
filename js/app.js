const ICONS = {
  home:        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  barChart:    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>',
  trophy:      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  bot:         '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>',
  calendar:    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>',
  medal:       '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>',
  user:        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  users:       '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  alertTriangle:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  monitor:     '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
  globe:       '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  target:      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  trendingUp:  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  trendingDown:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',
  rocket:      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  lightbulb:   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
  newspaper:   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',
  flame:       '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  star:        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  check:       '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  circleAlert: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>',
  circleDot:   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg>',
  x:           '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  menu:        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  link:        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  flask:       '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>',
  key:         '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.3 9.3"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>',
  filePen:     '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"/></svg>',
  lock:        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  eye:         '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff:      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>',
  pen:         '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',
  phone:       '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  trash:       '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
  clipboard:   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
  arrowRight:  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  arrowUp:     '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
  arrowDown:   '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  minus:       '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>',
  school:      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M18 5v17"/><path d="m4 6 8-4 8 4"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/></svg>',
  logOut:      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',
  shield:      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
  gradeBook: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/><path d="M13 13.5h3"/><path d="M13 17.5h3"/><path d="m7 13 1 1 2-2"/><path d="m7 17 1 1 2-2"/></svg>',
};
window.ICONS = ICONS;
document.addEventListener('DOMContentLoaded', async () => {
});
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
function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }
function closeAllModals() {
  document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) closeAllModals();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAllModals(); });
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
  const map = {
    low:    ['badge-green', ICONS.checkCircle + ' Норма'],
    medium: ['badge-gold',  ICONS.circleDot + ' Орта'],
    high:   ['badge-red',   ICONS.circleAlert + ' Тәуекел']
  };
  const [cls, label] = map[level] || ['badge-gray', '-'];
  return `<span class="badge ${cls}" style="display:inline-flex;align-items:center;gap:4px;">${label}</span>`;
}
function riskLabel(level) {
  const map = { low: 'Норма', medium: 'Орта', high: 'Тәуекел' };
  return map[level] || '-';
}
function trendArrow(arr) {
  if (arr.length < 2) return '';
  const diff = arr[arr.length - 1] - arr[arr.length - 2];
  if (diff > 0) return `<span style="color:var(--green)">${ICONS.arrowUp}</span>`;
  if (diff < 0) return `<span style="color:var(--red)">${ICONS.arrowDown}</span>`;
  return `<span style="color:var(--gray)">${ICONS.minus}</span>`;
}
function buildSidebar(activeId, role) {
  const user = Auth.current();
  if (!user) return;
  const menus = {
    student: [
      { id: 'dashboard', icon: ICONS.home, label: 'Негізгі бет', href: 'dashboard.html' },
      { id: 'schedule', icon: ICONS.calendar, label: 'Расписание', href: 'schedule_watcher.html' },
      { id: 'grades', icon: ICONS.barChart, label: 'Бағалар', href: 'grades.html' },
      { id: 'achievements', icon: ICONS.trophy, label: 'Жетістіктер', href: 'achievements.html' },
      { id: 'events', icon: ICONS.calendar, label: 'Іс-шаралар', href: 'events.html' },
      { id: 'ai', icon: ICONS.bot, label: 'AI Ментор', href: 'ai-mentor.html' },
      { id: 'ranking', icon: ICONS.medal, label: 'Рейтинг', href: 'ranking.html' },
      { id: 'profile', icon: ICONS.user, label: 'Профиль', href: 'profile.html' },
      { id: 'kiosk', icon: ICONS.monitor, label: 'Kiosk режимі', href: 'kiosk.html' },
    ],
    teacher: [
      { id: 'dashboard', icon: ICONS.home, label: 'Негізгі бет', href: 'dashboard.html' },
      { id: 'grades', icon: ICONS.barChart, label: 'Бағалар (сынып)', href: 'teacher-grades.html' },
      { id: 'rate student', icon: ICONS.gradeBook, label: 'Баға қою', href: 'rating.html' },
      { id: 'schedule', icon: ICONS.calendar, label: 'Расписание', href: 'schedule.html' },
      { id: 'achievements', icon: ICONS.trophy, label: 'Жетістіктер', href: 'achievements.html' },
      { id: 'events', icon: ICONS.calendar, label: 'Іс-шаралар', href: 'events.html' },
      { id: 'risk', icon: ICONS.alertTriangle, label: 'Тәуекел аймағы', href: 'risk-zone.html' },
      { id: 'ranking', icon: ICONS.medal, label: 'Рейтинг', href: 'ranking.html' },
      { id: 'kiosk', icon: ICONS.monitor, label: 'Kiosk режимі', href: 'kiosk.html' },
    ],
    parent: [
      { id: 'dashboard', icon: ICONS.home, label: 'Негізгі бет', href: 'dashboard.html' },
      { id: 'schedule', icon: ICONS.calendar, label: 'Расписание', href: 'schedule_watcher.html' },
      { id: 'grades', icon: ICONS.barChart, label: 'Баланың бағалары', href: 'grades.html' },
      { id: 'achievements', icon: ICONS.trophy, label: 'Жетістіктер', href: 'achievements.html' },
      { id: 'events', icon: ICONS.calendar, label: 'Іс-шаралар', href: 'events.html' },
      { id: 'ranking', icon: ICONS.medal, label: 'Рейтинг', href: 'ranking.html' },
    ],
    admin: [
      { id: 'dashboard', icon: ICONS.home, label: 'Негізгі бет', href: 'dashboard.html' },
      { id: 'schedule', icon: ICONS.calendar, label: 'Расписание', href: 'schedule.html' },
      { id: 'rate student', icon: '🗓️', label: 'Оценивание', href: 'rating.html' },
      { id: 'events', icon: ICONS.calendar, label: 'Іс-шаралар', href: 'events.html' },
      { id: 'ranking', icon: ICONS.medal, label: 'Жалпы рейтинг', href: 'ranking.html' },
      { id: 'risk', icon: ICONS.alertTriangle, label: 'Тәуекел аймағы', href: 'risk-zone.html' },
      { id: 'kiosk', icon: ICONS.monitor, label: 'Kiosk режимі', href: 'kiosk.html' },
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
          <span class="nav-icon">${ICONS.globe}</span>
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
          <button onclick="Auth.logout()" class="btn btn-ghost btn-sm" style="margin-left:auto" title="Шығу">${ICONS.logOut}</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('sidebar-placeholder').innerHTML = sidebarHTML;
  const mobileBtn = document.getElementById('mobileMenuBtn');
  if (mobileBtn) {
    if (window.innerWidth < 1024) mobileBtn.style.display = 'flex';
    window.addEventListener('resize', () => {
      mobileBtn.style.display = window.innerWidth < 1024 ? 'flex' : 'none';
    });
  }
}
function roleLabel(role) {
  const map = { student: 'Оқушы', teacher: 'Мұғалім', parent: 'Ата-ана', admin: 'Администратор' };
  return map[role] || role;
}
function toggleSidebar() {
  const sidebar = document.getElementById('appSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('visible');
}
function closeSidebar() {
  const sidebar = document.getElementById('appSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('visible');
}
function miniSparkline(container, data, color = '#4f46e5') {
  if (!window.Chart) return;
  const ctx = container.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map((_, i) => i + 1),
      datasets: [{ data, borderColor: color, borderWidth: 2, fill: true,
        backgroundColor: color + '18', tension: 0.4, pointRadius: 0 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: { x: { display: false }, y: { display: false, min: 50, max: 100 } },
      animation: { duration: 800 }
    }
  });
}
function radarChart(container, labels, data, color = '#4f46e5') {
  if (!window.Chart) return;
  const ctx = container.getContext('2d');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        data,
        borderColor: color, borderWidth: 2,
        backgroundColor: color + '22',
        pointBackgroundColor: color, pointRadius: 4,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        r: {
          min: 50, max: 100, ticks: { display: false },
          grid: { color: '#e2e8f0' },
          pointLabels: { font: { size: 11, family: "'Inter', sans-serif" } }
        }
      }
    }
  });
}
function lineChart(container, labels, datasets) {
  if (!window.Chart) return;
  const ctx = container.getContext('2d');
  const colors = ['#4f46e5','#818cf8','#3b82f6','#22c55e','#eab308','#ef4444','#8b5cf6','#ec4899'];
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
        y: { min: 50, max: 100, grid: { color: '#f1f5f9' },
          ticks: { font: { size: 11 } } },
        x: { grid: { color: '#f1f5f9' }, ticks: { font: { size: 11 } } }
      }
    }
  });
}
function barChart(container, labels, data, color = '#4f46e5') {
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
        y: { min: 50, max: 100, grid: { color: '#f1f5f9' }, ticks: { font: { size: 11 } } },
        x: { grid: { display: false }, ticks: { font: { size: 10 }, maxRotation: 30 } }
      }
    }
  });
}
window.AIMentor = window.AIMentor || {
  apiKey: null,
  greetings: [
    "Сәлем! Мен AI Ментор - Ақбөбек лицейінің ақылды көмекшісімін. Оқу үлгерімің, мансап бағдарың немесе дайындық туралы сұрауларыңа дайынмын!",
  ],
  async getAdvice(prompt, studentContext) {
    const systemPrompt = `You are an AI mentor for Aqbobek Lyceum, an IT-focused boarding school in Aktobe, Kazakhstan.
You help students improve academically and guide their career paths.
Student context: ${JSON.stringify(studentContext)}
Respond in Kazakh language (mix with some Russian if needed). Be encouraging, specific, and practical.
Keep responses concise (2-4 sentences). Do not use emojis.`;
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
      return `Математика бойынша үлгеріміңді ${ctx.grades?.Математика ? 'талдадым' : 'бақылаудамын'}. Күнделікті 30 минут есеп шыға отырып тыңдаймын - бұл ең тиімді әдіс!`;
    }
    if (p.includes('кәсіп') || p.includes('мансап') || p.includes('career') || p.includes('болашақ')) {
      return `Сенің қабілеттеріңе қарай IT немесе ғылым бағыты өте сай. Университетке дейін бір бағдарламалау тілін жақсы меңгер - ол сені ерекше етеді!`;
    }
    if (p.includes('ент') || p.includes('ūbt') || p.includes('экзамен') || p.includes('емтихан')) {
      return `ЕНТ-ге дайындалу үшін: күнделікті 2 сағат + апта сайын тест тапсыру. Нәтижелерің жақсаруда - сен оны жасай аласың!`;
    }
    return `Сенің сұрағыңды ескердім! Ең маңыздысы - тұрақтылық пен мотивация. Белгілі бір пән немесе мақсатың туралы нақтырақ айт, мен жеке кеңес беремін.`;
  }
};
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
          <div class="event-date">${ICONS.calendar} ${formatDateRu(ev.date)}</div>
          <span class="badge badge-purple">${ICONS.users} ${ev.participants}</span>
        </div>
      </div>
    </div>
  `;
}
function renderNewsCard(news) {
  const catColors = { achievement: '#4f46e5', campus: '#059669', academic: '#2563eb', general: '#d97706' };
  return `
    <div class="card card-hover" style="padding:20px;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:10px;">
        <div class="badge" style="background:${catColors[news.category]}15;color:${catColors[news.category]}">${news.category}</div>
        ${news.hot ? '<span class="badge badge-red">' + ICONS.flame + ' Жаңа</span>' : ''}
      </div>
      <div style="font-weight:700;font-size:15px;margin-bottom:6px;">${news.title}</div>
      <div style="font-size:13px;color:var(--gray);line-height:1.6;margin-bottom:12px;">${news.body}</div>
      <div style="font-size:12px;color:var(--gray)">${formatDateRu(news.date)}</div>
    </div>
  `;
}
function renderLeaderboardRow(entry, isCompact = false) {
  const rankColors = { 1: '#eab308', 2: '#9ca3af', 3: '#cd7f32' };
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
      <td><span style="font-weight:700;color:${color};font-size:16px;">${entry.badge}</span></td>
      <td><span style="font-weight:700;color:var(--dark)">#${entry.rank}</span></td>
      <td>
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="avatar" style="width:32px;height:32px;font-size:11px;">${initials(entry.name)}</div>
          <span style="font-weight:600;color:var(--dark)">${entry.name}</span>
        </div>
      </td>
      <td><span class="badge badge-purple">${entry.grade}</span></td>
      <td><strong style="color:var(--p1)">${entry.gpa}</strong></td>
      <td style="color:var(--dark)">${entry.achievements}</td>
    </tr>
  `;
}
