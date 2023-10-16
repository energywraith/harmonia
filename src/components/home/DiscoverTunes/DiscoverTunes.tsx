import { Card } from "@/components/templates";
import { Container } from "@/components/common";
import { Song } from "@/types";
import { DiscoverTunesCarousel } from "./DiscoverTunesCarousel";
import { DiscoverTunesBackground } from "./DiscoverTunesBackground";
import { DiscoverTunesHeaders } from "./DiscoverTunesHeaders";

interface DiscoverTunesProps {
  songs: Song[];
}

const DiscoverTunes = ({ songs }: DiscoverTunesProps) => {
  return (
    <Container
      outerClassName="bg-secondary-900 text-primary-900 mt-20 overflow-hidden"
      className="flex flex-col items-center relative py-8 pt-12"
    >
      <DiscoverTunesBackground />
      <DiscoverTunesHeaders />
      <DiscoverTunesCarousel>
        {songs.map((song) => (
          <Card
            key={song.id}
            id={song.id}
            title={song.title}
            subtitle={song.primary_artist.name}
            image={song.header_image_url}
            className="select-none w-fit mx-auto mb-10"
          />
        ))}
      </DiscoverTunesCarousel>
    </Container>
  );
};

const Skeleton = () => (
  <Container
    outerClassName="bg-secondary-900 text-primary-900 mt-20 overflow-hidden"
    className="flex flex-col items-center relative py-8 pt-12"
  >
    <DiscoverTunesBackground />
    <DiscoverTunesHeaders />
    <DiscoverTunesCarousel.Skeleton>
      {Array.from(Array(3)).map((_, index) => (
        <Card.Skeleton
          key={index}
          className={`select-none w-fit mx-auto mb-10 ${
            index !== 0 ? "hidden lg:flex" : ""
          }`}
        />
      ))}
    </DiscoverTunesCarousel.Skeleton>
  </Container>
);

DiscoverTunes.Skeleton = Skeleton;

export { DiscoverTunes };
