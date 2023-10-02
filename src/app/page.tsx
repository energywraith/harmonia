import { DiscoverTunes, Banner, RecentSongs } from "@/components/home";
import { getRandomNumberInRange } from "@/utils";
import { Song } from "@/types";

async function fetchRandomSongs() {
  const songs: Song[] = [];
  const amount = 3;

  while (songs.length < amount) {
    try {
      const id = getRandomNumberInRange(0, 100000);
      const song = await fetch(`https://genius.com/api/songs/${id}`);

      if (song.ok) {
        const songJSON = await song.json();
        songs.push(songJSON.response.song);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return songs;
}

async function getData() {
  const songs = await fetchRandomSongs();

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
