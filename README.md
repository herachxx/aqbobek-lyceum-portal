<div align="center">

<img src="https://a1s.kz/Logo_Lyc.png" alt="Aqbobek Logo" width="80"/>

# Ақбөбек Unified School Portal

**A full-featured digital ecosystem for Aqbobek IT Lyceum-Boarding School, Aktobe**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![Claude AI](https://img.shields.io/badge/Claude_API-D97757?style=for-the-badge&logo=anthropic&logoColor=white)](https://www.anthropic.com/)

[![Status](https://img.shields.io/badge/Status-Hackathon_Project-blueviolet?style=flat-square)]()
[![Roles](https://img.shields.io/badge/Roles-Student_%7C_Teacher_%7C_Parent_%7C_Admin-blue?style=flat-square)]()
[![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)]()

---

### 🌐 Read this document in your language:

[🇬🇧 English](#-english) &nbsp;|&nbsp; [🇷🇺 Русский](#-русский) &nbsp;|&nbsp; [🇰🇿 Қазақша](#-қазақша)

</div>

---

<br/>

# 🇬🇧 English

<div align="right"><a href="#-read-this-document-in-your-language">⬆ Back to top</a></div>

## Overview

**Aqbobek Unified Portal** is a role-based web application that centralises academic life for students, teachers, parents, and administrators in a single platform. It integrates grade tracking (BilimClass), an AI-powered study mentor (Claude API), a school kiosk display, achievement badges, event management, and a live student leaderboard - all delivered as a pure front-end solution with zero installation required.

## Features

| Module | Description |
|:---|:---|
| **Dashboard** | Personalised home screen that adapts to each user role |
| **Grades (BilimClass)** | Subject-level grade cards with trend lines, radar charts, and average GPA |
| **AI Mentor** | Claude-powered advisor that analyses performance, suggests careers, and builds personalised study plans |
| **Achievements** | Badge system tracking academic milestones and extracurricular wins |
| **Risk Zone** | Auto-flags underperforming students for teacher review with in-app notifications |
| **Rankings** | Podium-style leaderboard displaying top students |
| **Events** | School event calendar with registration support |
| **Profile** | Personal page with role-specific data |
| **Kiosk Mode** | Full-screen hallway display with auto-rotating news, live clock, and leaderboard ticker |
| **Teacher Grades** | Class-wide grade management panel for teachers |

## Quick Start

No build step needed. Open the project in any browser:

```bash
# Option 1 - open directly
open index.html

# Option 2 - VS Code Live Server
# Right-click index.html → "Open with Live Server"

# Option 3 - local dev server
npx serve .
# or
python -m http.server 8080
```

> [!WARNING]
> Opening via `file:///` may trigger CORS restrictions when loading data.
> A local server (Live Server or `npx serve`) is strongly recommended.

## Demo Accounts

| Role | Login | Password |
|:---|:---|:---|
| Student (Aizat) | `aizat.bekova` | `pass123` |
| Student (Hasan) | `adema.tilishbaeva` | `adema123` |
| Student (Nurasyl) | `nurasyl.dzhaksybekov` | `pass456` |
| Student (Aruzhan) | `aruzhan.seitova` | `pass789` |
| Teacher | `teacher1` | `teacher123` |
| Parent | `parent1` | `parent123` |
| Administrator | `admin` | `admin123` |

## Project Structure

```
project/
├── index.html                  ← landing page
├── css/
│   └── style.css               ← global styles (CSS Variables, Grid, Flexbox)
├── js/
│   └── app.js                  ← core logic: auth, charts, AI mentor, sidebar
├── json/
│   └── data.js                 ← data loader (webhook / mock data)
└── pages/
    ├── login.html              ← role-based login
    ├── dashboard.html          ← main dashboard (role-aware)
    ├── grades.html             ← student grade viewer
    ├── achievements.html       ← achievement badges
    ├── events.html             ← school events
    ├── ai-mentor.html          ← AI mentor chat (Claude API)
    ├── ranking.html            ← student leaderboard
    ├── profile.html            ← user profile
    ├── risk-zone.html          ← at-risk student panel (teachers only)
    ├── teacher-grades.html     ← class grade management (teachers only)
    ├── schedule.html           ← timetable view
    └── kiosk.html              ← hallway kiosk display
```

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| Markup | ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat-square) |
| Styles | ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat-square) Variables · Grid · Flexbox |
| Logic | ![JavaScript](https://img.shields.io/badge/-Vanilla_JS_(ES2020+)-F7DF1E?logo=javascript&logoColor=black&style=flat-square) |
| Charts | ![Chart.js](https://img.shields.io/badge/-Chart.js_4.4-FF6384?logo=chartdotjs&logoColor=white&style=flat-square) Radar · Line · Bar |
| Fonts | Sora + Spectral (Google Fonts) |
| AI | ![Claude](https://img.shields.io/badge/-Anthropic_Claude_API-D97757?logo=anthropic&logoColor=white&style=flat-square) `claude-sonnet-4` |
| Data | JSON via webhook endpoint |
| Auth | `sessionStorage`-based role authentication |

## 👥 Team

| Name | Role |
|:---|:---|
| **Adema** | Backend · Data Architecture · API Integration |
| **Nurasyl** | Frontend · UI Development · Feature Integration |
| **Aruzhan** | Design · UX · Content |

---

<br/>

# 🇷🇺 Русский

<div align="right"><a href="#-read-this-document-in-your-language">⬆ Наверх</a></div>

## Обзор

**Ақбөбек Unified Portal** - ролевое веб-приложение, которое собирает всю академическую жизнь школы в одном месте. Платформа объединяет учеников, учителей, родителей и администраторов: отслеживание оценок (BilimClass), персональный AI-ментор (Claude API), школьный киоск-дисплей, система достижений, управление мероприятиями и рейтинг учеников. Всё работает на стороне клиента - установка не требуется.

## Функциональность

| Модуль | Описание |
|:---|:---|
| **Дашборд** | Персонализированная главная страница, адаптирующаяся к роли пользователя |
| **Оценки (BilimClass)** | Карточки оценок по предметам с графиком тренда, радарной диаграммой и средним GPA |
| **AI Ментор** | Claude-советник: анализирует успеваемость, предлагает карьерные пути и составляет персональный план |
| **Достижения** | Система бейджей - академические и внеклассные успехи |
| **Зона риска** | Автоматически выявляет слабоуспевающих учеников; поддерживает уведомления |
| **Рейтинг** | Пьедестальная таблица лучших учеников |
| **Мероприятия** | Школьный календарь событий с поддержкой регистрации |
| **Профиль** | Личная страница с данными, специфичными для роли |
| **Режим киоска** | Полноэкранный дисплей для коридора: авторотация новостей, часы, бегущая строка рейтинга |
| **Оценки учителя** | Панель управления оценками класса для учителей |

## Быстрый старт

Сборка не требуется. Просто откройте проект в браузере:

```bash
# Вариант 1 - открыть напрямую
open index.html

# Вариант 2 - Live Server в VS Code
# ПКМ по index.html → «Open with Live Server»

# Вариант 3 - локальный сервер
npx serve .
# или
python -m http.server 8080
```

> [!WARNING]
> При открытии через `file:///` возможны CORS-ограничения.
> Рекомендуется использовать Live Server или `npx serve`.

## Демо-аккаунты

| Роль | Логин | Пароль |
|:---|:---|:---|
| Ученик (Айзат) | `aizat.bekova` | `pass123` |
| Ученик (Адема) | `adema.tilishbaeva` | `adema123` |
| Ученик (Нурасыл) | `nurasyl.dzhaksybekov` | `pass456` |
| Ученик (Аружан) | `aruzhan.seitova` | `pass789` |
| Учитель | `teacher1` | `teacher123` |
| Родитель | `parent1` | `parent123` |
| Администратор | `admin` | `admin123` |

## Структура проекта

```
project/
├── index.html                  ← лендинг (главная страница)
├── css/
│   └── style.css               ← глобальные стили (CSS-переменные, Grid, Flexbox)
├── js/
│   └── app.js                  ← основная логика: Auth, Charts, AI Mentor, Sidebar
├── json/
│   └── data.js                 ← загрузчик данных (вебхук / mock-данные)
└── pages/
    ├── login.html              ← ролевой вход
    ├── dashboard.html          ← главная панель (с учётом роли)
    ├── grades.html             ← просмотр оценок
    ├── achievements.html       ← бейджи достижений
    ├── events.html             ← мероприятия
    ├── ai-mentor.html          ← чат с AI Ментором (Claude API)
    ├── ranking.html            ← рейтинг учеников
    ├── profile.html            ← профиль пользователя
    ├── risk-zone.html          ← зона риска (только для учителей)
    ├── teacher-grades.html     ← управление оценками (только для учителей)
    ├── schedule.html           ← расписание занятий
    └── kiosk.html              ← дисплей киоска
```

## 🛠️ Технологический стек

| Уровень | Технология |
|:---|:---|
| Разметка | ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat-square) |
| Стили | ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat-square) Переменные · Grid · Flexbox |
| Логика | ![JavaScript](https://img.shields.io/badge/-Vanilla_JS_(ES2020+)-F7DF1E?logo=javascript&logoColor=black&style=flat-square) |
| Графики | ![Chart.js](https://img.shields.io/badge/-Chart.js_4.4-FF6384?logo=chartdotjs&logoColor=white&style=flat-square) Радар · Линия · Столбец |
| Шрифты | Sora + Spectral (Google Fonts) |
| ИИ | ![Claude](https://img.shields.io/badge/-Anthropic_Claude_API-D97757?logo=anthropic&logoColor=white&style=flat-square) `claude-sonnet-4` |
| Данные | JSON через вебхук-эндпоинт |
| Авторизация | Ролевая аутентификация на `sessionStorage` |

## 👥 Команда

| Имя | Роль |
|:---|:---|
| **Adema** | Backend · Архитектура данных · API-интеграция |
| **Nurasyl** | Frontend · UI-разработка · Интеграция функций |
| **Aruzhan** | Дизайн · UX · Контент |

---

<br/>

# 🇰🇿 Қазақша

<div align="right"><a href="#-read-this-document-in-your-language">⬆ Жоғарыға</a></div>

## Жалпы сипаттама

**Ақбөбек Unified Portal** - мектептің академиялық өмірін бір платформада шоғырландыратын рөлдік веб-қосымша. Жүйе оқушылар, мұғалімдер, ата-аналар және әкімшілерді біріктіреді: BilimClass арқылы бағаларды бақылау, Claude API негізіндегі AI ментор, мектеп дәліз дисплейі, жетістіктер жүйесі, іс-шараларды басқару және тікелей оқушылар рейтингі. Қосымша толығымен клиент жағында жұмыс істейді - орнату қажет емес.

## Мүмкіндіктер

| Модуль | Сипаттама |
|:---|:---|
| **Бақылау тақтасы** | Пайдаланушы рөліне бейімделетін жеке бас бет |
| **Бағалар (BilimClass)** | Пән бойынша бағалар картасы, үрдіс диаграммасы, радар-chart және орта GPA |
| **AI Ментор** | Claude кеңесші: үлгерімді талдайды, мансаптық бағыт ұсынады, дайындық жоспарын жасайды |
| **Жетістіктер** | Академиялық және сыныптан тыс жетістіктерді тіркейтін бейдж жүйесі |
| **Тәуекел аймағы** | Үлгерімі төмен оқушыларды автоматты анықтайды; хабарламаларды қолдайды |
| **Рейтинг** | Үздік оқушыларды пьедестал форматында көрсететін кесте |
| **Іс-шаралар** | Тіркелу мүмкіндігі бар мектеп іс-шаралары күнтізбесі |
| **Профиль** | Рөлге тән деректері бар жеке бет |
| **Kiosk режимі** | Дәліз үшін толық экранды дисплей: жаңалықтар айналымы, тікелей сағат, рейтинг жолаушысы |
| **Мұғалім бағалары** | Мұғалімдер үшін сынып бағаларын басқару панелі |

## Жылдам іске қосу

Жинау қадамы қажет емес. Жобаны кез-келген браузерде ашыңыз:

```bash
# 1-нұсқа - тікелей ашу
open index.html

# 2-нұсқа - VS Code Live Server кеңейтімі
# index.html → ПКМ → «Open with Live Server»

# 3-нұсқа - жергілікті дамыту сервері
npx serve .
# немесе
python -m http.server 8080
```

> [!WARNING]
> `file:///` арқылы ашқанда деректерді жүктеу кезінде CORS шектеулері болуы мүмкін.
> Live Server немесе `npx serve` пайдалану ұсынылады.

## Demo аккаунттар

| Рөл | Логин | Пароль |
|:---|:---|:---|
| Оқушы (Айзат) | `aizat.bekova` | `pass123` |
| Оқушы (Адема) | `adema.tilishbaeva` | `adema123` |
| Оқушы (Нурасыл) | `nurasyl.dzhaksybekov` | `pass456` |
| Оқушы (Аружан) | `aruzhan.seitova` | `pass789` |
| Мұғалім | `teacher1` | `teacher123` |
| Ата-ана | `parent1` | `parent123` |
| Администратор | `admin` | `admin123` |

## Жоба құрылымы

```
project/
├── index.html                  ← Лендинг (Басты бет)
├── css/
│   └── style.css               ← Жалпы стильдер (CSS айнымалылары, Grid, Flexbox)
├── js/
│   └── app.js                  ← Негізгі логика: Auth, Charts, AI Mentor, Sidebar
├── json/
│   └── data.js                 ← Деректер жүктеушісі (вебхук / mock деректер)
└── pages/
    ├── login.html              ← Рөлдік кіру беті
    ├── dashboard.html          ← Негізгі бақылау тақтасы (рөлге сәйкес)
    ├── grades.html             ← Оқушы бағаларын қарау
    ├── achievements.html       ← Жетістіктер бейджтері
    ├── events.html             ← Мектеп іс-шаралары
    ├── ai-mentor.html          ← AI Ментор чаты (Claude API)
    ├── ranking.html            ← Оқушылар рейтингі
    ├── profile.html            ← Пайдаланушы профилі
    ├── risk-zone.html          ← Тәуекел аймағы (тек мұғалімдерге)
    ├── teacher-grades.html     ← Сынып бағаларын басқару (тек мұғалімдерге)
    ├── schedule.html           ← Сабақ кестесі
    └── kiosk.html              ← Дәліз Kiosk дисплейі
```

## 🛠️ Технологиялық стек

| Деңгей | Технология |
|:---|:---|
| Белгілеу | ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat-square) |
| Стильдер | ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat-square) Айнымалылар · Grid · Flexbox |
| Логика | ![JavaScript](https://img.shields.io/badge/-Vanilla_JS_(ES2020+)-F7DF1E?logo=javascript&logoColor=black&style=flat-square) |
| Диаграммалар | ![Chart.js](https://img.shields.io/badge/-Chart.js_4.4-FF6384?logo=chartdotjs&logoColor=white&style=flat-square) Radar · Line · Bar |
| Қаріптер | Sora + Spectral (Google Fonts) |
| Жасанды интеллект | ![Claude](https://img.shields.io/badge/-Anthropic_Claude_API-D97757?logo=anthropic&logoColor=white&style=flat-square) `claude-sonnet-4` |
| Деректер | Вебхук-эндпоинт арқылы JSON |
| Аутентификация | `sessionStorage` негізіндегі рөлдік жүйе |

## 👥 Команда

| Аты | Рөлі |
|:---|:---|
| **Adema** | Backend · Деректер архитектурасы · API интеграциясы |
| **Nurasyl** | Frontend · UI әзірлеу · Мүмкіндіктерді интеграциялау |
| **Aruzhan** | Дизайн · UX · Мазмұн |

---

<div align="center">

*© 2026 Ақбөбек Лицейі - Unified Portal · Hackathon Project*

[![Made with ❤️ in Aktobe](https://img.shields.io/badge/Made_with_%E2%9D%A4%EF%B8%8F_in-Aktobe-ff69b4?style=flat-square)]()

</div>
