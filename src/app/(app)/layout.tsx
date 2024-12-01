import Script from 'next/script'
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

          <section className="wrapper bg-gradient-blend bg-serendipia">
            <div className="container pt-24 xl:pt-32 lg:pt-32 md:pt-32 pb-14 md:pb-32 xl:pb-40 lg:pb-40">
              <div className="flex flex-wrap mx-[-15px] mt-10">
                <div className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
                  <h2 className="text-[0.85rem] !leading-[1.35] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3"></h2>
                  <h3 className="xl:text-[1.6rem] text-[calc(1.365rem_+_1.38vw)] font-semibold !leading-[1.15] mb-5 xl:!px-14">
                    Bienvenido a Espacio Serendipia 👋
                  </h3>
                  <p className="lead !text-[1.1rem]">
                    Si buscas un lugar tranquilo en el Cerro de Montevideo para hacer terapia con la
                    Red de Psicólogos y profesionales de la Salud, o simplemente alquilar
                    consultorio para atender pacientes , ¡este es tu lugar! ❤️
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="divider text-[#fefefe] mx-[-0.5rem]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
                  <path
                    fill="currentColor"
                    d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
                  />
                </svg>
              </div>
            </div>
          </section>

          <section className="wrapper">
            <div className="container pt-14 xl:pt-0 lg:pt-0 md:pt-0 pb-24 xl:pb-32 lg:pb-32 md:pb-32">
              <div className="itemgrid grid-view projects-masonry md:!mt-[-10rem] lg:mt-[-15rem] xl:mt-[-15rem] mb-[10rem]">
                <div className="flex flex-wrap mx-[-20px] xl:mx-[-25px] lg:mx-[-25px] mt-[-2rem] xl:mt-[-2.5rem] lg:mt-[-2.5rem] isotope">
                  <div
                    className="project item xl:w-4/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] max-w-full workshop px-[20px] xl:px-[25px] lg:px-[25px] mt-[2rem] xl:mt-[2.5rem] lg:mt-[2.5rem]"
                    data-cue="slideInUp"
                    data-delay="1000"
                  >
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <figure
                        className="card-img-top itooltip itooltip-aqua"
                        title='<h5 className="!mb-0">Click to see the project</h5>'
                      >
                        <a href="./single-project3.html">
                          {' '}
                          <img src="./assets/img/photos/pd6.jpg" alt="image" />
                        </a>
                      </figure>
                      <div className="card-body p-7">
                        <div className="post-header">
                          <div className="inline-flex uppercase tracking-[0.02rem] text-[0.7rem] font-semibold text-line relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#54a8c7] mb-2 text-[#54a8c7]">
                            Workshop
                          </div>
                          <h3 className="!mb-0">Ipsum Mollis Vulputate</h3>
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
                        title='<h5 className="!mb-0">Click to see the project</h5>'
                      >
                        <a href="./single-project2.html">
                          {' '}
                          <img src="./assets/img/photos/pd4.jpg" alt="image" />
                        </a>
                      </figure>
                      <div className="card-body p-7">
                        <div className="post-header">
                          <div className="inline-flex uppercase tracking-[0.02rem] text-[0.7rem] font-semibold text-line relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#747ed1] mb-2 text-[#747ed1]">
                            Product
                          </div>
                          <h3 className="!mb-0">Inceptos Euismod Egestas</h3>
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
                        title='<h5 className="!mb-0">Click to see the project</h5>'
                      >
                        <a href="./single-project.html">
                          {' '}
                          <img src="./assets/img/photos/pd1.jpg" alt="image" />
                        </a>
                      </figure>
                      <div className="card-body p-7">
                        <div className="post-header">
                          <div className="inline-flex uppercase tracking-[0.02rem] text-[0.7rem] font-semibold text-line relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#fab758] mb-2 text-[#fab758]">
                            Coffee
                          </div>
                          <h3 className="!mb-0">Cras Fermentum Sem</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="wrapper bg-gradient-blend">
            <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-14 xl:pb-32 lg:pb-32 md:pb-32">
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] xl:mt-0 lg:mt-0">
                <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left xl:text-left xl:px-[35px] lg:px-[20px] mt-[50px] xl:mt-0 lg:mt-0">
                  <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-semibold !leading-[1.2] mb-3 xxl:!pr-20">
                    I am <em>proud</em> of my results
                  </h3>
                  <p className="lead !text-[1.05rem] !leading-[1.55] font-normal !mb-0 xxl:pr-10">
                    I bring solutions to make life easier for our customers.
                  </p>
                </div>
                <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[50px] xl:!mt-2 lg:!mt-2">
                  <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-30px] !text-center">
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                      <img
                        src="./assets/img/icons/solid/target.svg"
                        className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-purple-aqua !mb-3 m-[0_auto]"
                        alt="image"
                      />
                      <h3 className="counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2">
                        1000+
                      </h3>
                      <p className="!mb-0">Completed Projects</p>
                    </div>
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                      <img
                        src="./assets/img/icons/solid/medal.svg"
                        className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-purple-aqua !mb-3 m-[0_auto]"
                        alt="image"
                      />
                      <h3 className="counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2">
                        12
                      </h3>
                      <p className="!mb-0">Awards Won</p>
                    </div>
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                      <img
                        src="./assets/img/icons/solid/employees.svg"
                        className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-purple-aqua !mb-3 m-[0_auto]"
                        alt="image"
                      />
                      <h3 className="counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2">
                        99.7%
                      </h3>
                      <p className="!mb-0">Customer Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="divider text-[#fefefe] mx-[-0.5rem]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
                  <path
                    fill="currentColor"
                    d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
                  />
                </svg>
              </div>
            </div>
          </section>

          <section className="wrapper">
            <div className="container pt-14 xl:pt-0 lg:pt-0 md:pt-0 pb-20 xl:pb-28 lg:pb-28 md:pb-28">
              <div className="itemgrid md:!mt-[-9rem] xl:!mt-[-10rem] xxl:!mt-[-12.5rem] mb-40">
                <div className="flex flex-wrap mx-[-15px] isotope mt-[-30px]">
                  <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            Vestibulum id ligula porta. Cras mattis consectetur.”
                          </p>
                          <div className="flex items-center text-left !text-[0.85rem] !leading-[1.7] !font-normal">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">Coriss Ambady</h5>
                              <p className="!mb-0 text-[.8rem]">Financial Analyst</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>
                            “Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum
                            massa justo sit amet purus sit amet fermentum.”
                          </p>
                          <div className="flex items-center text-left !text-[0.85rem] !leading-[1.7] !font-normal">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">Cory Zamora</h5>
                              <p className="!mb-0 text-[.8rem]">Marketing Specialist</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>
                            “Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor eu rutrum. Nulla vitae libero.”
                          </p>
                          <div className="flex items-center text-left !text-[0.85rem] !leading-[1.7] !font-normal">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">Nikolas Brooten</h5>
                              <p className="!mb-0 text-[.8rem]">Sales Manager</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                    <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                      <div className="card-body flex-[1_1_auto] p-[40px]">
                        <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                          <p>
                            “Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus
                            rhoncus eu tincidunt auctor nullam rutrum, pharetra augue.”
                          </p>
                          <div className="flex items-center text-left !text-[0.85rem] !leading-[1.7] !font-normal">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">Coriss Ambady</h5>
                              <p className="!mb-0 text-[.8rem]">Financial Analyst</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-30px] items-center">
                <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 lg:!order-2 !mx-auto md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[30px]">
                  <div className="img-mask mask-2 xxl:!px-8">
                    <img
                      src="./assets/img/photos/about28.jpg"
                      srcSet="./assets/img/photos/about28@2x.jpg 2x"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[30px]">
                  <h2 className="xl:text-[2rem] text-[calc(1.325rem_+_.9vw)] font-semibold !leading-[1.2] !mb-3">
                    More <em>about</em> me
                  </h2>
                  <p className="lead !text-[1.05rem] !leading-[1.55] font-normal">
                    I'm Julia Sandbox, a corporate brand designer based in New York City. I’m very
                    passionate about the work that I do.
                  </p>
                  <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
                    odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                    malesuada magna mollis euismod. Vestibulum id ligula.
                  </p>
                  <p>
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus
                    porttitor. Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <a
                    href="#"
                    className="btn btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="wrapper bg-gradient-blend">
            <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
              <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px]">
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px]">
                  <img
                    src="./assets/img/icons/solid/email-2.svg"
                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-purple-aqua !mb-3"
                    alt="image"
                  />
                  <h2 className="text-[calc(1.325rem_+_0.9vw)] font-bold leading-[1.2] xl:text-[2rem] mb-3 xl:pr-[4.5rem] xxl:!pr-24">
                    If you like what you see, <em>let's work</em> together.
                  </h2>
                  <p className="lead !text-[1.05rem] !leading-[1.55] font-normal xxl:pr-14 !mb-0">
                    Have any questions? Reach out to me from this contact form and I will get back
                    to you shortly.
                  </p>
                </div>
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px]">
                  <form className="contact-form needs-validation" method="post" noValidate>
                    <div className="messages"></div>
                    <div className="flex flex-wrap mx-[-10px]">
                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[10px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control bg-[rgba(255,255,255,.7)]  border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-0 focus-visible:!border-0 focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                            placeholder="Jane"
                            required
                            data-error="First Name is required."
                          />
                          <label
                            className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                            htmlFor="form_name"
                          >
                            Name *
                          </label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback"> Please enter your name. </div>
                        </div>
                      </div>
                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[10px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control bg-[rgba(255,255,255,.7)]  border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-0 focus-visible:!border-0 focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                            placeholder="jane.doe@example.com"
                            required
                            data-error="Valid email is required."
                          />
                          <label
                            className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                            htmlFor="form_email"
                          >
                            Email *
                          </label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            {' '}
                            Please provide a valid email address.{' '}
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex-[0_0_auto] px-[10px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control bg-[rgba(255,255,255,.7)]  border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-0 focus-visible:!border-0 focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                            placeholder="Your message"
                            style={{ height: '150px' }}
                            required
                          ></textarea>
                          <label
                            className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                            htmlFor="form_message"
                          >
                            Message *
                          </label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback"> Please enter your messsage. </div>
                        </div>
                      </div>
                      <div className="w-full flex-[0_0_auto] px-[10px] max-w-full">
                        <input
                          type="submit"
                          className="btn btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                          value="Send message"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="divider text-[#fefefe] mx-[-0.5rem]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
                  <path
                    fill="currentColor"
                    d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
                  />
                </svg>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </body>
    </html>
  )
}

export default Layout
