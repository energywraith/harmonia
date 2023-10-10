import { Album } from ".";

interface Song {
  id: string;
  title: string;
  header_image_url: string;
  description_preview: string;
  url: string;
  lyrics?: string;
  album: Album;
  albumTracks?: Song[];
  youtube_url: string;
  primary_artist: {
    id: string;
    name: string;
  };
  media: {
    provider: "spotify" | "youtube" | "soundcloud";
    url: string;
  }[];
}

export type { Song };
