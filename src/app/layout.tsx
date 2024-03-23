'use client'

import React from 'react'
import { Toaster } from '@/components/ui/sonner'

import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="h-screen w-screen bg-blackish bg-gradient-to-tr from-blackish">
            <Analytics />
            {children}
          </div>
          <Toaster richColors position="bottom-left" />
        </ThemeProvider>
      </body>
    </html>
  )
}
