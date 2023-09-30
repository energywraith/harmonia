import { ComponentType, HTMLProps, InputHTMLAttributes, SVGProps } from "react";
import { variants, Variant } from "./variants";

interface InputFieldProps extends HTMLProps<HTMLLabelElement> {
  name?: string;
  placeholder?: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  variant?: Variant;
}

const InputField = ({
  name,
  placeholder,
  Icon,
  inputProps,
  variant = "primary",
  ...props
}: InputFieldProps) => {
  const { textColor, bgColor, placeholderColor } = variants[variant];

  return (
    <label
      {...props}
      htmlFor={name}
      className={`relative h-9 ${textColor} ${props.className || ""}`}
    >
      {Icon && (
        <Icon className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-5" />
      )}
      <input
        {...inputProps}
        name={name}
        placeholder={placeholder}
        className={`w-full rounded-3xl text-xl font-passion px-6 py-1 pr-12 ${bgColor} ${textColor} ${placeholderColor} ${
          inputProps?.className || ""
        }`}
      />
    </label>
  );
};

export { InputField };

export type { InputFieldProps };
