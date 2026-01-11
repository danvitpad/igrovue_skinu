import { Gamepad2, Filter, Search } from 'lucide-react'
import Link from 'next/link'

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Gamepad2 className="w-8 h-8 text-primary-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                Skiny Hub
              </span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/marketplace" className="text-white font-medium hover:text-primary-400 transition-colors">
                Маркетплейс
              </Link>
              <Link href="/profile" className="text-slate-400 hover:text-white transition-colors">
                Профиль
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Маркетплейс</h1>
          <p className="text-slate-400 text-lg">
            Найдите и купите скины, предметы и инвентарь из ваших любимых игр
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Поиск скинов, предметов..."
                className="w-full pl-12 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors border border-slate-600">
              <Filter className="w-5 h-5" />
              Фильтры
            </button>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Placeholder items */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary-500 transition-all hover:scale-105 cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500"></div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2">Skin #{item}</h3>
                <p className="text-slate-400 text-sm mb-4">CS:GO • Steam</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary-400">${(item * 10).toFixed(2)}</span>
                  <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-sm font-medium">
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
