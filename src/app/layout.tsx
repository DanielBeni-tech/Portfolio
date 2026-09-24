import type { Metadata } from 'next';
import { Manrope, Poppins, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { LocaleProvider } from '@/components/LocaleProvider';
import { CvProvider } from '@/components/CvModal';

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
  title: 'Daniel Beni Mpodol Welisan — Élève ingénieur télécom · Fullstack & Lead Developer',
  description:
    "Daniel Beni Mpodol Welisan — élève ingénieur en télécommunications, lead développeur fullstack (JavaScript et Python), frontend, UI/UX et IA. Portfolio et CV.",
  openGraph: {
    title: 'Daniel Beni Mpodol Welisan — Élève ingénieur télécom · Fullstack & Lead Developer',
    description:
      "Lead fullstack JS/Python, frontend & UX/UI. CARBURFLOW, SYNTRA, SUPONEAI, SONE, Club Info, Mabbtek.",
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="grain relative isolate min-h-screen overflow-x-clip bg-[#9a948a]">
          <div
            aria-hidden="true"
            className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#b7b1a6,#8a847a)]"
          />
          <CustomCursor />
          <LocaleProvider>
            <CvProvider>
              <Navbar />
              {children}
              <Footer />
            </CvProvider>
          </LocaleProvider>
        </div>
      </body>
    </html>
  );
}
