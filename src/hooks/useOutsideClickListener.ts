import { RefObject, useEffect } from "react";

interface UseOutsideClickListenerProps {
  innerRef: RefObject<HTMLDivElement>;
  callback: () => void;
}

export const useOutsideClickListener = ({
  innerRef,
  callback,
}: UseOutsideClickListenerProps) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        innerRef?.current &&
        !innerRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return null;
};
