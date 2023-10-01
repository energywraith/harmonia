import { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Container = ({ className, children }: ContainerProps) => (
  <section
    className={`mt-6 lg:mt-20 max-w-screen-xl mx-auto lg:px-4 ${
      className || ""
    }`}
  >
    {children}
  </section>
);

export { Container };
