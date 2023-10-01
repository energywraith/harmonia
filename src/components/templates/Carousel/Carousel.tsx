"use client";

import { Children, ReactNode, isValidElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const Carousel = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const mapped = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return <SwiperSlide>{child}</SwiperSlide>;
    }
    return null;
  });

  return (
    <Swiper
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 3,
          centeredSlides: false,
        },
      }}
      className={`w-full ${className || ""}`}
    >
      {mapped}
    </Swiper>
  );
};

export { Carousel };
