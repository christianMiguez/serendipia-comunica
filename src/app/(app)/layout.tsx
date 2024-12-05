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
import Header from './Header'
import { HeroRainbow } from '@/components/HeroRainbow'
import { HomeCards } from '@/components/HomeCards'
import { RomboContent } from '@/components/RomboContent'
import { ContactSection } from '@/components/ContactoSection'
// import { Carousel } from '@/components/Carousel'

const ibm_plex = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="es">
      <body className={ibm_plex.className}>
        <div className="grow shrink-0">
          <Header />

          <HeroRainbow />

          {/* tarjetas */}
          <HomeCards />
          <RomboContent content_type="TALLER_PARA_NIÑOS" />
          <RomboContent content_type="TERAPIA_PSICOLOGICA" />
          <RomboContent content_type="YOGA" />
          <RomboContent content_type="AURICULOTERAPIA" />

          <ContactSection />
        </div>

        <Footer />
      </body>
    </html>
  )
}

export default Layout
