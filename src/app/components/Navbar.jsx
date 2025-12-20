"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logopic from "@/app/Group 1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src={logopic}
            alt="Bridgr Logo"
            width={48}
            height={48}
            className="h-12 w-auto"
            priority
          />
          <span className="text-xl font-bold text-blue-500">
            Bridgr
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-black items-center">
          <li className="hover:text-blue-500 transition">
            <Link href="#home">Home</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link href="#features">Features</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link href="#pricing">Pricing</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 absolute w-full shadow-xl ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 font-medium bg-white shadow">
          <li>
            <Link href="#home" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="#features" onClick={() => setOpen(false)}>
              Features
            </Link>
          </li>
          <li>
            <Link href="#pricing" onClick={() => setOpen(false)}>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
