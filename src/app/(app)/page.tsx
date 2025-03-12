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
import { staticUrl } from '@/lib/utils'

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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {movies.docs.map((movie: Movie) => {
                  return (
                    <div key={movie.id} className="">
                      <Card>
                        <CardHeader>
                          {typeof movie.poster !== 'number' && (
                            <Link href={`/blog/${movie.slug}`}>
                              <Image
                                src={staticUrl(movie.poster.url!)}
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

                {/* Mailchimp Form */}
                <div className="mailchimp-form bg-white p-6 rounded-lg shadow-md">
                  <div className="mailchimp-form__inner">
                    <h2 className="text-2xl font-bold mb-4">Suscríbete para más información</h2>
                    <form
                      action="https://serendipia.us18.list-manage.com/subscribe/post?u=d8e9fa69f115dd80f19ef36e0&amp;id=b574becbb8&amp;f_id=0039aae6f0"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate"
                      target="_blank"
                    >
                      <div className="mb-4">
                        <label htmlFor="mce-FNAME">Tu Nombre de Pila </label>
                        <input
                          type="text"
                          name="FNAME"
                          className="text"
                          id="mce-FNAME"
                          value=""
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="mce-EMAIL"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Tu Correo electrónico <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="EMAIL"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          id="mce-EMAIL"
                          required
                        />
                      </div>

                      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                        <input
                          type="text"
                          name="b_d8e9fa69f115dd80f19ef36e0_b574becbb8"
                          tabIndex={-1}
                          defaultValue=""
                        />
                      </div>

                      <div className="text-center">
                        <button
                          type="submit"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                        >
                          Suscribirse
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
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
