"use client";
import React from 'react'
import aboutpic from '../../../public/Hand and iPhone 16 Pro.svg'
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function About() {
    useEffect(() => {
  AOS.init();
}, []);

  return (
    <>
      <div id='about' className='scroll-mt-50 relative  border-b-2 border-gray-400  '>
        <Image src={aboutpic} alt="About Image" className="w-full h-auto " />
        <div className='absolute top-15 lg:left-115 xl:left-130 2xl:left-150 md:left-80 sm:left-60 left-40 '>
            <div data-aos="fade-up">   <h2 className='md:text-4xl font-bold text-black  top-10 left-10 '>Bridgr - Library Manager App</h2></div>

     
        </div>
    
        
      </div>
    </>
  )
}
