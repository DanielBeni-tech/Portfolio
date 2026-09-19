import type { Metadata } from 'next';
import { Manrope, Poppins, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Daniel Beni Mpodol Welisan — Fullstack & Lead Developer',
  description:
    "Daniel Beni Mpodol Welisan — lead développeur fullstack (JavaScript et Python), frontend, UI/UX et IA. Portfolio et CV.",
  openGraph: {
    title: 'Daniel Beni Mpodol Welisan — Fullstack & Lead Developer',
    description:
      "Lead fullstack JS/Python, frontend & UX/UI. CARBURFLOW, SYNTRA, SUPONEAI, SONE, Club Info, Mabbtek.",
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="grain relative isolate min-h-screen overflow-x-clip bg-[#b9b9b9]">
          <div
            aria-hidden="true"
            className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#d9d9d9,#a9a9a9)]"
          />
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
