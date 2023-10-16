import { SkeletonRounded } from "./SkeletonRounded";
import { SkeletonText } from "./SkeletonText";

const variants = {
  default: SkeletonRounded,
  rounded: SkeletonRounded,
  text: SkeletonText,
};

interface SkeletonProps {
  variant?: keyof typeof variants;
  className?: string;
}

const Skeleton = ({ variant = "default", className }: SkeletonProps) => {
  const Component = variants[variant];

  return <Component className={className} />;
};

export { Skeleton };
