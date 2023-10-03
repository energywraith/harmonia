import { Song, Album, Artist } from "@/types";
import { ResultsList } from "./ResultsList";
import { ResultsItem } from "./ResultsItem";

interface ResultsProps {
  songs: Song[];
  artists: Artist[];
  albums: Album[];
}

const Results = ({ songs, artists, albums }: ResultsProps) => {
  return (
    <div className="flex flex-col gap-y-2 py-2">
      <ResultsList header="Songs">
        {songs?.map((song) => (
          <ResultsItem
            key={song.id}
            href={`/songs/${song.id}`}
            title={song.title}
            subtitle={song.primary_artist.name}
            image={song.header_image_url}
          />
        ))}
      </ResultsList>
      <ResultsList header="Artists">
        {artists?.map((artist) => (
          <ResultsItem
            key={artist.id}
            href={`/artists/${artist.id}`}
            title={artist.name}
            image={artist.image_url}
            isArtist
          />
        ))}
      </ResultsList>
      <ResultsList header="Albums">
        {albums?.map((album) => (
          <ResultsItem
            key={album.id}
            href={`/albums/${album.id}`}
            title={album.name}
            subtitle={album.artist.name}
            image={album.cover_art_thumbnail_url}
          />
        ))}
      </ResultsList>
    </div>
  );
};

export { Results };

export type { ResultsProps };
