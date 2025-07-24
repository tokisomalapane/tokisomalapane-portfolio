import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tokiso Malapane - Portfolio',
  description: 'Final Year BSc IT Student | Aspiring Cloud & Security Specialist',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
