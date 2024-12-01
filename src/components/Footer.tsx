import { FooterScripts } from './FooterScripts'

export default function Footer() {
  return (
    <>
      <footer className="pt-14">
        <div className="container pb-14 !text-center">
          <div className="flex flex-wrap mx-[-15px] mt-[-2.5rem] lg:!mt-0 xl:!mt-0">
            <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <div className="flex flex-wrap mx-[-15px] !mb-3">
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <div className="widget">
                    <h4 className="widget-title">Dirección</h4>
                    <address className=" not-italic leading-[inherit] mb-4">
                      Barcelona 1879
                      <br className="hidden xl:block lg:block md:block" /> Cerro de Montevideo,
                      Uruguay
                    </address>
                  </div>
                </div>
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <div className="widget">
                    <h4 className="widget-title">WhatsApp</h4>
                    <p>099 419 419</p>
                  </div>
                </div>
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <div className="widget">
                    <h4 className="widget-title">E-mail</h4>
                    <p>
                      <a
                        href="mailto:espacioserendipiacerro@gmail.com"
                        className="text-[#60697b] hover:!text-[#60697b]"
                      >
                        espacioserendipiacerro@gmail.com
                      </a>{' '}
                      <br className="hidden xl:block lg:block md:block" />
                      <a
                        href="mailto:kisquian@gmail.com"
                        className="text-[#60697b] hover:!text-[#60697b]"
                      >
                        Contacto web
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <p>Hecho con ❤️</p>
              <nav className="nav social justify-center">
                <a
                  className="m-[0_.35rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                >
                  <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] text-[#5daed5]"></i>
                </a>
                <a
                  className="m-[0_.35rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                >
                  <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] text-[#4470cf]"></i>
                </a>
                <a
                  className="m-[0_.35rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                >
                  <i className="uil uil-dribbble before:content-['\eaa2'] text-[1rem] text-[#e94d88]"></i>
                </a>
                <a
                  className="m-[0_.35rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                >
                  <i className="uil uil-instagram before:content-['\eb9c'] text-[1rem] text-[#d53581]"></i>
                </a>
                <a
                  className="m-[0_.35rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                >
                  <i className="uil uil-youtube before:content-['\edb5'] text-[1rem] text-[#c8312b]"></i>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <div className="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-6 motion-reduce:transition-none after:absolute after:content-['\e951'] after:text-center after:leading-[2.3rem] after:text-[1.2rem] after:text-[#605dba] after:h-[2.3rem] after:w-[2.3rem] after:cursor-pointer after:block after:z-[1] after:transition-all after:duration-[0.2s] after:ease-linear after:left-0 after:top-0 motion-reduce:after:transition-none after:font-Unicons">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            className="fill-none stroke-[#605dba] stroke-[4] box-border transition-all duration-[0.2s] ease-linear motion-reduce:transition-none"
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>

      <FooterScripts />
    </>
  )
}
