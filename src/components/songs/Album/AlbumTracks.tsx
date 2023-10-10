import { Song } from "@/types";
import NextLink from "next/link";

interface AlbumTracksProps {
  id: Song["album"]["id"];
  currentSongId: Song["id"];
  tracks: Song[];
}

const AlbumTracks = ({ id, tracks, currentSongId }: AlbumTracksProps) => {
  const currentSongIndex = tracks.findIndex(
    (track) => track.id === currentSongId
  );

  const leftBoundaryIndex = currentSongIndex - 2;
  const rightBoundaryIndex = currentSongIndex + 2;

  return (
    <ul className="flex flex-col divide-y divide-primary-900/50">
      {tracks.map((song, index) => {
        const isBetweenBoundaries =
          index >= leftBoundaryIndex && index <= rightBoundaryIndex;

        if (!isBetweenBoundaries) {
          return null;
        }

        const isCurrentSong = index === currentSongIndex;

        if (isCurrentSong) {
          return (
            <li key={song.id} className="py-2 font-bold">
              {song.title}
            </li>
          );
        }

        const isFirstOrLast =
          index === leftBoundaryIndex || index === rightBoundaryIndex;

        if (isFirstOrLast) {
          return (
            <NextLink href={`/albums/${id}`} key={song.id}>
              <li className="py-2 blur-[1px]">{song.title}</li>
            </NextLink>
          );
        }

        return (
          <NextLink href={`/songs/${song.id}`} key={song.id}>
            <li className="py-2">{song.title}</li>
          </NextLink>
        );
      })}
    </ul>
  );
};

export { AlbumTracks };
