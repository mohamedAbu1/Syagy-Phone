import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ElectroHub — Smarter technology. Better living.',
  description: 'A premium 3D electronics store experience.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
