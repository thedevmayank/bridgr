"use client";
import Image from "next/image";
import baner from "../../public/image 31.svg"
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Slides from "./components/Slides";
import TestSlide from "./components/TestSlide";




export default function Home() {
  return (
    <main id="home">
      <Image src={baner} alt="Banner" className="w-full h-full" />
      <About />
      <Features />
      <Gallery /> 
    
      <TestSlide/>
     
    </main>
  );
}
