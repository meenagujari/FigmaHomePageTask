import '../styles/globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Ekaant - Agro Tourism Retreat | Near Bor Tiger Reserve, Maharashtra',
  description: 'Experience authentic rural life at Ekaant agro tourism retreat near Bor Tiger Reserve, Maharashtra. Enjoy organic farming, wildlife photography, and digital detox in pristine nature.',
  keywords: 'agro tourism, Maharashtra, Bor Tiger Reserve, organic farming, rural retreat, nature, wildlife photography',
  openGraph: {
    title: 'Ekaant - Agro Tourism Retreat',
    description: 'Experience authentic rural life amidst pristine nature and wildlife near Bor Tiger Reserve, Maharashtra.',
    type: 'website',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}