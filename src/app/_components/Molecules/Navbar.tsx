import React from 'react'
import Link from 'next/link'
import { navbar } from '../constants'

const Navbar = () => {
  return (
    <div className='flex bg-secondary p-5 text-white justify-between items-center'>
      {/* Logo */}
      <Link href={'/'}>
        <img src='icons/logo.png' className='w-32'/>
      </Link>
      {/* Páginas de navegación: lo puse de esta manera para que sea más sencillo añadir valores o cambiarlos */}
      <nav className='flex gap-20'>
        {navbar.map((link) => (
          <Link href={link.href} className='hover:bg-black bg-opacity-10 rounded-md px-5 p-2'>
            {link.name}
          </Link>
        ))}
      </nav>
      {/* Página de donación */}
      <Link className='w-32 drop-shadow-md bg-third rounded-full text-center hover:bg-[rgb(255,40,40)] py-1' href={'/donar'}>
        Donar
      </Link>
    </div>
  )
}

export default Navbar