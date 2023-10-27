import { Song } from "@/types";
import { getRandomNumberInRange } from "@/utils";

export const getRandomSongs = async ({ amount }: { amount: number }) => {
  const songs: Song[] = [];

  while (songs.length < amount) {
    try {
      const id = getRandomNumberInRange(0, 100000);
      const song = await fetch(`https://genius.com/api/songs/${id}`);

      if (song.ok) {
        const songJSON = await song.json();

        const songData = songJSON.response.song;

        if (songData.is_music) {
          songs.push(songJSON.response.song);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return songs;
};
