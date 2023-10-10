import NextLink from "next/link";
import { Song } from "@/types";
import { SoundcloudIcon, SpotifyIcon, YoutubeIcon } from "@/components/icons";

interface BannerMediaProps {
  media: Song["media"];
}

const MediaIcon = {
  spotify: SpotifyIcon,
  soundcloud: SoundcloudIcon,
  youtube: YoutubeIcon,
};

const BannerMedia = ({ media }: BannerMediaProps) => {
  return (
    <ul className="flex gap-x-4 mt-2">
      {media.map((mediaLink) => {
        const Icon = MediaIcon[mediaLink.provider];

        return (
          <NextLink key={mediaLink.provider} href={mediaLink.url}>
            <li>
              <Icon className="w-8 h-8" />
            </li>
          </NextLink>
        );
      })}
    </ul>
  );
};

export { BannerMedia };
