"use client";
import React, { use } from 'react'
import Image from 'next/image';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


export default function Gallery() {

    useEffect(() => {
        Aos.init();
    }, []);
  return (
    <main>
        <section id='gallery' className='w-full bg-white  p-3 overflow-hidden scroll-mt-70' data data-aos="fade-up" >
        <h1 className='text-center text-3xl text-blue-500 font-bold'>App Overview</h1>
        </section>
       
    </main> 
  )
}
