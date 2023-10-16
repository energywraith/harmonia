import { Container } from "@/components/common";
import { Card } from "@/components/templates";
import { Song } from "@/types";
import { RecentSongsCarousel } from "./RecentSongsCarousel";
import { RecentSongsHeaders } from "./RecentSongsHeaders";

interface RecentSongsProps {
  songs: Song[];
}

const RecentSongs = ({ songs }: RecentSongsProps) => (
  <Container outerClassName="overflow-hidden pb-8">
    <RecentSongsHeaders />
    <RecentSongsCarousel>
      {songs.map((song) => (
        <Card
          key={song.id}
          id={song.id}
          title={song.title}
          subtitle={song.primary_artist.name}
          image={song.header_image_url}
          className="select-none mb-10 mx-4 lg:mx-0"
          narrow
        />
      ))}
    </RecentSongsCarousel>
  </Container>
);

const Skeleton = () => (
  <Container outerClassName="overflow-hidden pb-8">
    <RecentSongsHeaders />
    <RecentSongsCarousel.Skeleton>
      {Array.from(Array(3)).map((_, index) => (
        <Card.Skeleton
          key={index}
          className="select-none mb-10 mx-4 lg:mx-0"
          narrow
        />
      ))}
    </RecentSongsCarousel.Skeleton>
  </Container>
);

RecentSongs.Skeleton = Skeleton;

export { RecentSongs };
