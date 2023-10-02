import { Container } from "@/components/common";
import { Card } from "@/components/templates";
import { Song } from "@/types";
import { RecentSongsCarousel } from "./RecentSongsCarousel";

interface RecentSongsProps {
  songs: Song[];
}

const RecentSongs = ({ songs }: RecentSongsProps) => (
  <Container outerClassName="overflow-hidden">
    <h2 className="text-3xl lg:text-5xl font-passion pb-8 pt-12 px-4 lg:px-0">
      Get back to those songs!
    </h2>
    <RecentSongsCarousel>
      {songs.map((song) => (
        <Card
          key={song.id}
          title={song.title}
          subtitle={song.primary_artist.name}
          image={song.header_image_url}
          className="select-none w-fit mb-10 mx-4 lg:mx-0"
          narrow
        />
      ))}
    </RecentSongsCarousel>
  </Container>
);

export { RecentSongs };
