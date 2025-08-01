import Image from "next/image"

export default function Lavadoras() {
    return (
        <section className='text-gray-800 flex-1'>

            <div className='flex justify-end'>
                <div className='flex flex-col items-end gap-2'>
                    <p className='-skew-x-12 bg-gray-800 text-white w-fit px-3 py-1'>
                        <span className='skew-x-12'>Filtros</span>
                    </p>

                    {/* <div className='flex gap-1'>
                                    <label htmlFor="">Marca:</label>
                                    <select name="" id="" className='-skew-x-12 border border-red-400 outline-none'>
                                        <option value="">Honor</option>
                                        <option value="">Xiaomi</option>
                                        <option value="">ZTE</option>
                                        <option value="">Samsung</option>
                                    </select>
                                </div> */}
                </div>
            </div>

            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

                <article className='flex flex-col justify-between'>

                    <div className='w-full'>
                        <Image
                            src={'/images/lava-1.png'}
                            width={500}
                            height={500}
                            alt='imagen-celular'
                            className='relative w-full'
                        />
                    </div>

                    <div>
                        <h2 className='font-semibold'>Xiaomi Redmi Note 14</h2>

                        <div className='flex justify-between'>
                            <p>$ 300.00</p>
                            <a
                                className='border border-red-500 text-red-500 -skew-x-12 px-3 hover:bg-red-500 hover:text-gray-200 transition-colors'
                                href='https://api.whatsapp.com/send/?phone=593995071589&text=Hola%2C+estoy+interesado+en+tu+producto&type=phone_number&app_absent=0'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Ver</span>
                            </a>
                        </div>
                    </div>
                </article>

                <article className='flex flex-col justify-between'>

                    <div className='w-full'>
                        <Image
                            src={'/images/lava-2.png'}
                            width={500}
                            height={500}
                            alt='imagen-celular'
                            className='relative w-full'
                        />
                    </div>

                    <div>
                        <h2 className='font-semibold'>Xiaomi Redmi Note 14 Pro</h2>

                        <div className='flex justify-between'>
                            <p>$ 350.00</p>
                            <a
                                className='border border-red-500 text-red-500 -skew-x-12 px-3 hover:bg-red-500 hover:text-gray-200 transition-colors'
                                href='https://api.whatsapp.com/send/?phone=593995071589&text=Hola%2C+estoy+interesado+en+tu+producto&type=phone_number&app_absent=0'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Ver</span>
                            </a>
                        </div>
                    </div>
                </article>

            </section>

        </section>
    )
}
