import Image from 'next/image'
import './globals.scss'
import './css/plugins.css'
import './fonts/unicons/unicons.css'
import './css/style.css'
import './css/assets/colors/purple.css'
import './css/fonts/urbanist.css'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { IBM_Plex_Serif } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '../../components/Header'
import { HeroRainbow } from '@/components/HeroRainbow'
import { HomeCards } from '@/components/HomeCards'
import { RomboContent } from '@/components/RomboContent'
import { ContactSection } from '@/components/ContactoSection'
// import { Carousel } from '@/components/Carousel'

import { GoogleAnalytics } from '@next/third-parties/google'

// Title
import Head from 'next/head'

const ibm_plex = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Espacio Serendipia:: Tu luga paa sanar y crecer',
  description: 'Espacio Serendipia es un lugar para sanar y crecer',
}

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={ibm_plex.className}>
        <div className="grow shrink-0">
          <Header />

          {children}

          <ContactSection />
        </div>

        <Footer />
      </body>
      <GoogleAnalytics gaId="G-RPZ5EB21HK" />
    </html>
  )
}

export default Layout
