import { ReactNode } from "react";

interface ResultsListProps {
  header: string;
  children: ReactNode;
}

const ResultsList = ({ header, children }: ResultsListProps) => {
  return (
    <section>
      <h4 className="font-passion text-base px-2">{header}</h4>
      <ul className="mt-1">{children}</ul>
    </section>
  );
};

export { ResultsList };
