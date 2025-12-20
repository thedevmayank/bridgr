"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seatPic from "../../../public/settings_seating_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
import preview from "../../../public/Preview.svg";

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
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
            infinite: true,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
            infinite: true,
        },
      },
    ],
  };

  return (
    <div className="bg-red-400 max-w-6xl mx-auto px-4 overflow-hidden">
      <Slider {...settings}>
       
       <div>
        <div className="bg-blue-400">
        <Image src={preview} alt="Seat Management"  className="" />
        </div>
        </div>
         
     
      </Slider>
    </div>
  );
}

export default Slides;
