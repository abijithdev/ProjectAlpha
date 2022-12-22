"use client";
import Link from "next/link";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import InputField from "../../../comonents/forms/inputField";

const Register = () => {
  const registerationSchema = z
    .object({
      firstName: z.string().min(1, { message: "Firstname is required" }),
      middleName: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      }),
      lastName: z.string().min(1, { message: "Lastname is required" }),
      lastName: z.string().min(1, { message: "Lastname is required" }),
      email: z.string().min(1, { message: "Required" }).email({
        message: "Must be a valid email",
      }),
      password: z
        .string()
        .min(6, { message: "Password must be atleast 6 characters" }),
      confirmPassword: z
        .string()
        .min(1, { message: "Confirm Password is required" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Password don't match",
    });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerationSchema),
  });
  const onRegisterSubmit = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <div>
      {" "}
      <h2>Registeration</h2>
      <form
        className="flex-col flex container"
        onSubmit={handleSubmit(onRegisterSubmit)}
      >
        <InputField
          fieldName="firstName"
          register={register}
          errors={errors}
          placeHolder="Enter your First Name"
        />
        <InputField
          fieldName="middleName"
          register={register}
          errors={errors}
          placeHolder="Enter your Middle Name"
        />
        <InputField
          fieldName="lastName"
          register={register}
          errors={errors}
          placeHolder="Enter your Last Name"
        />
        <InputField
          fieldName="email"
          register={register}
          errors={errors}
          placeHolder="Enter your email"
        />
        <InputField
          fieldName="password"
          register={register}
          errors={errors}
          placeHolder="Enter your password"
        />
        <InputField
          fieldName="confirmPassword"
          register={register}
          errors={errors}
          placeHolder="Enter your password"
        />
        <button type="submit" className="">
          Submit
        </button>
      </form>
      {/* <button onClick={() => console.log(a)}></button> */}
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Register;
