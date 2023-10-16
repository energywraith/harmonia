import { ClefIcon, MusicNoteIcon } from "@/components/icons";

const DiscoverTunesBackground = () => (
  <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
    <ClefIcon className="absolute w-[36rem] -bottom-16 -right-60 text-primary-900" />
    <MusicNoteIcon className="absolute w-[10rem] top-16 -left-8 hidden lg:block text-primary-900 rotate-12" />
  </div>
);

export { DiscoverTunesBackground };
