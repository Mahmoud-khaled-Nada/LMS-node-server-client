import { HelperText } from "@windmill/react-ui";
import { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export type Props<T extends FieldValues> = {
  register: UseFormRegister<T>;
  name: string;
  title: string;
  typeInput?: string;
  className?: string;
  error?: string; // Changed to string for better type safety
  [key: string]: any;
};

const formatterPlaceholder = (title: string) => `Enter ${title.toLowerCase()}...`;

const InputField: FC<Props<any>> = ({
  title,
  name,
  register,
  typeInput = "text",
  className = "",
  error,
  ...props
}) => {
  return (
    <div className={`input-field-wrapper ${className}`}>
      <input
        {...props}
        type={typeInput}
        {...register(name)}
        placeholder={formatterPlaceholder(title)}
        className={`py-3 px-4 block w-full border-neutral-700 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 ${className}`}
        autoComplete="off"
      />
      {error && <HelperText valid={false}>{error}</HelperText>}
    </div>
  );
};

export default InputField;
