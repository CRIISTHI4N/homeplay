import MainLayout from '@/components/MainLayout'
import "../../styles/styles.css"
import Link from 'next/link'
import MenuProductos from '@/components/MenuProductos'

export default function ProductosLayout({ children }) {
    return (
        <MainLayout>
            <section className='text-gray-800 mt-[9rem] w-[80%] m-auto'>
                <h2 className='text-center text-3xl font-bold mb-5'>¿Por qué <span className='text-red-500'>elegirnos</span>?</h2>
                <p className='text-center'>Ofrecemos una gran variedad de productos, a todos los precios y en comodas cuotas</p>
                <span className='block w-[80%] lg:w-[50%] m-auto h-[2px] bg-red-500 my-5'></span>
            </section>

            <section className='w-[80%] m-auto gap-10 mb-12 flex flex-col md:flex-row'>

                <MenuProductos />

                {children}

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