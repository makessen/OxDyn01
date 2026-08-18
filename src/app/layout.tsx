import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Substrata | Total visibility into your regulatory reality',
  description: 'Securely interrogate decades of internal reports and legal precedents. 100% auditable. Zero data leaves your environment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased h-screen flex flex-col font-body-md text-body-md overflow-hidden">
        {children}
      </body>
    </html>
  )
}
