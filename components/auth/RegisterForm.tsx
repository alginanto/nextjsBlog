"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, SubmitHandler, useForm } from "react-hook-form";
import FormField from "../common/FormField";
import Button from "../common/Button";
import Head from "next/head";
import Heading from "../common/Heading";
import SocialAuth from "./SocialAuth";
import { RegisterSchema, RegisterSchemaType } from "@/schemas/RegisterSchema";
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (
    data: RegisterSchemaType
  ) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-[500px] m-auto mt-8 gap-2"
    >
      <Heading title="Create a WEBDEV.blog Account" center lg />
      <FormField
        id="name"
        register={register}
        errors={errors}
        placeholder="Name"
      />
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
      <FormField
        id="ConfirmPassword"
        register={register}
        errors={errors}
        placeholder="Confirm Password"
        type="password"
      />
      <Button
        type="submit"
        label="Register"
        outlined
        small
        onClick={() => {}}
      />
      <div className="flex justify-center my-2">Or</div>
      <SocialAuth />
    </form>
  );
};

export default RegisterForm;
