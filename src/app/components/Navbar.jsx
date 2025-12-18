"use client";

import { useState } from "react";
import logopic from "../../../src/app/Group 1.png"
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div  className="flex items-end">
          <a href="#home"><Image src={logopic} alt="Logo" className="h-14 w-auto" />
          </a>
          <a href="#home"><p className="ml-2 text-xl font-bold text-blue-500">Bridgr</p></a>
          
          
        </div>
            
        

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-blue-500 transition"><a href="#home">Home</a></li>
          <li className="hover:text-blue-500 transition"><a href="#about">About</a></li>
          <li className="hover:text-blue-500 transition"><a href="#features">Features</a></li>
          <li className="hover:text-blue-500 transition"><a href="#pricing">Pricing</a></li>
          <li className="hover:text-blue-500 transition"><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow">
          <ul className="flex flex-col space-y-4 px-6 py-4 font-medium">
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#features" onClick={() => setOpen(false)}>Features</a></li>
            <li><a href="#pricing" onClick={() => setOpen(false)}>Pricing</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
