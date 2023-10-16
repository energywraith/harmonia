import { Skeleton as SkeletonComponent } from "@/components/common";

interface CardSubtitleProps {
  subtitle: string;
  narrow?: boolean;
}

const CardSubtitle = ({ subtitle, narrow }: CardSubtitleProps) => (
  <h5
    className={`text-base text-white truncate ${narrow ? "mt-4 w-52" : "w-60"}`}
  >
    by {subtitle}
  </h5>
);

const Skeleton = ({ narrow }: { narrow?: boolean }) => (
  <h5
    className={`text-base text-white truncate ${narrow ? "mt-4 w-52" : "w-60"}`}
  >
    <SkeletonComponent variant="text" className="w-[50%]" />
  </h5>
);

CardSubtitle.Skeleton = Skeleton;

export { CardSubtitle };
