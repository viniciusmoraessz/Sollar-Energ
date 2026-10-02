import type { Metadata } from 'next';
import { DM_Sans, Sora } from 'next/font/google';
import './globals.css';
import './gallery.css';
import './contact.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' });

export const metadata: Metadata = {
  title: 'Sollar Energia | Energia solar que trabalha por você',
  description: 'Projetos fotovoltaicos completos para residências, empresas e propriedades rurais.',
  metadataBase: new URL('https://sollarenergia.example.com'),
  openGraph: { title: 'Sollar Energia', description: 'Sua conta de luz tem prazo para acabar.', type: 'website', locale: 'pt_BR' },
  icons: { icon: '/favicon.svg' }
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'SolarEnergyCompany',
  name: 'Sollar Energia',
  telephone: '+55 87 8164-1809',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Governador Estácio Coimbra, 289',
    addressLocality: 'Arcoverde',
    addressRegion: 'PE',
    postalCode: '56512-050',
    addressCountry: 'BR'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${sora.variable} ${dmSans.variable}`}><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} /></body></html>;
}
