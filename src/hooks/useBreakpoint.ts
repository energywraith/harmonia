import resolveConfig from "tailwindcss/resolveConfig";
import { ScreensConfig } from "tailwindcss/types/config";
import tailwindConfig from "../../tailwind.config";

type BreakpointKey = keyof ScreensConfig;

const fullConfig = resolveConfig(tailwindConfig);

const breakpoints = fullConfig?.theme?.screens || {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export const getBreakpointValue = (value: string): number =>
  +(breakpoints[value as BreakpointKey] as string).slice(
    0,
    (breakpoints[value as BreakpointKey] as string).indexOf("px")
  );

export function useBreakpoint<K extends string>(breakpointKey: K) {
  const breakpointValue = getBreakpointValue(breakpointKey);

  const capitalizedKey =
    breakpointKey[0].toUpperCase() + breakpointKey.substring(1);

  type KeyAbove = `isAbove${Capitalize<K>}`;
  type KeyBelow = `isBelow${Capitalize<K>}`;

  return {
    [breakpointKey]: Number(String(breakpointValue).replace(/[^0-9]/g, "")),
    [`isAbove${capitalizedKey}`]: () => window.innerWidth >= breakpointValue,
    [`isBelow${capitalizedKey}`]: () => !(window.innerWidth >= breakpointValue),
  } as Record<typeof breakpointKey, number> &
    Record<KeyAbove | KeyBelow, () => boolean>;
}
