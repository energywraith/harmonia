import Image from "next/image";
import { Container } from "@/components/common";
import { Song } from "@/types";
import { BannerBackground } from "./BannerBackground";
import { BannerMedia } from "./BannerMedia";

const Banner = ({ song }: { song: Song }) => {
  return (
    <Container
      outerClassName="w-full relative shadow-sm shadow-primary-900 overflow-hidden"
      className="text-secondary-900 h-full py-8 flex flex-col justify-center items-center text-center px-4"
    >
      <BannerBackground image={song.header_image_url} />
      <div className="relative w-full h-48">
        <Image
          src={song.header_image_url}
          fill
          sizes="100%"
          className="object-contain drop-shadow"
          alt={`${song.title} thumbnail`}
        />
      </div>
      <h1 className="font-passion text-5xl mt-4">{song.title}</h1>
      <h2 className="text-xs text-secondary-900/75">on {song.album.name}</h2>
      <h3 className="text-lg mt-4">{song.primary_artist.name}</h3>
      <BannerMedia media={song.media} />
    </Container>
  );
};

export { Banner };
