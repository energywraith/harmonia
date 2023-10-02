import { Album, Artist, Song } from "@/types";
import { GeniusFetchProps } from "./types";

const geniusSearch = async <Item>({
  searchParam,
  parseFunction,
}: GeniusFetchProps<Item>) => {
  const data = await fetch(`https://genius.com/api/search${searchParam}`);
  const dataJSON = await data.json();

  return parseFunction(dataJSON);
};

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const searchKey = searchParams.get("key");

  const [songs, artists, albums] = await Promise.all([
    geniusSearch<Song>({
      searchParam: `?q=${searchKey}`,
      parseFunction: (response) =>
        response.response.hits.slice(0, 3).map((hit) => hit.result),
    }),
    geniusSearch<Artist>({
      searchParam: `/artist?q=${searchKey}`,
      parseFunction: (response) =>
        response.response.sections[0]?.hits
          .slice(0, 3)
          .map((hit) => hit.result),
    }),
    geniusSearch<Album>({
      searchParam: `/album?q=${searchKey}`,
      parseFunction: (response) =>
        response.response.sections[0]?.hits
          .slice(0, 3)
          .map((hit) => hit.result),
    }),
  ]);

  const data = {
    songs,
    artists,
    albums,
  };

  return Response.json(data);
};
