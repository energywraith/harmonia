interface SkeletonTextProps {
  className?: string;
}

const SkeletonText = ({ className }: SkeletonTextProps) => (
  <div className={`bg-primary-900 animate-pulse ${className}`}>
    <div className="opacity-0">_</div>
  </div>
);

export { SkeletonText };
