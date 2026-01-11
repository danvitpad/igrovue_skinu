import Link from 'next/link'
import { Gamepad2, TrendingUp, Users, Shield } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-gaming py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Skiny Hub
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Яркий маркетплейс для геймеров. Обменивай, продавай и покупай
              скины из Steam, Epic Games и других платформ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/login"
                className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
              >
                Начать
              </Link>
              <Link
                href="/marketplace"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all"
              >
                Маркетплейс
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Почему Skiny Hub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-800 rounded-xl hover:scale-105 transition-transform border border-slate-700">
              <Gamepad2 className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Множество платформ
              </h3>
              <p className="text-slate-400">
                Steam, Epic Games и другие - все в одном месте
              </p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl hover:scale-105 transition-transform border border-slate-700">
              <TrendingUp className="w-12 h-12 text-accent-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Лучшие цены
              </h3>
              <p className="text-slate-400">
                Прозрачная система ценообразования и обмена
              </p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl hover:scale-105 transition-transform border border-slate-700">
              <Users className="w-12 h-12 text-success-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Сообщество
              </h3>
              <p className="text-slate-400">
                Общайся, следи за профилями, делись достижениями
              </p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl hover:scale-105 transition-transform border border-slate-700">
              <Shield className="w-12 h-12 text-primary-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Безопасно
              </h3>
              <p className="text-slate-400">
                Защищенные транзакции и проверенные пользователи
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
