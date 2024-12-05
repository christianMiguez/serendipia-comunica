import { createWhatsappLink } from '@/lib/utils'
import Image from 'next/image'
export function RomboContent({ content_type }: { content_type: string }) {
  // is taller niños default
  let link = '#'
  let img = './assets/img/photos/about28.jpg'
  let content = <></>
  switch (content_type) {
    case 'TALLER_PARA_NIÑOS':
      link = createWhatsappLink('59899419419', 'Taller%20para%20niños')
      img = './assets/img/photos/about28.jpg'
      content = (
        <>
          <h2 className="xl:text-[2rem] text-[calc(1.325rem_+_.9vw)] font-semibold !leading-[1.2] !mb-3">
            Taller de Emociones para niños
          </h2>
          <p className="lead !text-[1.05rem] !leading-[1.55] font-normal">
            En Serendipia ofrecemos un espacio seguro y de confianza para que los niños puedan
            expresar sus emociones y sentimientos a través de actividades lúdicas y creativas. A
            través de este taller, los niños aprenderán a identificar y gestionar sus emociones, a
            desarrollar la empatía y a mejorar sus habilidades sociales.
          </p>
        </>
      )
      break
    case 'YOGA':
      link = createWhatsappLink('59899419419', 'Yoga')
      img = './assets/img/photos/YOGA.jpg'
      content = (
        <>
          <h2 className="xl:text-[2rem] text-[calc(1.325rem_+_.9vw)] font-semibold !leading-[1.2] !mb-3">
            CLASES DE YOGA
          </h2>
          <p className="lead !text-[1.05rem] !leading-[1.55] font-normal">
            Vení a disfrutar de nuestras clases de yoga en un ambiente tranquilo y relajado.
            Nuestros profesores de yoga cuentan con una amplia experiencia y formación en diferentes
            estilos de yoga, como Hatha, Vinyasa, Ashtanga y Kundalini. En Serendipia, te ofrecemos
            un espacio para que puedas conectar contigo mismo y con el mundo que te rodea. ¡Te
            esperamos!
          </p>
        </>
      )
      break
    case 'AURICULOTERAPIA':
      link = createWhatsappLink('59899419419', 'Auriculoterapia')
      img = './assets/img/photos/AURICULOTERAPIA.jpg'
      content = (
        <>
          <h2 className="xl:text-[2rem] text-[calc(1.325rem_+_.9vw)] font-semibold !leading-[1.2] !mb-3">
            AURICULOTERAPIA
          </h2>
          <p className="lead !text-[1.05rem] !leading-[1.55] font-normal">
            La auriculoterapia es una técnica de medicina tradicional china que consiste en la
            estimulación de puntos específicos en el pabellón auricular para tratar diferentes
            dolencias y enfermedades. En Serendipia, ofrecemos sesiones de auriculoterapia para
            aliviar el dolor, reducir el estrés y la ansiedad, mejorar la calidad del sueño y
            promover el bienestar general. ¡Vení a probarlo!
          </p>
        </>
      )
      break
    case 'TAROT':
      link = createWhatsappLink('59899419419', 'Tarot')
      img = './assets/img/photos/TAROT.jpg'
      break
    case 'TERAPIA_PSICOLOGICA':
      link = createWhatsappLink('59899419419', 'Terapia%20Psicologica')
      img = './assets/img/photos/TERAPIA_PSICOLOGICA.jpg'
      content = (
        <>
          <h2 className="xl:text-[2rem] text-[calc(1.325rem_+_.9vw)] font-semibold !leading-[1.2] !mb-3">
            TERAPIA PSICOLÓGICA
          </h2>
          <p className="lead !text-[1.05rem] !leading-[1.55] font-normal">
            Tambien ofrecemos terapia psicológica para niños, adolescentes y adultos. Nuestro equipo
            de psicólogos y psicoterapeutas cuentan con gran experiencia en el tratamiento de
            trastornos emocionales y psicológicos. En Serendipia, trabajamos con un enfoque
            integrador y humanista, centrado en la persona y en sus necesidades.
          </p>
        </>
      )
      break
    default:
  }

  return (
    <>
      <section className="wrapper">
        <div className="container pt-14 xl:pt-0 lg:pt-0 md:pt-0 pb-20 xl:pb-28 lg:pb-28 md:pb-28">
          <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-30px] items-center">
            <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 lg:!order-2 !mx-auto md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[30px]">
              <div className="img-mask mask-2 xxl:!px-8">
                <Image src={img} alt="image" width={385} height={360} />
              </div>
            </div>
            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:px-[20px] lg:px-[20px] xl:px-[35px] mt-[30px]">
              {content}
              <a
                href={link}
                className="btn btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              >
                Mas info
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
