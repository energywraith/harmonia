import { Skeleton as SkeletonComponent } from "@/components/common";

interface CardTitleProps {
  title: string;
  narrow?: boolean;
}

const CardTitle = ({ narrow, title }: CardTitleProps) => (
  <h4
    className={`font-passion text-white text-shadow-sm truncate ${
      narrow ? "text-4xl w-52" : "text-5xl mt-6 w-60"
    }`}
  >
    {title}
  </h4>
);

const Skeleton = ({ narrow }: { narrow?: boolean }) => (
  <h4
    className={`font-passion text-white text-shadow-sm truncate ${
      narrow ? "text-4xl w-52" : "text-5xl mt-6 w-60"
    }`}
  >
    <SkeletonComponent variant="text" />
  </h4>
);

CardTitle.Skeleton = Skeleton;

export { CardTitle };
