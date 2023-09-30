import { ComponentType, HTMLProps, InputHTMLAttributes, SVGProps } from "react";

interface InputFieldProps extends HTMLProps<HTMLLabelElement> {
  name: string;
  placeholder?: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const InputField = ({
  name,
  placeholder,
  Icon,
  inputProps,
  ...props
}: InputFieldProps) => {
  return (
    <label
      {...props}
      htmlFor={name}
      className={`relative text-primary-900 ${props.className}`}
    >
      {Icon && (
        <Icon className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-5" />
      )}
      <input
        {...inputProps}
        name={name}
        placeholder={placeholder}
        className={`bg-secondary-900 rounded-3xl text-xl font-passion text-primary-900 placeholder:text-primary-900 px-6 py-1 pr-12 ${inputProps?.className}`}
      />
    </label>
  );
};

export { InputField };
