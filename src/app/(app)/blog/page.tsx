import Image from 'next/image'
import { notFound } from 'next/navigation'

import type { Media, Movie } from 'payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default async function MovieDetails() {
  const payload = await getPayloadHMR({ config: configPromise })

  const movies = await payload.find({
    collection: 'movies',
    sort: '-votes',
  })
  console.log(movies.docs)
  return (
    <>
      <section
        id="snippet-1"
        className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid"
      >
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
            AGENDA SERENDIPIA
          </h2>
          <p className="lead text-[1rem] mb-10 !text-center md:!px-24 lg:!px-[12.5rem] xl:!px-0">
            En este espacio encontrarás información sobre los talleres, terapias y actividades que
            se estarán realizando en Serendipia próximamente.
          </p>
          <div
            className="swiper-container blog grid-view !mb-6"
            data-margin="30"
            data-dots="true"
            data-items-xl="3"
            data-items-md="2"
            data-items-xs="1"
          >
            <div className="swiper">
              <div className="swiper-wrapper">
                {movies.docs.map((movie: Movie) => (
                  <div key={movie.id} className="swiper-slide">
                    <Card>
                      <CardHeader>
                        <Image
                          src={movie.poster.url}
                          alt={movie.name}
                          width={movie.poster.width}
                          height={movie.poster.height}
                        />
                      </CardHeader>
                      <CardContent>
                        <CardTitle>{movie.title}</CardTitle>
                        <CardDescription>{movie.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-20 xl:pb-28 lg:pb-28 md:pb-28">
          <div className="card">
            <div className="card-footer border-0 !relative">
              <a
                className="collapse-link collapsed stretched-link"
                data-bs-toggle="collapse"
                href="#collapse-snippet-1"
              >
                View example&apos;s code
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
