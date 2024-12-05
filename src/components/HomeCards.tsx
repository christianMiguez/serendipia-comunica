import Image from 'next/image'
export function HomeCards() {
  return (
    <>
      <section className="wrapper">
        <div className="container pt-14 xl:pt-0 lg:pt-0 md:pt-0 pb-10">
          <div className="itemgrid grid-view projects-masonry md:!mt-[-10rem] lg:mt-[-15rem] xl:mt-[-15rem] mb-[2rem]">
            <div className="flex flex-wrap mx-[-20px] xl:mx-[-25px] lg:mx-[-25px] mt-[-2rem] xl:mt-[-2.5rem] lg:mt-[-2.5rem] isotope">
              <div
                className="project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] max-w-full workshop px-[20px] xl:px-[25px] lg:px-[25px] mt-[2rem] xl:mt-[2.5rem] lg:mt-[2.5rem]"
                data-cue="slideInUp"
                data-delay="1000"
              >
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <figure
                    className="card-img-top itooltip itooltip-aqua"
                    title='<h5 className="!mb-0">Consulta disponibilidad</h5>'
                  >
                    <a href="#">
                      {' '}
                      <Image
                        src="./assets/img/photos/pd6.jpg"
                        alt="image"
                        width={385}
                        height={360}
                      />
                    </a>
                  </figure>
                  <div className="card-body p-7">
                    <div className="post-header">
                      <div className="inline-flex uppercase tracking-[0.02rem] text-[0.7rem] font-semibold text-line relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#54a8c7] mb-2 text-[#54a8c7]">
                        Sala neptuno
                      </div>
                      {/* <h3 className="!mb-0">Ipsum Mollis Vulputate</h3> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] max-w-full product px-[20px] xl:px-[25px] lg:px-[25px] mt-[2rem] xl:mt-[2.5rem] lg:mt-[2.5rem]"
                data-cue="slideInUp"
                data-delay="1000"
              >
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <figure
                    className="card-img-top itooltip itooltip-purple"
                    title='<h5 className="!mb-0">Consulta disponibilidad</h5>'
                  >
                    <a href="#">
                      {' '}
                      <Image
                        src="./assets/img/photos/pd4.jpg"
                        alt="image"
                        width={385}
                        height={360}
                      />
                    </a>
                  </figure>
                  <div className="card-body p-7">
                    <div className="post-header">
                      <div className="inline-flex uppercase tracking-[0.02rem] text-[0.7rem] font-semibold text-line relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#747ed1] mb-2 text-[#747ed1]">
                        Sala Ying & Yang
                      </div>
                      {/* <h3 className="!mb-0">Inceptos Euismod Egestas</h3> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] max-w-full product px-[20px] xl:px-[25px] lg:px-[25px] mt-[2rem] xl:mt-[2.5rem] lg:mt-[2.5rem]"
                data-cue="slideInUp"
                data-delay="1000"
              >
                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <figure
                    className="card-img-top itooltip itooltip-yellow"
                    title='<h5 className="!mb-0">Consulta disponibilidad</h5>'
                  >
                    <a href="#">
                      {' '}
                      <Image
                        src="./assets/img/photos/pd1.jpg"
                        alt="image"
                        width={385}
                        height={360}
                      />
                    </a>
                  </figure>
                  <div className="card-body p-7">
                    <div className="post-header">
                      <div className="inline-flex uppercase tracking-[0.02rem] text-[0.7rem] font-semibold text-line relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#fab758] mb-2 text-[#fab758]">
                        Sala Quirón
                      </div>
                      {/* <h3 className="!mb-0">Cras Fermentum Sem</h3> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
