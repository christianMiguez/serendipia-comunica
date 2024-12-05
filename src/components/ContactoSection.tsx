'use client'
import Image from 'next/image'
import { Resend } from 'resend'

const resend = new Resend('re_GxpnDkkH_4XwSKHmwyktRxeijZzRATJLC')

const sendEmail = async () => {
  // get name, email and message input value
  const name = (document.getElementById('form_name') as HTMLInputElement)?.value ?? ''
  const email = (document.getElementById('form_email') as HTMLInputElement)?.value ?? ''
  const message = (document.getElementById('form_message') as HTMLTextAreaElement)?.value ?? ''

  fetch('/api/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: name,
      email: email,
      message: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

export function ContactSection() {
  return (
    <>
      <section className="wrapper bg-gradient-blend">
        <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
          <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px]">
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[50px]">
              <Image
                src="./assets/img/icons/solid/email-2.svg"
                className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-purple-aqua !mb-3"
                width={200}
                height={200}
                alt="image"
              />
              <h2 className="text-[calc(1.325rem_+_0.9vw)] font-bold leading-[1.2] xl:text-[2rem] mb-3 xl:pr-[4.5rem] xxl:!pr-24">
                Contacto
              </h2>
              <p className="lead !text-[1.05rem] !leading-[1.55] font-normal xxl:pr-14 !mb-0">
                Está bien pedir ayuda, no estás solo. ¡Estamos aquí para ayudarte!
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
                        data-error="Nombre requerido"
                      />
                      <label
                        className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                        htmlFor="form_name"
                      >
                        Name *
                      </label>
                      <div className="valid-feedback"> Todo ok </div>
                      <div className="invalid-feedback"> Entra tu nombre. </div>
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
                        data-error="Email válido."
                      />
                      <label
                        className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                        htmlFor="form_email"
                      >
                        Email *
                      </label>
                      <div className="valid-feedback"> Todo ok! </div>
                      <div className="invalid-feedback"> Por favor ingresa un email válido. </div>
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
                        Mensaje *
                      </label>
                      <div className="valid-feedback"> Todo ok! </div>
                      <div className="invalid-feedback"> Por favor ingresa un mensaje. </div>
                    </div>
                  </div>
                  <div className="w-full flex-[0_0_auto] px-[10px] max-w-full">
                    <button
                      type="button"
                      className="btn btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                      onClick={() => sendEmail()}
                    >
                      Enviar mensaje
                    </button>
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
    </>
  )
}
