import { LoadingIcon } from "@/components/icons";

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <LoadingIcon className="animate-spin" />
    </div>
  );
};

export { Loader };
