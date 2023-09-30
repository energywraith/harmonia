import { SVGProps } from "react";

const Brand = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={192} height={53} {...props}>
      <text
        fill="currentColor"
        className="font-lobster text-5xl tracking-normal"
      >
        <tspan x="0" y="48">
          H
        </tspan>
      </text>
      <text
        fill="currentColor"
        className="font-lobster text-5xl tracking-normal"
      >
        <tspan x="32" y="36">
          armonia
        </tspan>
      </text>
      <text
        fill="currentColor"
        className="font-lobster text-xs tracking-normal"
      >
        <tspan x="32" y="48">
          Where Songs Find Their Harmony
        </tspan>
      </text>
    </svg>
  );
};

export { Brand };
