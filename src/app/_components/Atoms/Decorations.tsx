'use client'
import React, { FC, useEffect } from 'react'

interface DecorationProps {
  color1: string,
  color2: string,
  color3?: string,
  rotation?: string,
  className: string
}

interface IconProps {
  img: object,
}

export const Decorations: FC<DecorationProps> = ({color1, color2, rotation, color3, className}) => {

  return (
    <div className={`absolute -z-10 ${rotation? parseInt(rotation) < 0 ? '-rotate-45': 'rotate-45'
    : null} ${className}` }>
      <div className={`w-[45rem] h-14 rounded-full drop-shadow-lg ${color1 === 'fourth' ? 
        'bg-fourth' 
        : color1 === 'fifth' ? 'bg-fifth' : 'bg-third'}`} />
      <div className={`w-[45rem] h-14 rounded-full relative left-20 -top-3 drop-shadow-lg ${color2 === 'fourth' ? 
        'bg-fourth' 
        : color2 === 'fifth' ? 'bg-fifth' : 'bg-third'}`} />   
      {color3 ? 
        <div className={`w-[45rem] h-14 rounded-full relative -left-20 -top-3 drop-shadow-lg ${color3 === 'fourth' ? 
        'bg-fourth' 
        : color3 === 'fifth' ? 'bg-fifth' : 'bg-third'}`} />  :null  
      }
    </div>
  )
}

export const Icon = () => {
  return (
    <div className='w-32 h-32 rounded-full border-dashed border-black border-4'>
      <img/>
    </div>
  )
}