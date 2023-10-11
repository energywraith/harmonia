import Image from "next/image";
import NextLink from "next/link";

interface ResultsItemProps {
  href: string;
  image: string;
  title: string;
  subtitle?: string;
  isArtist?: boolean;
  onResultClick?: () => void;
}

const ResultsItem = ({
  href,
  image,
  title,
  subtitle,
  isArtist,
  onResultClick,
}: ResultsItemProps) => {
  return (
    <NextLink href={href} onClick={onResultClick}>
      <li className="mx-2 py-2 flex border-t-2 border-primary-900/50 px-2 gap-x-2">
        <div
          className={`relative w-12 h-12 min-w-[3rem] min-h-[3rem] overflow-hidden${
            isArtist ? " rounded-full" : ""
          }`}
        >
          <Image
            src={image}
            alt={`${title} thumbnail`}
            fill
            className="object-cover"
            sizes="100%"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h5 className="font-passion text-xl leading-none lg:truncate lg:max-w-[9rem]">
            {title}
          </h5>
          {subtitle && (
            <h6 className="text-sm leading-none mt-1 lg:truncate lg:max-w-[9rem]">
              {subtitle}
            </h6>
          )}
        </div>
      </li>
    </NextLink>
  );
};

export { ResultsItem };
