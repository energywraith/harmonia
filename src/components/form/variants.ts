export const variants = {
  primary: {
    textColor: "text-secondary-900",
    bgColor: "bg-primary-900",
  },
  secondary: {
    textColor: "text-primary-900",
    bgColor: "bg-secondary-900",
  },
};

export type Variant = keyof typeof variants;
