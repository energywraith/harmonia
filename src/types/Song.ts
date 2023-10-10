import { Album } from ".";

interface Song {
  id: string;
  title: string;
  header_image_url: string;
  album: Album;
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
