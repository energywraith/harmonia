import { Container, ReadMore } from "@/components/common";
import { Song } from "@/types";
import { YoutubeEmbed } from "./YoutubeEmbed";
import { Skeleton as SkeletonComponent } from "@/components/common";

interface LyricsProps {
  song: Song;
  lyrics: string;
}

const Lyrics = ({ song, lyrics }: LyricsProps) => (
  <Container className="py-8 flex flex-col lg:flex-row gap-x-24 relative px-4">
    <div className="flex flex-col">
      <h3 className="font-passion text-6xl">Lyrics</h3>
      <pre className="font-poppins mt-4 whitespace-pre-wrap max-w-lg">
        <ReadMore collapsedLength={300}>{lyrics}</ReadMore>
      </pre>
    </div>
    <YoutubeEmbed url={song.youtube_url} />
  </Container>
);

const Skeleton = () => (
  <Container className="py-8 flex flex-col gap-8 px-4">
    {[4, 3, 2].map((value) => (
      <span className={`w-${value}/12`} key={value}>
        <SkeletonComponent variant="text" className="bg-secondary-900" />
      </span>
    ))}
  </Container>
);

Lyrics.Skeleton = Skeleton;

export { Lyrics };
