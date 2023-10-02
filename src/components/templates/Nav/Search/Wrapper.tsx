import { ReactNode, RefObject } from "react";
import { useBreakpoint, useOutsideClickListener } from "@/hooks";

interface WrapperProps {
  children: ReactNode;
  innerRef: RefObject<HTMLDivElement>;
  isMobile?: boolean;
  onBlur?: () => void;
}

const DesktopWrapper = ({ children, innerRef, onBlur }: WrapperProps) => {
  const { isAboveLg } = useBreakpoint("lg");

  useOutsideClickListener({
    innerRef,
    callback: () => {
      if (isAboveLg() && onBlur) {
        onBlur();
      }
    },
  });

  return (
    <div className="absolute hidden lg:flex top-[105%] left-0 bg-secondary-900 rounded-b-3xl h-60 text-primary-900 text-center items-center shadow-sm shadow-black/50">
      {children}
    </div>
  );
};

const MobileWrapper = ({ children }: WrapperProps) => (
  <div className="mt-4 text-primary-900 text-center items-center">
    {children}
  </div>
);

const Wrapper = ({ innerRef, isMobile, children, onBlur }: WrapperProps) => {
  const WrapperComponent = isMobile ? MobileWrapper : DesktopWrapper;

  return (
    <WrapperComponent innerRef={innerRef} onBlur={onBlur}>
      {children}
    </WrapperComponent>
  );
};

export { Wrapper };
