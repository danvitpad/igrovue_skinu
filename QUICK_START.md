# 🚀 Быстрый запуск для просмотра сайта

## Вариант 1: Только Frontend (для просмотра UI)

### Шаг 1: Установка зависимостей Frontend

```bash
cd frontend
npm install
```

### Шаг 2: Создание .env.local файла

Создайте файл `frontend/.env.local` со следующим содержимым:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_STEAM_API_KEY=your_steam_api_key_here
NEXT_PUBLIC_STEAM_RETURN_URL=http://localhost:3000/auth/steam/callback
NEXT_PUBLIC_EPIC_CLIENT_ID=your_epic_client_id_here
```

### Шаг 3: Запуск Frontend

```bash
npm run dev
```

Откройте браузер: http://localhost:3000

---

## Вариант 2: Полный запуск (Frontend + Backend)

### Шаг 1: Установка всех зависимостей

Из корня проекта:
```bash
npm run install:all
```

Или отдельно:
```bash
cd frontend && npm install && cd ..
cd backend && npm install && cd ..
```

### Шаг 2: Создание .env файлов

**Backend** (`backend/.env`):
```env
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/skiny_hub?schema=public
JWT_SECRET=dev_secret_key_change_in_production_12345
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:3000
FRONTEND_URL=http://localhost:3000
```

**Frontend** (`frontend/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Шаг 3: Запуск

Из корня проекта:
```bash
npm run dev
```

Или отдельно в двух терминалах:
```bash
# Терминал 1
cd backend
npm run dev

# Терминал 2  
cd frontend
npm run dev
```

**Примечание:** Backend будет работать даже без подключенной БД для базовых эндпоинтов (health check).

---

## 📝 Что вы увидите

- 🏠 **Главная страница** - Яркий hero-блок с градиентами
- 🔐 **Страницы авторизации** - Login и Register с кнопками Steam/Epic
- 🛒 **Маркетплейс** - Страница с карточками товаров (пока с placeholder данными)

---

## ⚠️ Важно

- Для полной функциональности нужна PostgreSQL БД
- Steam и Epic Games авторизация требует API ключи
- На данный момент UI работает, но backend функции требуют доработки
