import { Banner, DiscoverTunes, RecentSongs } from "@/components/home";

export const Loading = () => {
  return (
    <>
      <Banner.Skeleton />
      <DiscoverTunes.Skeleton />
      <RecentSongs.Skeleton />
    </>
  );
};
