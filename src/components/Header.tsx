import { FilmIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="relative wrapper">
      <nav className="navbar navbar-expand-lg center-nav transparent !absolute navbar-light">
        <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center justify-space-between">
          <div className="navbar-brand w-full">
            <Link href="/" className="mt-[-1rem] p-4 block max-w-60 logoweb" id="logoweb">
              <Image src="/assets/img/svg/logoweb.svg" alt="image" width={200} height={200} />
            </Link>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
              <h3 className="text-white xl:text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                Serendipia
              </h3>
              <button
                type="button"
                className="btn-close btn-close-white mr-[-0.75rem] m-0 p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex  flex-col !h-full">
              <ul className="navbar-nav top-menu-links">
                {/* <li className="nav-item dropdown dropdown-mega">
                  <Link
                    className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#747ed1] after:!text-[#747ed1]"
                    href="#"
                  >
                    Alquiler de Consultorios
                  </Link>
                </li>
                <li className="nav-item dropdown dropdown-mega">
                  <Link
                    className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#747ed1] after:!text-[#747ed1]"
                    href="#"
                  >
                    Terapia Psicológica
                  </Link>
                </li> */}
                <li className="nav-item dropdown hidden">
                  <Link
                    className="nav-link dropdown-toggle  font-bold tracking-[-0.01rem] hover:!text-[#747ed1] after:!text-[#747ed1]"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Recursos
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown dropdown-submenu dropend">
                      <Link
                        className="dropdown-item hover:!text-[#747ed1] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Proximamente
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="#">
                            Meditaciones
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="#">
                            Libros
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link font-bold tracking-[-0.01rem] hover:!text-[#747ed1] after:!text-[#747ed1]"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li> */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link font-bold tracking-[-0.01rem] hover:!text-[#747ed1] after:!text-[#747ed1]"
                    href="https://serendipia.uy/#contacto"
                    data-bs-toggle="dropdown"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
              <div className="offcanvas-footer xl:hidden lg:hidden">
                <div>
                  <a href="mailto:first.last@email.com" className="link-inverse">
                    espacioserendipiacerro@gmail.com
                  </a>
                  <br /> 099 419 419 <br />
                  <nav className="nav social social-white mt-4">
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="https://www.facebook.com/espacioserendipiauy"
                    >
                      <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"></i>
                    </a>

                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="https://www.instagram.com/espacio_serendipia"
                    >
                      <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"></i>
                    </a>
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="https://www.youtube.com/channel/UCgoGMsmRXrFRZczraQ3ECMw/"
                    >
                      <i className="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]"></i>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div
            className="navbar-other w-full !flex !ml-auto absolute"
            style={{
              maxWidth: '90%',
            }}
          >
            <ul className="navbar-nav !flex-row !items-center !ml-auto">
              <li className="nav-item xl:hidden lg:hidden">
                <button className="hamburger offcanvas-nav-btn">
                  <span></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
