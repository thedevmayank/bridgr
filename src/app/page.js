"use client";
import Image from "next/image";
import baner from "../../public/image 31.svg"
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import TestSlide from "./components/TestSlide";
import Support from "./components/Support";
import Icons from "./components/Icons";
import Testform from "./Testform";




export default function Home() {
  return (
    <main id="home">
      <Image src={baner} alt="Banner" className="w-full h-full" />
      <About />
      <Features />
      <Gallery /> 
      <TestSlide/>
      <Support/>
      <Icons/>
      {/* <Testform/> */}
     
    </main>
  );
}
