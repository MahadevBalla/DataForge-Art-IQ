import { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import { siteConfig } from '@/config/site';
import Navbar from '@/components/navbar';
import '../styles/globals.css';

const metadata: Metadata = {
  title: {
    default: `${siteConfig.name}`,
    template: '%s',
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
