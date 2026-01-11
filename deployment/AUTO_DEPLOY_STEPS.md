# 🚀 Пошаговая инструкция для AI: Автоматизированный Deployment

**Версия:** 1.0  
**Для:** AI Assistants с MCP Browser  
**Цель:** Максимальная автоматизация с минимальным участием пользователя

---

## 🎯 Общий процесс

1. AI открывает страницы для авторизации
2. Пользователь авторизуется
3. Пользователь дает ключи/данные
4. AI автоматически настраивает все через CLI и API
5. AI вносит изменения в код
6. AI тестирует и выдает отчет

**Время пользователя:** 5-10 минут  
**Время AI:** 30-40 минут

---

## 📋 ДЕТАЛЬНЫЕ ШАГИ

### ЭТАП 0: Подготовка (AI автоматически)

**Что делает AI:**
1. Проверяет окружение:
   ```bash
   node --version
   npm --version  
   git --version
   ```

2. Инициализирует Git (если нужно):
   ```bash
   git init
   git config --global user.name "Your Name"
   git config --global user.email "your@email.com"
   ```

3. Создает структуру:
   ```bash
   mkdir -p deployment
   cp deployment/config-template.json deployment/.secrets.json
   ```

4. Проверяет .gitignore (должен исключать deployment/.secrets.json)

**Результат:** Готовность к деплою

---

### ЭТАП 1: GitHub (AI + Пользователь ~2 минуты)

**AI действия:**
1. Открывает браузер: `https://github.com/login`
2. Говорит пользователю: "Пожалуйста, авторизуйтесь на GitHub"
3. После авторизации открывает: `https://github.com/new`
4. Говорит: "Создайте новый репозиторий (название: skinny-hub), скопируйте URL"

**Пользователь:**
- Авторизуется
- Создает репозиторий
- Копирует URL (например: `https://github.com/username/skiny-hub.git`)

**AI действия после получения URL:**
1. Сохраняет URL в deployment/.secrets.json
2. Добавляет remote:
   ```bash
   git remote add origin <URL>
   ```
3. Делает первый коммит:
   ```bash
   git add .
   git commit -m "Initial commit: Skiny Hub marketplace"
   git branch -M main
   git push -u origin main
   ```

**Результат:** Код на GitHub

---

### ЭТАП 2: Vercel (AI + Пользователь ~3 минуты)

**AI действия:**
1. Открывает браузер: `https://vercel.com/login`
2. Говорит: "Авторизуйтесь на Vercel (лучше через GitHub)"
3. После авторизации говорит: "Разрешите доступ к репозиторию skinny-hub"

**Пользователь:**
- Авторизуется
- Разрешает доступ к репозиторию

**AI действия после:**
1. Проверяет Vercel CLI:
   ```bash
   vercel --version
   ```
2. Если нет, устанавливает:
   ```bash
   npm i -g vercel
   ```
3. Авторизуется через CLI:
   ```bash
   vercel login
   ```
4. Создает/обновляет `vercel.json`:
   ```json
   {
     "version": 2,
     "buildCommand": "cd frontend && npm install && npm run build",
     "outputDirectory": "frontend/.next",
     "devCommand": "cd frontend && npm run dev",
     "installCommand": "cd frontend && npm install",
     "framework": "nextjs",
     "env": {
       "NEXT_PUBLIC_API_URL": "https://skiny-hub-backend.onrender.com"
     }
   }
   ```
5. Делает деплой:
   ```bash
   cd frontend
   vercel --prod
   ```
6. Получает URL от вывода команды
7. Сохраняет в deployment/.secrets.json
8. Настраивает переменные окружения:
   ```bash
   vercel env add NEXT_PUBLIC_API_URL production
   # Вводит: https://skiny-hub-backend.onrender.com (обновит после Render)
   ```

**Результат:** Frontend на Vercel

---

### ЭТАП 3: Render (AI + Пользователь ~5 минут)

**AI действия:**
1. Открывает браузер: `https://dashboard.render.com/register`
2. Говорит: "Зарегистрируйтесь/авторизуйтесь на Render (лучше через GitHub)"

**Пользователь:**
- Регистрируется/авторизуется

**AI действия после:**
1. Проверяет Render CLI:
   ```bash
   render --version
   ```
2. Если нет, устанавливает (Windows):
   ```powershell
   # Через Chocolatey
   choco install render-cli
   # Или скачать
   Invoke-WebRequest -Uri "https://render.com/download/render-windows" -OutFile "render.exe"
   ```
3. Авторизуется:
   ```bash
   render login
   ```
4. Создает PostgreSQL базу данных:
   ```bash
   render databases create --name skinny-hub-db --database skinny_hub --user skinny_user --region oregon
   ```
5. Получает DATABASE_URL из вывода
6. Создает `backend/render.yaml`:
   ```yaml
   services:
     - type: web
       name: skinny-hub-backend
       runtime: node
       region: oregon
       plan: free
       branch: main
       rootDir: backend
       buildCommand: npm install
       startCommand: npm start
       envVars:
         - key: NODE_ENV
           value: production
         - key: DATABASE_URL
           fromDatabase:
             name: skinny-hub-db
             property: connectionString
         - key: PORT
           value: 10000
         - key: CORS_ORIGINS
           value: https://skiny-hub.vercel.app
         - key: FRONTEND_URL
           value: https://skiny-hub.vercel.app
   ```
7. Создает Web Service:
   ```bash
   render services create web --name skinny-hub-backend --repo <GITHUB_URL> --branch main --root-dir backend
   ```
8. Получает URL сервиса
9. Сохраняет все в deployment/.secrets.json
10. Обновляет переменные окружения в Render через CLI (после получения ключей)

**Результат:** Backend и БД на Render

---

### ЭТАП 4: Stripe (AI + Пользователь ~3 минуты)

**AI действия:**
1. Открывает браузер: `https://dashboard.stripe.com/register`
2. Говорит: "Зарегистрируйтесь на Stripe"
3. После регистрации открывает: `https://dashboard.stripe.com/test/apikeys`
4. Говорит: "Скопируйте Publishable key (pk_test_...) и Secret key (sk_test_...)"

**Пользователь:**
- Регистрируется
- Копирует ключи

**AI действия после получения ключей:**
1. Сохраняет ключи в deployment/.secrets.json
2. Добавляет в Vercel:
   ```bash
   vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production
   # Вводит publishable key
   ```
3. Добавляет в Render:
   ```bash
   render env set STRIPE_SECRET_KEY <secret-key>
   ```
4. Открывает настройки Webhooks: `https://dashboard.stripe.com/test/webhooks`
5. Говорит: "Создайте webhook: URL = https://skiny-hub-backend.onrender.com/api/webhooks/stripe, события = payment_intent.succeeded, charge.succeeded"
6. После создания получает Webhook Secret (whsec_...)
7. Сохраняет и добавляет в Render:
   ```bash
   render env set STRIPE_WEBHOOK_SECRET <webhook-secret>
   ```

**Результат:** Stripe настроен

---

### ЭТАП 5: Resend (AI + Пользователь ~2 минуты)

**AI действия:**
1. Открывает браузер: `https://resend.com/signup`
2. Говорит: "Зарегистрируйтесь на Resend"
3. После регистрации открывает: `https://resend.com/api-keys`
4. Говорит: "Создайте API ключ (Create API Key) и скопируйте (re_...)"

**Пользователь:**
- Регистрируется
- Создает API ключ
- Копирует ключ

**AI действия после получения ключа:**
1. Сохраняет ключ
2. Добавляет в Render:
   ```bash
   render env set RESEND_API_KEY <api-key>
   ```
3. Добавляет FROM email:
   ```bash
   render env set EMAIL_FROM noreply@yourdomain.com
   ```

**Результат:** Resend настроен

---

### ЭТАП 6: Telegram (AI + Пользователь ~2 минуты)

**AI действия:**
1. Открывает браузер: `https://t.me/BotFather`
2. Говорит: "Откройте @BotFather в Telegram, отправьте /newbot, следуйте инструкциям, скопируйте токен"

**Пользователь:**
- Открывает Telegram
- Создает бота через @BotFather
- Копирует токен

**AI действия после получения токена:**
1. Сохраняет токен
2. Добавляет в Render:
   ```bash
   render env set TELEGRAM_BOT_TOKEN <bot-token>
   ```

**Результат:** Telegram бот настроен

---

### ЭТАП 7: Финальная настройка (AI автоматически ~10 минут)

**AI действия:**

1. **Обновляет URL'ы:**
   - Обновляет NEXT_PUBLIC_API_URL в Vercel с правильным backend URL
   - Обновляет CORS_ORIGINS в Render с правильным frontend URL

2. **Настраивает БД:**
   ```bash
   cd backend
   npm install
   npm run db:generate
   npm run db:migrate
   # Или через Render dashboard
   ```

3. **Запускает тесты:**
   - Health check: `curl https://skiny-hub-backend.onrender.com/health`
   - Frontend доступность: `curl https://skiny-hub.vercel.app`

4. **Создает DEPLOYMENT_SUMMARY.md:**
   ```markdown
   # Deployment Summary - Skiny Hub
   
   ## ✅ Успешно задеплоено!
   
   ### URL'ы
   - Frontend: https://skiny-hub.vercel.app
   - Backend: https://skiny-hub-backend.onrender.com
   - Database: PostgreSQL на Render
   
   ### Сервисы
   - ✅ GitHub
   - ✅ Vercel
   - ✅ Render
   - ✅ Stripe
   - ✅ Resend
   - ✅ Telegram
   
   ### Переменные окружения
   Все настроены автоматически через CLI
   
   ### Следующие шаги
   1. Настроить кастомный домен
   2. Переключить Stripe на production
   3. Настроить мониторинг
   ```

5. **Коммитит финальные изменения:**
   ```bash
   git add .
   git commit -m "Add deployment configuration"
   git push
   ```

**Результат:** Все готово!

---

## 📝 Чеклист для AI

- [ ] GitHub репозиторий создан и код запушен
- [ ] Vercel frontend задеплоен
- [ ] Render backend задеплоен
- [ ] Render PostgreSQL создана
- [ ] Stripe настроен (ключи + webhook)
- [ ] Resend настроен
- [ ] Telegram бот настроен
- [ ] Все переменные окружения установлены
- [ ] БД миграции выполнены
- [ ] Health checks проходят
- [ ] DEPLOYMENT_SUMMARY.md создан

---

## 🎯 Итог

**Время пользователя:** 5-10 минут (только авторизация и ключи)  
**Время AI:** 30-40 минут (все автоматизировано)  
**Результат:** Полностью настроенное production окружение
