"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import screenShot1 from "../../../public/Preview-removebg-preview.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: true,

    // ✅ DESKTOP DEFAULT
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024, // < 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // < 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // < 480px (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden max-w-6xl mx-auto px-4 shadow-2xl rounded-lg">
      <Slider {...settings}>
        {[1,2,3,4,5].map((_, i) => (
          <div key={i} className="px-3">
            <Image src={screenShot1} alt="Slide" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
