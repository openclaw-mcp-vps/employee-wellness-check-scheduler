import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WellnessCheck — Automated Employee Wellness Scheduling',
  description: 'Schedule and track employee wellness check-ins automatically. AI-powered mental health trend analytics for HR teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="de1592d1-f1a9-4a44-95c1-560b5e6bb1f2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
