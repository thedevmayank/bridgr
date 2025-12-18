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
      <div id='about' className='scroll-mt-50 relative bg-white  border-b-2 border-gray-400 border overflow-hidden  '>
        <Image src={aboutpic}  alt="About Image" className="  overflow-hidden w-full md:h-full" />
        <div className='absolute top-12 lg:left-115 xl:left-120 2xl:left-120 md:left-60 sm:left-60 left-19 overflow-hidden '>
            <div data-aos="fade-up">   <h2 className=' sm:text-2xl md:text-4xl font-bold text-black top-0 md:top-10 md:left-10  '>Bridgr  Library Manager App</h2></div>
 </div>
        <div data-aos="fade-left"className='absolute hidden md:block lg:top-30 bg-blue-400  lg:right-31 flex  p-4 text-white     lg:w-100 lg:h-35 bg-blue-400 rounded-4xl text-justify text-wrap text-balance shadow-lg '>
          <p className='text-wrap mt-3'><b>Our Library Management App </b> is a complete solution designed to streamline and automate library operations.</p>
        </div>  
        <div data-aos="fade-right"className='absolute hidden lg:block lg:top-70 bg-blue-400  lg:left-11 p-4 text-white    lg:w-100 lg:h-35 bg-blue-400 rounded-4xl text-justify text-wrap text-balance shadow-lg'>
          <p className='text-wrap mt-3'><b>It offers</b> efficient shift management to handle multiple time slots smoothly, along with powerful member management to maintain detailed records, fees, and renewals.</p> 
          </div>

           <div data-aos="fade-left"className='absolute hidden lg:block lg:top-100 bg-blue-400  lg:right-15 p-5 text-white     lg:w-100 lg:h-35 bg-blue-400 rounded-4xl text-justify text-wrap text-balance shadow-lg'>
          <p className='text-wrap mt-3'>The seat management system ensures proper seat allocation, availability tracking, and avoids overcrowding.</p>
        </div>  
        <div data-aos="fade-right"className='absolute hidden lg:block lg:top-160 bg-blue-400  lg:left-20 p-5 text-white     lg:w-100 lg:h-35 bg-blue-400 rounded-4xl text-justify text-wrap text-balance shadow-lg'>
          <p className='text-wrap mt-3'><b>Automated SMS reminders</b> help notify members about fee due dates, renewals, and important updates.</p> 
          </div>

           <div data-aos="fade-left"className='absolute hidden lg:block lg:top-170 bg-blue-400  lg:right-9 p-5 text-white     lg:w-100 lg:h-35 bg-blue-400 rounded-4xl text-justify text-wrap text-balance shadow-lg'>
          <p className='text-wrap mt-3'><b>Our App</b> also includes expense management to track daily and monthly costs, enquiry management to handle new admissions.</p>
        </div>  
        <div data-aos="fade-right"className='absolute hidden lg:block lg:top-240 bg-blue-400  lg:left-50 p-5 text-white     lg:w-100 lg:h-35 bg-blue-400 rounded-4xl text-justify text-wrap text-balance shadow-lg'>
          <p className='text-wrap mt-3'> <b>follow-ups,</b> and a centralized dashboard that gives full control, transparency, and improved productivity for library owners and staff.</p> 
          </div>
      </div>
    </>
  )
}
