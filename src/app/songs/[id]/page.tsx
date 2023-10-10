import { Song } from "@/types";
import { Banner } from "@/components/songs";
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
  const { song } = await getData(params);

  return (
    <>
      <Banner song={song} />
    </>
  );
}
