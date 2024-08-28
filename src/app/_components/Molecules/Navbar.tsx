'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { navbar } from '../constants'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const Navbar = () => {

  const [hidden, setHidden] = useState(false)
  const {scrollY} = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if(latest > previous){
      setHidden(true);
    } else {
      setHidden(false);
    }
  })

  return (
    <motion.nav
      variants={{
        visible: {y: 0},
        hidden: {y: '-100%'}
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{
        duration: 0.15, ease: 'easeInOut'
      }}
      className={`flex bg-secondary p-5 text-white justify-between items-center fixed w-full`}>
      {/* Logo */}
      <Link href={'/'}>
        <img src='icons/logo.png' className='w-32'/>
      </Link>
      {/* Páginas de navegación: lo puse de esta manera para que sea más sencillo añadir valores o cambiarlos */}
      <div className='flex gap-20'>
        {navbar.map((link) => (
          <Link href={link.href} className='hover:bg-black bg-opacity-10 rounded-md px-5 p-2'>
            {link.name}
          </Link>
        ))}
      </div>
      {/* Página de donación */}
      <Link className='w-32 drop-shadow-md bg-third rounded-full text-center hover:bg-[rgb(255,40,40)] py-1' href={'/donations-page'}>
        Donar
      </Link>
    </motion.nav>
  )
}

export default Navbar