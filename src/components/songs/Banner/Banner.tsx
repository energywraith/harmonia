import Image from "next/image";
import NextLink from "next/link";
import { Song } from "@/types";
import { Container } from "@/components/common";
import { BannerBackground } from "./BannerBackground";
import { BannerMedia } from "./BannerMedia";
import { Skeleton as SkeletonComponent } from "@/components/common";

interface BannerProps {
  song: Song;
}

const Banner = ({ song }: BannerProps) => {
  return (
    <Container
      outerClassName="w-full relative shadow-sm shadow-primary-900 overflow-hidden"
      className="text-secondary-900 h-full py-8 flex flex-col justify-center items-center text-center px-4"
    >
      <BannerBackground image={song.header_image_url} title={song.title} />
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
      {song.album && (
        <NextLink href={`/albums/${song.album.id}`}>
          <h2 className="text-xs text-secondary-900/75">
            on {song.album.name}
          </h2>
        </NextLink>
      )}
      <NextLink href={`/artists/${song.primary_artist.id}`}>
        <h3 className="text-lg mt-4">{song.primary_artist.name}</h3>
      </NextLink>
      <BannerMedia media={song.media} />
    </Container>
  );
};

const Skeleton = () => {
  return (
    <Container
      outerClassName="w-full relative shadow-sm shadow-primary-900 overflow-hidden"
      className="text-secondary-900 h-full py-8 flex flex-col justify-center items-center text-center px-4"
    >
      <BannerBackground.Skeleton />
      <div className="relative w-48 h-48">
        <SkeletonComponent className="w-full h-full" />
      </div>
      <h1 className="font-passion text-5xl mt-4 w-96">
        <SkeletonComponent variant="text" />
      </h1>
      <h3 className="text-lg mt-8 mb-8 w-48">
        <SkeletonComponent variant="text" />
      </h3>
    </Container>
  );
};

Banner.Skeleton = Skeleton;

export { Banner };
