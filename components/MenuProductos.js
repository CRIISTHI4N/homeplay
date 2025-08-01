"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

export default function MenuProductos() {

    const pathname = usePathname();

    return (
        <nav>
            <ul className='space-y-2'>

                <li className={`${pathname === '/productos/telefonos' ? 'bg-red-500 text-gray-200' : 'text-gray-800'} flex gap-3 hover:bg-red-500 -skew-x-12 transition-colors hover:text-gray-200 border-b`}>
                    <Link
                        href={'/productos/telefonos'}
                        className={`skew-x-12 text-center w-full Link py-1 px-3 font-semibold cursor-pointer`}
                    >
                        Teléfonos
                    </Link>
                </li>
                <li className={`${pathname === '/productos/televisiones' ? 'bg-red-500 text-gray-200' : 'text-gray-800'} flex gap-3 hover:bg-red-500 -skew-x-12 transition-colors hover:text-gray-200 border-b`}>
                    <Link href={'/productos/televisiones'} className='skew-x-12 text-center w-full py-1 px-3 font-semibold cursor-pointer'>
                        Televisores
                    </Link>
                </li>
                <li className={`${pathname === '/productos/microondas' ? 'bg-red-500 text-gray-200' : 'text-gray-800'} flex gap-3 hover:bg-red-500 -skew-x-12 transition-colors hover:text-gray-200`}>
                    <Link href={'/productos/microondas'} className='skew-x-12 text-center w-full py-1 px-3 font-semibold cursor-pointer'>
                        Microondas
                    </Link>
                </li>
                <li className={`${pathname === '/productos/lavadoras' ? 'bg-red-500 text-gray-200' : 'text-gray-800'} flex gap-3 hover:bg-red-500 -skew-x-12 transition-colors hover:text-gray-200`}>
                    <Link href={'/productos/lavadoras'} className='skew-x-12 text-center w-full py-1 px-3 font-semibold cursor-pointer'>
                        Lavadoras
                    </Link>
                </li>
                <li className={`${pathname === '/productos/refrigeradoras' ? 'bg-red-500 text-gray-200' : 'text-gray-800'} flex gap-3 hover:bg-red-500 -skew-x-12 transition-colors hover:text-gray-200`}>
                    <Link href={'/productos/refrigeradoras'} className='skew-x-12 text-center w-full py-1 px-3 font-semibold cursor-pointer'>
                        Refrigeradoras
                    </Link>
                </li>
                <li className={`${pathname === '/productos/cocinas' ? 'bg-red-500 text-gray-200' : 'text-gray-800'} flex gap-3 hover:bg-red-500 -skew-x-12 transition-colors hover:text-gray-200`}>
                    <Link href={'/productos/cocinas'} className='skew-x-12 text-center w-full py-1 px-3 font-semibold cursor-pointer'>
                        Cocinas
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
