import React from 'react'
import { HERO } from '../constants'
import assemImg from "../assets/assem3.png"

export const Hero = () => {
  return (
    <section className='flex min-h-screen flex-wrap items-center'>
        <div className='w-full md:w-1/2'>
            <h2 className='my-auto p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]'>
                {HERO.name}
            </h2>
            <h3 className='my-auto p-2 text-xl font-thin md:text-5xl lg:text-[3rem]'>
                Software Engineer
            </h3>
            <p className='my-4 p-2 text-3xl tracking-tighter lg:text-4xl'>
                {HERO.greet}
            </p>
            <p className='mb-8 p-2 text-xl'>
                {HERO.description}
            </p>
        </div>
        <div className='w-full md:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img src={assemImg} width={550} height={550} alt="Assem Salama" className='rounded-3xl'/>
                </div>
            </div>
    </section>
  )
}
