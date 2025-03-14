import './globals.scss'
import './css/plugins.css'
import './fonts/unicons/unicons.css'
import './css/style.css'
import './css/assets/colors/purple.css'
import './css/fonts/urbanist.css'

import { IBM_Plex_Serif } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '../../components/Header'
import { ContactSection } from '@/components/ContactoSection'
import NextTopLoader from 'nextjs-toploader'

import { GoogleAnalytics } from '@next/third-parties/google'

// Title
import Head from 'next/head'

const ibm_plex = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Espacio Serendipia:: Tu lugar para sanar y crecer',
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
          <NextTopLoader
            color="rgb(34, 221, 202)"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px rgb(34, 221, 202),0 0 5px rgb(34, 221, 165)"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
          <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
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
