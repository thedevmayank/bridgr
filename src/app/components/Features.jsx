"use client";
import React from 'react'
import seatPic from '../../../public/settings_seating_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import personPic from '../../../public/article_person_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import shiftPic from '../../../public/overview_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import smsPic from '../../../public/sms.svg'
import enquiry from '../../../public/enquiry.svg'
import revenue from '../../../public/revenue.svg'
import expense from '../../../public/expanses.svg'
import activity from '../../../public/activity.svg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from 'next/image';


export default function Features() {

   useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
    <main>
      <section id='features' className=' w-full bg-blue-500 overflow-hidden text-sm p-4 '>
      <h1 data-aos="fade-up" className=' text-3xl text-white capitalize font-bold mt-4 text-center'>Our key Features</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 mx-auto w-[60vw]  text-center mt-4 gap-8 p-3'>
            <div className='flex flex-col  bg-white  items-center rounded-lg shadow-xl p-4 px-1 text-grey-200'  data-aos="fade-up" > 
               <Image src={seatPic} alt="Seat Management" height={74} width={74}></Image>
            <p>Seat Management</p>
            </div>
            <div className='flex flex-col  bg-white  items-center rounded-lg shadow-xl p-4 px-1 text-black ' data-aos="fade-up"> 
               <Image src={personPic} alt="Member Management" height={74} width={74}></Image>
               <p>Member Management</p>
            </div>
            <div className='flex flex-col  bg-white  items-center rounded-lg shadow-xl p-4 px-1 text-black' data-aos="fade-up"> 
               <Image src={shiftPic} alt="shift Management" height={74} width={74}></Image>
               <p>Shift Management</p>
            </div>
            <div className='flex flex-col  bg-white  items-center rounded-lg shadow-xl p-4 px-1 text-black' data-aos="fade-up"> 
               <Image src={smsPic} alt="SMS Management" height={74} width={74}></Image>
               <p>Auto SMS Reminder</p>
            </div>
            <div className='flex flex-col  bg-white  items-center rounded-lg shadow-xl p-4 px-1 text-black' data-aos="fade-up"> 
               <Image src={enquiry} alt="Enquiry Management" height={74} width={74}></Image>
              <p>Enquiry Management</p>
            </div>
             <div className='flex flex-col  bg-white  items-center rounded-lg shadow-xl p-4 px-1 text-black' data-aos="fade-up"> 
               <Image src={revenue} alt="Revenue Management" height={74} width={74}></Image>
               <p>Track Income</p>
            </div>
            <div className='flex flex-col  bg-white  items-center rounded-lg shadow-xl p-4 px-1 text-black' data-aos="fade-up"> 
               <Image src={expense} alt="Expense Management" height={74} width={74}></Image>
               <p>Expense Management</p>
            </div>
            <div className='flex flex-col  bg-white  items-center rounded-lg shadow-xl p-4 px-1 text-black' data-aos="fade-up"> 
               <Image src={activity} alt="Activity Management" height={74} width={74}></Image>
              <p>Track Activity</p>
            </div>
           
      </div>
      </section>
    </main>
    </>
    
  )
}
