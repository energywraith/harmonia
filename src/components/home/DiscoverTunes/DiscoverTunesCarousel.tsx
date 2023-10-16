import { ReactNode } from "react";
import { Carousel } from "@/components/templates";

interface DiscoverTunesCarousel {
  children: ReactNode;
}

const DiscoverTunesCarousel = ({ children }: DiscoverTunesCarousel) => (
  <Carousel
    className="lg:max-w-screen-lg"
    pagination={{
      clickable: true,
      dynamicBullets: true,
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
    autoplay={{
      delay: 2500,
      disableOnInteraction: true,
    }}
  >
    {children}
  </Carousel>
);

const Skeleton = ({ children }: DiscoverTunesCarousel) => (
  <div className="flex justify-between w-full lg:max-w-screen-lg">
    {children}
  </div>
);

DiscoverTunesCarousel.Skeleton = Skeleton;

export { DiscoverTunesCarousel };
