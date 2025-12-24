"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seatPic from "../../../public/settings_seating_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";


function Slides() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
            infinite: true,
        },
      },
      {
        breakpoint: 400,
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
     {/* <div className=" max-w-6xl mx-auto px-4 overflow-hidden"> */}
      <Slider {...settings}>
       
       <div>
        <div className=" h-[67vh] ">
      <h1>dsjfaoih</h1>
        </div>
        </div>

         <div>
        <div className=" h-[67vh] ">
       <h1>hdaufpo</h1>
        </div>
        </div>

     

        
         
     
      </Slider>
   {/* </div> */}
    </>

  );
}

export default Slides;
