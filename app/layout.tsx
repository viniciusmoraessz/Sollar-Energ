import type { Metadata } from 'next';
import { DM_Sans, Sora } from 'next/font/google';
import './globals.css';
import './gallery.css';
import './contact.css';
import './icons.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '');
const ogImage = siteUrl ? `${siteUrl}/obra-tupanatinga-familia.jpg` : undefined;

export const metadata: Metadata = {
  title: 'Energia Solar em Arcoverde PE | Sollar Energ',
  description: 'Energia solar em Arcoverde e região, com atendimento em Tupanatinga e Ibimirim. Projeto, instalação e homologação. Solicite sua simulação.',
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: '/' } } : {}),
  openGraph: {
    title: 'Energia Solar em Arcoverde PE | Sollar Energ',
    description: 'Energia solar em Arcoverde e região para residências, empresas e propriedades rurais, com atendimento em Tupanatinga e Ibimirim.',
    ...(siteUrl ? { url: siteUrl } : {}),
    ...(ogImage ? { images: [{ url: ogImage, alt: 'Sistema de energia solar instalado pela Sollar Energ em Tupanatinga PE' }] } : {}),
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Sollar Energ'
  },
  twitter: { card: 'summary_large_image', title: 'Energia Solar em Arcoverde PE | Sollar Energ', description: 'Projetos de energia solar em Arcoverde, Tupanatinga, Ibimirim e região para casas, empresas e propriedades rurais.', ...(ogImage ? { images: [ogImage] } : {}) },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' }
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Organization'],
      '@id': siteUrl ? `${siteUrl}/#organization` : undefined,
      name: 'Sollar Energ',
      description: 'Empresa de energia solar e energia fotovoltaica em Arcoverde, Pernambuco, com atendimento em Arcoverde, Tupanatinga, Ibimirim e região.',
      ...(siteUrl ? { url: siteUrl } : {}),
      logo: siteUrl ? `${siteUrl}/brand-mark.svg` : '/brand-mark.svg',
      image: ogImage || '/obra-tupanatinga-familia.jpg',
      telephone: '+55 87 8164-1809',
      areaServed: [
        { '@type': 'City', name: 'Arcoverde', containedInPlace: { '@type': 'AdministrativeArea', name: 'Pernambuco' } },
        { '@type': 'City', name: 'Tupanatinga', containedInPlace: { '@type': 'AdministrativeArea', name: 'Pernambuco' } },
        { '@type': 'City', name: 'Ibimirim', containedInPlace: { '@type': 'AdministrativeArea', name: 'Pernambuco' } }
      ],
      knowsAbout: ['Energia solar', 'Energia fotovoltaica', 'Instalação de painéis solares', 'Homologação de sistemas fotovoltaicos'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Governador Estácio Coimbra, 289',
        addressLocality: 'Arcoverde',
        addressRegion: 'PE',
        postalCode: '56512-050',
        addressCountry: 'BR'
      }
    },
    {
      '@type': 'WebSite',
      '@id': siteUrl ? `${siteUrl}/#website` : undefined,
      name: 'Sollar Energ',
      ...(siteUrl ? { url: siteUrl } : {}),
      inLanguage: 'pt-BR',
      publisher: siteUrl ? { '@id': `${siteUrl}/#organization` } : { '@type': 'Organization', name: 'Sollar Energ' }
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${sora.variable} ${dmSans.variable}`}><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} /></body></html>;
}
