"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


import "swiper/css";
import "swiper/css/pagination";

import screenShot1 from "../../../public/Preview.svg";
import screenShot2 from "../../../public/Preview (1).svg";
import screenShot3 from "../../../public/Preview (2).svg";
import screenShot4 from "../../../public/Preview (3).svg";
import screenShot5 from "../../../public/Preview (4).svg";


export default function SimpleSlider() {

  useEffect(() => {
    Aos.init();
  }, []);
    

  return (
    <main>
    <div className="max-w-6xl mx-auto  p-9 shadow-xl ">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true} // ✅ loop everywhere 
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        spaceBetween={15}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
     
        <SwiperSlide>
          <div>
            <Image src={screenShot1} alt="Screenshot 1" className="object-contain h-full" />
          </div>
         </SwiperSlide>   

         <SwiperSlide>
          <div data-aos="fade-up">
            <Image src={screenShot2} alt="Screenshot 2" className="object-contain h-full" />
          </div>
         </SwiperSlide> 


          <SwiperSlide>
          <div data-aos="fade-up">
            <Image src={screenShot3} alt="Screenshot 3" className="object-contain h-full" />
          </div>
         </SwiperSlide> 

         
          <SwiperSlide>
          <div data-aos="fade-up">
            <Image src={screenShot4} alt="Screenshot 4" className="object-contain h-full" />
          </div>
         </SwiperSlide> 
         
          <SwiperSlide>
          <div data-aos="fade-up">
            <Image src={screenShot5} alt="Screenshot 5" className="object-contain h-full" />
          </div>
         </SwiperSlide> 
     
      </Swiper>
    </div>
    </main>
  );
}
