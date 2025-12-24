"use client";
import React from 'react'
import Image from 'next/image';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "flowbite";

export default function Support() {
    useEffect(() => {
        Aos.init();
    }, []);
  return (
    
    <main>
        <section id='support' className='w-full bg-blue-500  p-3 overflow-hidden scroll-mt-60 pb-5'>
        <h1 className='text-center text-3xl text-white font-bold' data-aos="fade-up">Get In Touch</h1>

        <div className='max-w-6xl mx-auto mt-9 '>
        <form className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg" data-aos="flip-left">
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
    <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-500"  placeholder="Your Name" />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
    <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-500" placeholder="Your Email" />
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
    <textarea id="message" name="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 outline-blue-500" placeholder="Your Message"></textarea>
  </div>
  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Send Message</button>
</form>
        </div>
        </section>
    </main>
  )
   
}
