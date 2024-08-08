import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@zapperbot/ui/dist/globals.css'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const font = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'ZapperBot',
  description: 'Seu assistente de vendas do WhatsApp',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
