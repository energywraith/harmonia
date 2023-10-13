import { Loader } from "@/components/common";

export default function Loading() {
  return (
    <div className="h-full flex-1 flex items-center justify-center">
      <Loader className="w-16 h-16" />
    </div>
  );
}
