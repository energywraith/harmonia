interface Song {
  id: string;
  title: string;
  header_image_url: string;
  primary_artist: {
    id: string;
    name: string;
  };
}

export type { Song };
