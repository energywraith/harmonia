import NextLink from "next/link";
import { CardImage, CardImageProps } from "./CardImage";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";

interface CardProps extends CardImageProps {
  id: string;
  title: string;
  subtitle: string;
  narrow?: boolean;
  className?: string;
}

const Card = ({ id, title, subtitle, image, narrow, className }: CardProps) => {
  return (
    <NextLink href={`/songs/${id}`}>
      <div
        className={`group rounded-lg shadow shadow-black/25 ${
          narrow ? "w-80" : "w-64"
        } ${className || ""}`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="flex flex-col px-3 py-4 rounded-lg bg-primary-700/60 backdrop-blur-lg transition-all duration-200 group-hover:bg-primary-900/60 cursor-pointer">
          <div className={narrow ? "flex items-center gap-x-2.5" : "pb-8"}>
            <CardImage title={title} image={image} narrow={narrow} />
            <CardTitle title={title} narrow={narrow} />
          </div>
          <CardSubtitle subtitle={subtitle} narrow={narrow} />
        </div>
      </div>
    </NextLink>
  );
};

const Skeleton = ({
  narrow,
  className,
}: {
  narrow?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-lg shadow shadow-black/25 ${
        narrow ? "w-80" : "w-64"
      } ${className || ""}`}
    >
      <div className="flex flex-col px-3 py-4 rounded-lg bg-primary-700/60 backdrop-blur-lg transition-all duration-200">
        <div className={narrow ? "flex items-center gap-x-2.5" : "pb-8"}>
          <CardImage.Skeleton narrow={narrow} />
          <CardTitle.Skeleton narrow={narrow} />
        </div>
        <CardSubtitle.Skeleton narrow={narrow} />
      </div>
    </div>
  );
};

Card.Skeleton = Skeleton;

export { Card };
