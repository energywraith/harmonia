import Image from "next/image";

interface BannerBackgroundProps {
  image: string;
}

const BannerBackground = ({ image }: BannerBackgroundProps) => {
  return (
    <div className="absolute w-full h-[100%] left-0 top-0 pointer-events-none">
      <Image
        src={image}
        fill
        sizes="100vw"
        alt="xdxd"
        className="object-cover blur relative -z-20"
      />
      <div className="w-full h-full bg-primary-900/80 absolute -z-10"></div>
    </div>
  );
};

export { BannerBackground };
