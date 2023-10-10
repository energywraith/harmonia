import { Song } from "@/types";

export const getSong = async ({ id }: { id: string }) => {
  try {
    const response = await fetch(`https://genius.com/api/songs/${id}`);

    if (response.ok) {
      const responseJSON = await response.json();
      const song: Song = responseJSON.response.song;

      return song;
    }

    throw "Song doesnt exist";
  } catch (error) {
    throw error;
  }
};
