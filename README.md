# WildQuest 🌿

Мобильное демо-приложение для исследования природы: сканирование растений/животных,
карта горячих точек, коллекция видов, задания и профиль. Собрано на React + Vite + Tailwind.

Исходно проект существовал как один файл `WildQuest_2.jsx` (~1400 строк). Здесь он
разбит на модульную структуру, готовую к git-репозиторию.

## Запуск

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
```

## Структура проекта

```
wildquest/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                 # точка входа
    ├── App.jsx                  # AppShell — каркас "телефона", роутинг вкладок
    ├── index.css                # Tailwind-директивы
    │
    ├── theme/
    │   └── tokens.js            # DARK/LIGHT темы, акцентные цвета, цвета редкости
    │
    ├── styles/
    │   └── globalStyles.js      # шрифты + глобальный CSS (анимации, wq-* классы)
    │
    ├── i18n/
    │   └── lang.js              # переводы en/ru + список языков
    │
    ├── data/
    │   └── mockData.js          # демо-данные: пользователь, квесты, точки карты, виды
    │
    ├── context/
    │   └── AppContext.jsx       # React Context: тема, язык, прогресс, монеты/опыт
    │
    ├── components/
    │   ├── ui/                  # переиспользуемые примитивы
    │   │   ├── GlassCard.jsx
    │   │   ├── Pill.jsx
    │   │   ├── RarityPill.jsx
    │   │   ├── SectionTitle.jsx
    │   │   ├── ProgressBar.jsx
    │   │   ├── Switch.jsx
    │   │   └── index.js         # barrel-экспорт
    │   └── layout/               # элементы каркаса экрана
    │       ├── StatusBar.jsx
    │       ├── HomeIndicator.jsx
    │       ├── NotificationsPanel.jsx
    │       └── TabBar.jsx
    │
    └── screens/                  # экраны приложения (вкладки)
        ├── HomeScreen.jsx
        ├── ExploreScreen.jsx
        ├── ScanScreen.jsx
        ├── CollectionScreen.jsx
        ├── ProfileScreen.jsx
        └── SettingsScreen.jsx
```

## Стек

- React 18
- Vite 5
- Tailwind CSS 3
- lucide-react (иконки)
