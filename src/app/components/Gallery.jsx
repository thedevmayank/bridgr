"use client";
import React, { use } from 'react'
import Image from 'next/image';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Slider from "react-slick";

export default function Gallery() {

    useEffect(() => {
        Aos.init();
    }, []);
  return (
    <main>
        <section id='gallery' className='w-full bg-white border p-3 overflow-hidden scroll-mt-70' >
        <h1 className='text-center text-3xl text-blue-500 font-bold'>App Screenshots</h1>
        </section>
        <section className='overflow-hidden'>
       
        </section>
    </main> 
  )
}
