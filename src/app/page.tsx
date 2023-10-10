import { DiscoverTunes, Banner, RecentSongs } from "@/components/home";
import { getRandomSongs } from "./lib";

async function getData() {
  const songs = await getRandomSongs({ amount: 3 });

  return {
    songs,
  };
}

export default async function Home() {
  const { songs } = await getData();
  const recentSongs = [...songs, ...songs];

  return (
    <>
      <Banner />
      <DiscoverTunes songs={songs} />
      <RecentSongs songs={recentSongs} />
    </>
  );
}

export const revalidate = 24 * 3600; // revalidate every day
