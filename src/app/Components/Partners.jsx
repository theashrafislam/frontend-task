
"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Partners = () => {
  return (
    <div className="mt-24 mb-36 mx-3 lg:mx-0">
      <h1 className="text-[#030A1B] text-[30px] lg:text-[44px] font-semibold text-center mb-16">
        Our Partners
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 }, 
          1024: { slidesPerView: 5 },
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <SwiperSlide key={num} className="flex justify-center items-center">
            <Image
              width={100}
              height={30}
              alt={`Partner ${num}`}
              src={`/images/${num}.png`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;
