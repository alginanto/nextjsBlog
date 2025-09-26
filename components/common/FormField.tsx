import { cn } from "@/lib/utils";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

interface LoginValues {
  email: string;
  password: string;
}

interface FormFieldProps {
  id: string;
  type?: string;
  disabled?: boolean;
  placeholder: string;
  label?: string;
  inputClassNames?: string;
  register: UseFormRegister<LoginValues>;
  errors: FieldErrors;
}
const FormField = ({
  id,
  type,
  disabled,
  placeholder,
  label,
  inputClassNames,
  register,
  errors,
}: FormFieldProps) => {
  const message = errors[id] && (errors[id]?.message as string);
  return (
    <div>
      {label && <span className="block text-sm font-medium">{label}</span>}
      <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={cn(
          "w-full p-3 my-2 outline-none rounded-md disabled:opacity-70 disabled:cursor-not-allowed border-slate-300 dark:border-slate-700",
          errors[id] && "border-rose-400",
          inputClassNames
        )}
        {...register(id as Path<LoginValues>)}
      />
      {message && <span className="text-sm text-rose-400">{message}</span>}
    </div>
  );
};

export default FormField;
