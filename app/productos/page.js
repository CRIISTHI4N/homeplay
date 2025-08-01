import Image from "next/image"

export default function ProductosPage() {
    return (
        <section className='text-gray-800 flex-1'>


            <div className=" flex gap-5 w-fit m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500 rotate-90 md:rotate-0 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>

                <h2 className="text-center uppercase font-semibold">
                    Escoge algún tipo de artículo y comienza a comprar sin preocupación
                </h2>

            </div>





        </section>
    )
}