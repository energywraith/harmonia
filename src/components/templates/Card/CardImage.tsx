import Image from "next/image";
import { Skeleton as SkeletonComponent } from "@/components/common";

interface CardImageProps {
  title: string;
  image: string;
  narrow?: boolean;
}

const CardImage = ({ title, image, narrow }: CardImageProps) => (
  <div
    className={`relative rounded-lg overflow-hidden shadow shadow-primary-900 object-cover ${
      narrow ? "w-16 h-16" : "w-60 h-60"
    }`}
  >
    <Image
      src={image}
      alt={`${title}-cover`}
      className={"select-none pointer-events-none"}
      fill
      sizes="100%"
    />
  </div>
);

const Skeleton = ({ narrow }: { narrow?: boolean }) => (
  <div
    className={`relative rounded-lg overflow-hidden shadow shadow-primary-900 object-cover ${
      narrow ? "w-16 h-16" : "w-60 h-60"
    }`}
  >
    <SkeletonComponent className="w-full h-full" />
  </div>
);

CardImage.Skeleton = Skeleton;

export { CardImage };

export type { CardImageProps };
