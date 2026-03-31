window.WEBHOOK_URL = window.WEBHOOK_URL || "https://asicapital.asia/webhook/e33ea58a-008b-4227-8784-6b4e69a7f18a";
window.LYCEUM_DATA = window.LYCEUM_DATA || null;
async function initData() {
  const res = await fetch(window.WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });
  if (!res.ok) throw new Error(`Webhook error: HTTP ${res.status}`);
  const json = await res.json();
  const raw = Array.isArray(json) ? json[0] : json;
  const rankBadges = ["1st", "2nd", "3rd"];
  const students = (raw.students ?? []).map(s => ({
    id: s.id, login: s.login, password: s.password,
    fullname: s.fullname, grade: s.grade, avatar: s.avatar ?? null,
    role: s.role, gpa: s.gpa, rank: s.rank, riskLevel: s.riskLevel ?? null,
    subject: null, riskStudents: null, childId: null,
    bilimClass:   s.bilimClass   ?? {},
    achievements: s.achievements ?? [],
    goals:        s.goals        ?? [],
    events:       s.events       ?? [],
  }));
  const teachers = (raw.teachers ?? []).map(t => ({
    id: t.id, login: t.login, password: t.password,
    fullname: t.fullname, grade: t.grade, avatar: t.avatar ?? null,
    role: t.role, subject: t.subject ?? null,
    gpa: null, rank: null, bilimClass: null, achievements: null,
    goals: null, events: null, riskLevel: null, childId: null,
    riskStudents: t.riskStudents ?? [],
  }));
  const parents = (raw.parents ?? []).map(p => ({
    id: p.id, login: p.login, password: p.password,
    fullname: p.fullname, grade: null, avatar: p.avatar ?? null,
    role: p.role, childId: p.childId ?? null,
    gpa: null, rank: null, bilimClass: null, achievements: null,
    goals: null, events: null, riskLevel: null, subject: null, riskStudents: null,
  }));
  const admins = (raw.admins ?? []).map(a => ({
    id: a.id, login: a.login, password: a.password,
    fullname: a.fullname, grade: null, avatar: a.avatar ?? null,
    role: a.role,
    gpa: null, rank: null, bilimClass: null, achievements: null,
    goals: null, events: null, riskLevel: null, subject: null,
    riskStudents: null, childId: null,
  }));
  const leaderboard = [...students]
    .sort((a, b) => b.gpa - a.gpa || b.achievements.length - a.achievements.length)
    .map((s, i) => ({
      id: i + 1,
      rank: i + 1,
      name: s.fullname,
      grade: s.grade,
      gpa: s.gpa,
      achievements: s.achievements.length,
      badge: rankBadges[i] ?? `#${i + 1}`,
    }));
  const subjectsSource = students.find(s => s.bilimClass && Object.keys(s.bilimClass).length);
  const subjects = subjectsSource ? Object.keys(subjectsSource.bilimClass) : [];
  const news   = (raw.news   ?? []).map(n => ({
    id: n.id, title: n.title, body: n.body,
    date: n.date, category: n.category, hot: n.hot ?? false,
  }));
  const events = (raw.events ?? []).map(e => ({
    id: e.id, title: e.title, titleRu: e.titleRu ?? null,
    type: e.type, color: e.color ?? "#000000", date: e.date,
    participants: e.participants ?? 0, description: e.description,
  }));
  window.LYCEUM_DATA = {
    subjects,
    students,
    teachers,
    parents,
    admins,
    leaderboard,
    news,
    events,
    get allUsers() {
      return [...this.students, ...this.teachers, ...this.parents, ...this.admins];
    },
  };
  console.log("LYCEUM_DATA loaded:", window.LYCEUM_DATA.students.length, "students,", window.LYCEUM_DATA.allUsers.length, "total users");
}
window.Auth = window.Auth || {
  current() {
    try { return JSON.parse(sessionStorage.getItem('aqbobek_user')); } catch { return null; }
  },
  login(login, password) {
    const user = window.LYCEUM_DATA?.allUsers.find(u => u.login === login && u.password === password);
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
    if (!user || (roles && !roles.includes(user.role))) {
      window.location.href = 'login.html';
      return null;
    }
    return user;
  }
};
