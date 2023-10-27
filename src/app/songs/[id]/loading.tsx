import { About, Banner, Lyrics } from "@/components/songs";

export default function Loading() {
  return (
    <>
      <Banner.Skeleton />
      <About.Skeleton />
      <Lyrics.Skeleton />
    </>
  );
}
