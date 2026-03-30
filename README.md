# Ақбөбек Unified School Portal
**Hackathon Project — Team: Hasan, Nurasyl, Aruzhan**

---

## 🚀 Іске қосу / Запуск

### Тез іске қосу:
1. `index.html` файлын кез-келген браузерде ашыңыз
2. **Немесе** Live Server (VS Code extension) арқылы іске қосыңыз
3. **Немесе** терминалда: `npx serve .` / `python -m http.server 8080`

> ⚠️ Тікелей файл ашқанда (file:///) CORS шектеулері болуы мүмкін.  
> Ең жақсы тәжірибе үшін Live Server немесе локал сервер қолданыңыз.

---

## 🔐 Demo аккаунттар

| Рөл | Логин | Пароль |
|-----|-------|--------|
| Оқушы (Айзат) | `aizat.bekova` | `pass123` |
| Оқушы (Хасан) | `hasan.nurmagambetov` | `hasan123` |
| Оқушы (Нурасыл) | `nurasyl.dzhaksybekov` | `pass456` |
| Оқушы (Аружан) | `aruzhan.seitova` | `pass789` |
| Мұғалім | `teacher1` | `teacher123` |
| Ата-ана | `parent1` | `parent123` |
| Администратор | `admin` | `admin123` |

---

## 📁 Файл құрылымы

```
aqbobek-portal/
├── index.html              ← Басты бет (Landing Page)
├── css/
│   └── style.css           ← Негізгі стильдер
├── js/
│   └── app.js              ← Негізгі логика (Auth, Charts, AI Mentor)
├── json/
│   └── data.js             ← Mock деректер (BilimClass, оқушылар, жетістіктер)
└── pages/
    ├── login.html          ← Кіру беті (рөл бойынша)
    ├── dashboard.html      ← Негізгі панель (рөл бойынша: student/teacher/parent/admin)
    ├── grades.html         ← Бағалар (BilimClass интеграциясы)
    ├── achievements.html   ← Жетістіктер
    ├── events.html         ← Іс-шаралар
    ├── ai-mentor.html      ← AI Ментор (Claude API)
    ├── ranking.html        ← Оқушылар рейтингі (подиум)
    ├── profile.html        ← Жеке профиль
    ├── risk-zone.html      ← Тәуекел аймағы (мұғалімдерге)
    ├── teacher-grades.html ← Сынып бағалары (мұғалімдерге)
    └── kiosk.html          ← Kiosk Mode (дәліз экраны)
```

---

## ✨ Негізгі мүмкіндіктер

### 1. BilimClass интеграциясы
- Барлық оқушы бағалары mock API арқылы жүктеледі
- Пән бойынша орта балл, үрдіс, диаграммалар
- Radar chart, line chart, bar chart

### 2. AI Ментор (Claude API)
- Оқушының үлгерімін талдайды
- Мансаптық бағыт ұсынады
- Жеке дайындық жоспарын жасайды
- Fallback режимі (API жоқ кезде)

### 3. Kiosk Mode
- Мектеп дәлізіне арналған full-screen режим
- Автоматты жаңалықтар айналымы
- Тікелей сағат/күн
- Үздік оқушылар рейтингі
- Ticker tape жаңалықтар

### 4. Рөлдік интерфейстер
- **Оқушы**: Бағалар, жетістіктер, AI ментор, рейтинг
- **Мұғалім**: Сынып панелі, тәуекел аймағы
- **Ата-ана**: Баласының үлгерімі
- **Администратор**: Жалпы аналитика

### 5. Тәуекел аймағы
- Бағасы төмен оқушыларды автоматты анықтайды
- Пән бойынша проблемалы аймақтарды көрсетеді
- Мұғалімдерге хабарлама жіберу мүмкіндігі

---

## 🛠 Технологиялар

- **Frontend**: HTML5, CSS3 (CSS Variables, Grid, Flexbox), Vanilla JS
- **Charts**: Chart.js 4.4
- **Fonts**: Sora + Spectral (Google Fonts)
- **AI**: Anthropic Claude API (claude-sonnet-4)
- **Data**: JSON mock data (BilimClass simulation)
- **Auth**: SessionStorage-based auth system

---

## 👥 Команда

| Аты | Рөлі |
|-----|------|
| Hasan | Backend / Data / Architecture |
| Nurasyl | Frontend / UI / Integration |
| Aruzhan | Design / UX / Content |

---

*© 2025 Ақбөбек Лицейі Unified Portal — Hackathon Project*
