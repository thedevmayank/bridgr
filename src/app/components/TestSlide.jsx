"use client"
import React from "react";
import Slider from "react-slick";
import aboutpic from '../../../public/Hand and iPhone 16 Pro.svg'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';  
import "aos/dist/aos.css";
import { useEffect } from 'react';
import screenShot1 from '../../../public/Preview-removebg-preview.png'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,    
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:2000,
    centerMode: true,
centerPadding: "40px",
swipe: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
         
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
            infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
            infinite: true,
        },
      },
    ],
    };
  return (
    <>  
       <div className="overflow-hidden max-w-6xl mx-auto px-4   shadow-2xl rounded-lg" id="slideshow">
      <Slider {...settings}>
      <div>
        <div className="md:h-full  sm:h-[10vh] px-6 ">
            <Image src={screenShot1}  alt="About Image" className=" " />
        </div>
      </div>
      <div> 
        <div className="md:h-full  sm:h-[10vh] px-6">
            <Image src={screenShot1}  alt="About Image" className=" " />
        </div>
      </div>
      <div>
        <div className="md:h-full  sm:h-[10vh] px-6">
            <Image src={screenShot1}  alt="About Image" className=" " />
        </div>
      </div>
      <div>
        <div className="md:h-full  sm:h-[10vh] px-6">
            <Image src={screenShot1}  alt="About Image" className=" " />
        </div>
      </div>
      <div>
       <div className="md:h-full  sm:h-[10vh] px-6">
            <Image src={screenShot1}  alt="About Image" className=" " />
        </div>
      </div>
     
    </Slider>
    </div>    
    </>

  );
  
}