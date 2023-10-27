import { ReactNode } from "react";
import { Carousel } from "@/components/templates";

interface RecentSongsCarousel {
  children: ReactNode;
}

const RecentSongsCarousel = ({ children }: RecentSongsCarousel) => (
  <Carousel
    className="mx-0 max-w-none recent-songs-carousel"
    slidesPerView="auto"
    breakpoints={{
      0: {
        spaceBetween: 24,
      },
      1024: {
        spaceBetween: 40,
      },
    }}
  >
    {children}
  </Carousel>
);

const Skeleton = ({ children }: RecentSongsCarousel) => (
  <div className="flex w-full gap-x-5">{children}</div>
);

RecentSongsCarousel.Skeleton = Skeleton;

export { RecentSongsCarousel };
