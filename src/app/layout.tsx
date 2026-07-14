import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | ATRIA EDUEATS',
    default: 'ATRIA EDUEATS - Educational Resources and Food Ordering Platform'
  },
  description: 'Educational resources and food ordering platform for Atria Institute',
  keywords: ['education', 'food ordering', 'academic resources', 'engineering courses', 'VTU', 'Engineer4Free'],
  authors: [{ name: 'Atria Institute' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow'
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