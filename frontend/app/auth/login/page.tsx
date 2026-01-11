'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Gamepad2, Mail, Lock } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSteamLogin = () => {
    window.location.href = '/api/auth/steam'
  }

  const handleEpicLogin = () => {
    window.location.href = '/api/auth/epic'
  }

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement email login
    console.log('Email login:', email, password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <div className="flex items-center justify-center gap-2">
              <Gamepad2 className="w-10 h-10 text-primary-500" />
              <span className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                Skiny Hub
              </span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Войти</h1>
          <p className="text-slate-400">Выберите способ входа</p>
        </div>

        <div className="space-y-4">
          {/* Steam Login */}
          <button
            onClick={handleSteamLogin}
            className="w-full flex items-center justify-center gap-3 bg-[#171a21] hover:bg-[#1b2838] text-white font-semibold py-3 px-4 rounded-lg transition-all border border-[#1b2838] hover:border-[#66c0f4]"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
            </svg>
            Войти через Steam
          </button>

          {/* Epic Games Login */}
          <button
            onClick={handleEpicLogin}
            className="w-full flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg transition-all border border-gray-800 hover:border-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
            </svg>
            Войти через Epic Games
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-800 text-slate-400">или</span>
            </div>
          </div>

          {/* Email Login */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Пароль
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-primary text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Войти
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          Нет аккаунта?{' '}
          <Link href="/auth/register" className="text-primary-400 hover:text-primary-300 font-medium">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  )
}
