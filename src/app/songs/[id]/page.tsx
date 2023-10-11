import type { Metadata, ResolvingMetadata } from "next";
import { Song } from "@/types";
import { About, Album, Banner, Lyrics } from "@/components/songs";
import { getSong, getAlbumTracks, getSongLyrics } from "@/app/lib";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const song = await getSong({ id: params.id });
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Harmonia - ${song.title}`,
    description: song.description_preview,
    openGraph: {
      images: [song.header_image_url, ...previousImages],
    },
  };
}

async function getData({ params }: Props) {
  const song = await getSong({ id: params.id });

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

export default async function Song(props: Props) {
  const { song, lyrics, albumTracks } = await getData(props);

  return (
    <>
      <Banner song={song} />
      <About song={song} />
      <Lyrics song={song} lyrics={lyrics} />
      <Album currentSongId={song.id} album={song.album} tracks={albumTracks} />
    </>
  );
}
