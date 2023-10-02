import { Card } from "@/components/templates";
import { Container } from "@/components/common";
import { ClefIcon, MusicNoteIcon } from "@/components/icons";
import { Song } from "@/types";
import { DiscoverTunesCarousel } from "./DiscoverTunesCarousel";

interface DiscoverTunesProps {
  songs: Song[];
}

const DiscoverTunes = ({ songs }: DiscoverTunesProps) => {
  return (
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

export { DiscoverTunes };
