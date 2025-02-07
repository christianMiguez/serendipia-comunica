import Image from 'next/image'
import { notFound } from 'next/navigation'

import type { Media } from 'payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { MovieSidebar } from '@/components/movie/Sidebar'
import { ImageGalleryGrid } from '../../../../components/movie/ImageGalleryGrid'

export default async function MovieDetails({ params }: { params: { slug: string } }) {
  const { slug } = params
  const payload = await getPayloadHMR({ config: configPromise })

  const movies = await payload.find({
    collection: 'movies',
    where: {
      slug: { equals: slug },
    },
  })

  if (movies.docs.length === 0) {
    return notFound()
  }

  const movie = movies.docs[0]

  return (
    // <div className="flex gap-2 mt-5">
    //   <Image
    //     src={(movie.poster as Media)?.url ?? ''}
    //     alt={(movie.poster as Media)?.text ?? ''}
    //     width={(movie.poster as Media)?.width ?? 100}
    //     height={(movie.poster as Media)?.height ?? 100}
    //     className="w-1/3 rounded-3xl"
    //   />
    //   <div className="flex flex-col gap-2 w-2/3">
    //     <h1 className="font-bold text-4xl border-b-2">{movie.name}</h1>
    //     {movie.tagline && <h2 className="font-light text-3xl mb-3">{movie.tagline}</h2>}
    //     <p className="font-light mb-3 text-right">
    //       {movie.genres.map(({ name }) => name).join(', ')}
    //     </p>
    //     <p className="italic">{movie.overview}</p>
    //   </div>
    // </div>
    <>
      <section className="wrapper !bg-[#ffffff]">
        <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px]">
            <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px]">
              <div className="blog single">
                <div className="card">
                  <figure className="card-img-top">
                    <div className="relative w-64 h-64 bg-gray-200">
                      <Image
                        src={(movie.poster as Media)?.url ?? ''}
                        alt={(movie.poster as Media)?.text ?? ''}
                        width={(movie.poster as Media)?.width ?? 100}
                        height={(movie.poster as Media)?.height ?? 100}
                        layout="fill"
                        objectFit="cover"
                        className="absolute"
                      />
                    </div>
                  </figure>
                  <div className="card-body flex-[1_1_auto] p-[40px] xl:p-[2.8rem_3rem_2.8rem] lg:p-[2.8rem_3rem_2.8rem] md:p-[2.8rem_3rem_2.8rem]">
                    <div className="classic-view">
                      <article className="post mb-8">
                        <div className="relative mb-5">
                          <h1 className="font-bold text-4xl border-b-2">{movie.name}</h1>
                          {movie.tagline && (
                            <h2 className="font-light text-3xl mb-3">{movie.tagline}</h2>
                          )}
                          {/* <p className="font-light mb-3 text-right">
                            {movie.genres.map(({ name }) => name).join(', ')}
                          </p> */}
                          <p className="italic">{movie.overview}</p>
                          {/* <ImageGalleryGrid /> */}
                        </div>
                        <div className="post-footer xl:flex xl:!flex-row xl:!justify-between lg:flex lg:!flex-row lg:!justify-between md:flex md:!flex-row md:!justify-between !items-center !mt-8">
                          <div className="mb-0 xl:!mb-2 lg:!mb-2 md:!mb-2">
                            <div className="dropdown share-dropdown btn-group">
                              <button
                                className="btn btn-sm btn-red text-white !bg-[#e2626b] border-[#e2626b] hover:text-white hover:bg-[#e2626b] hover:border-[#e2626b] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#e2626b] active:border-[#e2626b] disabled:text-white disabled:bg-[#e2626b] disabled:border-[#e2626b] !rounded-[50rem] btn-icon btn-icon-start dropdown-toggle !mb-0 mr-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] hidden"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="uil uil-share-alt mr-[0.3rem] text-[0.8rem] before:content-['\ecb0']"></i>
                                Compartir esto
                              </button>
                              <div className="dropdown-menu !shadow-[rgba(30,34,40,0.06)_0px_0px_25px_0px]">
                                <a
                                  className="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]"
                                  href="#"
                                >
                                  <i className="uil uil-twitter w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\ed59']"></i>
                                  Twitter
                                </a>
                                <a
                                  className="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]"
                                  href="#"
                                >
                                  <i className="uil uil-facebook-f w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\eae2']"></i>
                                  Facebook
                                </a>
                                <a
                                  className="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]"
                                  href="#"
                                >
                                  <i className="uil uil-linkedin w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\ebd1']"></i>
                                  Linkedin
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </article>
                    </div>

                    {/* <h3 className="!mb-6">MAS PROPUESTAS</h3> */}
                    <div
                      className="swiper-container blog grid-view mb-24 relative z-10"
                      data-margin="30"
                      data-dots="true"
                      data-items-md="2"
                      data-items-xs="1"
                    >
                      <div className="swiper hidden">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <article>
                              <figure className="overlay overlay-1 hover-scale group rounded !mb-5">
                                <a href="#">
                                  <Image
                                    className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                                    src="/assets/img/photos/b4.jpg"
                                    alt="image"
                                    width="300"
                                    height="300"
                                  />
                                </a>
                                <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                                  <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                                    Read More
                                  </h5>
                                </figcaption>
                              </figure>
                              <div className="post-header !mb-[.9rem]">
                                <div className="inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                                  <a href="#" className="hover" rel="category">
                                    Coding
                                  </a>
                                </div>
                                <h2 className="post-title h3 !mt-1 !mb-3">
                                  <a
                                    className="text-[#343f52] hover:text-[#3f78e0]"
                                    href="./blog-post.html"
                                  >
                                    Ligula tristique quis risus
                                  </a>
                                </h2>
                              </div>
                              <div className="post-footer">
                                <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none  !mb-0">
                                  <li className="post-date inline-block">
                                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                                    <span>14 Apr 2022</span>
                                  </li>
                                  <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                                    <a
                                      className="text-[#aab0bc] hover:text-[#3f78e0] hover:border-[#3f78e0]"
                                      href="#"
                                    >
                                      <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']"></i>
                                      4
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </article>
                          </div>
                          <div className="swiper-slide">
                            <article>
                              <figure className="overlay overlay-1 hover-scale group rounded !mb-5">
                                <a href="#">
                                  <Image
                                    className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                                    src="/assets/img/photos/b5.jpg"
                                    alt="image"
                                    width="300"
                                    height="300"
                                  />
                                </a>
                                <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                                  <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                                    Read More
                                  </h5>
                                </figcaption>
                              </figure>
                              <div className="post-header !mb-[.9rem]">
                                <div className="inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                                  <a href="#" className="hover" rel="category">
                                    Workspace
                                  </a>
                                </div>
                                <h2 className="post-title h3 !mt-1 !mb-3">
                                  <a
                                    className="text-[#343f52] hover:text-[#3f78e0]"
                                    href="./blog-post.html"
                                  >
                                    Nullam id dolor elit id nibh
                                  </a>
                                </h2>
                              </div>
                              <div className="post-footer">
                                <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none  !mb-0">
                                  <li className="post-date inline-block">
                                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                                    <span>29 Mar 2022</span>
                                  </li>
                                  <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                                    <a
                                      className="text-[#aab0bc] hover:text-[#3f78e0] hover:border-[#3f78e0]"
                                      href="#"
                                    >
                                      <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']"></i>
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </article>
                          </div>
                          <div className="swiper-slide">
                            <article>
                              <figure className="overlay overlay-1 hover-scale group rounded !mb-5">
                                <a href="#">
                                  <Image
                                    className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                                    src="/assets/img/photos/b6.jpg"
                                    alt="image"
                                    width="300"
                                    height="300"
                                  />
                                </a>
                                <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                                  <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                                    Read More
                                  </h5>
                                </figcaption>
                              </figure>
                              <div className="post-header !mb-[.9rem]">
                                <div className="inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                                  <a href="#" className="hover" rel="category">
                                    Meeting
                                  </a>
                                </div>
                                <h2 className="post-title h3 !mt-1 !mb-3">
                                  <a
                                    className="text-[#343f52] hover:text-[#3f78e0]"
                                    href="./blog-post.html"
                                  >
                                    Ultricies fusce porta elit
                                  </a>
                                </h2>
                              </div>
                              <div className="post-footer">
                                <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none  !mb-0">
                                  <li className="post-date inline-block">
                                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                                    <span>26 Feb 2022</span>
                                  </li>
                                  <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                                    <a
                                      className="text-[#aab0bc] hover:text-[#3f78e0] hover:border-[#3f78e0]"
                                      href="#"
                                    >
                                      <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']"></i>
                                      6
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </article>
                          </div>
                          <div className="swiper-slide">
                            <article>
                              <figure className="overlay overlay-1 hover-scale group rounded !mb-5">
                                <a href="#">
                                  <Image
                                    className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                                    src="/assets/img/photos/b7.jpg"
                                    alt="image"
                                    width="300"
                                    height="300"
                                  />
                                </a>
                                <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                                  <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                                    Read More
                                  </h5>
                                </figcaption>
                              </figure>
                              <div className="post-header !mb-[.9rem]">
                                <div className="inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                                  <a href="#" className="hover" rel="category">
                                    Business Tips
                                  </a>
                                </div>
                                <h2 className="post-title h3 !mt-1 !mb-3">
                                  <a
                                    className="text-[#343f52] hover:text-[#3f78e0]"
                                    href="./blog-post.html"
                                  >
                                    Morbi leo risus porta eget
                                  </a>
                                </h2>
                              </div>
                              <div className="post-footer">
                                <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none  !mb-0">
                                  <li className="post-date inline-block">
                                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                                    <span>7 Jan 2022</span>
                                  </li>
                                  <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                                    <a
                                      className="text-[#aab0bc] hover:text-[#3f78e0] hover:border-[#3f78e0]"
                                      href="#"
                                    >
                                      <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']"></i>
                                      2
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MovieSidebar />
          </div>
        </div>
      </section>
    </>
  )
}
