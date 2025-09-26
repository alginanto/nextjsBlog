"use client";
import { LoginSchema, LoginSchemaType } from "@/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, SubmitHandler, useForm } from "react-hook-form";
import FormField from "../common/FormField";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data: LoginSchemaType) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-[500px] m-auto mt-8 gap-2"
    >
      <FormField
        id="email"
        register={register}
        errors={errors}
        placeholder="Email"
      />
      <FormField
        id="password"
        register={register}
        errors={errors}
        placeholder="Password"
        type="password"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded-md mt-2 hover:bg-blue-600 transition"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
