"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import image from "../public/assets/carousel/carousel.jpg";
import image1 from "../public/assets/carousel/carousel (1).jpg";
import image2 from "../public/assets/carousel/carousel (2).jpg";
import image3 from "../public/assets/carousel/carousel (3).jpg";
import image4 from "../public/assets/carousel/carousel (4).jpg";
import image5 from "../public/assets/carousel/carousel (5).jpg";
import image6 from "../public/assets/carousel/carousel (6).jpg";
import image7 from "../public/assets/carousel/carousel (7).jpg";

import { Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const images = [
    image,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ];

  const carou = images.map((item, idx) => (
    <SwiperSlide key={idx}>
      <Image
        src={item}
        className="w-[full] h-[unset] max-h-[500px] rounded-none md:rounded-lg"
      />
    </SwiperSlide>
  ));
  return (
    <div className="w-full md:w-[50%]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {carou}
      </Swiper>
    </div>
  );
}
