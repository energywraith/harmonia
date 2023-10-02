"use client";

import { Children, isValidElement } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const Carousel = ({ className, children, ...props }: SwiperProps) => {
  const childrenAsSlides = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return <SwiperSlide className="w-auto">{child}</SwiperSlide>;
    }
    return null;
  });

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      className={`w-full ${className || ""}`}
      {...props}
    >
      {childrenAsSlides}
    </Swiper>
  );
};

export { Carousel };
