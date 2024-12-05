type Props = {
  title?: string
  description?: string
}

export function HeroRainbow({
  title = 'Bienvenido a Espacio Serendipia 👋',
  description = 'Si buscas un lugar tranquilo en el Cerro de Montevideo para hacer terapia con la Red de Psicólogos y profesionales de la Salud, o simplemente alquilar consultorio para atender pacientes, ¡este es tu lugar! ❤️',
}: Props) {
  return (
    <section className="wrapper bg-gradient-blend bg-serendipia">
      <div className="container pt-24 xl:pt-32 lg:pt-32 md:pt-32 pb-14 md:pb-32 xl:pb-40 lg:pb-40">
        <div className="flex flex-wrap mx-[-15px] mt-10">
          <div className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
            <h2 className="text-[0.85rem] !leading-[1.35] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3"></h2>
            <h3 className="xl:text-[1.6rem] text-[calc(1.365rem_+_1.38vw)] font-semibold !leading-[1.15] mb-5 xl:!px-14">
              {title}
            </h3>
            <p className="lead !text-[1.1rem]">{description}</p>
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
  )
}
