import Image from "next/image";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
}

const Card = ({ title, subtitle, image, className }: CardProps) => {
  return (
    <div
      className={`group rounded-lg shadow shadow-black w-64 ${className || ""}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex flex-col px-3 py-4 pb-8 rounded-lg bg-primary-700/60 backdrop-blur-lg transition-all duration-200 group-hover:bg-primary-900/60 cursor-pointer">
        <div className="relative w-60 h-60 rounded-lg overflow-hidden shadow shadow-primary-900 object-cover">
          <Image
            src={image}
            alt={`${title}-cover`}
            className={"select-none pointer-events-none"}
            fill
          />
        </div>
        <h4 className="text-5xl mt-6 font-passion text-white text-shadow-sm truncate w-60">
          {title}
        </h4>
        <h5 className="text-base text-white truncate w-60">{subtitle}</h5>
      </div>
    </div>
  );
};

export { Card };
