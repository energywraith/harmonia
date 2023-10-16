interface SkeletonRoundedProps {
  className?: string;
}

const SkeletonRounded = ({ className }: SkeletonRoundedProps) => (
  <div className={`rounded-lg bg-primary-900 animate-pulse ${className}`} />
);

export { SkeletonRounded };
