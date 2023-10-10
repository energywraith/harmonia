import { Song } from "@/types";

export const getAlbumTracks = async ({ id }: { id: string }) => {
  const response = await fetch(`https://genius.com/api/albums/${id}/tracks`);
  const responseJSON = await response.json();
  const tracks = responseJSON.response.tracks.map(
    (track: { song: Song }) => track.song
  );

  return tracks;
};
