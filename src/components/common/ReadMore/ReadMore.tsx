"use client";

import { useState } from "react";
import { findEndOfSentenceAfterXCharacters } from "./helpers";

interface ReadMoreProps {
  children: string;
  collapsedLength?: number;
  className?: string;
}

const ReadMore = ({
  children,
  collapsedLength = 150,
  className,
}: ReadMoreProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  };

  const endOfSentence = findEndOfSentenceAfterXCharacters(
    children,
    collapsedLength
  );

  const isLongEnough = endOfSentence > collapsedLength;

  return (
    <p className={className}>
      {isCollapsed ? children.slice(0, endOfSentence) : children}

      {isLongEnough && (
        <button onClick={toggleCollapsed} className="font-bold ml-1">
          {isCollapsed ? "Show more..." : "Show less..."}
        </button>
      )}
    </p>
  );
};

export { ReadMore };
