import Image from 'next/image'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

// import MovieCards from '../../components/MovieCards'
import { HeroRainbow } from '@/components/HeroRainbow'
import { HomeCards } from '@/components/HomeCards'
import { RomboContent } from '@/components/RomboContent'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import Link from 'next/link'

import { Movie } from 'payload-types'

export default async function Page() {
  const payload = await getPayloadHMR({ config: configPromise })

  const movies = await payload.find({
    collection: 'movies',
    sort: '-votes',
  })
  return (
    <>
      <section
        id="snippet-1"
        className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid"
      >
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          {/* <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center pb-3">
            Próximas actividades
          </h2> */}
          <div className="container blog grid-view">
            <div className="">
              <div className="grid grid-cols-3 gap-4">
                {movies.docs.map((movie: Movie) => {
                  return (
                    <div key={movie.id} className="slide">
                      <Card>
                        <CardHeader>
                          {typeof movie.poster !== 'number' && (
                            <Link href={`/blog/${movie.slug}`}>
                              <Image
                                src={movie.poster.url!}
                                alt={movie.name}
                                width={movie.poster.width!}
                                height={movie.poster.height!}
                                className="max-w-full"
                              />
                            </Link>
                          )}
                        </CardHeader>
                        <CardContent>
                          <Link href={`/blog/${movie.slug}`}>
                            <CardTitle>{movie.name}</CardTitle>
                          </Link>
                          <CardDescription>{movie.overview}</CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

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
