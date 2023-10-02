import Image from "next/image";
import NextLink from "next/link";

interface CardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  narrow?: boolean;
  className?: string;
}

const Card = ({ id, title, subtitle, image, narrow, className }: CardProps) => {
  return (
    <NextLink href={`/songs/${id}`}>
      <div
        className={`group rounded-lg shadow shadow-black/25 w-64 ${
          className || ""
        }`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="flex flex-col px-3 py-4 rounded-lg bg-primary-700/60 backdrop-blur-lg transition-all duration-200 group-hover:bg-primary-900/60 cursor-pointer">
          <div className={narrow ? "flex items-center gap-x-2.5" : "pb-8"}>
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
            <h4
              className={`font-passion text-white text-shadow-sm truncate ${
                narrow ? "text-4xl w-52" : "text-5xl mt-6 w-60"
              }`}
            >
              {title}
            </h4>
          </div>
          <h5
            className={`text-base text-white truncate ${
              narrow ? "mt-4 w-52" : "w-60"
            }`}
          >
            by {subtitle}
          </h5>
        </div>
      </div>
    </NextLink>
  );
};

export { Card };
