import React from 'react';
import { HERO } from '../constants';
import assemImg from "../assets/assem3.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className='flex min-h-screen flex-wrap items-center'>
        <motion.div
        initial={{ opacity: 0, x:-50}}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 1 }}
        className='w-full md:w-1/2'>
            <h2 className='mt-6 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]'>
                {HERO.name}
            </h2>
            <h3 className='my-auto p-2 text-xl font-thin md:text-5xl lg:text-[3rem]'>
                {HERO.jobTitle}
            </h3>
            <p className='my-4 p-2 text-3xl tracking-tighter lg:text-4xl'>
                {HERO.greet}
            </p>
            <p className='mb-8 p-2 text-xl'>
                {HERO.description}
            </p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, scale: 0.8}}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: 1 }}
         className='w-full md:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1}}
                    src={assemImg} width={550} height={550} alt="Assem Salama" className='rounded-3xl'/>
                </div>
            </motion.div>
    </section>
  )
}
