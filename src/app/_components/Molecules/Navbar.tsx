'use client'

import React from 'react'
import Link from 'next/link'
import { navbar } from '../../constants'
import { useState } from 'react'
import { useScroll, useMotionValueEvent, motion} from 'framer'


const Navbar = () => {

  const [hidden, setHidden] = useState(false)
  const {scrollY} = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if(latest > previous && latest > 500){
      console.log(latest);
    } else {
      setHidden(false);
    }
  })

  return (
    <div className='pb-20'>
      <motion.nav
        variants = {{
          visible: {y: 0},
          hidden: {y: '-100%'},
        }}
        animate={hidden? 'hidden': 'visible'}
        transition={{duration: 0.35, ease:'easeInOut'}}
        className={`flex bg-secondary p-5 text-white justify-between items-center fixed w-full z-50`}>
        <Link href={'/'}>
          <img src='icons/logo.png' className='w-32'/>
        </Link>
        <div className='flex h-full gap-5'>
          <nav className='flex gap-10'>
            {navbar.map((link) => (
              <Link href={link.href} className='hover:bg-black bg-opacity-10 rounded-md px-5 p-2' key={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>
          <Link className='w-32 drop-shadow-md bg-third rounded-full text-center hover:bg-[rgb(255,40,40)] py-2 h-full items-center' href={'/donar'}>
            Donar
          </Link>
        </div>
      </motion.nav>
    </div>
  )
}

export default Navbar