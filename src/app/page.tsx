import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Card } from "@/components/templates/Card";
import { Carousel } from "@/components/templates/Carousel";
import { ClefIcon } from "@/components/icons/ClefIcon";
import { MusicNoteIcon } from "@/components/icons/MusicNoteIcon";
import { getRandomNumberInRange } from "@/utils/getRandomNumberInRange";

interface ISong {
  id: string;
  title: string;
  header_image_url: string;
  primary_artist: {
    id: string;
    name: string;
  };
}

async function fetchRandomSongs() {
  const songs: ISong[] = [];
  const amount = 3;

  while (songs.length < amount) {
    try {
      const id = getRandomNumberInRange(0, 100000);
      const song = await fetch(`https://genius.com/api/songs/${id}`);

      if (song.ok) {
        const songJSON = await song.json();
        songs.push(songJSON.response.song);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return songs;
}

async function getData() {
  const songs = await fetchRandomSongs();

  return {
    songs,
  };
}

export default async function Home() {
  const { songs } = await getData();

  return (
    <div>
      <Container className="pb-0 mt-6 lg:mt-20">
        <h1 className="flex flex-col lg:flex-row lg:gap-[1ch] items-center lg:justify-center font-passion px-4 text-shadow-sm shadow-black/50">
          <span className="text-2xl lg:text-6xl">Welcome To</span>
          <span className="text-5xl lg:text-6xl">HARMONIA</span>
        </h1>
        <p className="text-base lg:text-xl font-bold text-center px-4 lg:px-16 mt-6 lg:mt-3 text-shadow-sm shadow-black/50 tracking-wide">
          Harmonia is your personalized gateway to the world of music. Explore
          an extensive collection of songs, artists, and albums using our
          intuitive app powered by the Genius API. Search by lyrics or track
          names, discover your favorite artists, and find hidden musical gems
          with our curated random song generator. Let Harmonia be your companion
          in uncovering the soul of music, one note at a time.
        </p>
        <div className="h-60 lg:h-72 w-full relative mt-7">
          <Image
            src="/headline-image.jpg"
            alt="Harmonia AI generated image"
            fill={true}
            className="object-cover lg:rounded-3xl"
          />
        </div>
      </Container>
      <Container
        outerClassName="bg-secondary-900 text-primary-900 mt-20 overflow-hidden"
        className="flex flex-col items-center relative py-8 pt-12"
      >
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
          <ClefIcon className="absolute w-[36rem] -bottom-16 -right-60 text-primary-900" />
          <MusicNoteIcon className="absolute w-[10rem] top-16 -left-8 hidden lg:block text-primary-900 rotate-12" />
        </div>
        <h2 className="text-base lg:text-xl text-shadow-sm ">
          Discover new tunes
        </h2>
        <h3 className="text-3xl lg:text-5xl font-passion mb-8">
          {"Today's Selections"}
        </h3>
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
          {songs.map((song) => (
            <Card
              key={song.id}
              title={song.title}
              subtitle={song.primary_artist.name}
              image={song.header_image_url}
              className="select-none w-fit mx-auto mb-10"
            />
          ))}
        </Carousel>
      </Container>
      <Container outerClassName="overflow-hidden">
        <h2 className="text-3xl lg:text-5xl font-passion pb-8 pt-12 px-4 lg:px-0">
          Get back to those songs!
        </h2>
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
          {[...songs, ...songs].map((song) => (
            <Card
              key={song.id}
              title={song.title}
              subtitle={song.primary_artist.name}
              image={song.header_image_url}
              className="select-none w-fit mb-10 mx-4 lg:mx-0"
              narrow
            />
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export const revalidate = 24 * 3600; // revalidate every day
