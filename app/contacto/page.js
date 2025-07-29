import MainLayout from '@/components/MainLayout'
import Image from 'next/image'
import "../../styles/styles.css"

export default function Contacto() {
    return (
        <MainLayout>
            <section className='contacto pt-[9rem]'>

                <h2
                    className='block m-auto text-2xl text-center font-bold font w-fit -skew-x-12 bg-red-500 text-white p-2 '
                >
                    <span className='skew-x-12'>Contáctanos</span>
                </h2>

                <p className='text-center text-gray-100 w-[80%] m-auto mt-5 shadow-text'>
                    ¿Tienes dudas o quieres más información? Escríbenos para que uno de nuestros asesores te atienda
                </p>

                <span className='block w-[80%] lg:w-[50%] m-auto h-[2px] bg-red-500 my-5'></span>

                <div className='grid grid-cols-1 lg:grid-cols-2 pb-10'>
                    <div className='flex flex-col justify-center items-center'>

                        <div className='flex flex-col gap-4'>
                            <div className='flex items-start gap-4'>

                                <span className='-skew-x-12 bg-red-500 p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-location skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                                </span>

                                <div>
                                    <p className='font-bold text-red-500 text-xl'>Dirección</p>
                                    <p>Edificio Empresarial Unicornio II, Piso 15-04</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>

                                <span className='-skew-x-12 bg-red-500 p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                                </span>

                                <div>
                                    <p className='font-bold text-red-500 text-xl'>Teléfono</p>
                                    <p>099 924 2919</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>

                                <span className='-skew-x-12 bg-red-500 p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail skew-x-12"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                                </span>

                                <div>
                                    <p className='font-bold text-red-500 text-xl'>Correo</p>
                                    <p>ventas@lockplay.org</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-center items-center lg:justify-start'>


                        <div className='w-3/4'>
                            <Image
                                src="/images/call_center.webp"
                                alt="logo"
                                width={500}
                                height={500}
                                className="w-full"
                            />
                        </div>


                    </div>
                </div>
            </section>

        </MainLayout>
    )
}
