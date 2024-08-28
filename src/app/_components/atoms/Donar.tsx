import Link from 'next/link';
import React from 'react'

const Donar = () => {
  return (
    <Link className='w-32 drop-shadow-md bg-third rounded-full text-center hover:bg-[rgb(255,40,40)] py-2 h-full items-center' href={'/donar'}>
        Donar
    </Link>
  )
}

export default Donar