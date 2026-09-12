import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = { title: 'Daniel Beni — Intelligent software, useful impact', description: 'Portfolio of Daniel Beni: software, AI, interfaces and experiments.', metadataBase: new URL('https://danielbeni-tech.vercel.app') }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-ink"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html> }
