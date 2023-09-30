import { InputField, InputFieldProps } from "@/components/form";

interface Input extends InputFieldProps {
  isActive: boolean;
}

const Input = ({ isActive, ...props }: Input) => {
  const classnames = isActive ? "lg:rounded-b-none" : "";

  return (
    <InputField
      {...props}
      name="search"
      placeholder="Search..."
      inputProps={{
        ...props.inputProps,
        autoComplete: "off",
        className: `focus:outline-none transition-all duration-300 ${classnames} ${
          props.inputProps?.className || ""
        }`,
      }}
    />
  );
};

export { Input };
