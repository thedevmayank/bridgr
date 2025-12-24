import React from 'react'
import logopic from "@/app/Group 1.png";
import Image from 'next/image';

export default function Footer() {
    return (
        <main>
          <footer className="bg-[#e8e9eb] mt-5">
  <section className="max-w-7xl mx-auto px-3 py-5">

    <div className="flex flex-col md:flex-row items-start md:items-center justify-around gap-6">

      {/* Logo */}
      <div className="flex-shrink-0 hidden md:block">
        <Image
          src={logopic}
          alt="Bridgr Logo"
          height={80}
          width={120}
          priority
        />
      </div>

      {/* Footer Content */}
      <div className="flex flex-col sm:flex-row gap-8 text-black ">

        {/* Contact */}
        <div>
          <p className="text-blue-600 font-semibold mb-2">Contact Us</p>
          <p className="text-sm">Email: bridgrplatform@gmail.com</p>
          <p className="text-sm">Phone: +91 6376615674</p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-blue-600 font-semibold mb-2">Quick Links</p>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Features</li>
            <li className="hover:text-blue-500 cursor-pointer">Gallery</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>

      </div>
    </div>
    </section>

    <section className="text-center text-sm text-gray-500 py-4">
        <hr className='text-gray-400'/>
      &copy; {new Date().getFullYear()} Bridgr. All rights reserved.
    </section>
    </footer>

    {/* Divider */}

        </main>
    )
}
