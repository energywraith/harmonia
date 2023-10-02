import { ReactNode } from "react";
import { Carousel } from "@/components/templates";

interface RecentSongsCarousel {
  children: ReactNode;
}

const RecentSongsCarousel = ({ children }: RecentSongsCarousel) => (
  <Carousel
    className="mx-0 max-w-none"
    slidesPerView="auto"
    spaceBetween={20}
    breakpoints={{
      0: {
        spaceBetween: 0,
      },
      1024: {
        spaceBetween: 40,
      },
    }}
  >
    {children}
  </Carousel>
);

export { RecentSongsCarousel };
