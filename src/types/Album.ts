import { Artist } from "./Artist";

interface Album {
  id: string;
  name: string;
  cover_art_thumbnail_url: string;
  artist: Artist;
}

export type { Album };
