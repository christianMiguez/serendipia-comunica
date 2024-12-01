import { FilmIcon } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="relative wrapper">
      <nav className="navbar navbar-expand-lg center-nav transparent !absolute navbar-light">
        <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center justify-space-between">
          <div className="navbar-brand w-full">
            <a href="./index.html" className="mt-[-1rem] p-4 block max-w-60 logoweb" id="logoweb">
              <img src="./assets/img/svg/logoweb.svg" alt="image" />
            </a>
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
                <li className="nav-item dropdown dropdown-mega">
                  <a
                    className="nav-link dropdown-toggle  font-bold tracking-[-0.01rem] hover:!text-[#747ed1] after:!text-[#747ed1]"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Alquiler de Consultorios
                  </a>
                  <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                    <li className="mega-menu-content mega-menu-scroll">
                      <ul className="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-6 mx-0 xl:mx-[-10px] lg:mx-[-10px] xl:mt-[-10px] lg:mt-[-10px] !pl-0 list-none">
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo1.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi1.jpg"
                                srcSet="./assets/img/demos/mi1@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 1</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo2.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi2.jpg"
                                srcSet="./assets/img/demos/mi2@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 2</span>
                          </a>
                        </li>
                        <li className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]">
                          <a className="dropdown-item" href="./demo3.html">
                            <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
                              <img
                                className="!rounded-[.4rem]"
                                src="./assets/img/demos/mi3.jpg"
                                srcSet="./assets/img/demos/mi3@2x.jpg 2x"
                                alt="image"
                              />
                            </figure>
                            <span className="xl:hidden lg:hidden">Demo 3</span>
                          </a>
                        </li>
                      </ul>

                      <span className="hidden xl:flex lg:flex">
                        <i className="uil uil-direction before:content-['\ea93']"></i>
                        <strong>Scroll to view more</strong>
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle  font-bold tracking-[-0.01rem] hover:!text-[#747ed1] after:!text-[#747ed1]"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Recursos
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item hover:!text-[#747ed1] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Services
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./services.html">
                            Services I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#747ed1]"
                            href="./services2.html"
                          >
                            Services II
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item hover:!text-[#747ed1] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        About
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./about.html">
                            About I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./about2.html">
                            About II
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item hover:!text-[#747ed1] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Shop
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./shop.html">
                            Shop I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./shop2.html">
                            Shop II
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#747ed1]"
                            href="./shop-product.html"
                          >
                            Product Page
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#747ed1]"
                            href="./shop-cart.html"
                          >
                            Shopping Cart
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#747ed1]"
                            href="./shop-checkout.html"
                          >
                            Checkout
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item hover:!text-[#747ed1] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Contact
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./contact.html">
                            Contact I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./contact2.html">
                            Contact II
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./contact3.html">
                            Contact III
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item hover:!text-[#747ed1] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Career
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./career.html">
                            Job Listing I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./career2.html">
                            Job Listing II
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#747ed1]"
                            href="./career-job.html"
                          >
                            Job Description
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item hover:!text-[#747ed1] dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Utility
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./404.html">
                            404 Not Found
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="dropdown-item hover:!text-[#747ed1]"
                            href="./page-loader.html"
                          >
                            Page Loader
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./signin.html">
                            Sign In I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./signin2.html">
                            Sign In II
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./signup.html">
                            Sign Up I
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./signup2.html">
                            Sign Up II
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item hover:!text-[#747ed1]" href="./terms.html">
                            Terms
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item hover:!text-[#747ed1]" href="./pricing.html">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item hover:!text-[#747ed1]" href="./onepage.html">
                        One Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle  font-bold tracking-[-0.01rem] hover:!text-[#747ed1] after:!text-[#747ed1]"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Contacto
                  </a>
                  <div className="dropdown-menu dropdown-lg">
                    <div className="dropdown-lg-content">
                      <div>
                        <h6 className="dropdown-header !text-[#747ed1]">Project Pages</h6>
                        <ul className="pl-0 list-none">
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#747ed1]"
                              href="./projects.html"
                            >
                              Projects I
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#747ed1]"
                              href="./projects2.html"
                            >
                              Projects II
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#747ed1]"
                              href="./projects3.html"
                            >
                              Projects III
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#747ed1]"
                              href="./projects4.html"
                            >
                              Projects IV
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6 className="dropdown-header !text-[#747ed1]">Single Projects</h6>
                        <ul className="pl-0 list-none">
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#747ed1]"
                              href="./single-project.html"
                            >
                              Single Project I
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#747ed1]"
                              href="./single-project2.html"
                            >
                              Single Project II
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#747ed1]"
                              href="./single-project3.html"
                            >
                              Single Project III
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item hover:!text-[#747ed1]"
                              href="./single-project4.html"
                            >
                              Single Project IV
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
                      href="#"
                    >
                      <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]"></i>
                    </a>
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"></i>
                    </a>
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <i className="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]"></i>
                    </a>
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"></i>
                    </a>
                    <a
                      className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href="#"
                    >
                      <i className="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]"></i>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-other w-full !flex !ml-auto absolute">
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
