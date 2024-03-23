import React from 'react'

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <div className="h-full w-full">{children}</div>
}
