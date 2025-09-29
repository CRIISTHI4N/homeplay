import MainLayout from '@/components/MainLayout'
import BrandCarousel from '../components/BrandCarousel'
import Image from 'next/image'
import Link from 'next/link'
import "../styles/styles.css"

export default function Home() {
  return (
    <>

      <section className='bg-[#131114] w-full flex justify-between items-center px-[10%]'>

        <div className='flex items-center gap-2'>
          <p>Home Play</p>

          <div className='bg-red-500 w-fit py-2 px-4 -skew-x-12 text-gray-800 font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-tv"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M16 3l-4 4l-4 -4" /></svg>
          </div>

        </div>


        <div className='flex items-center gap-2'>
          <a href="https://www.facebook.com/share/19WKx7McWW/" target="_blank" rel="noopener noreferrer" className='p-1 hover:bg-red-500 transition-colors -skew-x-12'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" /></svg>
          </a>

          <a href="https://www.tiktok.com/@homeplaycredito" target="_blank" rel="noopener noreferrer" className='p-1 hover:bg-red-500 transition-colors -skew-x-12'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-tiktok skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z" /></svg>
          </a>

          <a href="https://api.whatsapp.com/send?phone=593997518833&text=Hola%F0%9F%91%8B%20%2C%20deseo%20realizar%20un%20precredito%20para%20saber%20si%20puedo%20accerder%20a%20un%20cr%C3%A9dito.%20este%20es%20mi%20numero%20de%20c%C3%A9dula" target="_blank" rel="noopener noreferrer" className='p-1 hover:bg-red-500 transition-colors -skew-x-12'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-whatsapp skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.497 4.409a10 10 0 0 1 -10.36 16.828l-.223 -.098l-4.759 .849l-.11 .011a1 1 0 0 1 -.11 0l-.102 -.013l-.108 -.024l-.105 -.037l-.099 -.047l-.093 -.058l-.014 -.011l-.012 -.007l-.086 -.073l-.077 -.08l-.067 -.088l-.056 -.094l-.034 -.07l-.04 -.108l-.028 -.128l-.012 -.102a1 1 0 0 1 0 -.125l.012 -.1l.024 -.11l.045 -.122l1.433 -3.304l-.009 -.014a10 10 0 0 1 1.549 -12.454l.215 -.203a10 10 0 0 1 13.226 -.217m-8.997 3.09a1.5 1.5 0 0 0 -1.5 1.5v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0 -3h-1l-.144 .007a1.5 1.5 0 0 0 -1.128 .697l-.042 .074l-.022 -.007a4.01 4.01 0 0 1 -2.435 -2.435l-.008 -.023l.075 -.041a1.5 1.5 0 0 0 .704 -1.272v-1a1.5 1.5 0 0 0 -1.5 -1.5" /></svg>
          </a>
        </div>

      </section>

      <MainLayout>
        <section className="w-full h-screen bienvenida relative bg-gray-800">

          <div className="absolute top-[50%] -translate-y-[50%] left-[9%] right-[9%] md:top-[15%] md:-translate-y-0 lg:top-[29%]">
            <p className="text-xl text-red-500 font-bold  lg:text-xl ">Tu mejor opción en</p>
            <p
              className="text-3xl text-gray-100 font-bold  lg:text-5xl">
              Tecnología y <br /> <span className='text-red-500'>Hogar Inteligente</span>
            </p>

            <p className='mt-10'>Con nuestros planes de crédito, la innovación y la calidad están al alcance de tu mano.</p>
            <p>
              Ofrecemos soluciones confiables en línea blanca y celulares.
            </p>

            <div className='mt-5 flex items-center gap-1'>
              <Link
                href={'/contacto'}
                className="block bg-red-500 w-fit py-2 px-4 -skew-x-12 hover:bg-gray-100 hover:text-gray-800 transition-colors"
              >
                <span className='text-gray-800 font-bold -skew-x-12'>Contáctanos</span>
              </Link>

              <span className='w-1 h-10 -skew-x-12 bg-red-500'></span>

            </div>

          </div>

          <div className="absolute hidden w-[300px] left-[50%] md:block -translate-x-[50%] top-[63%] md:w-[350px] md:top-[55%] lg:top-[35%] lg:left-[55%] lg:translate-x-0 lg:w-[400px] xl:top-[50%] xl:-translate-y-[50%] xl:w-[500px] z-10 fade-in-slide">
            <Image
              src="/images/tv2.png"
              alt="logo"
              width={500}
              height={500}
              className="w-full"
            />
          </div>

        </section>

        <section className='w-[80%] m-auto my-10 text-gray-800 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start'>

          <article className='flex flex-col items-center justify-center gap-2 text-center '>

            <span className='bg-red-500 p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-gray-100 skew-x-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
              </svg>
            </span>

            <h2 className='text-red-500 font-semibold text-xl'>1. Solo presenta tu cédula</h2>
          </article>

          <article className='flex flex-col items-center justify-center gap-2 text-center '>

            <span className='bg-red-500 p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 icon icon-tablertext-gray-100 skew-x-12 text-gray-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </span>

            <h2 className='text-red-500 font-semibold text-xl'>2. Escoge tu celu favorito</h2>

          </article>

          <article className='flex flex-col items-center justify-center gap-2 text-center '>

            <span className='bg-red-500 p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-gray-100 skew-x-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
              </svg>
            </span>

            <h2 className='text-red-500 font-semibold text-xl'>3. Llévatelo a casa en cuotitas semanales</h2>

          </article>
        </section>

        {/* <section className='w-[80%] m-auto my-10 text-gray-800 grid grid-cols-1 lg:grid-cols-4 gap-10 items-start'>

          <article className='flex flex-col items-center justify-center gap-2 text-center '>

            <span className='bg-red-500 p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-gray-100 skew-x-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </span>


            <div className='flex flex-col gap-2'>
              <h2 className='text-red-500 font-semibold text-xl'>Compra sin complicaciones</h2>

              <p>Adquiere tus electrodomésticos y celulares en minutos. Sin trámites engorrosos ni procesos tediosos.</p>
            </div>

          </article>

          <article className='flex flex-col items-center justify-center gap-2 text-center '>

            <span className='bg-red-500 p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
            </span>


            <div className='flex flex-col gap-2'>
              <h2 className='text-red-500 font-semibold text-xl'>Atención personalizada</h2>

              <p>Te asesoramos en cada paso para que elijas justo lo que necesitas, sin complicaciones.</p>
            </div>

          </article>

          <article className='flex flex-col items-center justify-center gap-2 text-center '>

            <span className='bg-red-500 p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-supabase text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 14h8v7l8 -11h-8v-7z" /></svg>
            </span>

            <div className='flex flex-col gap-2'>
              <h2 className='text-red-500 font-semibold text-xl'>Presenta tu cédula</h2>

              <p>Puedes acceder a nuestros productos, siempre actualizados con lo último en innovación y eficiencia.</p>
            </div>

          </article>

          <article className='flex flex-col items-center justify-center gap-2 text-center '>

            <span className='bg-red-500 p-5 -skew-x-12 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 icon icon-tabler icons-tabler-outline icon-tabler-shield-lock text-gray-100 skew-x-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </span>


            <div className='flex flex-col gap-2'>
              <h2 className='text-red-500 font-semibold text-xl'>Tu celu en menos de 30 minutos</h2>

              <p>Obtén la aprobación y el equipo que quieres.</p>
            </div>

          </article>

        </section> */}

        <section className='w-full h-72 bg-[#131114] banner_dos flex items-center justify-center'>
          <div className='flex flex-col gap-7 lg:flex-row items-center justify-between w-[80%] m-auto'>
            <div>
              <p className='font-bold text-xl lg:text-3xl'>Enciende, disfruta y paga a tu ritmo <br /> con nuestro crédito directo.</p>

              <p>En Home Play encuentras lo mejor en electrodomésticos y celulares de última generación. Productos confiables, modernos y fáciles de usar, pensados para hacer tu vida más cómoda. Y lo mejor: sin complicaciones, ni procesos tediosos. </p>
            </div>

            <a
              href="https://www.tiktok.com/@homeplaycredito"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-red-500 w-fit py-2 px-4 -skew-x-12 hover:bg-gray-100 hover:text-gray-800 transition-colors relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'
            >
              <span className='text-gray-800 font-bold -skew-x-12 text-nowrap'>Ver Productos</span>
            </a>
          </div>
        </section>

        <section className='text-gray-800 my-10 w-[80%] m-auto'>
          <h2 className='text-center text-3xl font-bold mb-5'>¿Por qué <span className='text-red-500'>Home play</span>?</h2>

          <p className='text-center'>No esperes más para estar siempre conectado con tus seres queridos. Llévate tu celu soñado hoy y págalo mientras lo usas en cuotitas semanales.</p>

          <span className='block w-[80%] lg:w-[50%] m-auto h-[2px] bg-red-500 mt-5'></span>

          <section className='relative grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>

            {/* <div className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-full lg:w-[60%] h-[20%] lg:h-[100%] rounded-full bg-gray-200 opacity-70 z-[-1]'></div> */}

            <div className='flex flex-col gap-10'>

              <div>
                <h2 className='text-red-500 text-3xl font-bold'>Empresa</h2>
                <p className='text-gray-800 text-2xl'>Aumenta tus ventas.</p>
              </div>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-red-500 w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-red-500 text-lg'>Aprueba crédito.</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Sin Buro de crédito.</li>
                    <li>- Facilidad de ventas.</li>
                  </ul>
                </div>
              </article>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-red-500 w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-red-500 text-lg'>Sin papeleos</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Contrato automáticos.</li>
                    <li>- Copia de cédula.</li>
                  </ul>
                </div>
              </article>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-red-500 w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-red-500 text-lg'>Sin riesgo.</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Económicos.</li>
                  </ul>
                </div>
              </article>
            </div>

            <div className='flex items-center justify-center'>
              <Image
                src="/images/tv.png"
                alt="logo"
                width={500}
                height={500}
                className="w-full"
              />
            </div>

            <div className='flex flex-col gap-10'>

              <div>
                <h2 className='text-[#2c2c2c] text-3xl font-bold'>Cliente</h2>
                <p className='text-gray-800 text-2xl'>Mejora tu nivel crediticio.</p>
              </div>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-[#2c2c2c] w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#2c2c2c]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-[#2c2c2c] text-lg'>Facilidad de pagos.</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Quincenales.</li>
                    <li>- Semanales.</li>
                    <li>- Mensuales.</li>
                  </ul>
                </div>
              </article>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-[#2c2c2c] w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#2c2c2c]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-[#2c2c2c] text-lg'>Premios - Regalos sorpresas.</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Cuotas sin retraso.</li>
                    <li>- Sin entrada en tu próxima compra.</li>
                  </ul>
                </div>
              </article>

              <article className='flex items-center gap-8'>
                <span className='block -skew-x-12 bg-[#2c2c2c] w-fit p-3 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-[#2c2c2c]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checks text-gray-100 skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
                </span>

                <div>
                  <h3 className='font-semibold text-[#2c2c2c] text-lg'>Mejora tu historial.</h3>

                  <ul className='space-y-[-7px]'>
                    <li>- Certificado de crédito.</li>
                    <li>- Mejora de nivel crediticio.</li>
                  </ul>
                </div>
              </article>
            </div>
          </section>
        </section>

        <section className='text-gray-800 my-10 w-[80%] m-auto'>
          <h2 className='text-center text-3xl font-bold mb-5'>Amplia gama de <br /> <span className='text-red-500'>Marcas</span></h2>

          <BrandCarousel />
        </section>

        <section className='w-full bg-red-200 banner_dos flex items-center justify-center py-5'>
          <Image
            src={'/images/banner_celulares.png'}
            width={500}
            height={500}
          />

          <div className='flex flex-col gap-5'>
            <p className='text-2xl'>
              Elige tu celular soñado hoy y págalo mientras lo usas, <br />
              con la comodidad de pequeñas cuotas semanales. <br />
              Conéctate con tus seres queridos al instante.
            </p>

            <Link
              href={'/productos'}
              rel="noopener noreferrer"
              className='bg-red-500 w-fit py-2 px-4 -skew-x-12 hover:bg-gray-100 hover:text-gray-800 transition-colors relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'
            >
              <span className='text-gray-100 font-bold -skew-x-12 text-nowrap'>Ver Productos</span>
            </Link>
          </div>

        </section>
      </MainLayout >
    </>
  );
}
