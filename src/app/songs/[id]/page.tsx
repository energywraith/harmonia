import { Song } from "@/types";
import { Banner } from "@/components/songs";

async function getData({ id }: { id: string }) {
  const song = await fetch(`https://genius.com/api/songs/${id}`);

  if (song.ok) {
    const songJSON = await song.json();
    const songData: Song = songJSON.response.song;

    return songData;
  }

  throw "Song doesnt exist";
}

export default async function Song({ params }: { params: { id: string } }) {
  const song = await getData(params);

  return (
    <>
      <Banner song={song} />
    </>
  );
}
