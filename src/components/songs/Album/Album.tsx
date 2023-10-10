import { Container } from "@/components/common";
import { Song } from "@/types";
import { AlbumTracks } from "./AlbumTracks";

interface AlbumProps {
  album: Song["album"];
  currentSongId: Song["id"];
  tracks: Song[];
}

const Album = ({ album, currentSongId, tracks }: AlbumProps) => {
  if (!tracks) return null;

  return (
    <Container
      outerClassName="bg-secondary-900 text-primary-900"
      className="flex flex-col lg:flex-row py-8 gap-x-24 px-4"
    >
      <div className="flex flex-col">
        <h3 className="text-lg">More on</h3>
        <h4 className="font-passion text-6xl lg:max-w-lg">{album.name}</h4>
      </div>
      <div className="flex-1 flex flex-col mt-4 lg:mt-0">
        <AlbumTracks
          id={album.id}
          tracks={tracks}
          currentSongId={currentSongId}
        />
      </div>
    </Container>
  );
};

export { Album };
