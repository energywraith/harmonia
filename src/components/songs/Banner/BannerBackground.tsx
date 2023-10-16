import Image from "next/image";

interface BannerBackgroundProps {
  title: string;
  image: string;
}

const BannerBackground = ({ title, image }: BannerBackgroundProps) => {
  return (
    <div className="absolute w-full h-[100%] left-0 top-0 pointer-events-none">
      <Image
        src={image}
        fill
        sizes="100vw"
        alt={`${title}-banner`}
        className="object-cover blur relative -z-20"
      />
      <div className="w-full h-full bg-primary-900/80 absolute -z-10"></div>
    </div>
  );
};

const Skeleton = () => (
  <div className="absolute w-full h-[100%] left-0 top-0 pointer-events-none">
    <div className="w-full h-full bg-secondary-900/20 absolute -z-10"></div>
  </div>
);

BannerBackground.Skeleton = Skeleton;

export { BannerBackground };
