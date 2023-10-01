import { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  outerClassName?: string;
  children: ReactNode;
}

const Container = ({ outerClassName, className, children }: ContainerProps) => (
  <section className={outerClassName}>
    <div className={`max-w-screen-xl mx-auto lg:px-4 ${className || ""}`}>
      {children}
    </div>
  </section>
);

export { Container };
