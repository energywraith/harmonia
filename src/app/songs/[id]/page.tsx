import { Song } from "@/types";

async function getData({ id }: { id: string }) {
  const song = await fetch(`https://genius.com/api/songs/${id}`);

  if (song.ok) {
    const songJSON = await song.json();
    return songJSON.response.song as Song;
  }

  throw "Song doesnt exist";
}

export default async function Song({ params }: { params: { id: string } }) {
  const song = await getData(params);

  return (
    <>
      <div className="text-5xl font-passion h-60 flex justify-center items-center">
        {song.title}
      </div>
    </>
  );
}
