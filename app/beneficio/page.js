import MainLayout from '@/components/MainLayout'
import "../../styles/styles.css"
import Link from 'next/link'
import Image from 'next/image'

export default function Beneficio() {
    return (
        <MainLayout>
            <section className='text-gray-800 mt-[9rem] w-[80%] m-auto'>
                <h2 className='text-center text-3xl font-bold mb-5'>¿Por qué <span className='text-red-500'>elegirnos</span>?</h2>

                <p className='text-center'>Ofrecemos una gran variedad de productos, a todos los precios y en comodas cuotas</p>

                <span className='block w-[80%] lg:w-[50%] m-auto h-[2px] bg-red-500 my-5'></span>
            </section>

            <section className='w-[80%] m-auto gap-32  mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-red-200 p-5'>

                <article className='flex flex-col gap-5'>

                    <div className='flex items-center gap-8'>
                        <span className='block -skew-x-12 bg-red-500 w-fit p-2 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-100 skew-x-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>

                        <h3 className='font-semibold text-red-500 text-lg'>Teléfonos</h3>
                    </div>


                    <div className='-skew-x-12'>
                        <Image
                            src="/images/telefonos.webp"
                            alt="logo"
                            width={500}
                            height={500}
                            className="block w-full aspect-square object-cover"
                        />
                    </div>


                </article>

                <article className='flex flex-col gap-5'>

                    <div className='flex items-center gap-8'>
                        <span className='block -skew-x-12 bg-red-500 w-fit p-2 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-100 skew-x-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>

                        </span>

                        <h3 className='font-semibold text-red-500 text-lg'>Televisores</h3>
                    </div>


                    <div className='-skew-x-12'>
                        <Image
                            src="/images/televisiones.jpg"
                            alt="logo"
                            width={500}
                            height={500}
                            className="block w-full aspect-square object-cover"
                        />
                    </div>
                </article>

                <article className='flex flex-col gap-5'>

                    <div className='flex items-center gap-8'>
                        <span className='block -skew-x-12 bg-red-500 w-fit p-2 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-100 skew-x-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>

                        <h3 className='font-semibold text-red-500 text-lg'>Microondas</h3>
                    </div>


                    <div className='-skew-x-12'>
                        <Image
                            src="/images/microondas.jpg"
                            alt="logo"
                            width={500}
                            height={500}
                            className="block w-full aspect-square object-cover"
                        />
                    </div>
                </article>

                <article className='flex flex-col gap-5'>

                    <div className='flex items-center gap-8'>
                        <span className='block -skew-x-12 bg-red-500 w-fit p-2 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-100 skew-x-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>

                        <h3 className='font-semibold text-red-500 text-lg'>Refrigeradores</h3>
                    </div>


                    <div className='-skew-x-12'>
                        <Image
                            src="/images/refri.jpg"
                            alt="logo"
                            width={500}
                            height={500}
                            className="block w-full aspect-square object-cover"
                        />
                    </div>
                </article>

                <article className='flex flex-col gap-5'>

                    <div className='flex items-center gap-8'>
                        <span className='block -skew-x-12 bg-red-500 w-fit p-2 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-100 skew-x-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>

                        <h3 className='font-semibold text-red-500 text-lg'>Lavadoras</h3>
                    </div>


                    <div className='-skew-x-12'>
                        <Image
                            src="/images/lavadora.jpg"
                            alt="logo"
                            width={500}
                            height={500}
                            className="block w-full aspect-square object-cover"
                        />
                    </div>
                </article>

                <article className='flex flex-col gap-5'>

                    <div className='flex items-center gap-8'>
                        <span className='block -skew-x-12 bg-red-500 w-fit p-2 relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-100 skew-x-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>

                        <h3 className='font-semibold text-red-500 text-lg'>Cocinas</h3>
                    </div>


                    <div className='-skew-x-12'>
                        <Image
                            src="/images/cocina.jpg"
                            alt="logo"
                            width={500}
                            height={500}
                            className="block w-full aspect-square object-cover"
                        />
                    </div>
                </article>

            </section>

            <h2 className='text-center text-3xl text-gray-800 font-bold mb-5'>Tambien puedes visitar</h2>

            <section className='w-full h-80 bg-[#131114] banner_dos flex items-center justify-center'>
                <div className='flex flex-col gap-7 lg:flex-row items-center justify-between w-[80%] m-auto'>
                    <div>
                        <p className="text-3xl font-bold text-gray-100"><span className="text-[#ea332a]">LOCK</span>PLAY</p>
                        <p className='font-bold text-xl lg:text-2xl'>Adminsitra tus dispositivos.</p>
                        <p>Elimina riesgos y garantiza la seguridad operativa de tus dispositivos.</p>
                    </div>

                    <Link
                        href='https://lockplay.org/'
                        target="_blank"
                        className='bg-red-500 w-fit py-2 px-4 -skew-x-12 hover:bg-gray-100 hover:text-gray-800 transition-colors relative before:content-[""] before:absolute before:right-[-8px] before:top-0 before:w-1 before:h-full before:bg-red-500'
                    >
                        <span className='text-gray-800 font-bold -skew-x-12 text-nowrap'>Visitar</span>
                    </Link>
                </div>
            </section>
        </MainLayout>
    )
}