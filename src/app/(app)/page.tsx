import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

import MovieCards from '../../components/MovieCards'
import { HeroRainbow } from '@/components/HeroRainbow'
import { HomeCards } from '@/components/HomeCards'
import { RomboContent } from '@/components/RomboContent'

const Page = async () => {
  return (
    <>
      <HeroRainbow />

      {/* tarjetas */}
      <HomeCards />
      <RomboContent content_type="TALLER_PARA_NIÑOS" />
      <RomboContent content_type="TERAPIA_PSICOLOGICA" />
      <RomboContent content_type="YOGA" />
      <RomboContent content_type="AURICULOTERAPIA" />
    </>
  )
}

export default Page
