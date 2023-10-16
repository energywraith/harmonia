import { Banner, DiscoverTunes, RecentSongs } from "@/components/home";

export default function Loading() {
  return (
    <>
      <Banner.Skeleton />
      <DiscoverTunes.Skeleton />
      <RecentSongs.Skeleton />
    </>
  );
}
