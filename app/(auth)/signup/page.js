"use client";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import InputField from "../../../components/forms/inputField";
import { countryCodeListData } from "../../../components/forms/countryCodeList";
import SubmitBtn from "../../../components/buttons/submitBtn";

const SignUp = () => {
  const [ouputData, setOuputData] = useState({});
  const signupSchema = z
    .object({
      firstName: z.string().min(1, { message: "Firstname is required" }),
      middleName: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      }),
      lastName: z.string().min(1, { message: "Lastname is required" }),
      lastName: z.string().min(1, { message: "Lastname is required" }),
      email: z
        .string()
        .min(1, { message: "Required" })
        .email({
          message: "Must be a valid email",
        })
        .optional(),
      country: z
        .object({
          countryName: z.string(),
          dailCode: z.string(),
        })
        .optional(),
      phoneNumber: z
        .number()
        .min(5, { message: "Enter a valid number" })
        .max(8, { message: "Enter a valid number" }),
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
    resolver: zodResolver(signupSchema),
  });
  const onRegisterSubmit = (data) => {
    setOuputData(data);
    reset();
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form
        className="flex-col flex container"
        onSubmit={handleSubmit(onRegisterSubmit)}
      >
        <InputField
          title="First Name"
          fieldName="firstName"
          register={register}
          errors={errors}
          placeHolder="Enter your First Name"
        />
        <InputField
          title="Middle Name"
          fieldName="middleName"
          register={register}
          errors={errors}
          placeHolder="Enter your Middle Name"
        />
        <InputField
          title="Last Name"
          fieldName="lastName"
          register={register}
          errors={errors}
          placeHolder="Enter your Last Name"
        />
        <InputField
          title="Email"
          fieldName="email"
          register={register}
          errors={errors}
          placeHolder="Enter your email"
        />
        {/* <label htmlFor="country">Country</label>
        <select {...register("country")} id="country">
          {countryCodeListData.map((item) => {
            return (
              <option
                key={item.name}
                value={JSON.stringify({
                  country: item.name,
                  dailCode: item.dial_code,
                })}
              >
                {item.name}
              </option>
            );
          })}
        </select> */}
        <InputField
          fieldName="phoneNumber"
          register={register}
          errors={errors}
          placeHolder="Enter your mobile number"
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
        <div className="mt-5">
          {Object.entries(ouputData).map(([key, value]) => {
            return (
              <div className="flex">
                <span>:{key}</span>
                <span>
                  :{typeof value === "object" ? JSON.stringify(value) : value}
                </span>
              </div>
            );
          })}
        </div>
        <SubmitBtn btnName="SIGN UP" />
      </form>
      {/* <button onClick={() => console.log(a)}></button> */}
      <Link href="/login">Login</Link>
    </div>
  );
};

export default SignUp;
