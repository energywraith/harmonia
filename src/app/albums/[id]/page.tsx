import { Album } from "@/types";

async function getData({ id }: { id: string }) {
  const album = await fetch(`https://genius.com/api/albums/${id}`);

  if (album.ok) {
    const albumJSON = await album.json();
    return albumJSON.response.album as Album;
  }

  throw "Album doesnt exist";
}

export default async function Album({ params }: { params: { id: string } }) {
  const album = await getData(params);

  return (
    <>
      <div className="text-5xl font-passion h-60 flex justify-center items-center">
        {album.name}
      </div>
    </>
  );
}
