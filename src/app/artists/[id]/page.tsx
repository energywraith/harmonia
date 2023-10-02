import { Artist } from "@/types";

async function getData({ id }: { id: string }) {
  const artist = await fetch(`https://genius.com/api/artists/${id}`);

  if (artist.ok) {
    const artistJSON = await artist.json();
    return artistJSON.response.artist as Artist;
  }

  throw "Artist doesnt exist";
}

export default async function Artist({ params }: { params: { id: string } }) {
  const artist = await getData(params);

  return (
    <>
      <div className="text-5xl font-passion h-60 flex justify-center items-center">
        {artist.name}
      </div>
    </>
  );
}
