import { Song } from "@/types";
import { About, Album, Banner, Lyrics } from "@/components/songs";
import { getSong, getAlbumTracks, getSongLyrics } from "@/app/lib";

async function getData({ id }: { id: string }) {
  const song = await getSong({ id });

  const [lyrics, albumTracks] = await Promise.all([
    getSongLyrics({ url: song.url }),
    song.album && getAlbumTracks({ id: song.album.id }),
  ]);

  return {
    song,
    lyrics,
    albumTracks,
  };
}

export default async function Song({ params }: { params: { id: string } }) {
  const { song, lyrics, albumTracks } = await getData(params);

  return (
    <>
      <Banner song={song} />
      <About song={song} />
      <Lyrics song={song} lyrics={lyrics} />
      <Album currentSongId={song.id} album={song.album} tracks={albumTracks} />
    </>
  );
}
