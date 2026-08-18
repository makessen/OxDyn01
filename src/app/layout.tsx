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
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-900 font-sans">{children}</body>
    </html>
  )
}
