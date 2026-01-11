import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Skiny Hub - Маркетплейс для Геймеров',
  description: 'Яркий хаб для обмена, продажи и покупки игровых скинов из Steam, Epic Games и других платформ',
  keywords: ['gaming', 'skins', 'steam', 'epic games', 'marketplace', 'trading'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
