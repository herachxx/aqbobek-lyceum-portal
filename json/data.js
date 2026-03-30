/* ═══════════════════════════════════════════════════
   AQBOBEK DATA — Static embedded data
   Синхронды жүктеледі, webhook қажет емес
   ═══════════════════════════════════════════════════ */

const LYCEUM_DATA = {
  subjects: ["Математика","Физика","Химия","Информатика","Ағылшын тілі","Қазақ тілі","Биология","Тарих"],

  students: [
    {
      id: 1, login: "aizat.bekova", password: "pass123",
      fullname: "Бекова Айзат Нұрланқызы", grade: "10А", avatar: null,
      role: "student", gpa: 4.7, rank: 1, riskLevel: "low",
      subject: null, riskStudents: null, childId: null,
      bilimClass: {
        "Математика":    [92,88,95,91,94,89,97],
        "Физика":        [88,91,85,90,93,87,92],
        "Химия":         [95,97,93,96,94,98,95],
        "Информатика":   [98,99,97,100,98,99,100],
        "Ағылшын тілі": [90,92,88,94,91,93,95],
        "Қазақ тілі":   [85,88,87,90,89,91,93],
        "Биология":      [82,85,88,84,87,89,86],
        "Тарих":         [88,91,89,93,90,87,92]
      },
      achievements: [
        { title: "Республикалық математика олимпиадасы", place: 1, year: 2024, icon: "🥇" },
        { title: "IT-шабандоз хакатоны",                 place: 1, year: 2024, icon: "🏆" },
        { title: "Aqbobek Science Fair",                  place: 2, year: 2023, icon: "🥈" },
        { title: "Халықаралық физика олимпиадасы",        place: 3, year: 2023, icon: "🥉" }
      ],
      goals: ["ЕНТ 130+","MIT-ке түсу","Python сертификаты"],
      events: [1,2,3]
    },
    {
      id: 2, login: "nurasyl.dzhaksybekov", password: "pass456",
      fullname: "Джаксыбеков Нурасыл Ерланұлы", grade: "10А", avatar: null,
      role: "student", gpa: 4.2, rank: 3, riskLevel: "medium",
      subject: null, riskStudents: null, childId: null,
      bilimClass: {
        "Математика":    [78,82,80,85,83,87,84],
        "Физика":        [75,79,77,82,80,78,83],
        "Химия":         [70,74,72,76,78,73,79],
        "Информатика":   [92,95,90,96,93,97,94],
        "Ағылшын тілі": [88,91,89,93,90,92,95],
        "Қазақ тілі":   [80,82,79,84,81,83,85],
        "Биология":      [68,72,70,74,76,71,77],
        "Тарих":         [75,78,76,80,77,79,82]
      },
      achievements: [
        { title: "Облыстық информатика олимпиадасы", place: 1, year: 2024, icon: "🥇" },
        { title: "Web-дизайн байқауы",               place: 2, year: 2024, icon: "🥈" }
      ],
      goals: ["Программалауды үйрену","ЕНТ 120+"],
      events: [1,3]
    },
    {
      id: 3, login: "aruzhan.seitova", password: "pass789",
      fullname: "Сейтова Аружан Асланқызы", grade: "10Б", avatar: null,
      role: "student", gpa: 4.5, rank: 2, riskLevel: "low",
      subject: null, riskStudents: null, childId: null,
      bilimClass: {
        "Математика":    [88,91,89,93,90,92,94],
        "Физика":        [91,93,90,95,92,94,96],
        "Химия":         [87,90,88,92,89,91,93],
        "Информатика":   [85,88,86,90,87,89,91],
        "Ағылшын тілі": [94,96,93,97,95,96,98],
        "Қазақ тілі":   [91,93,90,94,92,94,95],
        "Биология":      [93,95,92,96,94,95,97],
        "Тарих":         [89,92,90,94,91,93,95]
      },
      achievements: [
        { title: "Республикалық биология олимпиадасы", place: 2, year: 2024, icon: "🥈" },
        { title: "Ғылыми жоба — Жасыл Қазақстан",     place: 1, year: 2023, icon: "🥇" },
        { title: "Ағылшын тілі байқауы",               place: 1, year: 2024, icon: "🥇" }
      ],
      goals: ["Медицина мамандығы","ЕНТ 125+","IELTS 7.0"],
      events: [2,3,4]
    },
    {
      id: 4, login: "damir.utegenov", password: "pass000",
      fullname: "Үтегенов Дамир Серікқалиұлы", grade: "10Б", avatar: null,
      role: "student", gpa: 3.6, rank: 8, riskLevel: "high",
      subject: null, riskStudents: null, childId: null,
      bilimClass: {
        "Математика":    [60,65,58,70,63,67,62],
        "Физика":        [55,60,57,63,61,59,64],
        "Химия":         [72,68,74,70,73,69,75],
        "Информатика":   [80,83,78,85,82,80,84],
        "Ағылшын тілі": [65,68,63,70,66,69,71],
        "Қазақ тілі":   [70,73,68,74,71,72,75],
        "Биология":      [60,63,61,66,64,62,67],
        "Тарих":         [68,71,69,73,70,72,74]
      },
      achievements: [],
      goals: ["Химияны жақсарту"],
      events: [3]
    },
    {
      id: 5, login: "hasan.nurmagambetov", password: "hasan123",
      fullname: "Нурмагамбетов Хасан Ерланұлы", grade: "11А", avatar: null,
      role: "student", gpa: 4.9, rank: 1, riskLevel: "low",
      subject: null, riskStudents: null, childId: null,
      bilimClass: {
        "Математика":    [98,100,97,99,100,98,100],
        "Физика":        [96,98,95,99,97,98,99],
        "Химия":         [91,94,90,95,92,93,96],
        "Информатика":   [100,100,99,100,100,100,100],
        "Ағылшын тілі": [95,97,94,98,96,97,99],
        "Қазақ тілі":   [93,95,92,96,94,95,97],
        "Биология":      [89,92,88,93,90,91,94],
        "Тарих":         [94,96,93,97,95,96,98]
      },
      achievements: [
        { title: "Халықаралық математика олимпиадасы (IMO)", place: 1, year: 2024, icon: "🥇" },
        { title: "Google Code Jam",                          place: 3, year: 2024, icon: "🥉" },
        { title: "MIT Challenge",                            place: 1, year: 2023, icon: "🏆" },
        { title: "Aqbobek Hackathon",                        place: 1, year: 2024, icon: "💻" }
      ],
      goals: ["MIT / Stanford","ЕНТ 140","Стартап ашу"],
      events: [1,2,3,4]
    }
  ],

  teachers: [
    {
      id: 6, login: "teacher1", password: "teacher123",
      fullname: "Аманова Гүлнар Сейітқалиқызы", grade: "10А, 10Б, 11А", avatar: null,
      role: "teacher", subject: "Математика",
      gpa: null, rank: null, bilimClass: null, achievements: null,
      goals: null, events: null, riskLevel: null, childId: null,
      riskStudents: [4]
    },
    {
      id: 7, login: "teacher2", password: "teacher456",
      fullname: "Байжанов Серік Маратұлы", grade: "10А, 10Б", avatar: null,
      role: "teacher", subject: "Информатика",
      gpa: null, rank: null, bilimClass: null, achievements: null,
      goals: null, events: null, riskLevel: null, childId: null,
      riskStudents: []
    }
  ],

  parents: [
    {
      id: 8, login: "parent1", password: "parent123",
      fullname: "Бекова Нұрлан Қызы (ата-ана)", grade: null, avatar: null,
      role: "parent", childId: 1,
      gpa: null, rank: null, bilimClass: null, achievements: null,
      goals: null, events: null, riskLevel: null, subject: null, riskStudents: null
    }
  ],

  admins: [
    {
      id: 9, login: "admin", password: "admin123",
      fullname: "Директор Мұсаев Бауыржан", grade: null, avatar: null,
      role: "admin",
      gpa: null, rank: null, bilimClass: null, achievements: null,
      goals: null, events: null, riskLevel: null, subject: null,
      riskStudents: null, childId: null
    }
  ],

  leaderboard: [
    { id: 1, rank: 1, name: "Нурмагамбетов Хасан", grade: "11А", gpa: 4.9, achievements: 4, badge: "🏆" },
    { id: 2, rank: 2, name: "Бекова Айзат",         grade: "10А", gpa: 4.7, achievements: 4, badge: "🥇" },
    { id: 3, rank: 3, name: "Сейтова Аружан",       grade: "10Б", gpa: 4.5, achievements: 3, badge: "🥈" },
    { id: 4, rank: 4, name: "Джаксыбеков Нурасыл",  grade: "10А", gpa: 4.2, achievements: 2, badge: "🥉" },
    { id: 5, rank: 5, name: "Мамбеталиева Дина",    grade: "11Б", gpa: 4.1, achievements: 2, badge: "⭐" },
    { id: 6, rank: 6, name: "Қасымов Арман",         grade: "9А",  gpa: 4.0, achievements: 1, badge: "⭐" },
    { id: 7, rank: 7, name: "Тасбекова Жанар",       grade: "11А", gpa: 3.9, achievements: 1, badge: "⭐" },
    { id: 8, rank: 8, name: "Үтегенов Дамир",        grade: "10Б", gpa: 3.6, achievements: 0, badge: "📚" }
  ],

  news: [
    {
      id: 1, title: "Оқушымыз IMO-да алтын алды!",
      body: "11А сыныбының оқушысы Хасан Нурмагамбетов Халықаралық математика олимпиадасында бірінші орын иеленді.",
      date: "2024-12-01", category: "achievement", hot: true
    },
    {
      id: 2, title: "Жаңа IT-зертхана ашылды",
      body: "Лицейде заманауи 30 орындық IT-зертхана жұмысын бастады. 50+ компьютер, VR, робототехника жабдықтары.",
      date: "2024-11-15", category: "campus", hot: false
    },
    {
      id: 3, title: "ЕНТ нәтижелері: орта балл 118",
      body: "Биылғы ЕНТ-де Ақбөбек лицейінің түлектері орта есеппен 118 балл жинады — облыстық рекорд.",
      date: "2024-10-20", category: "academic", hot: false
    },
    {
      id: 4, title: "MIT Challenge жеңімпаздары",
      body: "Лицей командасы MIT Challenge халықаралық байқауында 1-орын алды. Команда мүшелері: Хасан Н., Аружан С., Айзат Б.",
      date: "2024-09-10", category: "achievement", hot: true
    }
  ],

  events: [
    {
      id: 1, title: "Республикалық олимпиада дайындығы",
      titleRu: "Подготовка к республиканской олимпиаде",
      type: "academic", color: "#7c3aed", date: "2025-03-15", participants: 24,
      description: "Математика, физика, информатика пәндері бойынша республикалық олимпиадаға дайындық сессиясы."
    },
    {
      id: 2, title: "Ақбөбек Науқа Жәрмеңкесі",
      titleRu: "Science Fair Акбобек",
      type: "science", color: "#059669", date: "2025-04-05", participants: 60,
      description: "Жыл сайынғы ғылыми жоба жәрмеңкесі. Барлық сыныптардан 50+ жоба."
    },
    {
      id: 3, title: "IT Хакатон 2025",
      titleRu: "IT Хакатон 2025",
      type: "it", color: "#2563eb", date: "2025-04-20", participants: 40,
      description: "24 сағаттық хакатон. Командалық жобалар: AI, Web, Mobile бағыттарында."
    },
    {
      id: 4, title: "Мектеп Спартакиадасы",
      titleRu: "Школьная Спартакиада",
      type: "sport", color: "#dc2626", date: "2025-05-10", participants: 100,
      description: "Жыл сайынғы спорттық жарыс. Футбол, волейбол, жеңіл атлетика."
    },
    {
      id: 5, title: "Ашық есік күні",
      titleRu: "День открытых дверей",
      type: "general", color: "#d97706", date: "2025-05-25", participants: 200,
      description: "Болашақ оқушылар мен ата-аналарға арналған ашық есік күні."
    }
  ],

  get allUsers() {
    return [...this.students, ...this.teachers, ...this.parents, ...this.admins];
  }
};

console.log("✅ LYCEUM_DATA loaded:", LYCEUM_DATA.students.length, "students,", LYCEUM_DATA.allUsers.length, "total users");
