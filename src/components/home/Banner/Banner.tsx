import Image from "next/image";
import { Container } from "@/components/common";

const Banner = () => (
  <Container className="pb-0 mt-6 lg:mt-20">
    <h1 className="flex flex-col lg:flex-row lg:gap-[1ch] items-center lg:justify-center font-passion px-4 text-shadow-sm shadow-black/50">
      <span className="text-2xl lg:text-6xl">Welcome To</span>
      <span className="text-5xl lg:text-6xl">HARMONIA</span>
    </h1>
    <p className="text-base lg:text-xl font-bold text-center px-4 lg:px-16 mt-6 lg:mt-3 text-shadow-sm shadow-black/50 tracking-wide">
      Harmonia is your personalized gateway to the world of music. Explore an
      extensive collection of songs, artists, and albums using our intuitive app
      powered by the Genius API. Search by lyrics or track names, discover your
      favorite artists, and find hidden musical gems with our curated random
      song generator. Let Harmonia be your companion in uncovering the soul of
      music, one note at a time.
    </p>
    <div className="h-60 lg:h-72 w-full relative mt-7">
      <Image
        src="/headline-image.jpg"
        alt="Harmonia AI generated image"
        fill={true}
        className="object-cover lg:rounded-3xl"
        sizes="100%"
      />
    </div>
  </Container>
);

export { Banner };
